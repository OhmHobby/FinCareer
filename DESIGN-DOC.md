# Design Document — Sakdinon Settasing (Ohm)
### Fintech, Cybersecurity & Operational Finance Strategist
**One-page strategic consulting site · v1.2 · September 2026**

> **v1.1** — surface polarity reversed to light-first (§5.0).
> **v1.2** — full audit sweep. 18 defects found and fixed; the significant ones are listed below.

<details open>
<summary><strong>v1.2 audit — what was wrong and where it is fixed</strong></summary>

**Would have shipped broken:**

| # | Defect | Fix |
|---|---|---|
| 1 | **`lang` cascade** — `<html lang="th">` makes `:lang(th)` match *every* element. The 76px English hero headline would have rendered at line-height 1.8 in a Thai font | §5.2 |
| 2 | **Input borders failed WCAG 1.4.11** — `--sand-300` on white = **1.73:1** against a 3:1 requirement | §5.1a, new `--sand-400` |
| 3 | **Cards were invisible** — `--sand-100` card on a `--sand-100` band = 1.09 fill separation. On §7.4/§7.7/§7.10 the card would have vanished | §5.1a, cards now white + shadow |
| 4 | **Contrast verified on one surface only** — all v1.1 ratios were vs `--sand-50`; half the page is `--sand-100`, where `--pos-700` drops to **4.51:1** | §5.1, both columns published, accents darkened |
| 5 | **Pill text never checked at all** | §5.1, now 6.02 / 6.55 |
| 6 | **Placeholder and disabled text never specified** | §5.1 |
| 7 | **iOS:** `100vh` hero jump, scroll-event parallax jank, unhandled DPR | §3.5a |

**Wrong on the facts:**

| # | Defect | Fix |
|---|---|---|
| 8 | **OKLCH overclaimed** — I wrote that the W3C spec "mandates" it. It admits seven colour spaces; OKLCH is supported, not required | Corrected in both docs |
| 9 | **Plex TH/EN "metric-matched"** — asserted, not verifiable from IBM's published material | §5.2, downgraded to a Phase-1 check |
| 10 | **Font budget of 180KB** was not achievable for four families across two scripts | §12, revised to 260KB |
| 11 | **Instrument Serif has no bold** — one weight + italic only | Moot; family cut |

**Broke my own rules:**

| # | Defect | Fix |
|---|---|---|
| 12 | **Five font families** — research §6 allows two plus a mono. Two entire serif families were loading for one pull quote | §5.2, cut to four |
| 13 | **Hero proof line used fabricated `000+` placeholders**, contradicting §11 #10 | §7.2, fallback ladder |

**Cost, legal, and honesty:**

| # | Defect | Fix |
|---|---|---|
| 14 | **SET market data is not free** — ฿15,000/mo, and public display is redistribution | §7.3, three options |
| 15 | **Security gauge implied a measurement that never happened** | §7.6, must be labelled |
| 16 | **I invented a free-work commitment** on Ohm's behalf | §11 #11 |
| 17 | **Legal review was scheduled after copy** — a licence-driven reframing would have invalidated it | §13, new Phase 0.5 |
| 18 | **Copy authorship and photography unassigned** | §13, flagged |

</details>

> Companion to [DESIGN-RESEARCH.md](DESIGN-RESEARCH.md). Where this document says "per research §N," that refers to the research doc.

---

## 1. Executive Summary

### 1.1 What we are building

A **single-page, bilingual (TH/EN) authority site** for an independent consultant who sells one thing: *the confidence to move capital across borders without losing it.* The page must do four jobs in sequence — establish that Ohm is credible, name the fear the visitor already has, show three concrete systems that address it, and book the call.

### 1.2 The strategic problem

Ohm occupies an unusual intersection. He is not a broker, not a security vendor, not an IT firm. He is a **trust intermediary** between two things his clients cannot personally verify: whether their money is positioned correctly, and whether it is safely stored. The entire design must answer the visitor's unspoken question — *"why should I let this person near my assets?"*

This means the site borrows from **two** of the four researched aesthetics, not one:

| Source aesthetic | What we take | Why |
|---|---|---|
| **Law firm** (research §2) | Personal authority, **warm off-white base with dark accent bands**, editorial profile layout, one serif moment, credential restraint | He sells *himself*, not a product. The attorney-profile pattern is the exact right model — and it is the **dominant** influence on this site |
| **Fintech** (research §4) | Trust patterns, numeric proof, neutral grotesk, product-UI visuals | He sells financial safety; the content must read as institutional. **We take fintech's trust logic but not its dark-first surface** — see §5.0 |
| **Museum** (research §3) | Curatorial restraint, hairline rules, deference of chrome to content | Keeps the ambient scene from overwhelming the business content |
| **Modern minimal** (research §5) | Semantic token architecture, 8pt grid, variable type | The substrate everything runs on |

### 1.3 The design thesis, in one line

> **A warm, editorial light interface — opened and closed by a slow dawn horizon.**

---

## 2. Brand Foundation

### 2.1 Identity

| Field | Value |
|---|---|
| **Name (TH)** | ศักดินนท์ เศรษฐสิงห์ |
| **Name (EN)** | Sakdinon Settasing |
| **Preferred / short** | Ohm |
| **Role (EN)** | Fintech, Cybersecurity & Operational Finance Strategist |
| **Role (TH)** | ที่ปรึกษาด้านเทคโนโลยีการเงิน ความปลอดภัยไซเบอร์ และการลงทุนดิจิทัล |
| **Primary slogan (EN)** | Secure Your Capital, Master Global Markets |
| **Primary slogan (TH)** | นวัตกรรมความปลอดภัย เพื่อทุกการเติบโตทางการเงินโลก |

**Slogan usage rule:** The EN slogan is the **display line** (it is shorter, sets tighter, and carries the global-markets positioning). The TH slogan is the **support line** directly beneath it at ~40% of the display size. Do not set the Thai slogan as the largest element — it is 47 characters and will break the hero composition at mobile widths.

### 2.2 Brand personality — the four dials

```
Formal        ●●●●●●●○○○        Approachable
Technical     ●●●●●●●●○○        Plain-spoken
Calm          ●●●●●●●●●○        Energetic
Institutional ●●●●●●●○○○        Personal
```

Read that as: **mostly formal, quite technical, very calm, institutional with a visible human at the centre.** "Very calm" is the load-bearing dial — it is what makes the ambient scene legitimate rather than decorative, and it is what a frightened SME executive needs to feel in the first 400ms.

### 2.3 Voice principles

1. **Name the fear, then dissolve it.** "สินทรัพย์ดิจิทัลของคุณเก็บไว้ที่ไหน — และใครเข้าถึงได้บ้าง?" outperforms "บริการที่ปรึกษาครบวงจร."
2. **Numbers over adjectives** (research §4, pattern 6). Never "ประสบการณ์มากมาย" — always a defensible figure.
3. **Plain-money copy** (research §4, pattern 4). State what a session costs and what it includes, above the fold if possible.
4. **No hype vocabulary.** Banned: ปฏิวัติ, ล้ำสมัย, ที่สุดในประเทศ, มืออาชีพระดับโลก, revolutionary, cutting-edge, game-changing.
5. **Thai-first copy, English-capable.** Thai is the primary reading language; English exists for credibility signalling and international clients.

---

## 3. The Ambient Layer — "The Horizon"

This is the client's requested gimmick, specified so it *adds* credibility instead of spending it.

### 3.1 Concept

Not a tropical beach. A **dawn horizon over deep open water**, rendered abstractly in the brand palette.

| Element | Reads as |
|---|---|
| Deep water | The global market — vast, dark, navigable with the right instruments |
| Horizon line | Foresight; the thing a strategist sees that you cannot |
| Dawn light | Opportunity, clarity after uncertainty |
| Birds | Movement, navigation, life — the single "delight" permission |

This keeps every bit of the client's instinct (sky, water, birds, ambient motion) while shedding the association that damages him (vacation, leisure, unseriousness).

### 3.2 The framing rule — the most important constraint in this document

> **The ambient scene appears behind the Hero and the Final CTA only. Every section that carries business content sits on an opaque surface.**

The scene is a **frame**, not a **wallpaper**. It opens the page and closes the page. In between, when the visitor is reading about wallet custody or API security, the background is solid `--sand-50` with no motion whatsoever.

This also means the dark scene bands carry **display copy only** — a headline, a slogan, a form. No long paragraphs, and no Thai body text at weight 400 (see the halation row in §5.2). Sustained reading happens on the light surface.

This single rule is what lets us have the gimmick *and* the trust. Per research §4 pattern 3: one ambient effect, one triggered effect, with explicit fallbacks.

### 3.3 Layer stack (back to front)

