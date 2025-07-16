# Agent Instructions

This repository hosts the Play Compass website built with Next.js and Tailwind CSS. These instructions apply to the entire codebase.

## Project Guidelines

- The site uses **Next.js App Router** with TypeScript. Pages live under `src/app` and components in `src/components`.
- Style the site with **Tailwind CSS**. Shared theme settings are in `tailwind.config.js`.
- Place static images or SVGs in `public/assets` and reference them with paths like `/assets/logo.svg`.
- Always run `npm run lint` and `npm run build` before committing changes.
- Keep documentation such as `README.md` and `DEV SETUP.md` current whenever workflows change.

## Blog Update Process

- Blog posts are defined in `src/lib/blogData.ts` as an array of objects. Each post currently has `slug`, `title`, `date`, `excerpt`, `content`, and `image` fields.
- To add a new blog entry:
  1. Create a unique `slug` and add a new object to the `blogPosts` array.
  2. Include the `title`, `date`, `excerpt`, full `content` in markdown, and path to the `image` placed under `public/assets/`.
  3. Add a `categories` array to the post object to label the post with topics (e.g. `["design", "play"]`). Update the interface if needed.
- The blog index at `src/app/blog/page.tsx` lists posts with their image, title, and excerpt. Ensure new posts appear correctly in this list.
- Individual post pages are routed via `/blog/[slug]/page.tsx`. Images are displayed at the top of the article.

## Keeping Instructions Updated

Edit this `AGENTS.md` whenever the workflow changes. The agent will read it before performing tasks so keep guidelines clear and current.
