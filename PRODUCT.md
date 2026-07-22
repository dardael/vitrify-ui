# Product

## Register

brand

## Platform

web

## Users

French freelance web developers building client vitrine sites. They work alone or in small operations, delivering sites for local businesses — artisans, restaurants, PME, and creative professionals. Their goal is speed without sacrificing quality: every site they ship reflects on their own reputation. They need components that look non-generic out of the box and are theme-overridable per client, so they don't rebuild from scratch each time.

## Product Purpose

Vitrify is an Astro component library and template collection for vitrine sites — the kind of sites French freelancers build dozens of times a year. It ships CSS-token-based components that look designed by default, are instantly theme-overridable, and require zero runtime JavaScript. Success means a freelancer can scaffold a new client site in hours, not days, and hand over something they're proud of.

## Positioning

The Astro kit that makes vitrine sites look designed, not templated — theming baked in, generic look baked out.

## Conversion & proof

- Primary CTA: browse the component showcase — see before you install
- Secondary CTA: `npm install vitrify-ui` — once convinced by the showcase
- The line a visitor remembers after 10 seconds: "Composants Astro pour sites vitrines — beaux par défaut, thématisables par nature"
- Belief ladder:
  1. These components look genuinely designed, not Bootstrap defaults
  2. They drop into any Astro project with one import
  3. I can adapt the theme per client without touching component internals
  4. The project follows real production standards (mobile-first, SEO, WCAG AAA)
- Proof on hand: none yet — the showcase itself is the opening argument

## Brand Personality

Élégant, précis, pratique. Confident without declaration. The voice of a French craftsman who shows quality through the work itself, never through marketing puffery. No SaaS excess, no generic-template energy — just well-made tools that make the client look good and the freelancer look competent.

## Anti-references

- Generic Bootstrap templates — blue by default, zero identity, interchangeable
- WordPress-era design — beveled buttons, Comic Sans energy, stock imagery of handshakes
- SaaS over-design — glassmorphism, gradient violet-pink heroes, stat cards with big numbers
- AI slop defaults — cream/beige body background, uppercase tracked eyebrow on every section, identical card grids

## Design Principles

1. **Show, don't declare** — the showcase IS the argument; no marketing copy about "beautiful" or "modern", only working examples
2. **Beaux par défaut** — every component must look designed in its default state, before any theme override
3. **Thème d'abord** — all visual decisions live in `--vf-*` tokens; never hard-code a value a client might want to change
4. **Mobile-first, SEO-native** — semantic HTML and responsive-by-default are non-negotiable constraints, not a checklist item
5. **Pratique avant tout** — elegance serves the freelancer's workflow; complexity that doesn't earn its place is cut

## Accessibility & Inclusion

WCAG AAA target for all shipped components. Touch targets ≥ 44×44px. Full keyboard navigation. Reduced-motion support (`prefers-reduced-motion`) on all animations. French-market primary focus; component text content in French by default, with `lang` attribute support for multilingual consuming sites.
