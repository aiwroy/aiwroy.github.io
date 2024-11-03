import React from 'react';
import './AITools.css';

const AITools = () => {
  const tools = ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLTK'];

  return (
    <section className="ai-tools">
      <div className="container">
        
        <h2>Essential AI Tools</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <h3>{tool}</h3>
              <p>Essential tool for AI development and research.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>
        <button className="explore-button">Explore All Tools</button>
      </div>
    </section>
  );
};

export default AITools;