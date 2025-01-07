import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import ThemeToggle from './components/Layout/ThemeToggle';
import ContentArea from './components/Content/ContentArea';
import SidebarToggle from './components/Layout/SidebarToggle';
import SearchBar from './components/Search/SearchBar';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedId, setSelectedId] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">Home Lab Guide</h1>
        <div className="flex items-center gap-4 flex-1 max-w-2xl mx-4">
          <SearchBar />
        </div>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </header>
      <main className="flex h-[calc(100vh-3.5rem)] relative">
        <Sidebar 
          onSelect={setSelectedId} 
          selectedId={selectedId}
          isOpen={isSidebarOpen}
        />
        <SidebarToggle 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <ContentArea selectedId={selectedId} />
      </main>
    </div>
  );
}

export default App;
