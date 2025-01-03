import { useState, useCallback } from 'react';
import { debounce } from '../utils/debounce';

export const useSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 500));
        const mockResults = [
          {
            id: '1',
            title: 'Setting up a Home Lab',
            excerpt: 'Learn how to set up your first home lab environment...',
            category: 'Getting Started'
          },
          {
            id: '2',
            title: 'Network Security Basics',
            excerpt: 'Essential security practices for your home lab...',
            category: 'Security'
          }
        ].filter(result => 
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.excerpt.toLowerCase().includes(query.toLowerCase())
        );
        
        setResults(mockResults);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  return { results, loading, search };
};
