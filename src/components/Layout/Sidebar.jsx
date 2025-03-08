
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { menuItems } from '../../data/menuItems';
// import MenuItem from './MenuItem';
// import ExplorerHeader from './ExplorerHeader';
// import { useCollapsible } from '../../hooks/useCollapsible';

// const Sidebar = ({ isOpen }) => {
//   const { isExpanded, toggle } = useCollapsible(true);
//   const navigate = useNavigate();

//   const handleSelect = (id) => {
//     navigate(`/page/${id}`);
//   };

//   return (
//     <div
//       className={`
//         transition-all duration-300 border-r border-gray-200 dark:border-gray-700 
//         h-full overflow-hidden flex-shrink-0
//         ${isOpen ? 'w-64' : 'w-0'}
//       `}
//     >
//       <div className="h-full flex flex-col">
//         <ExplorerHeader isExpanded={isExpanded} onToggle={toggle} />
//         <div
//           className={`flex-1 overflow-y-auto transition-all duration-300 ${
//             isExpanded ? 'opacity-100' : 'opacity-0 h-0'
//           }`}
//         >
//           {isOpen &&
//             menuItems.map((item) => (
//               <MenuItem key={item.id} item={item} onSelect={handleSelect} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../data/menuItems';
import MenuItem from './MenuItem';
import ExplorerHeader from './ExplorerHeader';
import { useCollapsible } from '../../hooks/useCollapsible';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { isExpanded, toggle } = useCollapsible(true);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleSelect = (id) => {
    navigate(`/page/${id}`);
    setIsOpen(false); // Close sidebar after selection on mobile
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchPosition(e.touches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    setTouchPosition(currentTouch);

    // Update width dynamically during drag
    const sidebar = sidebarRef.current;
    if (sidebar) {
      const maxWidth = 256; // Matches w-64 (256px)
      let newWidth = isOpen ? maxWidth - diff : -diff;
      newWidth = Math.max(0, Math.min(newWidth, maxWidth)); // Clamp between 0 and 256
      sidebar.style.width = `${newWidth}px`;
    }
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStart === null || touchPosition === null) return;
    const diff = touchStart - touchPosition;

    // Threshold for full open/close (e.g., 50px)
    if (Math.abs(diff) > 50) {
      setIsOpen(diff > 0 ? false : true);
    } else {
      // Snap back to original state
      setIsOpen(isOpen);
    }

    // Reset touch states
    setTouchStart(null);
    setTouchPosition(null);

    // Reset width to use Tailwind classes
    const sidebar = sidebarRef.current;
    if (sidebar) sidebar.style.width = '';
  };

  // Reset width when isOpen changes (via toggle button or selection)
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) sidebar.style.width = '';
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`
        transition-all duration-300 border-r border-gray-200 dark:border-gray-700 
        h-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800
        ${isOpen ? 'w-64' : 'w-0'}
      `}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-full flex flex-col">
        <ExplorerHeader isExpanded={isExpanded} onToggle={toggle} />
        <div
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0 h-0'
          }`}
        >
          {isOpen &&
            menuItems.map((item) => (
              <MenuItem key={item.id} item={item} onSelect={handleSelect} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;