| # | Layer | Motion | Parallax | Notes |
|---|---|---|---|---|
| 1 | Sky gradient | Hue shifts with scroll progress 0→15% | — | `--ink-abyss` → `--ink-deep` → `--gold-500` at the horizon line |
| 2 | Stars | Slow twinkle, opacity 0.15–0.4 | 0.05× | Fade to 0 by 12% scroll. Desktop only |
| 3 | Sun disc | Rises 40px over hero scroll | 0.08× | Soft radial glow, no hard edge. Never a cartoon sun |
| 4 | Cloud bands | Horizontal drift, 120–180s per pass | 0.12× | 2–3 bands, opacity 0.06–0.12, heavily blurred |
| 5 | **Birds** | See §3.4 | 0.30× | The hero element of the gimmick |
| 6 | Sea shimmer | Sine-driven horizontal highlight, 8s loop | 0.50× | A few hairline strokes at 6–10% opacity. Not waves — *light on water* |
| 7 | Grain overlay | Static | — | 3% opacity noise. Warms the gradient, kills banding |
| 8 | Content | — | 1.0× | Sits above everything |

### 3.4 Bird system — full spec

The birds are where this succeeds or fails. **Slowness is the entire trick.** Fast birds read as a screensaver; slow birds read as cinematography.

```js
BIRD_CONFIG = {
  count:        { desktop: 5, tablet: 3, mobile: 2, reducedMotion: 0 },
  size:         { min: 7, max: 16 },          // px wingspan
  opacity:      { min: 0.22, max: 0.48 },     // silhouettes only, never detailed
  crossTime:    { min: 26, max: 52 },         // SECONDS to cross viewport — deliberately slow
  flapRate:     { min: 0.35, max: 0.75 },     // Hz — one flap every 1.3–2.8s
  driftY:       { amplitude: 18, period: 14 },// gentle sine bob, px / seconds
  spawnStagger: 4000,                          // ms between initial spawns
  direction:    'mixed',                       // 70% L→R, 30% R→L
  respawnDelay: { min: 3000, max: 12000 }      // ms after exiting frame
}
```

**Rendering:** one `<canvas>` element, `requestAnimationFrame`, birds drawn as a 3-point quadratic path (two wings + body). No sprite sheets, no images, no SVG DOM nodes. A bird is roughly 14 lines of canvas code and costs nothing.

**Wing geometry:** wing angle `θ = base + sin(t · flapRate · 2π) · 0.55rad`. Draw as two quadratic curves meeting at a 2px body. At 7–16px on screen, this is indistinguishable from a real silhouette and infinitely cheaper than an asset.

**Hard rules**
- Birds never cross the centre 40% of the hero where the headline sits. Constrain spawn Y to the top 30% and the band just above the horizon.
- Birds never overlap text. If a collision is possible, reduce opacity to 0.15 in that band.
- Never more than 5 on screen. Six is a flock; five is atmosphere.
- No bird sounds. No bird that reacts to the cursor. It is weather, not a toy.

### 3.5 Performance and degradation budget

| Condition | Behaviour |
|---|---|
| `prefers-reduced-motion: reduce` | **Everything stops.** Static gradient + grain + one still bird silhouette. No canvas loop at all |
| `document.hidden` | `cancelAnimationFrame` — zero CPU in background tabs |
| Viewport < 768px | Bird count 2, stars off, cloud bands off, sea shimmer off |
| Device memory ≤ 4GB or `hardwareConcurrency` ≤ 4 | Static gradient fallback |
| Scene scrolled out of view | Loop paused via `IntersectionObserver` |
| Save-Data header | Static gradient |

**Budget:** ambient layer ≤ **14KB gzipped**, ≤ **2% idle CPU** on a mid-range laptop, **60fps** sustained. If it cannot hold 60fps with 5 birds, cut to 3 — never drop the frame rate.

### 3.5a iOS Safari — three things that will break if built naively

The scene is a fixed, scroll-driven canvas. That is precisely the combination mobile Safari handles worst, and roughly half of Ohm's traffic will be Thai mobile.

**1. `100vh` is wrong on mobile Safari.** It measures the viewport *without* the collapsing toolbar, so a `100vh` hero is taller than the screen on load and the composition jumps as the toolbar hides. **Use `100dvh`** with a `100vh` fallback. This affects §7.2 and the full-viewport §7.12.

```css
.band--scene { min-height: 100vh; min-height: 100dvh; }
```

**2. Never drive parallax from `scroll` events.** iOS throttles or defers them during momentum scrolling, so layers lag and snap. **Read `window.scrollY` inside the existing `requestAnimationFrame` loop** — the loop is already running for the birds, so this costs nothing and stays smooth.

```js
function frame() {
  const y = window.scrollY;        // read in rAF, never in a scroll listener
  // ...update layer offsets, draw birds
  requestAnimationFrame(frame);
}
```

**3. Canvas needs explicit DPR handling** or it renders soft on every phone Ohm's clients own. Size the backing store to `clientWidth * devicePixelRatio`, set CSS size separately, and `ctx.scale(dpr, dpr)`. Cap DPR at **2** — rendering at 3× on a high-DPR Android costs real battery for no visible gain at these opacities.

**Also:** `backdrop-filter` on the nav (§7.1) compositing over a live canvas is expensive on mobile. Measure it; if it costs frames, drop to a solid `--sand-50` nav on viewports under 768px. The blur is a refinement, the frame rate is not.

### 3.6 Alternative B — literal beach (documented, not recommended)

If Ohm overrules the above and wants a recognisable beach: keep sand, keep palm silhouettes, but **desaturate the entire scene to 25% and push it to 8% opacity behind a heavy `--ink-deep` overlay**, so it functions as a texture rather than a picture. Warm gold sky, no blue water, no bright turquoise. This survives the trust test; a full-colour tropical beach does not.

**Recommendation:** ship Alternative A (dawn horizon). Offer B as a toggle in the design review so he can see both against the real copy.

---

## 4. The Secondary Gimmick Menu

Ohm asked for "those kind of widgets." Here is a ranked menu — **pick three, not eight.** Per research §12, animating everything reads as marketing, not credibility.

### Tier 1 — recommended, thematically earned

| Widget | What it does | Why it works for *him* |
|---|---|---|
| **Decrypt text reveal** | Headings resolve from scrambled characters (`█▓A#k∎` → `ความปลอดภัย`) once, on first scroll into view | A cybersecurity consultant whose headings *decrypt* is a gimmick that argues his case. Highest concept-to-cost ratio on this list |
| **Live market ticker** | Thin strip under the hero: SET, S&P 500, BTC, gold, USD/THB, live | Motion that is *also* proof of capability. Doubles as trust pattern 6 (numeric proof) |
| **Security score gauge** | Radial gauge that animates 0→score as the Audit section enters view | Previews the actual deliverable of System 2. Sells the product by showing its output |

### Tier 2 — good, use sparingly

| Widget | Note |
|---|---|
| **Scroll-driven stat counters** | Cap at one band of 3–4 numbers. Animate once, never on re-entry |
| **Magnetic CTA buttons** | 6–10px pull radius maximum. Above that it feels like a toy |
| **Cursor spotlight on dark sections** | A 400px soft radial light following the cursor at 4% opacity. Desktop only, hero and CTA only |
| **Tilt-on-hover cards** | Max 4° rotation. Only on the three system cards |

### Tier 3 — reject

Particle explosions on click · confetti on form submit · auto-playing video with sound · parallax on every section · 3D spinning coins or crypto logos · typing-effect body copy · animated gradient borders on everything · a chatbot bubble that opens itself.

> **Rationale:** every item in Tier 3 appears on low-trust financial sites. Visitors have learned to read them as warning signs. This is the one place where following the trend actively costs money.

---

## 5. Visual Identity

### 5.0 Decision record — why this site is light-first

**Reversed from v0.9, which specified dark-first.** Recording the reasoning because it is the single most consequential decision in this document.

**The original error:** dark-first was imported from research §4, which studied **fintech products** — Linear, Vercel, Stripe, Mercury. Those are B2B and developer tools whose audience *is* technical; dark there reads as "professional instrument." Ohm is not a product company. He is an **independent advisor selling personal trust to non-technical people**, some of whom are 50+. The correct analogue was always research §2 (law firm), not §4.

**Four reasons light wins here:**

1. **Trust research is direct on this.** Controlled study found participants rated light-mode designs higher and reported measurably **lower trusting belief and trusting intention toward dark-themed sites**. Financial platforms lean light; dark "weakens a trusting emotional connection and is not associated with openness." Professional services and financial institutions convert better light.
2. **The advisor category is uniformly light.** Wealthspire, Facet Wealth, and essentially every credible advisor site uses white or warm off-white. Dark advisor sites are rare, and the ones that exist skew toward crypto and signals-group marketing — adjacency Ohm cannot afford in a category where Thai investors are actively fraud-alert.
3. **Thai script is the strongest technical argument, and it is specific to this site.** Thai tone marks and vowels (◌่ ◌้ ◌๊ ◌๋ ◌ิ ◌ี ◌ึ) are **thin, small strokes stacked above and below the baseline**. On dark backgrounds, light thin strokes bloom at the edges — the halation effect — and letterforms dissolve. This affects the ~47% of people with some astigmatism, and worsens with age. Ohm's stated audience runs to **50+**. A design whose entire diacritic layer degrades for half its readers is not a stylistic preference, it is a defect.
4. **Light mode wins on detail-oriented reading tasks** generally. This page asks people to read about custody models and API security. That is detail-oriented reading.

