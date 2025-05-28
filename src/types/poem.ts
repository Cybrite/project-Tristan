export interface Poem {
  id: string;
  title: string;
  category: string;
  subCategory: "named" | "unnamed";
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  inspiration?: string;
  tags?: string[];
}
