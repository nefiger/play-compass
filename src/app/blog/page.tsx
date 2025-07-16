import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border rounded p-4 bg-white shadow"
          >
            <h2 className="text-2xl font-semibold mb-1">
              <Link href={`/blog/${post.slug}`} className="text-peach hover:underline">
                {post.title}
              </Link>
            </h2>
            <time
              dateTime={post.date}
              className="block text-sm text-gray-500 mb-2"
            >
              {formatDate(post.date)}
            </time>
            <p className="text-gray-700 mb-2">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-peach hover:underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
