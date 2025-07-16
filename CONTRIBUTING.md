# Contributing to Play Compass Blog

Blog posts live under `src/app/blog` as MDX files. Each post should include this YAML front matter:

```yaml
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A short teaser for list pages."
tags: [tag1, tag2]
category: CategoryName
featured: false # optional
image: "/assets/optional-image.png" # optional
```

File names become the URL slug (`my-post.mdx` → `/blog/my-post`). Keep slugs short and descriptive using hyphens.

Use regular Markdown along with React components exported in `src/mdx-components.tsx`. Example:

```mdx
import VideoEmbed from '@/components/mdx/VideoEmbed'

<VideoEmbed src="https://example.com/embed/video" />
```

Run the following before committing new posts:

```bash
npm run lint
npm test
npm run build
```
