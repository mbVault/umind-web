# U Mind Website — Look & Feel

Source: **U-Mind-Website-Spec.pdf** (Oct 19, 2026 · @Tamanna), Section 3 + related UI rules from Sections 4–5.

**Tech stack (this repo):** Next.js · Tailwind CSS · TypeScript

This file is the single reference for visual tokens when building the marketing website in `umind-web`. Prefer these **website** hex/fonts over the mobile/admin app tokens unless founders decide to unify (see Open decision below).

---

## Brand direction

Warm dawn: cream page background, confident indigo actions, sunrise amber accents, soft serif headlines. The site should feel **safe, calm, human** — not clinical, not generic wellness purple-on-white.

Illustrations: **inline SVG only** (no stock photos). Phone mocks use app colours/fonts for decorative previews.

---

## Open decision (before / during build)

| Option | Fonts | Colours |
|--------|--------|---------|
| **A — Website as designed (default for this doc)** | Lora + Poppins | Website hex column below |
| B — Align to apps | Fraunces + Manrope | App hex column |

Spec asks to decide so the brand is one system. Until then, implement **Option A**.

---

## Colour tokens

### Core palette

| Token | Website hex | App hex (reference) | Used for |
|-------|-------------|---------------------|----------|
| `primary` | `#5B45DE` | `#5B45E0` | Primary buttons, links, active chips |
| `primary-hover` | `#4A35C8` | `#4331B8` | Hover / pressed |
| `primary-tint` | `#ECE8FF` | `#ECE8FF` | Selected tabs, soft panels |
| `ink` | `#1E1A3A` | `#1F1B3A` | Main text |
| `ink-muted` | `#5E5873` | `#5F5A73` | Body copy, captions |
| `ink-soft` | `#4F4966` | — | Secondary body |
| `background` | `#FFF7F0` | `#FFF8F0` | Page background |
| `surface` | `#FFFFFF` | `#FFFFFF` | Cards |
| `border` | `#F1E6DC` | `#EDE3DA` | Card borders |
| `border-strong` | `#E6DAD0` | `#EDE3DA` | Button / heavier borders |
| `sun` | `#FFB938` | `#FFB938` | Yellow buttons, badges |
| `sun-hover` | `#F5AA20` | — | Yellow button hover |
| `sun-tint` | `#FFEBC8` | `#FFEFD0` | Soft yellow panels |
| `coral` | `#FF6B57` | `#FF6B57` | Highlights, psychologist tiles |
| `coral-tint` | `#FDDDD6` | `#FFE1DB` | Soft coral panels |
| `coral-ink` | `#C0391F` | `#B83A24` | Psychologists tab, crisis text |
| `coral-ink-strong` | `#A8321A` | — | Stronger coral text |
| `mint` | `#3DD0A0` | `#3CCFA0` | Calm, diary tab |
| `mint-tint` | `#D8F5EA` | `#D9F5EA` | Soft mint panels |
| `mint-ink` | `#0E8A62` | `#0B6B4B` | Text on mint |
| `night` | `#2A1F68` | `#2A1F6B` | Listen tab, sleep artwork, dark CTAs |
| `sky-tint` | `#DCEBFF` | `#DDEEFF` | “For him”, 45–60 stage |
| `sky-ink` | `#1C74C9` | `#1971C2` | Sky text / accents |
| `rose-tint` | `#FFE4EC` | — | “For her”, Her Health |
| `rose-ink` | `#D6336C` | — | Her Health ticks / accents |

### Mood scale (site)

| Mood | Hex |
|------|-----|
| Heavy | `#5B5F99` |
| Low | `#8FB8F5` |
| Okay | `#B4A8FF` |
| Calm | `#3DD0A0` |
| Bright | `#FFB938` |

### Life-stage accents (site selectors)

| Stage | Border / accent |
|-------|-----------------|
| 12–19 Growing up | `#D63A1E` |
| 20–30 Starting out | `#5B45DE` |
| 30–45 Building | `#0E8A62` |
| 45–60 Shifting | `#1C74C9` |
| 60+ Wisdom years | `#A06A00` |

### Weather tip card tints (Make it yours)

| Condition | Hex |
|-----------|-----|
| Sunny | `#FFF3D6` |
| Pleasant | `#E3F6EE` |
| Cloudy | `#EAF0F7` |
| Rain | `#E1EEFB` |
| Hazy | `#F1ECE0` |

