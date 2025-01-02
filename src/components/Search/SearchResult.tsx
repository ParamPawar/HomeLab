import React from 'react';
import { motion } from 'framer-motion';
import type { SearchResult as SearchResultType } from '../../types/search';

interface SearchResultProps {
  result: SearchResultType;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
      className="p-3 cursor-pointer border-b last:border-b-0 border-gray-200 dark:border-gray-700"
    >
      <h3 className="font-medium text-gray-900 dark:text-gray-100">{result.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{result.excerpt}</p>
      {result.category && (
        <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 
                      text-blue-800 dark:text-blue-200">
          {result.category}
        </span>
      )}
    </motion.div>
  );
};

export default SearchResult;