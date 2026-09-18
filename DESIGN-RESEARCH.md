# The Quiet Luxury Playbook
### How law firms, museums, fintech, and modern-minimal studios build websites that look expensive

> A research synthesis of four aesthetics that share one DNA — **restraint, hierarchy, and craft** — and how to combine them into a single design language.
> Compiled September 2026.

---

## 0. The One-Paragraph Answer

All four categories converge on the same formula: **a near-monochrome neutral palette, one disciplined accent, two typefaces maximum, a strict grid with enormous whitespace, and motion so subtle you only notice it when it is missing.** What separates them is *voice*: law firms use a **high-contrast serif** for inherited authority, museums use **editorial asymmetry** so the artwork outranks the interface, fintech uses **neutral grotesques and live numbers** to convert anxiety into confidence, and modern-minimal uses **systematised tokens** so every element feels machined from the same block. Fuse them and you get: serif display + grotesque UI, an off-white/near-black neutral field, one accent covering under 5% of the surface, 8pt-grid spacing, and content that breathes.

---

## 1. The Shared DNA — What All Four Do Identically

These are non-negotiable. Break them and no amount of styling saves the site.

| Principle | What it means in practice |
|---|---|
| **Neutral-dominant palette** | 90–95% of the page is one neutral family. Colour is an *event*, not a surface. |
| **Two typefaces, maximum** | One display/voice face + one workhorse UI face. A third family is almost always a mistake. |
| **Whitespace as structure** | Space is not leftover — it is the thing doing the ranking. Sections get 96–160px of vertical air on desktop. |
| **Hierarchy via size and weight, not colour** | The Swiss rule. If you need colour to show something is important, the layout has already failed. |
| **A strict grid, broken deliberately** | 12-column base, 8pt spacing unit. Asymmetry only reads as intentional when there is an obvious grid to violate. |
| **Restrained motion** | 150–300ms, ease-out, `opacity` and `transform` only. One ambient effect, one interaction effect. |
| **Real photography, art-directed** | Generic stock is the fastest way to look cheap. Unconventional crops beat perfect centring. |
| **Hairlines and rules** | 1px dividers at 8–12% opacity do the organising work that boxes and drop shadows do on cheaper sites. |
| **Accessible by construction** | 4.5:1 body text, 3:1 large text and UI. Built into the token scale, not patched at the end. |

---

## 2. Law Firm — *Inherited Authority*

The goal is to look like the firm has existed for eighty years and will exist for eighty more. The 2026 shift is away from the exhausted navy-and-gold cliché toward **editorial sophistication**.

### Typography

- **The "modern authority" hybrid is the current standard**: a high-contrast serif for headlines plus a neutral sans for UI, metadata, and navigation. Pure serif reads dated; pure sans reads like a startup.
- **Large serif headlines** as the dominant visual element — not decoration, but the primary graphic.
- Attorney names and practice areas set in the serif; everything functional (nav, buttons, filters, breadcrumbs) in the sans.

**Pairings that work:**

| Display (headlines) | Body / UI | Feel |
|---|---|---|
| Playfair Display 700–900 | Inter / Jost | High-contrast, editorial, premium |
| Libre Baskerville 400 | Inter | Traditional, bookish, legible down to 14px |
| Cormorant Garamond 300–500 | Inter / Söhne | Delicate, luxury, boutique — **headlines only** |
| Instrument Serif / DM Serif Display | Lato / DM Sans | Contemporary, less stuffy |
| Freight Display / Canela *(paid)* | Suisse Int&#39;l / GT America | Top-tier firm territory |

> **Rule:** Cormorant and Playfair are display faces. Setting body copy in them is the most common self-inflicted wound on law sites. Libre Baskerville is the serif that *is* safe for body — it was optimised for screen and holds up at 14px with moderate contrast and slightly wider proportions.

### Colour

The tired formula is navy `#0A1F44` plus gold `#C9A227`. It still works, but 2026 reads as:

```
Charcoal / near-black    #111214   →  authority without the corporate navy
Deep forest              #1B3A2F   →  established, quieter than navy
Burgundy / oxblood       #5B1F2A   →  gravitas, old-world
Warm terracotta          #9C5B3C   →  human, approachable firms
Bone / warm off-white    #F7F5F1   →  the paper the whole site is printed on
Single metallic accent   #B08D57   →  used on under 3% of the surface
```

