import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/page/${item.id}`);
  };

  return (
    <motion.div
      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
      className="p-3 cursor-pointer border-b last:border-b-0 border-gray-200 dark:border-gray-700"
      onClick={handleClick}
    >
      <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.label}</h3>
      {/* Excerpt not in menuItems, so we'll omit or add a placeholder */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {item.excerpt || 'No excerpt available'}
      </p>
      {item.category && (
        <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 
                        text-blue-800 dark:text-blue-200">
          {item.category}
        </span>
      )}
    </motion.div>
  );
};

export default SearchResult;