**What we keep from the dark spec:** the two ambient-scene bands stay dark, because a dawn sky *is* dark — and because research §2 explicitly endorses the move: *"Dark sections for contrast and modernity — a near-black band mid-page with light type is a signature move."*

**The upside of the reversal:** the page now runs **dark → light → dark**, which maps the narrative exactly — night, then day, then dawn. That is a better structure than the uniform dark original, not a compromise of it.

> **Where dark still belongs:** if Ohm later builds a real client dashboard or portfolio tool, **that** should be dark-first. A logged-in data instrument and a public trust page are different products with different audiences. This decision governs the marketing site only.

---

### 5.1 Colour system

Derived from the horizon concept, deliberately avoiding both clichés identified in research: generic fintech blue (§4) and law-firm navy-and-gold (§2). We use a **teal-leaning abyss** rather than navy, and a **warm sand-gold** rather than metallic gold.

```css
/* ---- LIGHT SURFACES — the default, ~85% of the page ---- */
--sand-50       #F7F4EE    /* primary page surface */
--sand-100      #EFEAE1    /* alternating bands */
--card          #FFFFFF    /* card fill — cards are WHITE, not sand-100 (see §5.1a) */
--sand-200      #E2DACB    /* decorative hairlines only */
--sand-300      #CFC4AE    /* stronger decorative rules */
--sand-400      #8A7F6A    /* MEANINGFUL UI BORDERS — inputs, selected states.
                              3.94:1 on white, 3.29:1 on sand-100 → passes
                              WCAG 1.4.11. --sand-300 does NOT (1.73:1) */

/* ---- DARK SURFACES — scene bands + footer only, ~15% ---- */
--ink-abyss     #050D13    /* footer, deepest sky */
--ink-deep      #0A1721    /* hero + final CTA band surface */
--ink-raised    #122230    /* cards sitting ON a dark band */
--ink-overlay   #1A2E3E    /* inputs on dark */

/* ---- TEXT ON LIGHT (the default) ---- */
--text-strong   #0A1721    /* headings              16.5 / 15.1 :1 */
--text-body     #2E3F4C    /* body copy              9.9 /  9.1 :1 */
--text-muted    #556775    /* metadata, captions     5.3 /  4.9 :1 */
--text-placeholder #556775 /* = muted. Never lighter — see §5.1a */
--text-disabled #8A7F6A    /* = sand-400. Non-text contrast only;
                              never use for information-bearing text */

/* ---- TEXT ON DARK (scene bands only) ---- */
--dk-strong     #E9EFF4    /*                                15.7:1 */
--dk-body       #C3CED7    /*                                11.3:1 */
--dk-muted      #8093A1    /*                                 5.7:1 */

/* ---- ACCENT: dawn gold — FILL vs TEXT, non-interchangeable ---- */
--gold-500      #D9A14F    /* FILLS ONLY — button backgrounds, the horizon
                              line, gauge arcs. 2.09:1 on sand — never text */
--gold-text     #7A4E12    /* TEXT & FOCUS on ANY light surface — links,
                              active nav, focus rings, icons, pill labels.
                              6.54 sand-50 / 5.99 sand-100 / 6.02 in pills */
--gold-400      #F0C87E    /* text on DARK bands only          11.5:1 AAA */
--gold-soft     rgba(217, 161, 79, 0.12)   /* tints, pill backgrounds */

/* ---- ACCENT: signal aqua (verified / secure) ---- */
--aqua-500      #2BB8AE    /* FILLS ONLY. 2.23:1 on sand — never text */
--aqua-text     #0E5C57    /* TEXT on any light surface
                              7.12 sand-50 / 6.52 sand-100 / 6.55 in pills */
--aqua-400      #4FD8CE    /* text on DARK bands only          10.4:1 AAA */
--aqua-soft     rgba(43, 184, 174, 0.12)

/* ---- SEMANTIC (data only, never decorative) ---- */
--pos-text      #0B6739    /* gains, pass     6.35 sand-50 / 5.82 sand-100 */
--neg-text      #9B2125    /* losses, fail    7.25 sand-50 / 6.64 sand-100 */
--warn-text     #7A4E12    /* caution          = gold-text */
--pos           #34C77B    /* dark-band equivalents */
--neg           #E5484D
--warn          #E8A33D

/* ---- STRUCTURE ---- */
--hairline      var(--sand-200)                    /* on light */
--hairline-str  var(--sand-300)
--hairline-dk   rgba(233, 239, 244, 0.10)          /* on dark bands */
--hairline-dk-s rgba(233, 239, 244, 0.18)
```

> ⚠️ **The gold trap — the most likely build error on this project.** `--gold-500` measures **2.09:1** on `--sand-50`. It is beautiful and it is unreadable. Gold is a *fill* colour on light backgrounds — button backgrounds with dark labels, the horizon line, gauge arcs. Any gold **text, link, icon, or focus ring on a light surface must use `--gold-text` #7A4E12.** The same split applies to aqua: `--aqua-500` fills, `--aqua-text` #0E5C57 text. Enforce with a lint rule if possible; this is exactly the mistake that ships.

**Allocation discipline (research §7)**

| Share | Colour |
|---|---|
| ~72% | `--sand-50` / `--sand-100` light surfaces |
| ~15% | `--ink-deep` / `--ink-abyss` — scene bands + footer |
| ~9% | Text neutrals |
| ~3% | Gold — CTAs, links, active states, the horizon line |
| ~1% | Aqua — verified badges and the security gauge only |

**Why two accents is safe here:** they are functionally partitioned, not aesthetically mixed. Gold means *act* (buttons, links, money). Aqua means *verified* (security states, audit results). They never appear in the same component. If that discipline slips in build, drop aqua entirely.

**Contrast — computed, not estimated**

All values below were calculated against WCAG 2.2 relative-luminance and are reproducible from `contrast.py`.

> **Audit correction (v1.2):** the v1.1 table verified text against `--sand-50` **only** — but roughly half the light page is `--sand-100`, where every ratio drops ~9%. `--pos-700` fell to **4.51:1**, inside rounding distance of the AA floor. All accent-text tokens have been darkened one step so a single value is safe on **every** light surface. Both columns are now published.

*Text on light surfaces:*

| Token | on `--sand-50` | on `--sand-100` | in tinted pill | Status |
|---|---|---|---|---|
| `--text-strong` #0A1721 | **16.53** | **15.14** | — | AAA |
| `--text-body` #2E3F4C | **9.90** | **9.07** | — | AAA |
| `--text-muted` #556775 | **5.34** | **4.89** | — | AA |
| `--gold-text` #7A4E12 | **6.54** | **5.99** | **6.02** | AA |
| `--aqua-text` #0E5C57 | **7.12** | **6.52** | **6.55** | AAA / AA |
| `--pos-text` #0B6739 | **6.35** | **5.82** | **5.84** | AA |
| `--neg-text` #9B2125 | **7.25** | **6.64** | **6.67** | AAA / AA |
| ~~`--gold-500`~~ | ~~2.09~~ | ~~1.92~~ | — | **FAIL — fills only** |
| ~~`--aqua-500`~~ | ~~2.23~~ | ~~2.04~~ | — | **FAIL — fills only** |

*Deprecated in v1.2 — pass on sand-50 but too thin on sand-100 and inside pills:*
~~`--gold-700` #8A5A16~~ (4.93 / 4.95) · ~~`--aqua-700` #12706A~~ (4.93 / 4.96) · ~~`--pos-700` #0E7A44~~ (**4.51** / 4.53)

*Button fills:*

| Pair | Ratio | Status |
|---|---|---|
| `--text-strong` on `--gold-500` fill | **7.92:1** | AAA ← primary CTA |
| `--text-strong` on `--aqua-500` fill | **7.40:1** | AAA |
| `--sand-50` on `--ink-deep` fill | **16.53:1** | AAA |
| `#FFFFFF` on `--gold-text` fill | **7.02:1** | AAA |

*On dark scene bands `--ink-deep #0A1721`:*

| Pair | Ratio | Status |
|---|---|---|
| `--dk-strong` #E9EFF4 | **15.65:1** | AAA |
| `--dk-body` #C3CED7 | **11.34:1** | AAA |
| `--dk-muted` #8093A1 | **5.71:1** | AA |
| `--gold-400` #F0C87E | **11.46:1** | AAA |
| `--gold-500` #D9A14F | **7.92:1** | AAA (dark bands only) |
| `--aqua-400` #4FD8CE | **10.41:1** | AAA |

*Non-text UI — WCAG 1.4.11, 3:1 threshold:*

