# Contributing to the Play Compass Blog

Blog posts live in `src/app/blog` as `.mdx` files. Each filename becomes the URL slug. Use the following front matter template:

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "Short summary used in listings"
tags: [tag1, tag2]
category: Category
featured: false
image: "/assets/optional-image.png"
---
```

Write content in Markdown and embed React components exported from `src/mdx-components.tsx` as needed. Images should reside under `public/assets` and referenced with `/assets/your-image.png`.

To preview locally run `npm run dev`. Before opening a pull request, execute:

```bash
npm run lint
npm test
npm run build
```

