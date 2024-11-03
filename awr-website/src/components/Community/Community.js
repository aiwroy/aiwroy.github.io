import React from 'react';
import './Community.css';

const Community = () => {
  const features = ['Engage in forum discussions', 'Participate in coding challenges', 'Attend virtual meetups and webinars'];
  const programs = ['Weekly AI Challenges', 'Mentorship Program', 'AI Project Collaboration'];

  return (
    <section className="community">
      <div className="container">
        <h2>Join Our AI Community</h2>
        <div className="community-content">
          <div className="community-info">
            <h3>Connect with AI Enthusiasts</h3>
            <p>Join our vibrant community of AI learners, professionals, and enthusiasts. Share knowledge, collaborate on projects, and grow together in the exciting field of artificial intelligence.</p>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="join-button">Join Community</button>
          </div>
          <div className="community-programs">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <h4>{program}</h4>
                <p>Enhance your AI skills through practical experiences and expert guidance.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;