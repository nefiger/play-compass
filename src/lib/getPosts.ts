/* eslint-disable react-hooks/rules-of-hooks */
import { compileMDX } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import type { Pluggable } from 'unified';
import fs from 'fs/promises';
import path from 'path';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  featured?: boolean;
  image?: string;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: React.ReactElement;
  headings: string[];
}

const POSTS_PATH = path.join(process.cwd(), 'src/app/blog');

export async function getAllPosts(): Promise<(PostMeta & { slug: string })[]> {
  const entries = await fs.readdir(POSTS_PATH);
  const posts: (PostMeta & { slug: string })[] = [];

  for (const file of entries) {
    if (!file.endsWith('.mdx')) continue;
    const slug = file.replace(/\.mdx$/, '');
    const source = await fs.readFile(path.join(POSTS_PATH, file), 'utf8');
    const { data } = matter(source);
    posts.push({ slug, ...(data as PostMeta) });
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<Post> {
  const filepath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = await fs.readFile(filepath, 'utf8');

  const { content, frontmatter } = await compileMDX<PostMeta>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm as Pluggable, remarkSlug as Pluggable],
        rehypePlugins: [],
      },
    },
    components: useMDXComponents({}) as MDXRemoteProps['components'],
  });

  const { content: mdxContent } = matter(source);
  const headings = Array.from(mdxContent.matchAll(/^##\s+(.*)$/gm)).map(m => m[1]);

  return {
    slug,
    meta: frontmatter,
    content,
    headings,
  };
}
