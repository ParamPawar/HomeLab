import React from 'react';
import { contents } from '../../data/contents';

interface ContentAreaProps {
  selectedId: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ selectedId }) => {
  const content = contents[selectedId] || {
    title: 'Select a topic',
    content: <p>Please select a topic from the menu to view its content.</p>,
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          {content.content}
        </div>
      </div>
    </div>
  );
};

export default ContentArea;