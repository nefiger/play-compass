# Agent Instructions

This repository hosts the **Play Compass** website built with Next.js and Tailwind CSS. These guidelines apply to the entire codebase.

## Development Setup
- Clone the repo and run `npm install`.
- Start the dev server with `npm run dev`.
- Pages live under `src/app/` and components under `src/components/`.
- Put static images or SVGs in `public/assets` and reference them like `/assets/logo.svg`.
- Global styles are loaded from `src/app/tailwind.css` in `layout.tsx`.
- Theme colours (`cream`, `forest`, `peach`) and font families are defined in `tailwind.config.js`.

## Project Guidelines
- Use **TypeScript** with the Next.js App Router.
- Always run `npm run lint`, `npm test`, and `npm run build` before committing.
- Commit with clear messages and keep this `AGENTS.md` up to date whenever workflows change.

## Blog Workflow
- Blog posts are **MDX files** under `src/app/blog`. Each file name becomes the route (`my-post.mdx` → `/blog/my-post`).
- Include the following front matter in each post:
  - `title`
  - `date`
  - `excerpt`
  - `tags`
  - `category`
  - `featured` (optional)
- Rich media can be embedded using React components exported via `mdx-components.tsx`.
- The blog index (`src/app/blog/page.tsx`) lists posts by date, and individual post pages render the MDX content and use the front matter for SEO metadata.

## Keeping Instructions Updated
Edit this file whenever the workflow changes. The agent reads it before working on tasks, so keep guidelines clear and current.
