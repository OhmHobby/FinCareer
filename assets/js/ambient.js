/* ============================================================
   THE HORIZON — ambient scene layer
   DESIGN-DOC.md §3. Dawn horizon over deep water.

   Implementation notes:
   - One canvas per scene band, absolutely positioned INSIDE the band.
     This avoids position:fixed entirely, which is the main source of
     iOS Safari scroll jank (§3.5a).
   - Parallax reads window.scrollY inside the rAF loop, never from a
     scroll listener — iOS throttles scroll events during momentum.
   - DPR capped at 2 (§3.5a).
   - Loop pauses when off-screen or when the tab is hidden.
   - prefers-reduced-motion: draws ONE static frame, then stops.
   ============================================================ */
(function () {
  'use strict';

  /* Tuned UP from the original spec.
     The first pass was calibrated for a fintech trust site, where the scene
     should be felt but never noticed: 5 birds at 7-16px, 22-48% opacity,
     26-52s to cross. That worked so well the client could not see it at all.
     This is now a school portfolio marked partly on "ประยุกต์เทคโนโลยี
     กับอาชีพได้แปลกใหม่" and presented live for 3-5 minutes, so an effect
     nobody notices scores nothing. Birds are bigger, more numerous, more
     opaque and faster, and the sun is now a visible disc, not just a glow.
     Still slow enough to read as atmosphere rather than a screensaver. */
  var CFG = {
    birds: { desktop: 9, tablet: 6, mobile: 4 },
    size:  { min: 14, max: 30 },
    alpha: { min: 0.42, max: 0.78 },
    cross: { min: 15, max: 32 },      // seconds to cross the viewport
    flap:  { min: 0.55, max: 1.05 },  // Hz
    drift: { amp: 26, period: 12 },
    stars: 90,
    clouds: 4
  };

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rnd = function (a, b) { return a + Math.random() * (b - a); };

  function tierCount() {
    var w = window.innerWidth;
    if (w < 768) return CFG.birds.mobile;
    if (w < 1024) return CFG.birds.tablet;
    return CFG.birds.desktop;
  }

  /* ---------- Scene ---------- */
  function Scene(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.isHero = canvas.dataset.scene === 'hero';
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = 0; this.h = 0;
    this.t = 0;
    this.running = false;
    this.visible = false;
    this.raf = null;

    this.birds = [];
    this.stars = [];
    this.clouds = [];

    this.resize();
    this.seed();
  }

  Scene.prototype.resize = function () {
    var r = this.canvas.getBoundingClientRect();
    this.w = Math.max(r.width, 1);
    this.h = Math.max(r.height, 1);
    this.canvas.width = Math.round(this.w * this.dpr);
    this.canvas.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  };

  Scene.prototype.seed = function () {
    var i, n = tierCount();

    this.birds = [];
    for (i = 0; i < n; i++) this.birds.push(this.makeBird(true));

    this.stars = [];
    if (this.isHero && window.innerWidth >= 768) {
      for (i = 0; i < CFG.stars; i++) {
        this.stars.push({
          x: Math.random(), y: Math.random() * 0.45,
          r: rnd(0.4, 1.3), a: rnd(0.15, 0.4),
          tw: rnd(0.3, 1.1), ph: Math.random() * 6.28
        });
      }
    }

    this.clouds = [];
    if (window.innerWidth >= 768) {
      for (i = 0; i < CFG.clouds; i++) {
        this.clouds.push({
          x: Math.random(), y: rnd(0.42, 0.66),
          w: rnd(0.35, 0.7), h: rnd(10, 26),
          a: rnd(0.05, 0.11), sp: rnd(0.004, 0.009) * (Math.random() < 0.5 ? -1 : 1)
        });
      }
    }
  };

  Scene.prototype.makeBird = function (spread) {
    var ltr = Math.random() < 0.7;
    return {
      // birds spread wider now so more of them are on screen at once,
      // still avoiding the band where the headline sits
      y: rnd(0.07, 0.52),
      x: spread ? Math.random() : (ltr ? -0.08 : 1.08),
      dir: ltr ? 1 : -1,
      size: rnd(CFG.size.min, CFG.size.max),
      alpha: rnd(CFG.alpha.min, CFG.alpha.max),
      speed: 1 / rnd(CFG.cross.min, CFG.cross.max),
      flap: rnd(CFG.flap.min, CFG.flap.max),
      phase: Math.random() * 6.28,
      wait: 0
    };
  };

  /* A bird is a body dot plus two quadratic wings. At 7–16px this is
     indistinguishable from a silhouette and costs nothing to draw. */
  Scene.prototype.drawBird = function (b) {
    var ctx = this.ctx,
        x = b.x * this.w,
        y = b.y * this.h,
        s = b.size,
        ang = Math.sin(this.t * b.flap * 6.283 + b.phase) * 0.55 + 0.35;

    // colour lerps light→dark with depth so birds read against both
    // the deep sky above and the gold horizon below
    var k = Math.min(Math.max((b.y - 0.07) / 0.45, 0), 1),
        c = Math.round(238 - k * 150);

    ctx.save();
    ctx.globalAlpha = b.alpha;
    ctx.strokeStyle = 'rgb(' + c + ',' + (c + 6) + ',' + (c + 11) + ')';
    ctx.lineWidth = Math.max(s * 0.11, 1.4);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x - s * 0.5, y);
    ctx.quadraticCurveTo(x - s * 0.25, y - s * 0.42 * ang, x, y);
    ctx.quadraticCurveTo(x + s * 0.25, y - s * 0.42 * ang, x + s * 0.5, y);
    ctx.stroke();
    ctx.restore();
  };

  Scene.prototype.draw = function (scrollK) {
    var ctx = this.ctx, i, o, x, y;
    ctx.clearRect(0, 0, this.w, this.h);

    // 1. stars — fade out by 12% scroll
    var starA = Math.max(0, 1 - scrollK / 0.12);
    if (starA > 0.01) {
      for (i = 0; i < this.stars.length; i++) {
        o = this.stars[i];
        var tw = 0.65 + 0.35 * Math.sin(this.t * o.tw + o.ph);
        ctx.globalAlpha = o.a * tw * starA;
        ctx.fillStyle = '#E9EFF4';
        ctx.beginPath();
        ctx.arc(o.x * this.w, o.y * this.h - scrollK * 18, o.r, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // 2. sun — glow plus an actual disc sitting just above the horizon
    var sunY = this.h * 0.80 - scrollK * 40,
        sunX = this.w * (this.isHero ? 0.74 : 0.26),
        sunR = Math.max(this.h * 0.055, 26),
        g = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, this.h * 0.46);
    g.addColorStop(0, 'rgba(240,200,126,0.40)');
    g.addColorStop(0.35, 'rgba(217,161,79,0.16)');
    g.addColorStop(1, 'rgba(217,161,79,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, this.w, this.h);

    // the disc itself — soft edge so it reads as sun, not a flat circle
    var d = ctx.createRadialGradient(sunX, sunY, sunR * 0.25, sunX, sunY, sunR);
    d.addColorStop(0, 'rgba(255,238,205,0.95)');
    d.addColorStop(0.72, 'rgba(244,206,136,0.78)');
    d.addColorStop(1, 'rgba(240,200,126,0)');
    ctx.fillStyle = d;
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, 0, 6.283);
    ctx.fill();

    // 3. cloud bands — slow horizontal drift
    for (i = 0; i < this.clouds.length; i++) {
      o = this.clouds[i];
      x = ((o.x + this.t * o.sp) % 1.4 + 1.4) % 1.4 - 0.2;
      y = o.y * this.h - scrollK * 26;
      var cg = ctx.createLinearGradient(x * this.w, 0, (x + o.w) * this.w, 0);
      cg.addColorStop(0, 'rgba(233,239,244,0)');
      cg.addColorStop(0.5, 'rgba(233,239,244,' + o.a + ')');
      cg.addColorStop(1, 'rgba(233,239,244,0)');
      ctx.fillStyle = cg;
      ctx.fillRect(x * this.w, y, o.w * this.w, o.h);
    }

    // 4. sea shimmer — light on water, not waves
    var sea = this.h * 0.885;
    ctx.strokeStyle = 'rgba(240,200,126,0.14)';
    ctx.lineWidth = 1;
    for (i = 0; i < 5; i++) {
      var sy = sea + i * 11 - scrollK * 50,
          ph = Math.sin(this.t * 0.55 + i * 0.9),
          sw = this.w * (0.16 + 0.1 * i),
          sx = this.w * 0.5 + ph * this.w * 0.14 - sw / 2;
      ctx.globalAlpha = 0.5 - i * 0.08;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx + sw, sy);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // 5. horizon line
    ctx.strokeStyle = 'rgba(240,200,126,0.30)';
    ctx.beginPath();
    ctx.moveTo(0, sea - scrollK * 50);
    ctx.lineTo(this.w, sea - scrollK * 50);
    ctx.stroke();

    // 6. birds — parallax 0.30x
    for (i = 0; i < this.birds.length; i++) {
      var b = this.birds[i];
      if (b.wait > 0) continue;
      var saved = b.y;
      b.y = b.y - scrollK * 0.30 * 0.25;
      this.drawBird(b);
      b.y = saved;
    }
  };

  Scene.prototype.step = function (dt, scrollK) {
    var i, b;
    this.t += dt;
    for (i = 0; i < this.birds.length; i++) {
      b = this.birds[i];
      if (b.wait > 0) { b.wait -= dt; if (b.wait <= 0) this.birds[i] = this.makeBird(false); continue; }
      b.x += b.dir * b.speed * dt;
      b.y += Math.sin(this.t / CFG.drift.period * 6.283 + b.phase) * (CFG.drift.amp / this.h) * dt * 0.5;
      if (b.x > 1.12 || b.x < -0.12) { b.wait = rnd(3, 12); }
    }
    this.draw(scrollK);
  };

  /* progress of this band through the viewport, 0→1 */
  Scene.prototype.scrollK = function () {
    var r = this.canvas.getBoundingClientRect();
    return Math.min(Math.max(-r.top / Math.max(r.height, 1), 0), 1);
  };

  Scene.prototype.start = function () {
    if (this.running || reduced) return;
    this.running = true;
    var self = this, last = performance.now();
    (function loop(now) {
      if (!self.running) return;
      var dt = Math.min((now - last) / 1000, 0.05); // clamp after tab-switch
      last = now;
      self.step(dt, self.scrollK());               // scrollY read inside rAF (§3.5a)
      self.raf = requestAnimationFrame(loop);
    })(last);
  };

  Scene.prototype.stop = function () {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
  };

  /* ---------- boot ---------- */
  var scenes = [];

  function init() {
    var nodes = document.querySelectorAll('.scene-canvas');
    if (!nodes.length) return;

    for (var i = 0; i < nodes.length; i++) scenes.push(new Scene(nodes[i]));

    if (reduced) {
      // one static frame: gradient + grain + a few still birds, then stop
      scenes.forEach(function (s) { s.draw(0); });
      return;
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var s = scenes.filter(function (x) { return x.canvas === e.target; })[0];
          if (!s) return;
          s.visible = e.isIntersecting;
          if (e.isIntersecting && !document.hidden) s.start(); else s.stop();
        });
      }, { rootMargin: '120px' });
      scenes.forEach(function (s) { io.observe(s.canvas); });
    } else {
      scenes.forEach(function (s) { s.visible = true; s.start(); });
    }

    document.addEventListener('visibilitychange', function () {
      scenes.forEach(function (s) {
        if (document.hidden) s.stop();
        else if (s.visible) s.start();
      });
    });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        scenes.forEach(function (s) { s.resize(); s.seed(); });
      }, 180);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
