import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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
  const { title, excerpt, image } = post.meta;
  const url = `https://play-compass.vercel.app/blog/${post.slug}`;
  return {
    title: `${title} | Play Compass`,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: 'article',
      url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
      images: image ? [image] : undefined,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage({ params }: any) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  const allPosts = await getAllPosts();

  const author = 'Jennifer Walker';

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
          <Image src={post.meta.image} alt={post.meta.title} width={800} height={400} className="w-full h-60 object-cover rounded-md mb-6" />
        )}
        <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
        <p className="text-sm text-gray-600 mb-6">By {author} • {post.meta.date}</p>

        {post.headings.length > 0 && (
          <nav className="mb-6 border-l-4 border-peach pl-4">
            <p className="font-medium mb-2">On this page</p>
            <ul className="space-y-1 text-sm">
              {post.headings.map(h => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-peach hover:underline">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="prose">
          {post.content}
        </div>
      </article>
    </div>
  );
}
