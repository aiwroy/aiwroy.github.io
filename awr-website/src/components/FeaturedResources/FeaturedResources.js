import React from 'react';
import './FeaturedResources.css';

const FeaturedResources = () => {
  const resources = [
    'Machine Learning Basics',
    'Deep Learning with PyTorch',
    'Natural Language Processing',
    'Computer Vision Applications',
    'Reinforcement Learning',
    'AI Ethics and Governance'
  ];

  return (
    <section className="featured-resources">
      <div className="container">
        <h2>Featured AI Resources</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3>{resource}</h3>
              <p>Learn the fundamentals and advanced concepts of {resource.toLowerCase()}.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>
        <button className="view-all-button">View All Resources</button>
      </div>
    </section>
  );
};

export default FeaturedResources;