| Element | Ratio | Verdict |
|---|---|---|
| `--gold-text` focus ring on sand-50 / sand-100 | **6.54 / 5.99** | Pass — **this is why focus rings are `--gold-text`, not `--gold-500`** |
| `--gold-500` focus ring on sand | 2.09 | **Fail — never use** |
| `--sand-400` input border on white | **3.94** | Pass |
| `--sand-400` input border on sand-100 | **3.29** | Pass |
| ~~`--sand-300` input border on white~~ | ~~1.73~~ | **FAIL — was specified in v1.1. Fixed.** |
| `--sand-200` decorative divider on sand-50 | 1.26 | **Intentionally exempt.** Purely decorative dividers carry no information and are out of scope for 1.4.11 |

---

### 5.1a Light-surface physics — three findings the audit surfaced

**1. Input borders were failing.** v1.1 specified a `--sand-300` border on a white input fill: **1.73:1**, against a 3:1 requirement. An input border is a meaningful UI component under WCAG 1.4.11, not decoration. Fixed with `--sand-400 #8A7F6A`. This is the kind of bug that ships because it looks fine.

**2. Cards cannot be defined by fill on a light page.** Measured separation:

| Combination | Fill contrast |
|---|---|
| White card on `--sand-50` | 1.098 |
| White card on `--sand-100` | 1.198 |
| `--sand-100` card on `--sand-50` | 1.091 |

All three are effectively invisible as *fill* differences. v1.1 specified `--sand-100` cards on `--sand-50` bands, which would have left cards undefined — and on the `--sand-100` bands (§7.4, §7.7, §7.10) the card would have vanished into the background entirely.

**Fix:** cards are **always `--card #FFFFFF`**, defined by their 1px border plus a soft shadow, never by fill. Padding and border do the structural work.

**3. This is the real reason light mode uses shadows and dark mode does not** — and it resolves an apparent contradiction with research §12 ("drop shadows everywhere" is an anti-pattern). The rule is surface-dependent, not absolute:

- **On dark**, luminance-based elevation is available: a lighter surface step reads instantly, and a shadow adds nothing because there is no light to occlude. Hairlines and surface steps carry elevation.
- **On light**, luminance-based elevation is *not* available — every step toward white runs out of room, as the 1.09 measurement shows. Shadow is the only mechanism left.

So: **soft shadow on light cards is correct, not a lapse.** The anti-pattern in research §12 is heavy, ubiquitous, high-opacity shadow used *instead of* layout. Use `0 1px 2px rgba(10,23,33,.04), 0 8px 24px rgba(10,23,33,.06)` — barely perceptible individually, structurally essential collectively.

**Placeholder text:** `--text-placeholder` = `--text-muted` #556775 (4.89:1 worst case). The instinct to lighten placeholders is near-universal and always fails: `#8A9199` measures **2.90:1**. Do not lighten it.

**Elevation rules differ by surface — this is the part most likely to be applied inconsistently:**

- **On light (default):** a soft shadow is permitted — `0 1px 2px rgba(10,23,33,.04), 0 8px 24px rgba(10,23,33,.06)`. Still prefer a `--sand-200` hairline as the primary device; use shadow only where a card must genuinely float (the dashboard mock, modals).
- **On dark scene bands:** **no shadows.** They produce no contrast on dark (research §7). Elevation = lighter surface step (`--ink-raised`) + 1px `--hairline-dk`.

### 5.2 Typography — bilingual system

This is the most technically demanding part of the build, and the part most Thai sites get wrong.

**The family: IBM Plex superfamily.**

| Role | Latin | Thai | Weights |
|---|---|---|---|
| UI + body | IBM Plex Sans | **IBM Plex Sans Thai** | 400, 500, 600 |
| Data / numerals | IBM Plex Mono | *(Latin only — Thai does not need it)* | 400, 500 |
| Editorial accent | *(see below)* | **Noto Serif Thai** | 400 |

**Why Plex:** IBM Plex Sans and IBM Plex Sans Thai are part of **one type programme**, drawn under the same design brief with a shared skeleton and a matching 100–700 weight range, both free on Google Fonts. Thai and Latin set together will harmonise far better than an arbitrary pairing. It carries institutional-technical credibility that suits fintech and cyber exactly, and Plex Mono completes the set for numerals.

> **Claim corrected (v1.2):** v1.1 asserted the Latin and Thai cuts are "metric-matched." That is stronger than I can verify from IBM's published material — same programme and shared design language are documented; identical metrics are not. **Verify optically in Phase 1** by setting a mixed TH/EN line and checking baseline and x-height alignment. If they diverge, correct with `font-size-adjust` or a per-script size step rather than assuming.

#### Font family count — a rule I broke

Research §6 is explicit: *never more than two families plus an optional mono.* v1.1 specified **five** — Plex Sans, Plex Sans Thai, Plex Mono, Instrument Serif, and Noto Serif Thai. Two entire serif families were loading to render **one pull quote**.

**Fix — four families, and the count is honest:**

| Family | Justification |
|---|---|
| IBM Plex Sans | Latin UI + body |
| IBM Plex Sans Thai | Thai UI + body — *the same family, second script, not a second choice* |
| IBM Plex Mono | The "optional mono" the rule allows. Non-negotiable for financial figures |
| Noto Serif Thai | The single serif accent |

**Instrument Serif is cut.** The pull quote in §7.8 is **Ohm speaking to Thai clients — so it is Thai**, and needs only the Thai serif. Loading a Latin display serif for a quote that contains no Latin was pure waste.

> **Also verified:** Instrument Serif ships **one weight (400) plus italic — no bold.** Had it stayed, any attempt to set the quote in a heavier weight would have silently triggered faux-bold. Noted in case it returns to the system later.

**If a Latin pull quote is ever needed:** set it in Plex Sans at 300 or 400 with generous tracking rather than adding a fifth family. A light large grotesk reads as editorial and costs nothing.

**Alternatives if Ohm wants more personality:** `Anuphan` (Cadson Demak — modern, geometric, excellent with grotesks) or `LINE Seed Sans TH`. Both would require pairing with a separate Latin face and manual metric tuning. `Sarabun` and `Prompt` are acceptable but very common in Thai government and SME sites — they will not differentiate him.

**Avoid:** `Kanit` (over-exposed in Thai marketing and reads as promotional), any faux-bolded Thai, and any Thai face without a real 500/600 weight.

#### Thai typography rules — non-negotiable

| Rule | Value | Why |
|---|---|---|
| **Thai body line-height** | **1.75–1.85** | Thai stacks vowels above and below the baseline plus tone marks on top. 1.5 (the Latin default from research §6) causes mark collision between lines |
| **Thai heading line-height** | **1.35–1.45** | Never the 1.05–1.2 used for Latin display |
| **Thai letter-spacing** | **`0` — never negative** | Negative tracking collides tone marks into adjacent glyphs. The `-0.03em` display tracking from research §6 applies to **Latin only** |
| **Thai optical size** | **+1px** vs the Latin equivalent | Thai reads optically smaller at the same px value |
| **`lang` attribute** | `lang="th"` **required** on every Thai element | Thai has no inter-word spaces; browsers need this to invoke ICU dictionary line-breaking. Without it, lines break mid-word |
| **No ALL CAPS on Thai** | — | The concept does not exist. The `overline` style from research §6 is Latin-only |
| **Thai measure** | 40–55 "characters" | Equivalent physical width to a 65ch Latin line |
| **Word-break** | `word-break: normal; overflow-wrap: break-word` | Never `break-all` — it shreds Thai clusters |
| **Thai on dark bands** | Bump weight **400 → 500** | Thai tone marks are thin strokes; on dark they bloom at the edges (halation) and dissolve. A weight step restores the stroke. This is the §5.0 argument, applied locally — it is why the light surface is the default and why the dark bands carry headline copy, not paragraphs |

```css
:lang(th) {
  font-family: "IBM Plex Sans Thai", sans-serif;
  line-height: 1.8;
  letter-spacing: 0;          /* hard override — never inherit negative tracking */
  word-break: normal;
  overflow-wrap: break-word;
}
:lang(th) h1, :lang(th) h2, :lang(th) h3 { line-height: 1.4; letter-spacing: 0; }

/* REQUIRED COUNTERPART — see the bug note below */
:lang(en) {
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 1.6;
}
:lang(en) h1, :lang(en) h2, :lang(en) h3 { line-height: 1.12; letter-spacing: -0.02em; }
:lang(en) .display { line-height: 1.05; letter-spacing: -0.03em; }
```

