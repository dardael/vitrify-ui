# Vitrify

Bibliothèque de composants et templates Astro pour sites vitrines. Distribuée en package npm, avec une showcase intégrée pour visualiser les composants.

## Démarrage rapide (développement)

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
├── pages/             # Showcase uniquement — non exporté, non publié
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
@import 'vitrify-ui/theme';   /* valeurs par défaut */

:root {
  --vf-color-primary:       #7c3aed;
  --vf-color-primary-hover: #6d28d9;
  --vf-font-sans:           'Poppins', sans-serif;
  --vf-radius-md:           12px;
}
```

---

## Publier une nouvelle version sur npm

### Première fois — configuration

**1. Choisir un nom unique**

Le nom `vitrify-ui` est peut-être déjà pris sur npm. Utiliser un nom scopé avec ton username npm garantit l'unicité :

```sh
# Vérifier si le nom est libre
npm info vitrify-ui

# Si pris → dans package.json, changer "name":
# "vitrify-ui"  →  "@ton-username-npm/vitrify-ui"
```

**2. Créer un compte npmjs.com** (si pas encore fait) : https://www.npmjs.com/signup

**3. Se connecter**

```sh
npm login
# → saisir username, password, email, code OTP
```

**4. Premier publish**

```sh
npm publish --access public
```

> `--access public` est obligatoire pour les packages scopés (`@username/...`).
> Pour un nom non scopé (`vitrify-ui`), npm le publie public par défaut.

**5. Vérifier**

```sh
npm info vitrify-ui          # ou npm info @ton-username/vitrify-ui
```

---

### Publier une mise à jour

```sh
# 1. Bump la version selon le type de changement
npm version patch   # 0.0.1 → 0.0.2  (bug fix)
npm version minor   # 0.0.1 → 0.1.0  (nouveau composant, rétro-compatible)
npm version major   # 0.0.1 → 1.0.0  (breaking change, API modifiée)

# 2. Publier
npm publish --access public
```

`npm version` met à jour `package.json` et crée un commit + tag git automatiquement.

**Ce qui est publié** (contrôlé par le champ `"files"` dans `package.json`) :
- `src/components/` — composants
- `src/templates/` — templates
- `src/theme/` — tokens CSS
- `src/index.ts` — entrée du package
- `README.md`, `package.json` — automatiques

**Ce qui n'est PAS publié** :
- `src/pages/` — showcase (pages de test)
- `node_modules/`, `public/`, `.astro/` — exclus par défaut

Vérifier avant de publier :
```sh
npm pack --dry-run
```

---

## Utiliser Vitrify dans un autre projet Astro

```sh
npm install vitrify-ui          # ou @ton-username/vitrify-ui
```

```astro
---
// src/pages/index.astro
import 'vitrify-ui/theme';
import { Button } from 'vitrify-ui';
---
<html>
  <body>
    <Button>Contactez-nous</Button>
    <Button variant="secondary" href="/contact">En savoir plus</Button>
  </body>
</html>
```

Surcharger le thème dans le layout global :

```css
/* src/styles/global.css */
@import 'vitrify-ui/theme';

:root {
  --vf-color-primary: #16a34a;
  --vf-font-sans: 'Lato', sans-serif;
}
```

```astro
---
// src/layouts/Layout.astro
import '../styles/global.css';
---
<slot />
```

---

## Commandes

| Commande                  | Action                                        |
| :------------------------ | :-------------------------------------------- |
| `npm run dev`             | Showcase sur `localhost:4321`                 |
| `npm run build`           | Build de la showcase vers `./dist/`           |
| `npm run preview`         | Prévisualiser le build                        |
| `npm run astro check`     | Vérification TypeScript des composants        |
| `npm version patch\|minor\|major` | Bumper la version avant publication   |
| `npm publish --access public` | Publier sur npmjs.com                     |
| `npm pack --dry-run`      | Vérifier les fichiers qui seront publiés      |
