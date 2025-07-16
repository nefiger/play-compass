# MDX Migration Plan

This document tracks the tasks required to migrate the blog to MDX posts with improved metadata and testing.

## Goals
1. Switch the blog section under `src/app/blog` to MDX-based routing so each post is an `.mdx` file.
2. Blog posts should include front-matter fields for `title`, `date`, `excerpt`, `tags`, `category`, and an optional `featured` flag.
3. Update the blog index and individual post pages to pull data from the MDX posts, respecting the additional front‑matter fields.
4. Provide a way to embed rich media or forms within MDX content.
5. Add automated tests for the new MDX workflow using Jest and React Testing Library.
6. Migrate the existing posts in `src/lib/blogData.ts` to MDX files and remove that data file.
7. Document how to add new posts in MDX.
8. Ensure SEO best practices throughout the blog.

## Implementation Tasks
1. **Install MDX support**
   - Add `@next/mdx` and `@mdx-js/react` dependencies.
   - Configure `next.config.ts` to load MDX files.
   - Create `mdx-components.tsx` exporting custom components for use in MDX.

2. **Create blog post loader**
   - Add `src/lib/getPosts.ts` to read MDX files and expose `getAllPosts()` and `getPost(slug)` helpers.

3. **Update pages**
   - Modify `src/app/blog/page.tsx` to display posts returned from `getAllPosts()`.
   - Rewrite `[slug]/page.tsx` to render MDX via `getPost` and provide metadata.

4. **Migrate existing posts**
   - Convert entries in `src/lib/blogData.ts` to `.mdx` files under `src/app/blog`.
   - Delete `blogData.ts` once migration is complete.

5. **Embed rich media**
   - Add React components like `VideoEmbed` and `NewsletterForm` under `src/components/mdx` and export them through `mdx-components.tsx`.

6. **Testing setup**
   - Configure Jest with React Testing Library and `ts-jest`.
   - Write tests covering `getAllPosts()`, the blog index, and rendering of MDX posts with custom components.

7. **Documentation**
   - Update `README.md` and `DEV SETUP.md` with instructions for creating MDX posts and running tests.

8. **SEO metadata**
   - Use front matter to populate Next.js `metadata` for each post including open graph tags.

## Verification
Run the following before committing any changes:
```bash
npm run lint
npm test
npm run build
```
