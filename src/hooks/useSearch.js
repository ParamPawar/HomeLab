import { useState, useMemo } from 'react';
import { menuItems } from '../data/menuItems';


const flattenMenuItems = (items) => {
  let flatList = [];
  items.forEach((item) => {
    if (item.type === 'file') {
      flatList.push(item);
    }
    if (item.children) {
      flatList = flatList.concat(flattenMenuItems(item.children));
    }
  });
  return flatList;
};

export const useSearch = () => {
  const [results, setResults] = useState([]);
  const flatMenu = useMemo(() => flattenMenuItems(menuItems), []);

  const search = (query) => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = flatMenu.filter((item) =>
      item.id.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  };

  return { results, search };
};