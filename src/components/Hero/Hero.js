import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Become an AI Engineer</h1>
          <p>Join Roy on a journey to master AI engineering with curated resources and expert guidance.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-card">
          <h2>Latest Resources</h2>
          <ul>
            <li><a href="#">Introduction to Machine Learning</a></li>
            <li><a href="#">Deep Learning Fundamentals</a></li>
            <li><a href="#">Natural Language Processing</a></li>
          </ul>
          <button className="secondary-button">View All Resources</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;