- **Fewer core colours, one strong accent used sparingly.** Two neutrals plus one accent is the entire palette.
- **Dark sections** for contrast and modernity — a near-black band mid-page with light type is a signature move.
- Warm off-white (`#F7F5F1`, `#FAF8F5`) beats pure white. It reads as paper, not as screen.

### Layout and Components

- **Asymmetrical editorial grids** — a 7/5 or 8/4 split, headline hanging off the column, generous outer margins (never edge-to-edge text).
- **Full-height sections** creating a sense of progression as the user scrolls.
- **Elevated attorney profiles**: large portrait, editorial layout, name in display serif, credentials as a clean metadata list. This is the page that wins or loses the client.
- **Card-based modular systems** for practice areas, case results, and insights.
- **Cleaner navigation** — primary items visible, everything secondary in an expandable menu that appears only when needed.
- **Thin rules** separating sections instead of cards-on-grey.
- Practice-area landing pages that function as mini-homepages.
- **Subtle texture and gradients** softening flat design; custom iconography and minimal illustration tied to the brand system.

**Signature components:** oversized serif hero statement · attorney grid with hover crossfade · results/stat band (`$4.2B recovered`, `Est. 1926`) · insights/publications index that looks like a journal · sticky "Contact" or "Case Evaluation" CTA · credential and ranking marks (Chambers, Legal 500) set small and confident, never as loud badges.

---

## 3. Museum and Gallery — *The Interface Defers to the Work*

The organising principle is subtraction: **every design decision must lose to the artwork.** Museums also run the most sophisticated institutional type programmes of any sector — and they serve two entirely distinct audiences at once.

### Typography

- **Clean sans-serif is the norm**, because a neutral face lets the imagery carry all the colour and personality.
- Major institutions commission **custom typefaces** and use them everywhere — the sector's defining move:
  - **MoMA** → *MoMA Gothic* (Matthew Carter, 2004), the principal face across the entire system; the 1964 Chermayeff logotype was Franklin Gothic No. 2.
  - **Guggenheim** → *Guggenheim Sans*, a custom **open-source** face with Latin **and Arabic** character sets, unifying New York, Venice, Bilbao, and the forthcoming Abu Dhabi.
  - **Tate** → *Tate Pro*, retained through North's refresh but used far more tightly than before.
- To get the effect without a commission: **Suisse Int&#39;l, ABC Diatype, GT America, Aeonik, Söhne** (paid), or **Inter, Archivo, Space Grotesk, Instrument Sans** (free).
- Museums frequently run **one family across the whole site**, using weight and size alone for hierarchy. This is the cheapest way to look institutional.

### Colour

```
Gallery white     #FFFFFF / #FAFAFA     →  the wall
Ink               #0A0A0A               →  wall-label text
Mid grey          #6B6B6B               →  metadata, dates, medium/dimensions
Hairline          rgba(0,0,0,0.08)      →  the only divider you need
Accent            one colour, often pulled from the current exhibition identity
```

- The palette is **deliberately empty** so exhibition imagery supplies all colour.
- Many institutions re-skin the accent per exhibition — the chrome stays constant, the accent rotates.

### Layout and Components

- **Bold grid homepages** offering several distinct ways in at once.
- **Asymmetrical grids with dynamic animation** — the current move away from rigid vertical stacking, designed to feel like walking through rooms rather than scrolling a list.
- **Museum-catalogue editorial feel** rather than corporate card grids: generous negative space, publication-quality journal sections that rival art magazines, high-resolution imagery with real context.
- **Two audiences, two paths**: visit-planners and content-divers behave almost entirely separately. Serve both from the homepage without compromising either.
- Content organised around **user needs, not internal org structure**.

**Signature components:** full-bleed exhibition hero with date range overlay · exhibition card = image + title + **date range** + status pill (`On view` / `Opening soon` / `Closed`) · persistent, high-contrast **Tickets** button in the nav bar · "Plan your visit" hub (hours, map, directions, parking, accessibility) · collection browser with facet filters over a lazy-loaded masonry or justified grid · object detail page laid out like a wall label (title, artist, date, medium, dimensions, credit line) · editorial/magazine section · zoomable high-res viewer.

> Hours, admission, and ticketing must be **extremely prominent on mobile** — that is the majority of real museum traffic, and it is usually someone standing outside the building.

---

## 4. Fintech — *Clarity Is the Product*

Fintech design is trust engineering. The visual surface is minimal because **minimal reads as "we have nothing to hide."** The 2026 story is brands escaping the generic-blue trap.