> ### ⚠️ The `lang` cascade bug — v1.1 would have broken the hero
>
> `lang` **inherits**, and an element has exactly one language. With `<html lang="th">` — which the Thai-first decision requires — `:lang(th)` matches **every element on the page**, including all English text. The 76px English display headline *"Secure Your Capital, Master Global Markets"* would have rendered at **line-height 1.8 in a Thai font**. The single most prominent element on the site, wrong.
>
> **The fix is authoring discipline, not CSS:** every Latin run needs an explicit `lang="en"`. Because an element's language is singular, `<span lang="en">` inside `<html lang="th">` matches `:lang(en)` and stops matching `:lang(th)` — no specificity battle, no `!important`.
>
> ```html
> <html lang="th">
>   <h1 class="display" lang="en">Secure Your Capital, Master Global Markets</h1>
>   <p>นวัตกรรมความปลอดภัย เพื่อทุกการเติบโตทางการเงินโลก</p>
>   <p>ปรึกษาเรื่อง <span lang="en">Options</span> และ <span lang="en">Pink Sheets</span></p>
> </html>
> ```
>
> **Where this bites hardest:** inline Latin inside Thai sentences — `Options`, `Pink Sheets`, `Multi-sig`, `Cold Wallet`, `API`, `SOC 2` — which this site's copy is full of. Each needs wrapping. Untagged, they inherit Thai metrics and sit visibly wrong on the line.
>
> **Make it a build-time check.** A lint rule or a CI script flagging `[A-Za-z]{3,}` inside untagged Thai text is worth the hour; catching these by eye across a full page of bilingual copy is unreliable.
>
> This is also an accessibility requirement, not just a rendering one: screen readers select voice and pronunciation from `lang`. Untagged, a Thai TTS voice attempts to read "Pink Sheets."

#### Type scale — ratio 1.250 (Major Third)

| Token | Latin desktop | Latin mobile | Thai adj. | LH (Latin / Thai) | Tracking (Latin) |
|---|---|---|---|---|---|
| `display` | 76px | 40px | +2px | 1.05 / 1.40 | `-0.03em` / `0` |
| `h1` | 52px | 34px | +2px | 1.12 / 1.40 | `-0.02em` / `0` |
| `h2` | 38px | 28px | +1px | 1.20 / 1.42 | `-0.015em` / `0` |
| `h3` | 26px | 21px | +1px | 1.30 / 1.45 | `-0.01em` / `0` |
| `body-lg` | 19px | 18px | +1px | 1.60 / 1.85 | `0` |
| `body` | 17px | 16px | +1px | 1.60 / 1.80 | `0` |
| `small` | 14px | 14px | +1px | 1.55 / 1.75 | `0.01em` / `0` |
| `overline` | 12px | 12px | — | 1.40 / — | `0.12em` — **Latin only** |
| `data` | Plex Mono 15px | 14px | — | 1.40 | `0` + `tabular-nums` |

**The single serif moment:** Noto Serif Thai appears in **exactly one place** — the pull quote in the About section (§7.8). This is the law-firm authority note from research §2. Using it anywhere else dilutes it to zero.

**Numerals:** every price, percentage, statistic, and table figure gets `font-variant-numeric: tabular-nums`. Per research §4, non-aligning digits in a financial table are an instant credibility leak.

**Font loading budget:** subset aggressively (Thai + Latin + numerals only), `font-display: swap`, `preload` the two weights used above the fold. Thai subsets are large — target ≤ 180KB total font payload.

### 5.3 Spacing, grid, radius

Per research §8 — 8pt system throughout.

```
Space:    4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160
Grid:     12 columns · 32px gutter desktop · 16px mobile
Content:  max-width 1280px · prose max-width 62ch (Latin) / 48ch equivalent (Thai)
Gutter:   clamp(1rem, 5vw, 5rem)
Section:  128px desktop · 72px mobile vertical rhythm
Radius:   4px inputs · 10px buttons · 16px cards · 999px pills
```

**Radius rationale:** 16px cards on a dark institutional surface reads current without reading playful. Per research §12, mixing radii is the loudest amateur signal — one scale, applied everywhere, no exceptions.

---

## 6. Page Architecture

One page, thirteen bands. Ambient scene active in **§7.1–7.3 and §7.12 only**.

The page runs **dark → light → dark**: night, then day, then dawn.

```
                                                   SURFACE
┌─────────────────────────────────────────────┐
│  0  Ambient canvas (fixed, behind 1-3 & 12) │
│  1  Nav — sticky, TH/EN, booking CTA        │  ink-deep   ◀ scene
│  2  HERO — name, slogan, dual CTA           │  ink-deep   ◀ scene
│  3  Market ticker strip                     │  ink-abyss  ◀ scene edge
├─────────────────────────────────────────────┤  ══ LIGHT FROM HERE ══
│  4  Trust bar — credentials                 │  sand-100
│  5  The fear — two audiences, two columns   │  sand-50
│  6  THE THREE SYSTEMS — bento, the core     │  sand-50   (cards sand-100)
│  7  Dashboard preview — product UI          │  sand-100
│  8  Process — 4 steps                       │  sand-50
│  9  About Ohm — editorial + serif quote     │  sand-50
│ 10  Proof — cases, numbers, testimonials    │  sand-100
│ 11  Packages + FAQ                          │  sand-50
├─────────────────────────────────────────────┤  ══ DARK RETURNS ══
│ 12  FINAL CTA — booking form                │  ink-deep   ◀ scene
│ 13  Footer — disclaimer, contact, legal     │  ink-abyss
└─────────────────────────────────────────────┘
```

**Nav behaviour across the transition:** the nav starts transparent over the dark hero with `--dk-strong` labels, then inverts at the §3→§4 boundary to `--sand-50` at 92% opacity with `backdrop-filter: blur(12px)`, `--text-strong` labels, and a `--sand-200` bottom hairline. Cross-fade the label colours over 200ms — do not snap. This inversion is a detail worth getting right; it is the moment the page changes register from cinematic to practical.

**Alternating `sand-50` / `sand-100` bands** give the light middle a quiet rhythm without introducing a third surface colour. The shift is a 3% lightness step — felt, not seen.

---

## 7. Section Specifications

### 7.1 Navigation

- 72px tall. Transparent over the dark hero → **inverts to** `--sand-50` at 92% opacity with `backdrop-filter: blur(12px)` and a `--sand-200` bottom hairline once past the ticker. See the inversion note in §6.
- **Left:** wordmark. **Centre/right:** 4 anchors — `บริการ` · `ผลงาน` · `เกี่ยวกับ` · `คำถามที่พบบ่อย`. **Far right:** TH/EN toggle + one gold CTA `จองคิวปรึกษา`.
- Mobile: full-screen overlay, large type (research §9). Not a cramped dropdown.
- `scroll-margin-top: 96px` on every anchor target so the sticky bar never covers a heading.

### 7.2 Hero

**Composition:** 7/5 asymmetric split (research §8). Type in the left 7 columns, negative space right — the scene reads through it. Headline never centred.

```
[overline]  FINTECH · CYBERSECURITY · GLOBAL MARKETS     ← Latin, 0.12em tracking, --gold-500

[display]   Secure Your Capital,
            Master Global Markets                        ← Latin, 76px, -0.03em

[body-lg]   นวัตกรรมความปลอดภัย เพื่อทุกการเติบโตทางการเงินโลก   ← Thai, ~30px, LH 1.4

[body]      ที่ปรึกษาที่ผสานความเชี่ยวชาญด้านการลงทุนสากล
            เข้ากับความปลอดภัยไซเบอร์ สำหรับนักลงทุนรายบุคคล
            และองค์กรที่ต้องการเติบโตอย่างปลอดภัย

[CTA]       ● จองคิวปรึกษา (gold, primary)
            ○ ตรวจสุขภาพความปลอดภัย ฟรี 15 นาที (ghost, secondary)

[proof]     ✓ ปรึกษาแล้ว 000+ ราย   ✓ สินทรัพย์ภายใต้คำแนะนำ ฿000M+
```

Per research §4, the hero needs five elements: specific headline · context subheadline · one dominant CTA · product visual · credibility signal. **The product visual here is the ambient scene plus the ticker** — Ohm has no app to screenshot, so the dashboard preview (§7.7) carries that load instead.

> ### ⚠️ Two things v1.1 assumed that it had no right to
>
> **1. The proof line contradicts our own rule.** The composition above bakes in `ปรึกษาแล้ว 000+ ราย` and `฿000M+` — but §11 #10 says *never fabricate; omit if unavailable.* If Ohm has no numbers, the hero loses its credibility signal, and research §4 counts that as one of the five required elements. A spec that silently breaks when a dependency is missing is a broken spec.
>
> **Fallback ladder — use the highest rung that is true:**
>
> | Rung | Signal | Requires |
> |---|---|---|
> | 1 | `ปรึกษาแล้ว N ราย` · `฿NM ภายใต้คำแนะนำ` | Real, countable figures |
> | 2 | `ประสบการณ์ N ปี` · named certifications | Verifiable credentials — **always available** |
> | 3 | Named methodology or framework he works from | Nothing external |
> | 4 | Credential marks moved up from §7.4 into the hero | Logos only |
>
> **Rung 2 is the floor and it is always reachable**, so the hero never ships without a credibility signal. Design the slot to hold either two stats or one credential line without reflowing.
>
> **2. I invented a free-work commitment on Ohm's behalf.** "ตรวจสุขภาพความปลอดภัย ฟรี 15 นาที" was my wording, not his brief. It is a strong offer — lower-commitment than "book a consultation," maps directly to System 2, and would likely outperform the primary CTA — but it obligates him to unbounded free work from strangers, and that is a business decision, not a design one.
>
> **Added to §11 as a decision.** If he declines, the secondary CTA becomes `ดูบริการทั้งหมด` (scroll to §7.6) — weaker, but it costs him nothing. If he accepts, cap it: a fixed number of slots per week, visibly stated. Scarcity is honest here and it protects his calendar.

