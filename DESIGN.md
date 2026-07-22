# Design

## Color strategy

**Committed** — crimson as the primary brand voice on a pure white canvas. The saturated red carries 30–50% of visual weight in the showcase. The white canvas keeps it sharp and precise, not heavy. Inspired by: the stamp of a Parisian master craftsman — vermillion ink on white paper, graphite pencil for precision.

This differentiates immediately from: Bootstrap blue, SaaS violet, WordPress pastels, AI cream/beige.

## Palette

All colors in OKLCH. Never hardcode hex in components — always reference `--vf-*` tokens.

```css
/* Primary — deep crimson, the brand signature */
--vf-color-primary:            oklch(0.57 0.195 26);
--vf-color-primary-hover:      oklch(0.50 0.190 26);
--vf-color-primary-foreground: oklch(1.000 0.000 0);   /* white */

/* Secondary — warm graphite, restrained professional */
--vf-color-secondary:            oklch(0.40 0.015 26);
--vf-color-secondary-hover:      oklch(0.32 0.015 26);
--vf-color-secondary-foreground: oklch(1.000 0.000 0);

/* Accent — warm amber-gold, used sparingly */
--vf-color-accent:            oklch(0.82 0.135 74);
--vf-color-accent-hover:      oklch(0.76 0.145 74);
--vf-color-accent-foreground: oklch(0.20 0.040 74);    /* dark amber */

/* Canvas */
--vf-color-background: oklch(1.000 0.000 0);           /* pure white */
--vf-color-surface:    oklch(0.975 0.006 26);          /* near-white, barely warm */
--vf-color-border:     oklch(0.880 0.007 26);

/* Text — WCAG AAA on white */
--vf-color-text:        oklch(0.20 0.018 26);          /* ~14:1 contrast */
--vf-color-text-muted:  oklch(0.40 0.010 26);          /* ~7.5:1, AAA ✓ */
--vf-color-text-subtle: oklch(0.58 0.006 26);          /* decorative only */

/* Semantic */
--vf-color-success: oklch(0.52 0.165 145);
--vf-color-warning: oklch(0.65 0.160 74);
--vf-color-danger:  oklch(0.52 0.200 26);
--vf-color-info:    oklch(0.52 0.180 255);
```

**Text on fills rule:** any element where text sits on a primary/accent fill → use white foreground. The Helmholtz-Kohlrausch effect makes saturated fills appear brighter than their luminance; dark text reads muddy on crimson. White only.

## Typography

**Family:** Bricolage Grotesque (Google Fonts, variable `wght` + `wdth` axes)

One family, one import, two expressive registers through axis variation:
- **Display/heading:** `font-variation-settings: "wdth" 75` (condensed) at heavy weight — strong, confident, efficient
- **Body:** normal width (`"wdth" 100`) at regular/medium weight — clean, legible, professional

Why Bricolage Grotesque: it has a quiet quirk at display sizes (the `g`, the `a`) that reads as designed-not-generated, while remaining completely legible at body sizes. Not on the reflex-reject list. The variable condensed axis gives dramatic heading contrast without a font switch.

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&display=swap');

--vf-font-sans:    'Bricolage Grotesque', system-ui, sans-serif;
--vf-font-display: 'Bricolage Grotesque', system-ui, sans-serif;  /* condensed via variation */
--vf-font-mono:    ui-monospace, 'Courier New', monospace;

/* Display heading variation settings */
--vf-font-display-settings: "wdth" 80, "wght" 700;

