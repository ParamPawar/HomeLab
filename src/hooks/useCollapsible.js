import { useState } from 'react';

export const useCollapsible = (initialState = true) => {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const toggle = () => setIsExpanded(prev => !prev);

  return {
    isExpanded,
    toggle
  };
};
