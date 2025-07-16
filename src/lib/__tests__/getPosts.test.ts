jest.mock('next-mdx-remote/rsc', () => ({
  compileMDX: jest.fn(async () => ({ frontmatter: {}, content: 'test' }))
}));
jest.mock('@/mdx-components', () => ({
  useMDXComponents: () => ({})
}));

import { getAllPosts, getPost } from '../getPosts';

describe('MDX posts loader', () => {
  test('getAllPosts returns posts', async () => {
    const posts = await getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
  });

  test('getPost returns content', async () => {
    const posts = await getAllPosts();
    const post = await getPost(posts[0].slug);
    expect(post.slug).toBe(posts[0].slug);
    expect(post.content).toBeTruthy();
    expect(Array.isArray(post.toc)).toBe(true);
  });
});