### Typography

- **Neutral institutional grotesques, no display faces, no competing families** — *Söhne*, *Inter*, *Geist*, *ABC Diatype*. Serious without being stiff.
- **Monospace for numbers, code, and data** — `JetBrains Mono`, `IBM Plex Mono`, `Geist Mono`, or tabular figures via `font-variant-numeric: tabular-nums`. Non-aligning digits in a financial table are an instant credibility leak.
- Typography carries the storytelling: **oversized headlines, custom fonts, variable weights, layered styles.**
- **Mercury** commissioned *Arcadia*; **Stripe** built its own; **Vercel** ships *Geist*. A custom face is the sector's status signal.

### Colour

```
Generic fintech blue     #0052FF, #1652F0    →  the thing everyone is running from
Stripe / Linear indigo   #635BFF / #5E6AD2   →  the current default "serious"
Mercury purple           deliberate anti-blue positioning
Deep green               #0B3D2E             →  wealth, stability
Vercel absolutism        #000 / #FFF + near-zero accent
Semantic only            #16A34A success · #DC2626 danger — never decorative
```

- Two live directions: **deep blue/green/neutral** for institutional trust, and **owned, non-obvious brand colour** (Mercury's purple, cinematic photography, dark-first palette — closer to a fashion or automotive brand than a bank) for differentiation. Generic fintech blue now signals *"we could not commit to a position."*
- **Dark-first design systems.** Linear designs every component on the dark surface first; light mode is the secondary expression. Critically: **shadows do not read on dark backgrounds** — use surface lightness steps and 1px borders for elevation instead.

### Trust Patterns — the components that actually convert

**Visual**
1. **People-grounded hero** — real customers in concrete environments, not abstract 3D blobs or illustration.
2. **Neutral grotesk typography** — one family, no display faces competing.
3. **Motion restraint** — one ambient effect plus one triggered effect, with explicit `prefers-reduced-motion` fallbacks. Restraint signals regulatory seriousness rather than marketing flash.

**Copy**
4. **Plain-money copy above the fold** — *"Send $1,000 to Japan. Fee: $4.07"*, not "competitive rates."
5. **Comparison-versus-incumbents pricing** — your fee against named competitors, live. Wise built a $14B business largely on this one pattern.
6. **Specific numeric proof of scale** — defensible numbers that force the reader to update their mental model of your size.

**UX**
7. **Live fee / comparison widget** — converts price anxiety into agency.
8. **Support availability cue** — "24/7 humans on chat," stated in product copy, not the footer.
9. **Protection or guarantee block** — what happens, by name, if something goes wrong.

**Structural**
10. **Regulator and deposit-insurance language near the CTA** — licence issuer, registration number, insured amount. Not footer fine print. Compliance badges (SOC 2, PCI DSS, FDIC) placed near CTAs lift conversion **10–20%**.
11. **Named customer logos with scale numbers** — *"Trusted by 35,000+ companies"*, linked to substantive stories. Never anonymous "leading brands."
12. **Trust as a content destination** — a real security and compliance page covering data handling, audits, and regulatory status, not a one-paragraph marketing stub.

### The hero formula

Five elements above the fold: **specific value-prop headline · context subheadline · one dominant CTA · product interface visual · at least one credibility signal.** Safety is communicated before value.

**Signature components:** product-UI hero (real screenshot or live-feeling mock) · **bento grid** of feature tiles with varied `col-span`/`row-span` to create visual weight · interactive pricing/fee calculator · dashboard-style data cards with tabular numerals · logo wall · comparison table · code snippet block with syntax highlighting and a copy button · integration/marketplace grid · sticky secondary nav on long docs pages.

> The common failure: copying Stripe's *surface* — dark UI, Inter, monospace, bento grids — while skipping the design logic underneath. The surface without the substance (real numbers, real proof, real clarity) reads as costume.

---

## 5. Modern Minimal — *The Substrate*

Not a vertical; the **operating system** the other three run on. It is what makes a site feel machined rather than assembled.

### Typography

- **Variable sans-serifs** dominate: **Inter, Geist, Manrope, DM Sans, Plus Jakarta Sans, Instrument Sans, Satoshi**. Variable fonts win on both flexibility and payload.
- **Large headings, tight tracking.** Display type at 48–120px with `-0.02em` to `-0.04em` letter-spacing.
- Hierarchy expressed through **size and weight only**.

### Colour

- **Near-monochrome plus one accent.** Vercel's system is literally `#000000`, `#FFFFFF`, `0px` radius, and almost no accent colour — with workflow-specific accents (`Ship Red #FF5B4F`, `Preview Pink #DE1D8D`, `Develop Blue #0A72EF`) reserved strictly for meaning.
- **OKLCH is well supported and worth using** — the W3C Design Tokens Community Group spec reached its first stable version (2025.10, published 28 October 2025) and admits **seven colour spaces**: `srgb`, `hsl`, `hwb`, `lab`, `lch`, `oklab`, `oklch`. OKLCH is *supported*, **not mandated** — an earlier draft of this document overstated that. It is still the best default for generating tonal scales, because perceptual uniformity keeps lightness steps even and contrast predictable in a way HSL does not.
- **Semantic tokens over primitives**: components reference `--surface-raised`, never `--gray-800`. This is exactly how Vercel, Linear, and Radix switch themes without touching component code.

### Layout

- **Whitespace defines structure and hierarchy** — the mechanism, not the byproduct. It helps users process information faster and with less effort.
- **The 8pt grid.** Material codified it for software; it traces directly to mid-century Swiss typesetting; Tailwind's spacing scale is the same idea.
- **Content-led, not decoration-led** — the product or the words carry the page.
- Mobile-first, lean code, fast. Speed is now part of the aesthetic, and sustainable web design (optimised images, low-impact hosting, no dark patterns) is an explicit 2026 value.

---

## 6. The Typography System

### Type scale

Pick a mathematical ratio and never deviate. **1.250 (Major Third)** for dense/UI-heavy sites, **1.333 (Perfect Fourth)** for editorial, **1.414–1.5** for dramatic display contrast.

| Token | Desktop | Mobile | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display` | 72–120px | 40–56px | 1.0–1.05 | `-0.03em` | Hero statement |
| `h1` | 48–64px | 32–40px | 1.1 | `-0.02em` | Page title |
| `h2` | 32–40px | 26–30px | 1.2 | `-0.015em` | Section |
| `h3` | 24–28px | 20–22px | 1.3 | `-0.01em` | Subsection |
| `body-lg` | 18–20px | 17–18px | 1.6 | `0` | Lead paragraph |
| `body` | 16–17px | 16px | 1.5–1.6 | `0` | Default |
| `small` | 14px | 14px | 1.5 | `0.01em` | Captions, metadata |
| `overline` | 12–13px | 12px | 1.4 | `0.08–0.12em` | ALL-CAPS labels, eyebrows |

### The hard rules

1. **Body line-height 1.4–1.6 unitless** (1.5 is the safe default), so it scales with font size. Headings tighten to **1.1–1.3** — the size already creates separation.
2. **Measure: 60–75 characters** for comfortable reading; absolute limits 45–85. `max-width: 65ch` is the single most effective one-line typography fix.
3. **Tracking:** leave body text alone — the type designer already spaced it. Add **+0.05em to +0.1em** to ALL-CAPS and small text. Apply **slight negative tracking** to large display headings, where optical inconsistencies are immediately visible.
4. **Tighter leading requires a shorter measure.** They must be tuned together.
5. Use `font-variant-numeric: tabular-nums` on anything that is a number in a column.
6. Never more than **two families** plus an optional mono. Weight range beats family count.

### Fluid type (the modern default)

```css
--step-0:  clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
--step-1:  clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
--step-2:  clamp(1.5rem, 1.3rem + 1vw, 2rem);
--step-3:  clamp(2rem, 1.6rem + 2vw, 3rem);
--step-4:  clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem);
--step-5:  clamp(3rem, 1.8rem + 6vw, 7.5rem);
```

---

## 7. The Colour System

### Construction method

1. **Start with neutrals — at least five steps**: very dark (text on light), dark (secondary text), medium (borders and dividers), light (text on dark), very light (backgrounds).
2. **Generate a 9–10 step lightness scale** (`50, 100, 200 … 900`) per hue in **OKLCH**. Lightest steps become backgrounds and hover states, mid-range becomes the primary interactive colour, darkest become text and high-contrast borders.
3. **Verify the brand colour passes 4.5:1** against pure black *or* pure white before building tints from it.
4. **Build a contrast grid** — every colour against every background it could appear on, marked AA / AAA / fail. This becomes the team reference.

### Requirements

| Target | Ratio |
|---|---|
| Body text (AA) | **4.5:1** |
| Large text 18px+/14px bold (AA) | **3:1** |
| UI components and graphics | **3:1** |
| Body text (AAA) | **7:1** |

### The 60-30-10 discipline for these aesthetics

More accurately **90-7-3**: neutral background, neutral-dark text, and an accent that appears on primary CTAs, active states, links, and nothing else.

### Dark mode

- Treat dark as a **first-class context with its own elevation logic**, not an inverted variant.
- Never `#000` on `#FFF` text — use `#0A0A0B`–`#121316` surfaces with `#E6E8EB`–`#D0D6E0` text.
- **Elevation on dark = lighter surface + 1px border**, because shadows produce no contrast.
- Desaturate accents slightly on dark; fully saturated brand colours vibrate against dark surfaces.

