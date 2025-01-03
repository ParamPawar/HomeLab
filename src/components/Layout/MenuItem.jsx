import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FolderClosed, FolderOpen, FileText } from 'lucide-react';

const MenuItem = ({ item, onSelect, selectedId, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const paddingLeft = `${level * 1.25}rem`;

  if (item.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors`}
          style={{ paddingLeft }}
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          {isOpen ? <FolderOpen size={16} /> : <FolderClosed size={16} />}
          <span>{item.label}</span>
        </button>
        {isOpen && item.children?.map((child) => (
          <MenuItem
            key={child.id}
            item={child}
            onSelect={onSelect}
            selectedId={selectedId}
            level={level + 1}
          />
        ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => onSelect(item.id)}
      className={`w-full text-left px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors ${
        selectedId === item.id ? 'bg-blue-50 dark:bg-gray-700' : ''
      }`}
      style={{ paddingLeft }}
    >
      <FileText size={16} />
      <span>{item.label}</span>
    </button>
  );
};

export default MenuItem;
