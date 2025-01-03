import React from 'react';
import { menuItems } from '../../data/menuItems';
import MenuItem from './MenuItem';
import ExplorerHeader from './ExplorerHeader';
import { useCollapsible } from '../../hooks/useCollapsible';

const Sidebar = ({ onSelect, selectedId, isOpen }) => {
  const { isExpanded, toggle } = useCollapsible(true);

  return (
    <div 
      className={`
        transition-all duration-300 border-r border-gray-200 dark:border-gray-700 
        h-full overflow-hidden flex-shrink-0
        ${isOpen ? 'w-64' : 'w-0'}
      `}
    >
      <div className="h-full flex flex-col">
        <ExplorerHeader isExpanded={isExpanded} onToggle={toggle} />
        <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0'}`}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
