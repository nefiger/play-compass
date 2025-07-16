import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/getPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Play Compass',
  description: 'Thoughts on play, puzzles and interactive experiences.',
  openGraph: {
    title: 'Blog | Play Compass',
    description: 'Thoughts on play, puzzles and interactive experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Play Compass',
    description: 'Thoughts on play, puzzles and interactive experiences.',
  },
};

export const dynamic = 'force-static';

export default async function BlogIndex() {
  const posts = await getAllPosts();
  const featured = posts.filter(p => p.featured);
  const others = posts.filter(p => !p.featured);
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Featured</h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {featured.map(post => (
              <li key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-50">
                  {post.image && (
                    <Image src={post.image} alt={post.title} width={600} height={300} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                    <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
                    <span className="text-peachDark font-medium">Read more →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <ul className="grid gap-8 md:grid-cols-2">
        {others.map(post => (
          <li key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-50">
              {post.image && (
                <Image src={post.image} alt={post.title} width={600} height={300} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <h3 className="text-xl font-medium mb-1">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
                <span className="text-peachDark font-medium">Read more →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