### Her Health mocks

| Use | Hex |
|-----|-----|
| Period | `#FF6B57` |
| Follicular | `#7FE0BC` |
| Ovulation | `#FFB938` |
| Luteal | `#B4A8FF` |
| PMS | theme colour |
| Hot-flush bars | `#FFC2B3` / `#FF8A70` / `#D9480F` |
| Symptom chips | `#FFC9D6` |

### Feature-tour tab soft panels

| Tab | Soft panel |
|-----|------------|
| Saathi AI | `#ECE8FF` |
| Listen | `#E3DEFF` |
| Diary & mood | `#D8F5EA` |
| Psychologists | `#FDE3DC` |

Tab kicker colours: `#5B45DE` · `#2A1F68` · `#0E8A62` · `#C0391F`

---

## Visitor colour themes (“Make it yours”)

Picking a theme **recolours buttons, chips, and accents across the whole page live**.

| Theme | Primary | Hover | Soft | Night |
|-------|---------|-------|------|-------|
| Lavender (default) | `#5B45DE` | `#4A35C8` | `#ECE8FF` | `#2A1F68` |
| Ocean | `#1C6DD0` | `#1557A8` | `#E1EEFF` | `#0F2A4F` |
| Forest | `#0E7C5A` | `#0A6247` | `#DDF3EA` | `#0F3B2E` |
| Sunset | `#C2410C` | `#9A3412` | `#FFE6D9` | `#4A1E12` |
| Rose | `#C2255C` | `#A21C4B` | `#FFE3EC` | `#4A1330` |

Selected theme swatch: ring `#1E1A3A`.

**Implementation tip (Tailwind):** drive themes via CSS variables on `:root` / `[data-theme="ocean"]`, and map Tailwind colors to those vars so one class set works for all themes.

---

## Typography

### Fonts

| Role | Family | Weights | Fallback |
|------|--------|---------|----------|
| Headlines | **Lora** (serif) | 500–700 | `Georgia, serif` |
| Everything else | **Poppins** (sans) | 400–700 | `system-ui, sans-serif` |

Load with `display=swap` only (no unused weights). In Next.js prefer `next/font/google` for Lora + Poppins.

### Type scale

| Style | Font | Desktop | Mobile (≤960px) | Weight | Where |
|-------|------|---------|-----------------|--------|-------|
| H1 | Lora | 72 / 1.02, −0.01em | 44 | 600 | Hero headline |
| H2 | Lora | 46 / 1.1 | 34 | 600 | Section titles |
| H3 | Lora or Poppins | 20–24 | 19–20 | 600 | Card titles |
| Kicker | Poppins | 13, uppercase, 0.1em | 13 | 700 | Section labels (theme colour) |
| Lead | Poppins | 17–18 / 1.6 | 16–17 | 400 | Section intros |
| Body | Poppins | 14–15.5 / 1.6 | 14 | 400–500 | Card copy |
| Nav link | Poppins | 14.5 | hidden (menu) | 500 | Header |
| Button | Poppins | 16 | 16 | 600 | All buttons |
| Caption | Poppins | 11–13 | 11–12 | 500–600 | Meta, notes |

Notable one-offs from section specs:

- Cycle day number: Lora **52**
- Final CTA headline: Lora **46–52**
- Pricing plan price: Lora **36–48**
- Stage detail title: Lora **30**
- Feature tour title: Lora **30–36**
- Unique feature card title: Lora **18–20** / 600

---

## Layout & components

| Item | Value |
|------|--------|
| Content width | max **1200px** |
| Side padding | **32** desktop · **20** mobile |
| Section padding | **110** top/bottom · **72** mobile |
| Grids | 2 / 3 / 4 / 5 cols, gap **24**; at 960px → 1 col (5-col → **2**) |
| Breakpoint | **960px** (single primary breakpoint) |
| Test widths | 360, 390, 768, 1024, 1440 |
| Buttons | **54** high, pill, padding `0 28` |
| Primary button | fill `primary` |
| Secondary button | white + 1.5px `border-strong` (`#E6DAD0`) |
| Yellow / sun button | `#FFB938` (hover `#F5AA20`) |
| Cards | white, radius **20–28**, 1px `#F1E6DC` |
| Header | sticky, `rgba(255,247,240,.92)` + blur, bottom border `#F1E6DC` |
| Focus ring | **3px `#FFB938`**, **3px offset**, every link & button |
| Scrolling | smooth scroll to anchors |
| Crisis strip | coral tint, text `#C0391F` — always visible |
| Final CTA block | theme **night** colour, white text |

