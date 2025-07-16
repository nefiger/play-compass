import { blogPosts } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPostPage({ params }: any) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
      <aside className="md:col-span-1 order-last md:order-first">
        <h2 className="text-lg font-semibold mb-4">More Posts</h2>
        <ul className="space-y-2 text-sm">
          {blogPosts.map(p => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-peach hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <article className="md:col-span-3">
        <Image src={post.image} alt="" width={800} height={400} className="w-full h-60 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{post.date}</p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </article>
    </div>
  );
}
