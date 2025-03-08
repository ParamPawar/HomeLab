// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Layout/Sidebar';
// import ThemeToggle from './components/Layout/ThemeToggle';
// import ContentArea from './components/Content/ContentArea';
// import SidebarToggle from './components/Layout/SidebarToggle';
// import SearchBar from './components/Search/SearchBar';

// function Modal({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded shadow-md max-w-lg mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Site Under Development</h2>
//         <p className="mb-4">
//           This website is a college project created in my final year. It is for
//           SEO purposes and is still under development. The content has been
//           written by me, and the knowledge shared is based on what I learned
//           from YouTube and various blogs.
//         </p>
//         <p className="mb-4">
//           Please navigate through the site with an understanding mindset. Thank
//           you for your support and patience!
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Understood
//         </button>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       <header className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 shrink-0">
//         <h1 className="text-xl font-bold">HomeLab</h1>
//         <div className="flex items-center gap-4 flex-1 max-w-2xl mx-4">
//           <SearchBar />
//         </div>
//         <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
//       </header>
//       <main className="flex flex-1 h-[calc(100vh-3.5rem)] relative overflow-hidden">
//         <Sidebar isOpen={isSidebarOpen} />
//         <SidebarToggle
//           isOpen={isSidebarOpen}
//           onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
//         />
//         <div className="flex-1 overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<ContentArea selectedId="introduction" />} />
//             <Route path="/page/:id" element={<ContentArea />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import ThemeToggle from './components/Layout/ThemeToggle';
import ContentArea from './components/Content/ContentArea';
import SidebarToggle from './components/Layout/SidebarToggle';
import SearchBar from './components/Search/SearchBar';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Site Under Development</h2>
        <p className="mb-4">
          This website is a college project created in my final year. It is for
          SEO purposes and is still under development. The content has been
          written by me, and the knowledge shared is based on what I learned
          from YouTube and various blogs.
        </p>
        <p className="mb-4">
          Please navigate through the site with an understanding mindset. Thank
          you for your support and patience!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Understood
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to false for mobile
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <header className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 shrink-0">
        <h1 className="text-xl font-bold">HomeLab</h1>
        <div className="flex items-center gap-4 flex-1 max-w-2xl mx-4">
          <SearchBar />
        </div>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </header>
      <main className="flex flex-1 h-[calc(100vh-3.5rem)] relative overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <SidebarToggle
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<ContentArea selectedId="introduction" />} />
            <Route path="/page/:id" element={<ContentArea />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;