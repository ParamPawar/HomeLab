import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const { results, search } = useSearch(); // No 'loading' in current hook, so we'll skip it
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(`/page/${results[0].id}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search documentation..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </form>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                       border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50"
          >
            {results.map((result) => (
              <SearchResult key={result.id} item={result} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;