### 7.3 Market ticker strip

48px strip, `--ink-abyss`, hairline top and bottom. Horizontal marquee, ~40s per cycle, **pauses on hover**.

`SET 1,3xx.xx ▲0.42%` · `S&P 500` · `NASDAQ` · `BTC/USD` · `ETH/USD` · `XAU/USD` · `USD/THB`

All in Plex Mono with `tabular-nums`. Gains `--pos`, losses `--neg`.

> ### ⚠️ Licensing problem — v1.1 said "free tier API." That is not viable for SET data.
>
> The v1.1 spec ("free tier API, cached 60s") does not survive contact with exchange licensing, and this matters more here than on a normal site: displaying unlicensed market data on the public site of a **financial consultant** is precisely the kind of detail that undermines the trust the page exists to build.
>
> **What SET actually charges:** the SET SMART Marketplace lists real-time and delayed data via JSON API at **฿15,000/month for personal or internal use by a natural or juristic person**. Public website display is **re-distribution**, which is a separate arrangement negotiated with their Information Services Department — not a published rate.
>
> **Three viable options, in order:**
>
> | Option | Cost | Trade-off |
> |---|---|---|
> | **A. Drop SET, keep global + crypto** *(recommended)* | ~free–low | Crypto (CoinGecko), FX, and gold have genuinely permissive free tiers. Global indices vary by vendor — **check each provider's ToS for public display rights specifically**, as free API access and redistribution rights are different grants |
> | **B. Embed a third-party widget** | Free | TradingView carries SET at 15-min delay free and handles licensing itself. Cost is their branding and attribution requirements, plus a third-party script in the page — weigh against the §12 JS budget |
> | **C. License SET properly** | ฿15k+/mo | Only justifiable if SET data is genuinely core to Ohm's offer. For a consultant landing page it is not |
>
> **Recommendation: Option A.** Ohm's stated focus is *global* markets — หุ้นต่างประเทศ, Options, Pink Sheets, crypto. A ticker showing S&P, NASDAQ, BTC, gold and USD/THB is **more on-brand than one led by SET**, and sidesteps the problem entirely. The constraint improves the design.
>
> **Whichever option:** label the delay honestly (`ล่าช้า 15 นาที`) and attribute the source. An unlabelled delayed quote presented as live is a small deception on a page selling financial integrity.

**Fallback:** cache at the edge and render a static last-known strip if the fetch fails. A ticker showing stale or broken values is worse than no ticker. If the data cannot be made reliable, **cut the component** — it is a Tier-1 nice-to-have (§4), not a requirement.

### 7.4 Trust bar

**The first light band — the register change lands here.** Opaque `--sand-100`, hairline above and below.
Credential marks (certifications, affiliations, education) at 32px height rendered in `--text-muted`, going full opacity on hover. Per research §2 — set small and confident, never as loud badges.

> Logos supplied as dark-on-transparent will sit correctly on this light band. If Ohm supplies white-on-transparent marks (common), they will be invisible here — request dark or full-colour versions in §10.

### 7.5 The fear — two audiences

Two columns, hairline divider between. This is where we name the problem before selling the solution.

| สำหรับนักลงทุนรายบุคคล | สำหรับองค์กรและ SMEs |
|---|---|
| อายุ 22–50+ ปี ที่ต้องการเข้าสู่ตลาดสากล | ผู้บริหารที่ไม่มีทีมความปลอดภัยไซเบอร์ |
| • เปิดพอร์ตต่างประเทศแต่ไม่รู้เริ่มตรงไหน | • กลัวสินทรัพย์บริษัทถูกแฮก |
| • ถือคริปโตแต่ไม่มั่นใจวิธีเก็บ | • ไม่รู้ว่าระบบการเงินมีช่องโหว่ตรงไหน |
| • อยากเทรด Options / Pink Sheets แต่กลัวความเสี่ยง | • ต้องเลือกเทคโนโลยีการเงินใหม่แต่ประเมินไม่ถูก |

Each column ends with an anchor link to the relevant system below.

### 7.6 The three systems — the core section

**Bento grid** (research §4/§8), 3 tiles, asymmetric weighting. The Audit tile is largest — it is the differentiator and the highest-intent entry point.

```
┌──────────────────────────┬─────────────────┐
│  ② CYBERSECURITY &       │  ① STRATEGIC    │
│     ASSET AUDIT          │     CONSULTATION│
│     (2 cols × 2 rows)    │  (1 col × 1 row)│
│     + live gauge widget  ├─────────────────┤
│                          │  ③ FINTECH      │
│                          │     ROADMAP     │
└──────────────────────────┴─────────────────┘
```

**Tile anatomy** (each): `--card #FFFFFF` surface on a `--sand-50` band · 1px `--sand-300` border · 16px radius · 32px padding · soft shadow (§5.1a) · icon tile (40px, `--gold-soft` bg, 12px radius, `--gold-text` glyph) · `h3` title TH with EN subtitle in `--text-muted` · 2-line description · feature list with `--aqua-text` check marks · text CTA in `--gold-text` with arrow. Hover: border → `--sand-400`, shadow deepens, 4° tilt max, 200ms ease-out.

> **Tile ② is the exception:** render the Audit tile on `--ink-deep` with `--dk-strong` text and the aqua gauge — a single dark card inside the light section. It is the differentiator, it is where the security gauge lives, and one inverted tile in a bento grid is a deliberate, legible emphasis device. Exactly one tile gets this treatment.

---

**① ระบบจองคิวและรับคำปรึกษาเฉพาะทาง** — *Strategic Consultation*
Private or corporate sessions covering: หุ้นต่างประเทศ · Options · Pink Sheets · Crypto & Tokenized Assets · การปรับโครงสร้างการเงินบริษัท.
*UI:* embedded scheduler (Cal.com), session-type selector, duration + price stated inline (trust pattern 4).

**② ระบบตรวจสุขภาพความปลอดภัยไซเบอร์การเงิน** — *Cybersecurity & Asset Audit*
Covering: Multi-sig / Cold Wallet custody review · Trading API security · ช่องโหว่ระบบการเงินองค์กร.
*UI:* **the security gauge widget** — a radial meter animating 0→score on scroll-into-view, with three sub-scores (Custody / API / Access Control). This tile carries the aqua accent. It is the single most persuasive component on the page because it shows the deliverable rather than describing it.

> ### ⚠️ Whose score is it? v1.1 never said — and the ambiguity is a trust risk
>
> A radial gauge animating to a number, unlabelled, on a page about *your* security, reads as a result about *you*. It is not — nothing has been measured. On a site whose entire premise is financial trustworthiness, an implied-but-fabricated assessment is the worst possible component to get wrong. It is also the exact failure research §4 warns about: copying a surface pattern without the substance underneath.
>
> **Pick one, explicitly:**
>
> **A. Sample report *(recommended for v1)*** — label it unambiguously: `ตัวอย่างรายงาน` / "Sample audit output." Use a deliberately imperfect score (**72**, not 94) with one sub-score visibly weak. A flawed sample is more credible than a perfect one, and it demonstrates the deliverable has teeth. Zero backend, zero risk.
>
> **B. Real self-assessment** — 5–7 questions, score computed client-side from the visitor's answers, gated CTA for the full audit. Genuinely valuable and a strong lead capture, but it is **a real product**, not a widget: scoring logic Ohm must author and stand behind, plus a privacy notice if answers are transmitted. Scope it as its own phase or not at all.
>
> **Never:** an unlabelled gauge animating to an impressive number. That is decoration impersonating a measurement.
>
> Same rule applies to the §7.7 dashboard mock — label it `ตัวอย่าง` if the figures are illustrative.

**③ ระบบประเมินทิศทางเทคโนโลยี** — *Fintech Roadmap & AI Integration*
Technology selection guidance for organisations — what to adopt, what to avoid, what it costs.
*UI:* a compact 4-quarter roadmap strip, static.

### 7.7 Dashboard preview

Section surface `--sand-100`. A single large product-UI mock of the **Dashboard สรุปแผนกลยุทธ์** — strategy summary, risk allocation, security install checklist — floating on a soft shadow (this is one of the few places shadow is warranted, per §5.1).

> **The dashboard mock itself may be dark** even though the section is light — a dark application UI presented on a light marketing page is the standard, well-understood convention (Stripe, Linear, and every analytics vendor do exactly this). It also gives Ohm the dark "instrument" aesthetic in the one place it genuinely belongs: a data tool. See the note at the end of §5.0.

