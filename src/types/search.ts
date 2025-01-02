export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category?: string;
}

export type SearchFilter = {
  category?: string;
  query: string;
};