---

## 8. Spacing, Grid, and Layout

### The 8pt system

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

Use 4px only for tight icon/text relationships. Everything else is a multiple of 8.

### Grid

- **12 columns**, 24–32px gutters desktop, 16px mobile.
- **Content max-width 1200–1440px**; prose column 640–720px.
- **Page gutters:** 16–24px mobile, 48–80px desktop. Generous outer margins are a primary luxury signal.
- **Section rhythm:** 96–160px vertical padding between major sections on desktop, 56–80px mobile. This single variable does more for perceived quality than any other.
- **Asymmetry:** offset the grid deliberately — 7/5 splits, headlines hanging into the margin, images bleeding past a column edge. Only reads as intentional against a visible underlying structure.

### Layout patterns worth stealing

| Pattern | Where it comes from | Best for |
|---|---|---|
| **Full-bleed hero + overlaid type** | Museum | Exhibitions, brand statements |
| **Editorial 7/5 asymmetric split** | Law / museum | Long-form, profiles, about pages |
| **Bento grid** | Fintech | Feature showcase with 4–6 distinct areas |
| **Sticky sidebar + scrolling content** | Fintech docs | Documentation, long legal content |
| **Justified/masonry image grid** | Museum | Collections, portfolios, case galleries |
| **Stat band** | Law / fintech | Proof, credibility, scale |
| **Journal/index list with hairline rules** | Law / museum | Insights, news, publications |
| **Scroll-triggered section reveal** | All four | Creating progression down the page |

