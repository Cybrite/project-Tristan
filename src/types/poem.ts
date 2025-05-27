export interface Poem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  mood: string;
  excerpt: string;
  content: string[];
  inspiration?: string;
  tags?: string[];
}
