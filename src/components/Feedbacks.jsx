import React from 'react';

const Feedbacks = () => {
  return (
    <div>
      <h1>Feedbacks Component</h1>
      <iframe
        src="/Feedbacks.html" // Path to the HTML file in the public folder
        title="Feedbacks" // Required for accessibility
        width="100%" // Set the width of the iframe
        height="600px" // Set the height of the iframe
        style={{ border: 'none', background: 'transparent' }} // Remove the iframe border
      />
    </div>
  );
};

export default Feedbacks;