---

## 9. The Component Library — What Actually Makes It Look Great

### Buttons
- Height 44–52px, horizontal padding 20–32px, radius **matched to the system** (0px Vercel-style, 8px standard, 999px pill).
- **One primary per view.** Secondary is ghost or outline; tertiary is a text link with an underline offset.
- Hover: 120–150ms, subtle background shift or 1–2px lift. Never a colour explosion.
- Include a focus-visible ring — a 2px outline at 2px offset in the accent colour.

### Cards
- Radius `rounded-2xl` for containers, `rounded-lg` for buttons and inputs, `rounded-xl` for icon tiles, `rounded-full` for pills — pick one scale and apply it consistently.
- **Prefer a 1px border at 8–10% over a drop shadow.** Shadows read as 2016; hairlines read as 2026.
- Internal padding 24–32px. Image on top, tight metadata line, title, one-line description.
- Hover: lift the image scale to `1.03` with `overflow: hidden`, not the whole card.

### Navigation
- 64–80px tall, transparent over hero, then solid with a hairline bottom border on scroll.
- Logo left, 4–6 links centre or right, **one** high-contrast CTA far right.
- Everything secondary goes in a mega-menu or a drawer that only appears when needed.
- Mobile: full-screen overlay with large type — not a cramped dropdown.

### Forms and inputs
- 48px minimum height, labels above (never placeholder-only), 1px border, accent-coloured focus state.
- Inline validation on blur, not on every keystroke.
- One column. Multi-column forms measurably hurt completion.

### The details that separate good from great
- **Hairline dividers** at 8–12% opacity instead of grey blocks.
- **Optical alignment** — pull quotation marks and bullets into the margin so text edges align optically.
- **Consistent corner radius** across every element. Mixed radii is the loudest amateur signal.
- **Image treatment consistency**: pick one — all duotone, all warm-graded, all full-colour. Never mixed.
- **Real content in mockups.** Lorem ipsum hides every hierarchy problem you have.
- **Custom favicon, OG image, and 404.** The 404 page is free personality.
- **Selection colour** set to the accent (`::selection`).
- **Scroll-margin-top** on anchor targets so sticky nav does not cover them.

---

## 10. Motion

