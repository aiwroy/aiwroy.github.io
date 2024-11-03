import React from 'react';
import './LearningPaths.css';

const LearningPaths = () => {
  const paths = [
    { title: 'Beginner Path', items: ['Python Basics', 'Intro to Machine Learning', 'Data Preprocessing'] },
    { title: 'Intermediate Path', items: ['Advanced Python', 'Deep Learning Fundamentals', 'Natural Language Processing'] },
    { title: 'Advanced Path', items: ['AI Research Methods', 'Reinforcement Learning', 'AI Ethics and Governance'] }
  ];

  return (
    <section className="learning-paths">
      <div className="container">
        <h2>AI Learning Paths</h2>
        <div className="paths-grid">
          {paths.map((path, index) => (
            <div key={index} className="path-card">
              <h3>{path.title}</h3>
              <ul>
                {path.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="start-path-button">Start Path</button>
            </div>
          ))}
        </div>
        <div className="assessment-cta">
          <p>Not sure where to start? Take our assessment to find your ideal path.</p>
          <button className="assessment-button">Take Skill Assessment</button>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;