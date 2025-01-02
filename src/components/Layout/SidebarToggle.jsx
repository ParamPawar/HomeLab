import React from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed left-0 top-20 p-2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-md shadow-md transition-all duration-300 z-10"
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
    </button>
  );
};

export default SidebarToggle;