| Interaction | Duration | Easing |
|---|---|---|
| Hover, button press, high-frequency micro-interaction | **100–200ms** (under 150ms ideal) | `ease-out` |
| Toggles, checkboxes, small state changes | **150–300ms** | `ease-out` |
| Panels, modals, view transitions | **300–500ms** | `cubic-bezier(0.2, 0, 0, 1)` |
| Continuous/reversible motion (toggle sliding) | 200–300ms | `ease-in-out` |

### Rules
- **Under 80ms is invisible. Over 400ms feels sluggish.**
- **Entering elements use ease-out** (arrive fast, settle). **Exiting elements use ease-in** (start slow, leave fast).
- **Only `transform` and `opacity`** are GPU-accelerated and safe for 60fps. Animating `width`, `height`, `top`, or `box-shadow` will cost you frames.
- **Always respect `prefers-reduced-motion`** — replace slides and zooms with fades or instant state changes.
- Store durations and curves as **motion tokens**, exactly like colour tokens.
- Scroll-triggered reveals: **fade + 12–20px translate-up**, staggered 60–80ms. Anything more is a distraction.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. Imagery and Texture

- **Art-directed photography over stock**, with unconventional framing and strategic cropping that extends past traditional boundaries.
- **One consistent grade** across the whole library — warm, cool, or desaturated. Consistency matters more than which one.
- **Subtle grain or noise overlay** (2–4% opacity) warms up flat colour fields and is the current antidote to sterile minimalism.
- **Very subtle gradients** — a 3–5% lightness shift across a section, not a rainbow.
- Duotone or monochrome treatment on secondary imagery keeps the accent colour rare.
- Lazy-load everything below the fold; serve AVIF/WebP with explicit `width`/`height` to prevent layout shift.

---

## 12. Anti-Patterns — The Fast Ways to Look Cheap

1. **Three or more typefaces.**
2. **Mixed corner radii** across buttons, cards, and inputs.
3. **Drop shadows everywhere** instead of hairlines and spacing.
4. **Generic stock photography** — the handshake, the diverse team laughing at a laptop.
5. **Tight vertical rhythm.** Cramped sections read as cheap more reliably than any colour mistake.
6. **Colour doing the work of hierarchy.**
7. **Body copy in a display serif** (Playfair, Cormorant).
8. **Navy + gold with no other idea.**
9. **Generic fintech blue** as the entire brand position.
10. **Animating everything** — motion that is not restrained reads as marketing, not credibility.
11. **Centred long-form text.** Left-align prose; centre only short display lines.
12. **Full-width body text** with no max-width.
13. **Copying Stripe's surface** without the numbers, proof, and clarity underneath.
14. **Icons from five different sets.** One family, one stroke weight.

---

## 13. A Unified Starter Token Set

A single system that can be tuned toward any of the four voices by changing the display font and accent.

