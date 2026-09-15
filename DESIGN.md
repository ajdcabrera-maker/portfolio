# DESIGN.md — Portfolio design contract

Single source of truth for visual and component decisions on **aarondesign.rocks**.

If product UI, Paper, and this file disagree, treat it as a **defect**: update tokens / components / this doc in one change set.

---

## Read order

1. **`DESIGN.md`** (this file) — contracts and rules  
2. **`src/styles/tokens.css`** — machine-readable token values  
3. **`src/ds/*`** — reusable primitives  
4. **`/ds`** — live gallery (`src/pages/ds/index.astro`) for visual QA  
5. **`src/components/*`**, **`src/layouts/*`** — site chrome composed from the library  
6. **`src/pages/*`** — page compositions (prefer library primitives; avoid one-off styles)

---

## Product mood

**Terminal / phosphor on canvas** — dark technical portfolio. High-contrast inverse CTAs, muted body copy, emerald only for code/system signals. No purple glow, no cream editorial, no card-heavy dashboards.

---

## Tokens

Defined in `src/styles/tokens.css` via Tailwind v4 `@theme`. Prefer semantic utilities over raw `neutral-*` when editing.

| Role | Token | Utility examples | Hex |
|------|-------|------------------|-----|
| Page background | `canvas` | `bg-canvas` | `#0a0a0a` |
| Elevated surface | `canvas-elevated` | `bg-canvas-elevated` | `#171717` |
| Sticky chrome | `canvas-subtle` | `bg-canvas-subtle` | `#0a0a0acc` |
| Primary text | `ink` | `text-ink` | `#f5f5f5` |
| Secondary / body | `ink-muted` | `text-ink-muted` | `#a3a3a3` |
| Tertiary / meta | `ink-subtle` | `text-ink-subtle` | `#737373` |
| Default border | `line` | `border-line` | `#262626` |
| Hover border | `line-strong` | `border-line-strong` | `#404040` |
| Soft border | `line-soft` | `border-line-soft` | `#262626cc` |
| Code accent | `accent` | `text-accent` | `#6ee7b7` |
| Accent soft | `accent-muted` | `border-accent-muted` | `#34d399cc` |
| CTA fill | `cta` | `bg-cta` | `#f5f5f5` |
| CTA text | `cta-fg` | `text-cta-fg` | `#0a0a0a` |
| Control radius | `control` | `rounded-control` | `0.5rem` |
| Card radius | `card` | `rounded-card` | `1rem` |
| Pill radius | `pill` | `rounded-pill` | `9999px` |
| Content width | `content` | `max-w-content` | `72rem` |
| Grid gap | `grid` | `gap-grid` | `1rem` |
| Media frame height | `media` | `h-media` | `18rem` |
| Media frame height (sm+) | `media-lg` | `sm:h-media-lg` | `20rem` |

### Rules
- **Do not** introduce new hex values in pages. Extend `tokens.css` + this table first.
- Emerald/`accent` is for **code and system signals only**, not decorative washes. Use `.code-inline` for inline code chips.
- Primary actions use **inverse CTA** (`cta` / `cta-fg`), never accent-filled buttons.
- Pages and chrome must use semantic tokens from this file — no raw `neutral-*` / `emerald-*` utilities in `src/`.

---

## Design library (`src/ds/`)

| Primitive | File | Use |
|-----------|------|-----|
| `Container` | `Container.astro` | Page section width + `px-6` |
| `Grid` | `Grid.astro` | 12-column row (`grid-cols-1` → `sm:grid-cols-12`, `gap-grid`) |
| `Col` | `Col.astro` | Column span: `12` full · `6` half · `4` third · `3` quarter |
| `Eyebrow` | `Eyebrow.astro` | Uppercase section/page labels |
| `Button` | `Button.astro` | `primary` / `ghost`; sizes `sm` (default) / `md`; supports `external`, `download` |
| `Pill` | `Pill.astro` | Stack / toolkit tags (`default` \| `quiet`) |
| `MetricBadge` | `MetricBadge.astro` | High-contrast metrics |
| `Surface` | `Surface.astro` | Bordered cards / CTA strips (`interactive` for hover) |
| `Media` | `Media.astro` | Screenshots on `Grid`/`Col`; optional `spans` / `caption`; click-to-enlarge lightbox |