/* Fluid scale — clamp(min, preferred, max) */
--vf-font-size-display: clamp(2.5rem, 5vw, 4.5rem);   /* hero h1 */
--vf-font-size-heading: clamp(1.75rem, 3vw, 2.5rem);  /* section h2 */
--vf-font-size-subhead: clamp(1.25rem, 2vw, 1.5rem);  /* h3 */
--vf-font-size-body:    1rem;
--vf-font-size-sm:      0.875rem;
--vf-font-size-xs:      0.75rem;
```

**Scale ratio:** 1.333 (perfect fourth). Flat scales (1.1×) are banned — they read as uncommitted.

**Line length:** cap at 65–75ch for body text. `max-width: 68ch` on prose containers.

**Heading intent:** `text-wrap: balance` on h1–h3. `text-wrap: pretty` on prose.

## Spacing

Mobile-first, fluid where appropriate. Based on 4px base unit (0.25rem).

```css
--vf-spacing-1:  0.25rem;   /*  4px */
--vf-spacing-2:  0.5rem;    /*  8px */
--vf-spacing-3:  0.75rem;   /* 12px */
--vf-spacing-4:  1rem;      /* 16px */
--vf-spacing-6:  1.5rem;    /* 24px */
--vf-spacing-8:  2rem;      /* 32px */
--vf-spacing-12: 3rem;      /* 48px */
--vf-spacing-16: 4rem;      /* 64px */
--vf-spacing-20: 5rem;      /* 80px */
--vf-spacing-24: 6rem;      /* 96px */

/* Section vertical rhythm — fluid */
--vf-section-padding: clamp(3rem, 8vw, 6rem);

/* Container */
--vf-container:      min(100% - 2rem, 1280px);
--vf-container-text: min(100% - 2rem, 768px);
```

Vary spacing for rhythm. Generous separations between sections, tight groupings within components.

## Border radius

```css
--vf-radius-none: 0;
--vf-radius-sm:   4px;
--vf-radius-md:   8px;
--vf-radius-lg:   12px;
--vf-radius-xl:   16px;
--vf-radius-full: 9999px;
```

Default: `--vf-radius-md` (8px). Never round single-sided borders.

## Shadows

Subtle, functional. No decorative shadows.

```css
--vf-shadow-sm: 0 1px 2px 0 oklch(0.20 0.018 26 / 0.06);
--vf-shadow-md: 0 4px 12px -2px oklch(0.20 0.018 26 / 0.10);
--vf-shadow-lg: 0 8px 24px -4px oklch(0.20 0.018 26 / 0.12);
```

## Motion

Intentional, not decorative. Every section entrance is different; no uniform scroll-fade reflex.

```css
--vf-duration-fast:   150ms;
--vf-duration-base:   220ms;
--vf-duration-slow:   380ms;
--vf-ease-out:        cubic-bezier(0.16, 1, 0.3, 1);   /* expo-out */
--vf-ease-snap:       cubic-bezier(0.34, 1.56, 0.64, 1); /* subtle spring */
```

All animations: wrap in `@media (prefers-reduced-motion: no-preference)`. Default state must be visible without JS or animation class triggers — transitions enhance, never gate content.

## Component conventions

- **HTML-first:** every component is a `.astro` file. No framework components unless interaction explicitly requires it.
- **Zero JS by default:** use `client:*` directives only for genuine interactivity (hamburger menu, accordions). Static content → no JS.
- **Slot pattern:** use `<slot name="visual">` and `<slot name="cta">` over prop-driven sub-components. Props for data (strings, booleans); slots for HTML structure.
- **`as` prop for semantic headings:** all title components accept `as?: 'h1' | 'h2' | 'h3'` to preserve heading hierarchy across reuse contexts.
- **Touch targets:** all interactive elements ≥ 44×44px. No hover-only affordances.
- **Images:** `alt` required as a prop (never empty by default except explicit `isDecorative` flag). `loading="lazy"` default, `loading="eager"` for above-the-fold.

## Showcase conventions

The showcase is the brand face of Vitrify and must itself follow these design principles — it's the primary sales argument.

- Each component page shows the component at all variants across at least 375px and 1280px viewports
- Dark sections and light sections alternate to show theming flexibility
- No lorem ipsum — use realistic French vitrine site copy ("Plombier à Lyon", "Restaurant traditionnel alsacien")
- The index page is generated, not hand-maintained
