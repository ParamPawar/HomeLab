import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

const MarkdownEditor: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 
                   border border-gray-200 dark:border-gray-700 rounded-lg resize-none
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Write your markdown here..."
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="prose dark:prose-invert max-w-none p-4 bg-white dark:bg-gray-800 
                 border border-gray-200 dark:border-gray-700 rounded-lg overflow-y-auto"
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </motion.div>
    </div>
  );
};