### Site chrome (composed, not duplicated)

| Component | File | Notes |
|-----------|------|-------|
| `SiteHeader` | `src/components/SiteHeader.astro` | Nav + always-visible Book a call; mobile collapse |
| `SiteFooter` | `src/components/SiteFooter.astro` | Links + copyright |
| `SiteLayout` | `src/layouts/SiteLayout.astro` | Header + main slot + footer |
| `BaseLayout` | `src/layouts/BaseLayout.astro` | Document shell + global CSS |

### Site constants
`src/lib/site.ts` — `name`, `calUrl`, `nav`. Do not hardcode Cal.com or nav labels elsewhere.

---

## Typography scale (page patterns)

| Level | Classes (reference) | Usage |
|-------|---------------------|--------|
| Display / page H1 | `text-3xl sm:text-5xl font-semibold tracking-tight text-ink` | Name, page titles |
| Section H2 | `text-2xl sm:text-3xl font-semibold tracking-tight text-ink` | Section titles |
| Card title | `text-lg font-semibold tracking-tight text-ink` | Project / principle cards |
| Lead body | `text-lg sm:text-xl text-ink-muted leading-relaxed` | Role line, hero support, page intros |
| Body | `text-sm text-ink-muted leading-relaxed` | Card descriptions |
| Mono meta | `font-mono text-xs text-ink-subtle` | Order index, dates |

---

## Layout patterns

- **12-column grid:** All multi-column layouts use `Grid` + `Col` — not ad-hoc `grid-cols-2` / `grid-cols-3`.
  - Mobile: single column (`grid-cols-1`).
  - `sm+`: 12 tracks. Spans: **12** full, **6** half, **4** third, **3** quarter (also **6+3+3** feature rows).
  - Gap: `gap-grid` token (owned by `Grid`).
  - Media frames: `h-media` / `sm:h-media-lg`, `object-contain` (no hard crop); optional `caption`; click opens lightbox for full screenshot.
- **Section rhythm:** `border-b border-line` between major bands; vertical padding `py-16`–`py-24` (or `py-20 sm:py-24` on home).
- **Breakpoints:** mobile-first; collapse nav below `md`; 12-col activates at `sm`.
- **Case studies:** prose via `.case-study-prose` in `global.css`; screenshots via `Media` (built on `Grid`/`Col`).

---

## Page inventory

| Route | File | Library expectations |
|-------|------|----------------------|
| `/ds` | `src/pages/ds/index.astro` | Token + primitive gallery (not in primary nav) |
| `/` | `src/pages/index.astro` | Hero: avatar + name H1 → lead body (role + support with `.code-inline`); Now meta; project cards + metrics |
| `/projects` | `src/pages/projects/index.astro` | Surface cards + MetricBadge + Pill |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` | Case-study chrome + `.case-study-prose` + optional `Media` |
| `/about` | `src/pages/about.astro` | Principles + toolkit pills + CTA strip |
| `/resume` | `src/pages/resume.astro` | Timeline + download CTA |

---

## Paper.design sync protocol

When exploring visuals in Paper before coding:

1. Match **mood + tokens** from this file (dark canvas, inverse CTA, accent only on code).
2. Prefer **main desktop artboard** for exploration; responsive behavior is owned in Tailwind, not multi-frame Paper.
3. After Paper edits, pull values with Paper MCP (`get_computed_styles` / `get_jsx`) — never guess from screenshots alone.
4. Land changes in **`tokens.css` and/or `src/ds`**, then pages. Update this file if roles change.
5. One atomic commit when tokens, components, and docs drift together.

---

## Defect rule

If `DESIGN.md`, `tokens.css`, `src/ds`, and a page disagree:

1. Decide the intended contract  
2. Fix tokens and/or primitives  
3. Update this document  
4. Align the page  

Do not leave silent one-off hex or radius values in pages.