```css
:root {
  /* ---- Type ---- */
  --font-display: "Playfair Display", "Instrument Serif", Georgia, serif; /* law/museum */
  --font-ui: "Inter", "Geist", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace;

  --tracking-display: -0.03em;
  --tracking-tight:   -0.015em;
  --tracking-normal:   0;
  --tracking-caps:     0.1em;

  --leading-display: 1.05;
  --leading-heading: 1.2;
  --leading-body:    1.6;

  /* ---- Neutrals (warm, paper-leaning) ---- */
  --n-0:   #FFFFFF;
  --n-50:  #FAF8F5;   /* page background */
  --n-100: #F2EFEA;
  --n-200: #E5E1DA;   /* hairlines, dividers */
  --n-400: #A8A29A;   /* disabled */
  --n-500: #6B6660;   /* metadata, captions */
  --n-700: #3A3733;   /* secondary text */
  --n-900: #1A1917;   /* primary text */
  --n-950: #111110;   /* dark sections */

  /* ---- Accent: swap per vertical ---- */
  /* law:      #B08D57 brass · #5B1F2A oxblood · #1B3A2F forest */
  /* museum:   exhibition-driven, rotates                        */
  /* fintech:  #635BFF indigo · #0B3D2E deep green               */
  /* minimal:  #0A0A0A near-black, accent used almost never      */
  --accent:       #B08D57;
  --accent-hover: #9A7A46;
  --accent-soft:  rgba(176, 141, 87, 0.10);

  /* ---- Semantic ---- */
  --surface:        var(--n-50);
  --surface-raised: var(--n-0);
  --surface-invert: var(--n-950);
  --text:           var(--n-900);
  --text-muted:     var(--n-500);
  --border:         var(--n-200);
  --border-strong:  var(--n-400);

  /* ---- Space (8pt) ---- */
  --s-1: 4px;   --s-2: 8px;   --s-3: 12px;  --s-4: 16px;
  --s-5: 24px;  --s-6: 32px;  --s-7: 48px;  --s-8: 64px;
  --s-9: 96px;  --s-10: 128px; --s-11: 160px;

  /* ---- Radius ---- */
  --r-sm: 6px;   --r-md: 10px;  --r-lg: 16px;  --r-full: 999px;

  /* ---- Layout ---- */
  --max-content: 1280px;
  --max-prose:   68ch;
  --gutter:      clamp(1rem, 5vw, 5rem);

  /* ---- Motion ---- */
  --dur-fast:  150ms;
  --dur-base:  250ms;
  --dur-slow:  400ms;
  --ease-out:  cubic-bezier(0.2, 0, 0, 1);
  --ease-in:   cubic-bezier(0.4, 0, 1, 1);
  --ease-both: cubic-bezier(0.4, 0, 0.2, 1);
}

:root[data-theme="dark"] {
  --surface:        #111214;
  --surface-raised: #1A1C1F;
  --surface-invert: #FAF8F5;
  --text:           #E8E6E3;
  --text-muted:     #9A968F;
  --border:         rgba(255, 255, 255, 0.10);
  --border-strong:  rgba(255, 255, 255, 0.20);
}

body {
  background: var(--surface);
  color: var(--text);
  font-family: var(--font-ui);
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
  line-height: var(--leading-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, h2, h3 {
  font-family: var(--font-display);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-tight);
  text-wrap: balance;
}

p { max-width: var(--max-prose); text-wrap: pretty; }

::selection { background: var(--accent-soft); color: var(--text); }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: var(--r-sm);
}
```

### Tuning the same system to each voice

| | Display font | UI font | Background | Accent | Radius | Section padding |
|---|---|---|---|---|---|---|
| **Law firm** | Playfair Display 700 | Inter | `#FAF8F5` bone | `#B08D57` brass | 6–10px | 128–160px |
| **Museum** | Same as UI (one family) | Suisse Int&#39;l / Inter | `#FFFFFF` | Exhibition-driven | 0–4px | 96–128px |
| **Fintech** | Inter / Geist 600 | Inter / Geist | `#0A0A0B` dark-first | `#635BFF` | 10–16px | 96–128px |
| **Minimal** | Geist / Inter 500 | Geist / Inter | `#FFFFFF` / `#000000` | Almost none | 0px or 16px | 96–160px |

---

## 14. Build Checklist

**Foundation**
- [ ] Type scale locked to one ratio; fluid `clamp()` values defined
- [ ] Max two families (plus mono if numbers matter); variable fonts, subset and `preload`ed
- [ ] `font-display: swap` and a metric-matched fallback to prevent layout shift
- [ ] Neutral scale of 5+ steps, one accent, contrast grid verified at 4.5:1 / 3:1
- [ ] All spacing on the 8pt scale; one radius scale applied everywhere
- [ ] Semantic tokens only in components; dark mode as its own elevation logic

**Layout**
- [ ] 12-column grid, content max-width set, prose capped at 65–75ch
- [ ] 96–160px desktop section rhythm
- [ ] At least one deliberate asymmetric break
- [ ] Mobile-first; tested at 375px, 768px, 1440px

**Components**
- [ ] One primary CTA per view, with hover/active/focus/disabled states defined
- [ ] Hairline borders over drop shadows
- [ ] Real content, not lorem ipsum
- [ ] Vertical-specific hero built (see §2–§5)

**Motion**
- [ ] Durations and easings as tokens; nothing over 400ms
- [ ] `transform`/`opacity` only
- [ ] `prefers-reduced-motion` honoured

**Craft**
- [ ] Custom favicon, OG image, designed 404
- [ ] `::selection` and `:focus-visible` styled
- [ ] `scroll-margin-top` on anchors
- [ ] Keyboard navigable end to end; visible focus throughout
- [ ] AVIF/WebP with explicit dimensions; below-fold lazy-loaded
- [ ] Lighthouse ≥ 95 on performance and accessibility

---

## 15. Sources