### Button variants (summary)

1. **Primary** — indigo theme primary / white text  
2. **Secondary** — white / dark ink / 1.5px border  
3. **Sun** — `#FFB938` (used on partner night cards, accents)

---

## Suggested Tailwind + CSS variables

Map tokens once in `globals.css` (or Tailwind v4 `@theme`) so components stay theme-aware:

```css
:root,
[data-theme="lavender"] {
  --color-primary: #5b45de;
  --color-primary-hover: #4a35c8;
  --color-primary-tint: #ece8ff;
  --color-ink: #1e1a3a;
  --color-ink-muted: #5e5873;
  --color-ink-soft: #4f4966;
  --color-background: #fff7f0;
  --color-surface: #ffffff;
  --color-border: #f1e6dc;
  --color-border-strong: #e6dad0;
  --color-sun: #ffb938;
  --color-sun-hover: #f5aa20;
  --color-sun-tint: #ffebc8;
  --color-coral: #ff6b57;
  --color-coral-tint: #fdddd6;
  --color-coral-ink: #c0391f;
  --color-mint: #3dd0a0;
  --color-mint-tint: #d8f5ea;
  --color-mint-ink: #0e8a62;
  --color-night: #2a1f68;
  --color-sky-tint: #dcebff;
  --color-sky-ink: #1c74c9;
  --color-rose-tint: #ffe4ec;
  --color-rose-ink: #d6336c;
  --font-serif: var(--font-lora), Georgia, serif;
  --font-sans: var(--font-poppins), system-ui, sans-serif;
}

[data-theme="ocean"] {
  --color-primary: #1c6dd0;
  --color-primary-hover: #1557a8;
  --color-primary-tint: #e1eeff;
  --color-night: #0f2a4f;
}

[data-theme="forest"] {
  --color-primary: #0e7c5a;
  --color-primary-hover: #0a6247;
  --color-primary-tint: #ddf3ea;
  --color-night: #0f3b2e;
}

[data-theme="sunset"] {
  --color-primary: #c2410c;
  --color-primary-hover: #9a3412;
  --color-primary-tint: #ffe6d9;
  --color-night: #4a1e12;
}

[data-theme="rose"] {
  --color-primary: #c2255c;
  --color-primary-hover: #a21c4b;
  --color-primary-tint: #ffe3ec;
  --color-night: #4a1330;
}
```

Use `font-serif` → Lora for H1/H2/display; `font-sans` → Poppins for UI.

---

## Accessibility & performance (visual)

- Text contrast **4.5:1** minimum (including captions on tinted panels)
- Visible focus ring on all interactive controls
- Keyboard: tabs, toggles, FAQ accordion
- Fonts: Lora 500–700 + Poppins 400–700 only, `display=swap`
- Page budget: under **2 MB**; SVG illustrations
- Phone mocks scale down but stay readable; crisis strip + primary CTA stay visible on mobile

---

## Copy / UI fixes that affect look & feel

- Change every **“30-minute”** session mention to **40 minutes** (Only on U Mind, psychologists block, sample profiles)
- Sample profiles, weather, HR dashboard: label **“for illustration”**
- Footer AI disclaimer always present (not decorative)

---

## Stack notes for this repo

| Layer | Choice |
|-------|--------|
| Framework | **Next.js** (App Router recommended) |
| Styling | **Tailwind CSS** + CSS variables above |
| Language | **TypeScript** |
| Fonts | `next/font/google` → Lora, Poppins |
| Theming | `data-theme` on `<html>` or layout wrapper |

Marketing site is mostly static / client interactivity (theme switcher, FAQ, tabs). Admin panel (ops console) is a **separate** product surface with its own shell tokens (night sidebar `#2A1F6B`, Fraunces + Manrope) — do not mix admin chrome into this landing look.

---

## Quick token cheat sheet

```
background  #FFF7F0
surface     #FFFFFF
ink         #1E1A3A
ink-muted   #5E5873
primary     #5B45DE
sun         #FFB938
coral       #FF6B57
mint        #3DD0A0
night       #2A1F68
serif       Lora 600
sans        Poppins 400–700
radius      20–28
button h    54 pill
breakpoint  960px
```
