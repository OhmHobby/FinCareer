/* ============================================================
   Interactions — DESIGN-DOC.md §4 (widget menu) and §9 (motion)
   Tier-1 widgets built: decrypt reveal, ticker, security gauge.
   Everything honours prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Nav inversion (§6) ----------
     Transparent over the dark hero, then inverts to light after the
     scene bands. Cross-fades via CSS transition — never snaps. */
  var nav = document.getElementById('nav');
  var ticker = document.querySelector('.ticker');

  function syncNav() {
    var trigger = ticker ? ticker.getBoundingClientRect().bottom : 400;
    nav.classList.toggle('is-solid', trigger <= 72);
  }
  syncNav();
  window.addEventListener('scroll', syncNav, { passive: true });

  /* ---------- 2. Mobile menu ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.hasAttribute('hidden');
      if (open) { menu.removeAttribute('hidden'); document.body.style.overflow = 'hidden'; }
      else { menu.setAttribute('hidden', ''); document.body.style.overflow = ''; }
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.setAttribute('hidden', '');
        document.body.style.overflow = '';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hasAttribute('hidden')) toggle.click();
    });
  }

  /* ---------- 3. Scroll reveal (§9) ----------
     fade + 16px translate-up, 70ms stagger. Fires once.

     IntersectionObserver alone is NOT sufficient here: a jump-scroll
     (anchor link, deep link with #hash, find-in-page, scrollbar drag)
     can skip elements entirely and leave them invisible forever — which
     would land a visitor clicking "บริการ" on a blank section.
     So IO drives the nice staggered reveal, and a rAF-throttled sweep
     guarantees anything already scrolled past is shown regardless. */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function show(el, delay) {
    if (el.classList.contains('is-shown')) return;
    if (delay) setTimeout(function () { el.classList.add('is-shown'); }, delay);
    else el.classList.add('is-shown');
  }

  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-shown'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      var n = 0;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        show(e.target, n * 70);
        n++;
        ro.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    revealables.forEach(function (el) { ro.observe(el); });

    // safety sweep — anything at or above the fold is shown immediately
    var sweepQueued = false;
    function sweep() {
      sweepQueued = false;
      var vh = window.innerHeight, i = revealables.length;
      while (i--) {
        var el = revealables[i];
        if (el.classList.contains('is-shown')) { revealables.splice(i, 1); continue; }
        if (el.getBoundingClientRect().top < vh * 0.94) {
          show(el);
          ro.unobserve(el);
          revealables.splice(i, 1);
        }
      }
    }
    function queueSweep() {
      if (sweepQueued) return;
      sweepQueued = true;
      requestAnimationFrame(sweep);
    }
    window.addEventListener('scroll', queueSweep, { passive: true });
    window.addEventListener('resize', queueSweep);
    window.addEventListener('hashchange', queueSweep);
    window.addEventListener('load', queueSweep);
    queueSweep();
  }

  /* ---------- 4. Decrypt reveal (§4 Tier 1) ----------
     Headings resolve from block characters. A cybersecurity consultant
     whose headings decrypt is a gimmick that argues his case.
     Applied to LATIN runs only — scrambling Thai would shred clusters,
     and block chars keep the width stable so there is no layout shift. */
  var GLYPHS = '█▓▒░#$%&@*+=<>/\\|';

  function decrypt(el) {
    if (reduced) return;
    var html = el.innerHTML;
    var text = el.textContent;
    var chars = text.split('');
    var frame = 0;
    var total = 22;

    // preserve height so nothing reflows while scrambling
    el.style.minHeight = el.getBoundingClientRect().height + 'px';

    var iv = setInterval(function () {
      frame++;
      var progress = frame / total;
      var out = chars.map(function (c, i) {
        if (c === ' ' || c === '\n') return c;
        if (i / chars.length < progress) return c;
        return GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }).join('');
      el.textContent = out;

      if (frame >= total) {
        clearInterval(iv);
        el.innerHTML = html;          // restore <br>, <span lang> etc.
        el.style.minHeight = '';
      }
    }, 36);
  }

  var decryptables = document.querySelectorAll('[data-decrypt]');
  if (!reduced && 'IntersectionObserver' in window) {
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        decrypt(e.target);
        dio.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(decryptables, function (el) { dio.observe(el); });
  }

  /* ---------- 5. Count-up (§9: once only, 1200ms) ---------- */
  function countUp(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    if (reduced) { el.textContent = target; return; }
    var t0 = performance.now(), dur = 1200;
    (function tick(now) {
      var p = Math.min((now - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);            // ease-out
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ---------- 6. Security gauge (§7.6) ----------
     LABELLED as a sample. Score 72 with one visibly weak sub-score —
     a flawed sample is more credible than a perfect one. */
  function fillGauge(g) {
    var score = parseInt(g.dataset.score, 10) || 0;
    var ring = g.querySelector('.gauge__fill');
    var circ = 327;                                   // 2πr, r=52
    if (ring) ring.style.strokeDashoffset = reduced ? circ * (1 - score / 100)
                                                    : circ * (1 - score / 100);
  }

  var animated = document.querySelectorAll('.gauge, .gauge-block, .dash, [data-count]');
  if ('IntersectionObserver' in window) {
    var aio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('is-shown');
        // mark ancestors so CSS bar widths fire
        var block = el.closest('.gauge-block, .dash');
        if (block) block.classList.add('is-shown');
        if (el.classList.contains('gauge')) fillGauge(el);
        if (el.hasAttribute('data-count')) countUp(el);
        aio.unobserve(el);
      });
    }, { threshold: 0.35 });
    Array.prototype.forEach.call(animated, function (el) { aio.observe(el); });
  } else {
    Array.prototype.forEach.call(animated, function (el) {
      el.classList.add('is-shown');
      if (el.classList.contains('gauge')) fillGauge(el);
      if (el.hasAttribute('data-count')) countUp(el);
    });
  }

  /* ---------- 7. Ticker (§7.3) ----------
     STATIC DEMO DATA — labelled on the page. SET data is licensed
     (฿15,000/mo, public display = redistribution). Do not wire a live
     feed without resolving §11 #13 first. */
  var track = document.getElementById('tickerTrack');
  if (track && !reduced) {
    track.innerHTML += track.innerHTML;               // duplicate for seamless loop
    var offset = 0, half = 0, tRaf = null, tRunning = false;

    function measure() { half = track.scrollWidth / 2; }
    measure();
    window.addEventListener('resize', measure);

    function tickerLoop() {
      if (!tRunning) return;
      offset -= 0.4;
      if (half && -offset >= half) offset += half;
      track.style.transform = 'translate3d(' + offset + 'px,0,0)';
      tRaf = requestAnimationFrame(tickerLoop);
    }
    function startT() { if (!tRunning) { tRunning = true; tickerLoop(); } }
    function stopT() { tRunning = false; if (tRaf) cancelAnimationFrame(tRaf); }

    track.parentElement.addEventListener('mouseenter', stopT);
    track.parentElement.addEventListener('mouseleave', startT);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopT(); else startT();
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { e.isIntersecting ? startT() : stopT(); });
      }).observe(track.parentElement);
    } else { startT(); }
  }

  /* ---------- 8. Form (§11 #7 — no backend yet) ---------- */
  var form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form__note');
      note.textContent = 'ยังไม่ได้เชื่อมต่อระบบ — ดู DESIGN-DOC §11 #7';
      note.style.color = 'var(--gold-400)';
    });
    // inline validation on blur, not on every keystroke (§9)
    Array.prototype.forEach.call(form.querySelectorAll('input,textarea'), function (f) {
      f.addEventListener('blur', function () {
        if (f.required && !f.value.trim()) f.style.borderColor = 'var(--neg)';
        else f.style.borderColor = '';
      });
    });
  }

  /* ---------- 9. Roadmap path ----------
     Lights each orb as its stage reaches the upper half of the viewport and
     grows the connecting line to match. rAF-throttled, transform/height only. */
  var roadmap = document.querySelector('.roadmap');
  var roadFill = document.getElementById('roadFill');
  var stages = roadmap ? Array.prototype.slice.call(roadmap.querySelectorAll('.stage')) : [];

  if (roadmap && roadFill && stages.length) {
    if (reduced) {
      roadFill.style.height = '100%';
      stages.forEach(function (s) { s.classList.add('is-lit'); });
    } else {
      var roadQueued = false;

      function paintRoad() {
        roadQueued = false;
        var spine = roadmap.querySelector('.roadmap__spine');
        if (!spine) return;
        var spineBox = spine.getBoundingClientRect();
        var mark = window.innerHeight * 0.55;   // the "you are here" line
        var reached = 0;

        stages.forEach(function (st) {
          var orb = st.querySelector('.stage__orb');
          if (!orb) return;
          var c = orb.getBoundingClientRect();
          var centre = c.top + c.height / 2;
          if (centre <= mark) {
            st.classList.add('is-lit');
            reached = Math.max(reached, centre - spineBox.top);
          } else {
            st.classList.remove('is-lit');
          }
        });

        var pct = spineBox.height ? (reached / spineBox.height) * 100 : 0;
        roadFill.style.height = Math.min(Math.max(pct, 0), 100).toFixed(1) + '%';
      }

      function queueRoad() {
        if (roadQueued) return;
        roadQueued = true;
        requestAnimationFrame(paintRoad);
      }

      window.addEventListener('scroll', queueRoad, { passive: true });
      window.addEventListener('resize', queueRoad);
      queueRoad();
    }
  }

  /* ---------- 10. Footer year ---------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