**Law firm**
- [2026 Law Firm Website Design Trends — PaperStreet](https://www.paperstreet.com/blog/2026-law-firm-website-design-trends/)
- [Top Law Firm Website Design Trends for 2026 — TheeDigital](https://www.theedigital.com/blog/law-firm-web-design-trends)
- [10 Best Fonts For Lawyers' Websites — Digital Silk](https://www.digitalsilk.com/digital-trends/best-fonts-for-lawyers/)
- [Font Pairings for Law Firm Websites — FontAlternatives](https://fontalternatives.com/blog/font-pairings-legal-law-firm-websites/)
- [Law Firm Website Design Inspiration — Claremont Software](https://claremontsoftware.com/blog/law-firm-website-design-inspiration/)
- [Best Color Scheme for a Law Firm Website — Fat Cow Web Design](https://www.fatcowwebdesign.com/best-color-scheme-for-a-law-firm-website-choosing-colors-that-build-trust/)

**Museum**
- [MoMA identity — Pentagram](https://www.pentagram.com/work/moma/story)
- [One Typeface Fits All at MoMA](https://www.moma.org/explore/inside_out/2013/04/08/one-typeface-fits-all-at-moma/)
- [Guggenheim Unveils New Visual Identity](https://www.guggenheim.org/press-release/guggenheim-unveils-new-visual-identity-uniting-its-global-constellation-of-museums)
- [Tate identity refresh by North — Wallpaper](https://www.wallpaper.com/design/tate-revamps-museums-visual-identity-with-north-ahead-of-switch-house-opening)
- [The Definitive Guide to Museum Website Design Inspiration — Social Design House](https://www.socialdesignhouse.com/post/museum-website-design-inspiration)
- [Tips for Better Museum Website Design — Big Sea](https://bigsea.co/articles/museum-website-design/)
- [Galleries & Museums — Siteinspire](https://www.siteinspire.com/websites?categories=78)

**Fintech**
- [Fintech Website Trust Design: 12 Patterns That Convert — Utsubo](https://www.utsubo.com/blog/fintech-website-trust-design-patterns)
- [Fintech Design Trends 2026: Why Apps Look the Same — Masterly](https://www.themasterly.com/blog/fintech-design-guide)
- [Fintech Website Hero Section Best Practices — WSA](https://wsa.design/news/fintech-website-hero-section-best-practices)
- [15 Best Fintech SaaS Landing Pages — DesignRevision](https://designrevision.com/blog/fintech-saas-landing-pages)
- [25 Best Fintech Website Designs — Ballistic Media](https://www.ballistic.media/blog/fintech-website-designs)

**Minimal / modern / systems**
- [Top Web Design Trends for 2026 — Figma](https://www.figma.com/resource-library/web-design-trends/)
- [Top 10 Minimalist Web Design Trends For 2026 — Digital Silk](https://www.digitalsilk.com/digital-trends/minimalist-web-design-trends/)
- [Vercel Design System Breakdown — SeedFlip](https://seedflip.co/blog/vercel-design-system)
- [Dark Mode Design Systems: Patterns, Tokens, Hierarchy — Muzli](https://muz.li/blog/dark-mode-design-systems-a-complete-guide-to-patterns-tokens-and-hierarchy/)
- [Swiss Design Principles for Web Designers — Swiss Themes](https://swissthemes.design/insights/swiss-design-for-web-designers)
- [Swiss Style — PRINT Magazine](https://www.printmag.com/featured/swiss-style-principles-typefaces-designers/)
- [Typography grid systems: column, baseline, modular, 8pt — Grid Maker Pro](https://gridmakerpro.com/grids/typography-grids/)

**Typography, colour, motion**
- [The ideal line length & line height — Pimp my Type](https://pimpmytype.com/line-length-line-height/)
- [Line Height & Letter Spacing: Readability Rules — Made Good Designs](https://madegooddesigns.com/line-height-letter-spacing/)
- [50 fonts that will be popular with designers in 2026 — Creative Boom](https://www.creativeboom.com/resources/top-50-fonts-in-2026/)
- [Typography — Material Design 3](https://m3.material.io/styles/typography/applying-type)
- [How to Build an Accessible Color Palette — UDT](https://ultimatedesigntools.com/blog/how-to-build-accessible-palette/)
- [Accessible Palette](https://accessiblepalette.com/)
- [Motion foundations — Atlassian Design](https://atlassian.design/foundations/motion)
- [Micro-Interactions: Timing, CSS, and INP — Social Animal](https://socialanimal.dev/blog/micro-interactions-web-design/)
