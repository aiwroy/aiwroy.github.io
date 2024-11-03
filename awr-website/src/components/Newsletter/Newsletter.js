import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Stay Updated with AI Insights</h2>
        <p>Subscribe to our newsletter and get the latest AI trends, tutorials, and resources delivered straight to your inbox.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <p className="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default Newsletter;