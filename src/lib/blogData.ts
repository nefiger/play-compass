export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'Finding Play in Everyday Life',
    date: '2025-01-15',
    excerpt: 'Tips for rediscovering moments of wonder in your daily routine.',
    content: `## Welcome

This is the first mock blog post. Here you can add markdown style content and explore ideas about playful design.`,
    image: '/assets/tagline.svg',
  },
  {
    slug: 'second-post',
    title: 'Designing for Curiosity',
    date: '2025-02-20',
    excerpt: 'How to craft experiences that invite exploration and collaboration.',
    content: `## Another Post

More mock content goes here. Imagine engaging stories about immersive games and interactive art installations.`,
    image: '/assets/next.svg',
  },
];
