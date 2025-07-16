# 🧭 Play Compass – Dev Setup Instructions

## 📦 1. Setup

```bash
git clone <your-repo-url>
cd play-compass
npm install
```

## ▶️ 2. Run the Dev Server

```bash
npm run dev
```

If you see styling issues:

* Double-check `tailwind.config.js`
* Ensure `tailwind.css` is imported in `layout.tsx` via:

```tsx
import './tailwind.css';
```

## ⚙️ 3. File Structure Highlights

```
src/
  app/
    layout.tsx         ← Wraps all pages
    page.tsx           ← Home page
    about/             ← Static routes (e.g. About)
    projects/          ← Projects page
    assets/            ← Your SVGs (logo, arrow, grass, etc.)
  styles/
    tailwind.css       ← Tailwind base/style imports
tailwind.config.js     ← Tailwind theme and config
postcss.config.cjs     ← Required for Tailwind with ESM
```

## 🎨 4. Tailwind Customisations

### Colours:

```js
cream: '#FFFCF4',
forest: '#508072',
peach: '#F4A261'
```

### Fonts:

```js
fontFamily: {
  sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  logo: ['"Pacifico"', 'cursive'],
}
```

## 🚻 5. Common Issues

| Problem             | Solution                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| Styles not applying | Ensure PostCSS and Tailwind configs are correct and not duplicated                              |
| SVG not loading     | Use relative paths like `/assets/logo.svg` only if assets are correctly placed inside `public/` |

## 📤 6. Git Hygiene

Before pushing:

```bash
git add .
git commit -m "Fix Tailwind config and layout issues, add setup docs"
git push origin main
```

## 🔜 Optional: Add Blog

Consider structure for blog (MDX or flat route pages) later.
