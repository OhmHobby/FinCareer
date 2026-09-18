# ศักดินนท์ เศรษฐสิงห์ — Digital Portfolio & Career Roadmap

**โปรเจกต์ปลายภาค ม.5 · หน้าเว็บเดียว · 20 คะแนน**

Static HTML, CSS and vanilla JS — no build step, no dependencies, no framework.

Design language from [DESIGN-DOC.md](DESIGN-DOC.md) v1.2 and [DESIGN-RESEARCH.md](DESIGN-RESEARCH.md).
Content follows the assignment brief `2569 Final M.5 Digital_Career_Roadmap.pdf`.

## How the page maps to the assignment

| Brief requires | Section | Status |
|---|---|---|
| **ส่วนที่ 1** Professional Profile — ชื่อ/เลขที่/ชั้น, อาชีพเป้าหมาย, สโลแกน, job description | `#top`, `#role`, `#about` | ✅ *(class + student no. still placeholder)* |
| **ส่วนที่ 2** Skills & Roadmap — Hard/Soft Skills + 3 ระยะ | `#skills`, `#roadmap` | ✅ |
| **ส่วนที่ 3** Digital Ethics — สถานการณ์ + วิธีแก้ตามกฎหมาย | `#ethics` | ✅ PDPA ม.37(4) + ม.83 |
| **ส่วนที่ 4** Attribution & AI — อ้างอิงลิขสิทธิ์ + เปิดเผย prompt | `#attribution` | ✅ |

Rubric target is **18–20 (ดีเยี่ยม — ดีไซน์สวย วิชาการเป๊ะ)**, which needs
ทักษะดิจิทัลครบถ้วน + 3 ระยะเป็นรูปธรรม, สถานการณ์จริยธรรมสมจริงท้าทายแก้ตาม PDPA ได้ลึกซึ้ง,
อ้างอิงครบและระบุ prompt ชัดเจน, หน้าเว็บสวยอ่านง่าย, และนำเสนอ 3–5 นาที.

---

## Files

```
index.html              the whole page — 8 sections
intake.html             intake form (superseded — see note below)
message-to-ohm.txt      follow-up message to send him
assets/css/style.css    tokens + all styles
assets/js/ambient.js    the dawn-horizon canvas (birds, clouds, stars, shimmer)
assets/js/main.js       nav, reveals, decrypt effect, gauge, ticker
assets/img/             optimised portrait variants
Profile.png             original portrait from Ohm (3.93 MB source — not served)
serve.py                local dev server with correct MIME types
.nojekyll               stops GitHub Pages running Jekyll on the files
.claude/launch.json     local dev server config (not needed in production)
```

Total payload excluding fonts: **~95 KB uncompressed**. No npm, no bundler.

---

## The intake form — `intake.html`

**This is what Ohm fills in and sends back.** Open it in any browser, or email him
the single file — it is fully self-contained and works offline.

- **33 questions** in four parts: A) launch blockers · B) decisions · C) copy only he
  can write · D) files to send separately.
- Progress saves to his browser automatically, so he can stop and come back.
- The **สร้างไฟล์คำตอบ** button produces a Markdown file he downloads and sends —
  no backend, nothing transmitted anywhere.
- It explicitly states that it will never ask for passwords, private keys, seed
  phrases or API keys. That matters on a project for a security consultant.

> **Do not link `intake.html` from `index.html`.** It carries `noindex, nofollow`
> but GitHub Pages still serves it publicly at a guessable URL, so treat it as
> unlisted rather than private. It collects nothing sensitive and stores answers
> only in his own browser.

---

## Run it locally

```bash
python serve.py
```

Then open `http://localhost:5500`.

> Use `serve.py`, not `python -m http.server`. The built-in server guesses MIME
> types from the Windows registry, which usually has no `.webp` entry — it then
> serves the portrait as `application/octet-stream` and the browser refuses to
> decode it. GitHub Pages sends the correct type, so this only affects local preview.

> Opening `index.html` directly with `file://` will **not** work properly —
> relative asset paths and the canvas behave differently. Use a server.

---

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

The site appears at `https://USERNAME.github.io/REPO/` within a minute or two.

`.nojekyll` is already included, which matters because Jekyll ignores directories
starting with an underscore and can interfere with asset serving.

