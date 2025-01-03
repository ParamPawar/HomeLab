export interface SearchResult {
  id: string;          // Unique identifier for the search result.
  title: string;       // Title of the search result.
  excerpt: string;     // A brief excerpt or description of the search result.
  category?: string;   // Optional field for the category of the search result.
}
