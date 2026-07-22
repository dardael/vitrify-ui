# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vitrify** — Astro-based UI component library + template collection, distributed as an npm package. Targets "sites vitrines" (showcase/landing sites). Includes a built-in Storybook-like dev app for visual component browsing.

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server at localhost:4321
astro dev --background   # Start dev server in background
astro dev stop           # Stop background server
npm run build            # Build to ./dist/
npm run preview          # Preview built output
npm run astro -- --help  # Astro CLI help
```

## Architecture

### Dual-mode project

This repo serves two purposes at once:

1. **npm package** — exports Astro components, layouts, and CSS/JS theme primitives consumed by other projects
2. **Showcase app** — Astro site (not exported) that renders all components in isolation, acts as local Storybook

The `package.json` `exports` field controls what consumers see. Showcase pages live outside the exported surface.

### Directory structure (intended)

```
src/
  components/      # Exported Astro components (buttons, cards, nav, hero…)
  templates/       # Full page-section templates composed from components
  theme/           # Theme system: CSS custom properties, tokens, presets
  showcase/        # Dev-only pages — one per component/template, NOT exported
  index.ts         # Package entry point — re-exports everything public
public/            # Static assets for the showcase app
dist/              # Build output (gitignored)
```

### Theming system

Theming works via CSS custom properties defined in `src/theme/`. Each consuming site overrides tokens at the `:root` level. Vitrify ships:
- **Token definitions** — base variables (colors, spacing, radii, font stacks)
- **Presets** — ready-made theme objects a site can import and apply
- **No runtime JS required** — pure CSS cascade; framework-agnostic

Component props can accept inline theme overrides for one-off customization.

### Package exports

The `package.json` must use `"type": "module"` and conditional exports:
```json
{
  "exports": {
    ".": "./dist/index.js",
    "./components/*": "./dist/components/*",
    "./templates/*": "./dist/templates/*",
    "./theme": "./dist/theme/index.js"
  }
}
```

Consumers install vitrify, import components, and inject a theme CSS file (or override tokens themselves).

### Showcase app conventions

- One `.astro` page per component in `src/showcase/components/[name].astro`
- One `.astro` page per template in `src/showcase/templates/[name].astro`
- Index page auto-lists all showcase entries — generated, not hand-maintained
- No external showcase dependency (no Storybook) — just Astro pages

## Key constraints

- **Astro-first** — components are `.astro` files; React/Vue/Svelte integrations are opt-in additions later
- **Zero JS by default** — components ship no client JS unless explicitly needed; use Astro's `client:*` directives only when interaction requires it
- **CSS custom properties for theming** — no CSS-in-JS, no Tailwind hard-coded values in components (Tailwind may be used in consuming sites but components must be theme-token-based)
- **Peer deps only** — `astro` must move to `peerDependencies`, not `dependencies`

## Theming guide (for component authors)

Use tokens, never hard-coded values:
```css
/* Good */
color: var(--vf-color-primary);
border-radius: var(--vf-radius-md);

/* Bad */
color: #3b82f6;
border-radius: 6px;
```

Token namespace prefix: `--vf-` (vitrify).
