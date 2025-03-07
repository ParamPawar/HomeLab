import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/page/${item.id}`);
  };

  return (
    <div className="search-result" onClick={handleClick}>
      <span>{item.label} (ID: {item.id})</span>
    </div>
  );
};

export default SearchResult;