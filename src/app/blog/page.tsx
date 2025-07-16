import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/getPosts';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog | Play Compass',
  description: 'Insights on playful design and interactive experiences.'
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  const featured = posts.filter(p => p.featured);
  const regular = posts.filter(p => !p.featured);

  const renderPosts = (items: typeof posts) => (
    <ul className="grid gap-8 md:grid-cols-2">
      {items.map(post => (
        <li key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
          {post.image && (
            <Image src={post.image} alt={`Illustration for ${post.title}`} width={600} height={300} className="w-full h-40 object-cover" />
          )}
          <div className="p-4">
            <h2 className="text-xl font-medium mb-1">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-600 mb-2">{post.date}</p>
            <p className="text-sm text-gray-700 mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-peach text-sm font-medium">Read more →</Link>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      {featured.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured</h2>
          {renderPosts(featured)}
        </div>
      )}
      <div>
        {featured.length > 0 && <h2 className="text-2xl font-semibold mb-4 mt-6">All Posts</h2>}
        {renderPosts(regular)}
      </div>
    </div>
  );
}
