import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '200px' }}> {/* Add padding at the top */}
      <iframe
        src="/PokemonCard.html" // Path to the HTML file in the public folder
        title="About" // Required for accessibility
        width="100%" // Set the width of the iframe
        height="700px" // Set the height of the iframe
        style={{ border: 'none', background: 'transparent' }} // Remove the iframe border
      />
    </div>
  );
};

export default About;