Per research §4, this is the "product interface visual" the hero could not supply. It must look like real software: tabular numerals, real Thai labels, plausible numbers, a genuine chart. **No lorem ipsum, no placeholder greys** (research §9).

*Asset dependency:* requires either a real anonymised screenshot from Ohm, or we design the mock. See §10.

### 7.8 About Ohm — the editorial moment

This is the attorney-profile pattern from research §2, and the emotional centre of the page.

- **7/5 split.** Large portrait left (4:5 ratio, ~520px wide), text right.
- Name in `h1`, role beneath in `--text-muted`.
- Two to three short paragraphs — background, philosophy, why he does this.
- **The one serif moment:** a pull quote in Noto Serif Thai, 30px, Thai copy (see §5.2 on why the Latin serif was cut), no quote-mark decoration, hanging into the left margin (optical alignment, research §9).
- Credentials as a clean hairline-separated metadata list beneath — not badges.
- Optional: signature PNG at the end. Small, `--text-muted`. A strong authority detail.

### 7.9 Process — 4 steps

Horizontal on desktop, vertical on mobile. Numbered `01–04` in Plex Mono, `--gold-500`, connected by a hairline.
`ปรึกษาเบื้องต้น` → `ประเมินและตรวจสอบ` → `วางแผนกลยุทธ์` → `ติดตั้งและติดตามผล`

### 7.10 Proof

Stat band (3–4 numbers, scroll-triggered counters, tabular nums) + 2–3 case snapshots or testimonials in cards. Per research §4 pattern 11 — named, specific, linked to substance. Anonymised is acceptable for finance (`ผู้บริหาร SME, กรุงเทพฯ`), fabricated is not.

### 7.11 Packages + FAQ

Packages: 3 tiers, middle one marked `แนะนำ` with a gold hairline border. **State real prices** (trust pattern 4). If prices must stay private, state the *range* and what determines it — never "ติดต่อสอบถาม" alone, which reads as evasive in a trust-sensitive category.

FAQ: accordion, hairline dividers, 6–8 questions. Must include: *"ให้คำแนะนำการลงทุนเฉพาะบุคคลหรือไม่?"* and *"ข้อมูลของฉันถูกเก็บอย่างไร?"*

### 7.12 Final CTA — the scene returns

Full-viewport band. **The ambient horizon reappears**, now at the dawn end of its gradient. This closes the visual narrative that opened in the hero: night → dawn, uncertainty → clarity.

Booking form on `--ink-raised`, 48px inputs, labels above (research §9), single column, inline validation on blur. Directly beneath the submit button, per research §4 pattern 10: response time, data-handling statement, and any licence or registration details.

### 7.13 Footer

`--ink-abyss`. Contact · social · TH/EN · sitemap anchors.

> **Required, and a genuine legal exposure:** an investment disclaimer stating that content is educational and not personalised investment advice, plus Ohm's regulatory status (licensed / not licensed under Thai SEC). This is both a trust pattern (research §4 §10, §12) and a compliance necessity. **Flagged in §11 as needing his lawyer's review before launch — I am not qualified to draft it and neither is the design team.**

---

## 8. Component Library

Every component needs **both** a light variant (default, ~85% of use) and a dark-band variant (§7.1–7.3, §7.12). Build the light one first.

| Component | On light (default) | On dark scene bands |
|---|---|---|
| **Button — primary** | 52px, `--gold-500` fill, `--text-strong` label (**7.92:1**), 10px radius, 24–32px padding. Hover: `--gold-600` + 2px lift, 150ms ease-out | Identical — gold fill reads on both |
| **Button — ghost** | 52px, transparent, 1px `--sand-400`, `--text-strong` label. Hover: border → `--gold-text` | 1px `--hairline-dk-s`, `--dk-strong` label |
| **Card** | **`--card #FFFFFF` fill** — never sand-100 (§5.1a) · 1px `--sand-300` · 16px radius · 32px padding · soft shadow `0 1px 2px rgba(10,23,33,.04), 0 8px 24px rgba(10,23,33,.06)`. Shadow is structural here, not decoration | `--ink-raised`, 1px `--hairline-dk`. **No shadow** — invisible on dark (research §7) |
| **Input** | 48px, `#FFFFFF` fill, **1px `--sand-400`** (3.94:1 — `--sand-300` fails at 1.73), 4px radius. Focus: 2px `--gold-text` ring at 2px offset (**6.54:1**) | `--ink-overlay` fill, 1px `--hairline-dk-s`. Focus: 2px `--gold-400` ring |
| **Placeholder** | `--text-placeholder` #556775 (4.89:1 worst case). **Do not lighten** | `--dk-muted` |
| **Link** | `--gold-text` #7A4E12, underline at 3px offset. **Never `--gold-500`** — 2.09:1 | `--gold-400` |
| **Pill / status** | `--gold-soft` / `--aqua-soft` fill with `--gold-text` / `--aqua-text` label (**6.02 / 6.55** inside the tint). 999px, 12px Latin / 13px Thai | Same tints, `--gold-400` / `--aqua-400` labels |
| **Icon** | `--text-muted` default, `--gold-text` active. One family, 1.5px stroke, 24px grid. Lucide or Phosphor — never mixed sources (research §12) | `--dk-muted` / `--gold-400` |
| **Divider** | 1px `--sand-200` decorative; **`--sand-400` if it carries meaning** (selected state, active tab) | 1px `--hairline-dk` |
| **Data table** | Plex Mono, `tabular-nums`, row hairlines only — no vertical rules, no zebra striping. `--pos-text` / `--neg-text` for figures | Same structure, `--pos` / `--neg` |

> **Build order matters.** Author the light variant, then define the dark band as a scoped override (`.band--dark { ... }`) that reassigns the semantic tokens. Do **not** write two parallel component sets — that is how the two variants drift apart. This is the semantic-token pattern from research §5: components reference `--surface`, `--text`, `--accent-text`; the band reassigns what those point to.

---

## 9. Motion Specification

Per research §10.

| Interaction | Duration | Easing |
|---|---|---|
| Hover, button, link | 150ms | `ease-out` |
| Card hover, tilt | 200ms | `cubic-bezier(0.2, 0, 0, 1)` |
| Accordion, tab | 250ms | `cubic-bezier(0.2, 0, 0, 1)` |
| Modal, mobile nav | 350ms | `cubic-bezier(0.2, 0, 0, 1)` |
| Scroll reveal | 500ms, 70ms stagger | `ease-out` |
| Counter / gauge | 1200ms, once only | `ease-out` |
| Decrypt reveal | 800ms, once only | linear |

**Rules:** `transform` and `opacity` only. Nothing over 500ms except the two once-only widgets. Scroll reveals are fade + 16px translate-up — nothing more. Every animation honours `prefers-reduced-motion`. Store all durations and easings as tokens.

---

## 10. Image & Asset Request — for Ohm

Ohm offered to supply images. Here is the exact list, with direction so what comes back is usable. **Items 1, 2, and 7 are blocking** — the page cannot ship without them.

### Priority 1 — blocking

**1. Portrait — hero/about** ⚠️
- 3 frames: `4:5` vertical (about section), `3:4` (mobile), `1:1` (footer/meta)
- **Direction:** deep-teal or charcoal seamless background, single key light from one side (not flat ring light), business casual — shirt, optional jacket, no tie. Calm expression, looking directly into the lens. Waist-up and shoulders-up variants.
- **Why a dark background on a light page:** the portrait becomes a strong dark rectangle anchoring the About section — the classic attorney-profile treatment from research §2. It also keeps the image usable if it is ever needed on a dark band. A mid-grey or white studio background would dissolve into `--sand-50` and flatten the section.
- **Avoid:** blown-out white backgrounds, flat frontal ring light, heavy retouching, and any background with a visible gradient hotspot.
- Minimum 2400px on the long edge, RAW or maximum-quality JPEG.

**2. Environment shots ×2–3** ⚠️
- At his desk / multiple monitors / on a call. Ambient light, not staged-corporate.
- Used for section transitions and the process band.

**7. Credentials list + certification marks** ⚠️
- Plain text list of every certification, licence, degree, and affiliation, **plus** any SVG/PNG logos he has the right to display.
- **Also required:** written confirmation of his Thai SEC registration status. This determines the disclaimer language and is a launch blocker (§7.13).

### Priority 2 — strong improvement

**3. Detail shots ×3–4** — hands on keyboard, hardware wallet, notebook with handwriting, phone showing a chart. Shallow depth of field. These fill grid gaps and add texture.

**4. Real dashboard screenshots** — anonymised, any tool he actually uses (portfolio tracker, audit report, risk matrix). If unavailable, we design the mock — but a real one is far more persuasive.

**5. Existing brand assets** — any current logo (SVG preferred), colours, or fonts he already uses. If none exist, we design a wordmark; note as an open decision in §11.

**6. Client / partner logos** — only with written permission to display. **Dark-on-transparent or full-colour versions** — the trust bar (§7.4) is a light surface, so white-on-transparent marks will be invisible.

