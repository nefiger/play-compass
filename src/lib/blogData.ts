export interface BlogPost {
  title: string;
  date: string; // ISO date
  summary: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Welcome to Play Compass",
    date: "2025-07-01",
    summary: "Introducing our playground for grown-ups with a taste for adventure.",
    slug: "welcome-to-play-compass",
  },
  {
    title: "Designing Playful Experiences",
    date: "2025-07-10",
    summary: "A behind-the-scenes look at our approach to crafting engaging puzzles.",
    slug: "designing-playful-experiences",
  },
];