**Custom domain:** add a `CNAME` file at the root containing just the domain
(e.g. `ohm.co.th`), then point a `CNAME` DNS record at `USERNAME.github.io`.

---

## What still needs Ohm

Search the code for `TODO(ohm)`.

| # | What | Where | Why it matters |
|---|---|---|---|
| 1 | Confirm the **Hard/Soft Skills** are ones he'd actually claim | `#skills` | Written from his stated direction; `Power BI`, `SOC 2`, `KYC/AML` etc. are plausible for the role but he should own them |
| 2 | Confirm the **3-stage roadmap** matches his real plan | `#roadmap` | Specific certs named (`Security+`, `CISSP Associate`, `CISA`) and a university path — swap for his actual intent |
| 3 | Any other **hackathons, awards or projects** | `#about`, `.creds` | Currently ThEP Hackathon, PSRU Cyber Hackathon, UBI Alpha, BUILD |
| 4 | Read the **AI disclosure** and confirm he's comfortable with it | `#attribution` | The brief *requires* disclosing tool + prompts. It is written honestly and should stay honest |

### Resolved

- ~~Portrait~~ — `Profile.png` received, wired in, 3.93 MB → 28 KB.
- ~~Pricing / booking / free audit~~ — **removed.** This is a career portfolio, not a service site.
- ~~Thai SEC status~~ — **no longer applicable.** The footer now states plainly that this is
  coursework and not a real financial service, which removes the regulatory problem entirely.
- ~~ชั้นเรียนและเลขที่~~ — **filled in.** ม.5/8 เลขที่ 26 in the hero `.namecard`. This was the last
  hard blocker from the assignment brief; there are no more open gaps to satisfy §1.

---

## Things that are deliberate, not bugs

- **The security gauge is labelled `ตัวอย่างรายงาน / Sample audit output`** and scores **72**, not 94, with one visibly weak sub-score. An unlabelled gauge animating to an impressive number would imply a measurement of the visitor that never happened. A flawed sample is also more persuasive than a perfect one.
- **The ticker says `DEMO · ข้อมูลตัวอย่าง`.** Do not remove that label until a licensed data source is wired.
- **The dashboard mock is tagged `ตัวอย่าง`** and has a footnote saying the figures are illustrative.
- **Gold text is `#7A4E12`, not `#D9A14F`.** The brand gold measures 2.09:1 on the light background — unreadable. Gold is a *fill* colour; `--gold-text` is the text colour. Same split for aqua.
- **Cards are white with a shadow, not sand-coloured.** A sand card on a sand band measures 1.09 contrast — invisible. See DESIGN-DOC §5.1a.
- **Every Latin word inside Thai text is wrapped in `<span lang="en">`.** This is required, not decorative — see below.

---

## The one rule that will break the page if ignored

`lang` inherits, and an element has exactly one language. Because the page is
`<html lang="th">`, the selector `:lang(th)` matches **every element** unless
overridden. Any Latin text without `lang="en"` will render with Thai metrics —
line-height 1.8, Thai font, no negative tracking.

```html
<!-- wrong — inherits Thai line-height 1.8 -->
<p>ปรึกษาเรื่อง Options และ Pink Sheets</p>

<!-- right -->
<p>ปรึกษาเรื่อง <span lang="en">Options</span> และ <span lang="en">Pink Sheets</span></p>
```

This is also an accessibility requirement: screen readers pick pronunciation from
`lang`, so an untagged `Pink Sheets` gets read by a Thai voice.

Worth adding a CI check that flags `[A-Za-z]{3,}` inside untagged Thai text.

---

## Accessibility and performance notes

- All text meets **WCAG 2.2 AA**; body text meets AAA. Contrast values are in
  comments in `style.css` and were computed, not estimated.
- `prefers-reduced-motion` stops the canvas entirely, disables the decrypt effect,
  the ticker and all reveals.
- The ambient canvas pauses when scrolled out of view and when the tab is hidden.
- Reveal animations have a sweep safety net, so jump-scrolling to an anchor never
  leaves a section invisible.
- Hero uses `100dvh` so mobile Safari's collapsing toolbar doesn't cause a jump.
- Parallax reads `scrollY` inside the rAF loop, never from a scroll listener.
- Canvas DPR is capped at 2.

Not yet done: Lighthouse pass, real font subsetting (currently loading from Google
Fonts CDN — self-hosting subset WOFF2 files would cut the largest remaining cost).
