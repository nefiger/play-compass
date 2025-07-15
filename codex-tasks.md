# Play Compass — Codex Tasks

## 🧭 Project Overview
Play Compass is a playful, modern website for showcasing interactive games, conceptual art, and thought leadership around adult play. It's built using:

- **Next.js 14 (App Router)**
- **Tailwind CSS**
- **Custom SVG assets**
- **Custom theme (in `tailwind.config.js`)**

Assets like the logo, grass, and dotted arrow are stored in `/public/assets/`. Global styles are loaded via `/src/app/tailwind.css`.

---

## 🎯 Codex: Tasks to Scaffold and Style the Site

### ✅ Layout & Styling
1. Replace the current homepage content (`/src/app/page.tsx`) with a proper layout:
   - Add the full logo (`/public/assets/logo.svg`) centered in a hero section
   - Resize the logo appropriately (max width ~300px on desktop)
2. Include decorative SVG strips:
   - Add `grass.svg` to the top and bottom of the homepage
   - Ensure they are visually aligned and responsive
3. Include the `dotted-arrow.svg` as a visual connector between sections

### 📚 Blog Setup
4. Create a blog section using MDX or markdown routing under `/src/app/blog`
5. Each blog post should support:
   - Title
   - Date
   - Markdown content
6. Add a blog index page listing all posts with links to detail pages

### 🎨 Theming and Aesthetic
7. Use Tailwind config colours and fonts as defined in `tailwind.config.js`
8. Apply a clean, modern, slightly whimsical aesthetic:
   - Rounded corners
   - Adequate padding and margin
   - Smooth transitions for hover effects

### 📱 Responsiveness
9. Ensure the homepage layout adapts well to smaller screens
10. Use appropriate Tailwind responsive utilities for mobile vs desktop layout

---

## 🔧 Optional Future Enhancements
11. Add a sticky mobile header with a hamburger menu (for blog and future sections)
12. Add a “Start Playing” button on the homepage that links to a future interactive quest or game page
13. Set up SEO metadata via Next.js metadata config