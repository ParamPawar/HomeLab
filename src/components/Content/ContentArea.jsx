// import React from 'react';
// import { contents } from '../../data/contents';

// function ContentArea({ selectedId }) {
//   const content = contents[selectedId] || {
//     title: 'Select a topic',
//     content: <p>Please select a topic from the menu to view its content.</p>,
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-8 transition-all duration-300">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
//         <div className="prose dark:prose-invert max-w-none">
//           {content.content}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContentArea;

import React from 'react';
import { useParams } from 'react-router-dom';
import { contents } from '../../data/contents';

const ContentArea = ({ selectedId }) => {
  const { id } = useParams(); 
  const contentId = id || selectedId || 'introduction'; 

  // Debugging
  console.log({ id, selectedId, contentId, content: contents[contentId] });

  
  const Content = contents[contentId] || contents['introduction'];

  
  if (typeof Content === 'function' || React.isValidElement(Content)) {
    
    return (
      <div className="flex-1 overflow-y-auto p-8 transition-all duration-300">
        <div className="max-w-4xl mx-auto">
          <Content />
        </div>
      </div>
    );
  }

  
  const contentData =
    Content || {
      title: 'Select a Topic',
      content: <p>Please select a topic from the menu to view its content.</p>,
    };

  return (
    <div className="flex-1 overflow-y-auto p-8 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{contentData.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          {contentData.content}
        </div>
      </div>
    </div>
  );
};

export default ContentArea;