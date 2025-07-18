import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPost } from '@/lib/getPosts';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | Play Compass`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      images: post.meta.image ? [{ url: post.meta.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.excerpt,
      images: post.meta.image ? [post.meta.image] : undefined,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage({ params }: any) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  const allPosts = await getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
      <aside className="md:col-span-1 order-last md:order-first">
        <h2 className="text-lg font-semibold mb-4">More Posts</h2>
        <ul className="space-y-2 text-sm">
          {allPosts.map(p => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-peach hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <article className="md:col-span-3">
        {post.meta.image && (
          <Image src={post.meta.image} alt={`Image for ${post.meta.title}`} width={800} height={400} className="w-full h-60 object-cover rounded-md mb-6" />
        )}
        <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{post.meta.date}</p>
        {post.headings.length > 0 && (
          <div className="mb-6 border-l-4 border-peach pl-4">
            <h2 className="font-semibold mb-2">Contents</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {post.headings.map(h => (
                <li key={h}>
                  <a href={`#${h.toLowerCase().replace(/\s+/g, '-')}`} className="text-peach hover:underline">
                    {h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="prose">
          {post.content}
        </div>
      </article>
    </div>
  );
}
