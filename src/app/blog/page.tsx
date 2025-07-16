import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/getPosts';

export const dynamic = 'force-static';

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <ul className="grid gap-8 md:grid-cols-2">
        {posts.map(post => (
          <li key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-50">
              {post.image && (
                <Image src={post.image} alt="" width={600} height={300} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
