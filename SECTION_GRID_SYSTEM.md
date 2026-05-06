# Section Grid System — Line-to-Line Connection Guide

A reference for every developer working on this codebase. Every page section
MUST follow this pattern to maintain the continuous vertical-line + corner-icon
grid that connects sections visually from top to bottom of the page.

---

## 1. Visual Concept

```
┌─ + ─────────────────────────────── + ─┐  ← FullWidthDivider (top)
│  │                                 │  │  ← vertical border lines
│  │        Section Content          │  │
│  │                                 │  │
└─ + ─────────────────────────────── + ─┘  ← FullWidthDivider (bottom)
┌─ + ─────────────────────────────── + ─┐  ← next section TOP (shared boundary)
│  │                                 │  │
```

The `+` icons are `DecorIcon` components. They sit exactly on the intersection
of a vertical line and a horizontal FullWidthDivider. Adjacent sections share
the boundary — bottom of section A = top of section B. They overlap perfectly.

---

## 2. Required Building Blocks

| Component | Package | Role |
|---|---|---|
| `DecorIcon` | `@workspace/ui/components/decor-icon` | `+` corner markers |
| `FullWidthDivider` | `@workspace/ui/components/full-width-divider` | Full-bleed 1px horizontal lines |
| Tailwind `bg-border` | globals.css CSS var | Vertical 1px line color |

---

## 3. The Canonical Section Template

Every section on the page MUST use this exact shell. Copy-paste it:

```tsx
<section className="relative">
  <div className="relative mx-auto w-full max-w-[760px]">

    {/* ── VERTICAL LINES (do not remove) ── */}
    <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-y-0 left-0 w-px bg-border" />
      <div className="absolute inset-y-0 right-0 w-px bg-border" />
    </div>

    {/* ── TOP BOUNDARY ── */}
    <FullWidthDivider className="-top-px" />

    {/* ── YOUR SECTION CONTENT GOES HERE ── */}

    {/* ── BOTTOM BOUNDARY ── */}
    <FullWidthDivider className="-bottom-px" />

  </div>

  {/* ── CORNER ICONS (must stay at section level, outside inner div) ── */}
  <DecorIcon className="size-4 z-10" position="top-left" />
  <DecorIcon className="size-4 z-10" position="top-right" />
  <DecorIcon className="size-4 z-10" position="bottom-left" />
  <DecorIcon className="size-4 z-10" position="bottom-right" />
</section>
```

---

## 4. Rule — Never Add `overflow-hidden` to `<section>`

The `DecorIcon` components translate **outside** the section boundary:

```
top-left  → -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]
top-right → +translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]
```

Adding `overflow-hidden` to `<section>` clips anything that escapes its bounds,
making the `+` icons invisible. NEVER do this:

```tsx
// ❌ WRONG — clips the corner icons
<section className="relative overflow-hidden">

// ✅ CORRECT
<section className="relative">
```

If you need to clip an internal element (e.g. a glow/blur effect), apply
`overflow-hidden` only to THAT inner wrapper, not the `<section>`.

---

## 5. Rule — DecorIcons Must Be at `<section>` Level

The `<section>` is the `position: relative` ancestor for `DecorIcon`.
Placing them inside the `max-w-[760px]` inner div would re-parent them and
break the alignment. Always keep them OUTSIDE the inner content div:

```tsx
// ❌ WRONG — icons would be clipped or misaligned
<div className="relative mx-auto w-full max-w-[760px]">
  <DecorIcon position="top-left" />
</div>

// ✅ CORRECT — direct children of <section>
<section className="relative">
  <div className="relative mx-auto w-full max-w-[760px]"> ... </div>
  <DecorIcon position="top-left" />
</section>
```

---

## 6. Rule — The Body Must Use `overflow-x-clip`

The right-side `DecorIcon`s translate beyond the viewport edge, causing a
horizontal scrollbar if not clipped. The `<body>` in `layout.tsx` uses:

```tsx
<body className="bg-black w-full min-h-screen overflow-x-clip">
```

Use `overflow-x-clip` NOT `overflow-x-hidden`. The difference is critical:

| Property | Creates scroll container | Breaks `position: sticky` |
|---|---|---|
| `overflow-x: hidden` | ✅ Yes | ✅ Yes — sticky header breaks |
| `overflow-x: clip` | ❌ No | ❌ No — sticky header works |

Never change this to `overflow-hidden` or `overflow-x-hidden`.

---

## 7. Rule — FullWidthDivider Placement

`FullWidthDivider` renders a `w-screen` (full viewport width) 1px line. It
must be placed inside the `relative max-w-[760px]` div using negative offsets:

```tsx
<FullWidthDivider className="-top-px" />   {/* top boundary */}
<FullWidthDivider className="-bottom-px" /> {/* bottom boundary */}
```

The `-top-px` / `-bottom-px` positions the line flush with the div edge.
Never use `top-0` or `bottom-0` — that shifts it 1px inside the boundary.

---

## 8. Internal Sub-Dividers (Optional)

Some sections have content splits (e.g., heading above a grid). You can add
inner dividers to create intermediate intersections inside the same section:

```tsx
<div className="relative">
  <FullWidthDivider className="-top-px" />   {/* inner top */}
  {/* sub-content */}
  <FullWidthDivider className="-bottom-px" /> {/* inner bottom */}
</div>
```

These DO NOT need their own `DecorIcon` — the outer section's corner icons
already cover the true section boundaries.

---

## 9. Optional Inner Subtle Lines

For visual depth, you can add `opacity-30` inner lines at `left-8`/`right-8`:

```tsx
<div className="absolute inset-y-0 left-8  w-px bg-border/30" />
<div className="absolute inset-y-0 right-8 w-px bg-border/30" />
```

These are cosmetic only. They are already used in `HeroSection` and
`FeatureSection`. Do not add them if the section has full-width content
that would be visually obstructed.

---

## 10. Checklist for Every New Section

Before shipping a new section, verify all 7 points:

- [ ] `<section>` has `className="relative"` (NOT `overflow-hidden`)
- [ ] Inner `<div>` has `className="relative mx-auto w-full max-w-[760px]"`
- [ ] Vertical lines block (`left-0` + `right-0` divs) is inside the inner div
- [ ] `<FullWidthDivider className="-top-px" />` is inside the inner div
- [ ] `<FullWidthDivider className="-bottom-px" />` is inside the inner div
- [ ] All 4 `<DecorIcon>` components are direct children of `<section>`
- [ ] Body in `layout.tsx` still has `overflow-x-clip` (do not change it)
