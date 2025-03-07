import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { results, search } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    search(value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(`/page/${results[0].id}`);
      setQuery(''); 
    } else if (query.trim()) { 
      navigate('/page/introduction'); 
      setQuery(''); 
    }
  };

  return (
    <div className="search-bar w-full relative">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search page "
          className="search-input flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go
        </button>
      </form>
      {query && results.length > 0 && (
        <div className="search-results absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-md max-h-60 overflow-y-auto z-10">
          {results.map((result) => (
            <SearchResult key={result.id} item={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 