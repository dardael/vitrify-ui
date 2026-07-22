# Vitrify

Bibliothèque de composants et templates Astro pour sites vitrines. Distribuée en package npm, avec une showcase intégrée pour visualiser les composants.

## Démarrage rapide

```sh
npm install
npm run dev
# → http://localhost:4321
```

La showcase liste automatiquement tous les composants et templates disponibles.

## Structure

```
src/
├── components/        # Composants exportés (Button, Card, Nav…)
├── templates/         # Templates de sections (Hero, Footer…)
├── theme/
│   └── tokens.css     # Variables CSS --vf-* (couleurs, typo, spacing…)
├── pages/             # Showcase uniquement — non exporté
│   ├── index.astro    # Index auto-généré
│   ├── components/    # Une page par composant
│   └── templates/     # Une page par template
└── index.ts           # Point d'entrée du package
```

## Ajouter un composant

### 1. Créer le composant

```astro
<!-- src/components/Button.astro -->
---
interface Props {
  variant?: 'primary' | 'secondary';
  href?: string;
}
const { variant = 'primary', href } = Astro.props;
const Tag = href ? 'a' : 'button';
---

<Tag class:list={['btn', `btn--${variant}`]} href={href}>
  <slot />
</Tag>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    padding: var(--vf-spacing-3) var(--vf-spacing-6);
    border-radius: var(--vf-radius-md);
    font-family: var(--vf-font-sans);
    font-weight: var(--vf-font-weight-semibold);
    font-size: var(--vf-font-size-base);
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background var(--vf-transition-fast);
  }
  .btn--primary {
    background: var(--vf-color-primary);
    color: var(--vf-color-primary-foreground);
  }
  .btn--primary:hover { background: var(--vf-color-primary-hover); }
  .btn--secondary {
    background: var(--vf-color-secondary);
    color: var(--vf-color-secondary-foreground);
  }
  .btn--secondary:hover { background: var(--vf-color-secondary-hover); }
</style>
```

### 2. L'exporter dans `src/index.ts`

```ts
export { default as Button } from './components/Button.astro';
```

### 3. Créer sa page showcase

```astro
<!-- src/pages/components/Button.astro -->
---
import '../../theme/tokens.css';
import Button from '../../components/Button.astro';
---
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Showcase — Button</title>
  </head>
  <body style="padding: 2rem; font-family: system-ui">
    <h1>Button</h1>

    <h2>Primary</h2>
    <Button>Envoyer</Button>
    <Button href="#">Lien</Button>

    <h2>Secondary</h2>
    <Button variant="secondary">Annuler</Button>
  </body>
</html>
```

La page apparaît automatiquement dans la showcase à `http://localhost:4321`.

## Thème

Tous les composants utilisent des variables CSS préfixées `--vf-*`. Voir `src/theme/tokens.css` pour la liste complète.

Un projet consommateur surcharge les tokens à la racine de son CSS :

```css
/* mon-site/src/styles/theme.css */
@import 'vitrify/theme';   /* valeurs par défaut */

:root {
  --vf-color-primary:       #7c3aed;
  --vf-color-primary-hover: #6d28d9;
  --vf-font-sans:           'Poppins', sans-serif;
  --vf-radius-md:           12px;
}
```

## Utiliser Vitrify dans un autre projet

```sh
npm install vitrify
```

```astro
---
// src/pages/index.astro
import 'vitrify/theme';
import { Button, HeroSection } from 'vitrify';
---
<Button>Contactez-nous</Button>
```

## Commandes

| Commande              | Action                                   |
| :-------------------- | :--------------------------------------- |
| `npm run dev`         | Showcase sur `localhost:4321`            |
| `npm run build`       | Build de la showcase vers `./dist/`      |
| `npm run preview`     | Prévisualiser le build                   |
| `npm run astro check` | Vérification TypeScript des composants   |
