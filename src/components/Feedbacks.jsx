import React from 'react';

const Feedbacks = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <iframe
        src="/Feedbacks.html"
        title="Feedbacks"
        className="w-full h-full"
        style={{ 
          border: 'none', 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default Feedbacks;