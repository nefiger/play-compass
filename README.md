# Play Compass

This project powers the Play Compass website built with Next.js and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Blog in MDX

Blog posts live in `src/app/blog` as `.mdx` files. Each file exports front matter via YAML with fields:

- `title`
- `date`
- `excerpt`
- `tags`
- `category`
- `featured` (optional)
- `image` (optional)

Rich components like `<VideoEmbed />` and `<NewsletterForm />` can be used inside posts.

To add a new post, create `your-post.mdx` with the front matter above and write Markdown/MDX content.

File names should be **kebab-case** and become the post slug. For example, `my-first-post.mdx` will be available at `/blog/my-first-post`.

Each post should include alt text for images and can embed components from `src/components/mdx`.

## Testing

Run lint, tests and build before committing:

```bash
npm run lint
npm test
npm run build
```
