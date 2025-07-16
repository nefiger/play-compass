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

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed blog-writing guidelines.

## Testing

Run lint, tests and build before committing:

```bash
npm run lint
npm test
npm run build
```
