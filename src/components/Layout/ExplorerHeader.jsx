import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ExplorerHeader = ({ isExpanded, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left border-b border-gray-200 dark:border-gray-700"
      aria-expanded={isExpanded}
    >
      {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      <span className="font-semibold text-sm">EXPLORER</span>
    </button>
  );
};

export default ExplorerHeader;