### Priority 3 — nice to have

**8. Signature** — PNG with transparent background, dark ink on white paper, scanned at 600dpi. Small but high-impact authority detail in the About section.

**9. Short video loop, 6–10s** — him working, or a market screen. Muted, no audio track. Optional hero alternative.

### What we do *not* need from him

Stock photography of any kind, generic crypto/blockchain imagery, handshake photos, 3D coin renders, or anything from a stock library. Per research §12 these actively reduce credibility. Every texture on this site is either generated in code or is a real photograph of him.

---

## 11. Open Decisions — need Ohm's answer before build

| # | Question | Blocks | Default if no answer |
|---|---|---|---|
| 1 | **Dawn horizon (A) or literal beach (B)?** §3 | Ambient layer | Ship A |
| 2 | Thai-first or English-first at load? | Nav, copy, SEO | Thai-first, EN toggle |
| 3 | SEC registration status + licensing | Disclaimer, legal copy, §7.13 | **Hard blocker — cannot ship without** |
| 4 | Real prices published, or ranges? | §7.11 | Ranges with stated variables |
| 5 | Which 3 Tier-1/2 widgets? §4 | Scope, JS budget | Decrypt + ticker + gauge |
| 6 | Existing logo, or do we design a wordmark? | Nav, footer, favicon, OG | Design a wordmark |
| 7 | Real booking backend (Cal.com / Calendly) or form-to-email? | §7.6 tile ①, §7.12 | Cal.com embed |
| 8 | Live market data budget — free tier or paid API? | §7.3 | Free tier + 60s edge cache |
| 9 | Domain, hosting preference, analytics? | Deploy | Cloudflare Pages + privacy-first analytics |
| 10 | Real stats for the proof band, or omit until available? | §7.10, §7.2 | **Omit — never fabricate.** Hero falls back per the §7.2 ladder |
| 11 | **Will he honour a free 15-min security check?** Unbounded free work from strangers | §7.2 secondary CTA | Offer it, capped at N slots/week and stated on the page |
| 12 | **Security gauge: sample report or real self-assessment?** | §7.6 tile ② | Sample, labelled `ตัวอย่างรายงาน`, score 72 |
| 13 | **Ticker: drop SET, embed TradingView, or license?** ฿15k/mo for SET | §7.3 | Drop SET — global + crypto only, which is more on-brand anyway |
| 14 | **Does the service list itself survive his licence status?** See note below | §7.6, §7.13 | **Blocked on #3** |

> ### On #14 — a question bigger than the disclaimer
>
> §11 #3 asks for Ohm's SEC registration status so we can write the footer disclaimer. That framing was too narrow. Thailand's SEC regulates investment advice, and the brief lists **หุ้นต่างประเทศ, Options, Pink Sheets, and crypto** for retail clients aged 22+. Pink Sheets in particular are US OTC instruments with a high fraud base rate.
>
> Depending on his licence status, the fix may not be a disclaimer at all — it may be **how the services are framed**: education and process consulting rather than specific recommendations, "how to evaluate" rather than "what to buy." That changes headline copy, tile copy, and the FAQ, not just the footer.
>
> **This is a lawyer question, not a design question, and it has to be asked before Phase 2 copy** — not at Phase 7 as v1.1 scheduled it. Discovering at legal review that the service descriptions need restructuring means rewriting the page. **Phase table updated accordingly.**

> On #10 and #3: per research §4, fabricated numbers and vague regulatory language are the two fastest ways to lose exactly the audience this site targets. If the numbers do not exist yet, the band is cut. An empty section is survivable; an invented one is not.

---

## 12. Technical Specification

**Stack**
- **Astro** (static output) or plain HTML/CSS/JS. A one-pager needs no framework runtime.
- Ambient layer: single `<canvas>`, vanilla `requestAnimationFrame`. No Three.js — it is 150KB for something a 2D canvas does in 4KB.
- Scroll: `IntersectionObserver` + CSS transitions. No GSAP unless the decrypt effect needs it.
- Booking: Cal.com embed. Forms: Cloudflare Worker → email.
- Hosting: **Cloudflare Pages** + Workers. Free tier covers this comfortably, edge-cached globally, and the ticker API proxy runs as a Worker with a 60s cache.

**Performance budget**

| Metric | Target |
|---|---|
| LCP | ≤ 2.0s |
| CLS | ≤ 0.05 |
| INP | ≤ 200ms |
| Total JS (gzipped) | ≤ 90KB |
| Ambient layer | ≤ 14KB |
| Fonts | ≤ 260KB — **revised up from v1.1's 180KB, which was not achievable.** Four families across two scripts, and Thai subsets are genuinely heavy. Budget honestly: Plex Sans Thai 400/500/600 is the bulk, Noto Serif Thai loads `font-display: optional` (one pull quote — if it misses, the fallback is acceptable). Measure in Phase 1 and cut a weight if over |
| Lighthouse perf / a11y | ≥ 95 |

**Accessibility**
- WCAG 2.2 AA minimum; **AAA on body text** — met by the palette (`--text-body` at 9.90:1, headings at 16.53:1).
- **Light-as-default is an accessibility decision, not only an aesthetic one** (§5.0). Dark backgrounds trigger halation for the ~47% of people with some astigmatism, and the effect falls hardest on thin strokes — which is exactly what Thai tone marks are. Keep sustained reading on `--sand-50`.
- **Optional future addition:** a user-controlled theme toggle. Research supports offering both rather than forcing one. Out of scope for v1 — it doubles component QA — but the semantic-token architecture in §8 makes it a contained change later.
- Full keyboard navigation with visible `:focus-visible` throughout.
- `prefers-reduced-motion` fully honoured — see §3.5.
- `lang` attributes correct on every bilingual switch (§5.2) — this is an accessibility requirement, not just a rendering one: screen readers need it to select the right voice.
- The security gauge and all charts need text equivalents, not just visuals.

**Responsive breakpoints:** 375 · 768 · 1024 · 1440 · 1920. Design and review at all five.

---

## 13. Build Phases

> **Reordered in v1.2.** v1.1 put legal review at Phase 7, *after* the copy was written — so a licence-driven restructure of the service framing (§11 #14) would have invalidated Phase 2. Legal framing now gates copy. Copy is also now named as an explicit dependency; v1.1 required "real Thai copy" in Phase 2 without listing who writes it.

| Phase | Deliverable | Depends on |
|---|---|---|
| **0** | This document approved; §11 answered | Ohm |
| **0.5** | **Legal framing review** — how services may be described given his licence status | **Ohm's lawyer.** Gates all copy |
| **1** | Token layer — colour, type, spacing, motion as CSS custom properties. **Verify TH/EN metric alignment (§5.2) and measure real font payload** | Phase 0 |
| **2** | Copy — Thai body, English display, every Latin run `lang`-tagged | Phase 0.5. **Who writes it: Ohm, or us from his notes? Unassigned** |
| **3** | Static page structure, all 13 sections, **no motion** | Phases 1–2 |
| **4** | Ambient horizon layer + degradation + iOS paths (§3.5a) | Phase 3 |
| **5** | Three chosen widgets (§4) | Phase 4 |
| **6** | Real assets swapped in (§10), dashboard mock | Ohm's images |
| **7** | Booking + form backends; ticker data source resolved | §11 #7, #13 |
| **8** | Final legal pass — disclaimer, privacy, data handling | Phase 0.5 outcome |
| **9** | Performance, a11y, cross-browser, 5 breakpoints, contrast grid re-verified | All |
| **10** | Deploy | Phase 8 sign-off |

**Still unassigned:** copy authorship (Phase 2) and photography — §10 asks Ohm for images but does not say whether he is hiring a photographer or we are art-directing one. Both are schedule risks and neither is a design decision.

**Recommended first build:** Phases 1–3. A working hero with the live ambient horizon, real copy, and real type is the fastest way for Ohm to judge whether the dawn-horizon direction is right — far more informative than any static mockup.

---

## 14. Success Criteria

The design has succeeded if:

1. A visitor who has never heard of Ohm can state what he does within **8 seconds**.
2. The ambient scene is noticed, liked, and **cannot be described as "distracting"** in review.
3. Every business-content section reads perfectly with the canvas disabled.
4. Thai and Latin text sit in the same paragraph without optical misalignment or mark collision.
5. The page passes Lighthouse ≥ 95 **with** the ambient layer running.
6. Nothing on the page would embarrass a compliance officer.
7. The **dark → light → dark** transition reads as one composition, not three pages stitched together — and `--gold-500` never appears as text on a light surface (§5.1).
8. A 55-year-old reader gets through the Audit section without squinting.
9. **Nothing on the page claims a number, a score, or a credential that is not real** (§7.2, §7.6, §7.7, §7.10).
10. Every Latin run inside Thai copy carries `lang="en"` — verified by lint, not by eye (§5.2).

---

*Next step: §11 answered, then Phase 1.*
