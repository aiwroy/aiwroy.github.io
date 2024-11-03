import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Smith', role: 'Data Scientist', content: "AI with Roy's resources have been instrumental in my journey to becoming a proficient AI engineer. The structured learning paths and hands-on projects really accelerated my growth." },
    { name: 'Emily Johnson', role: 'ML Engineer', content: "The AI tools section on AI with Roy's website is a goldmine. It introduced me to cutting-edge technologies that I now use daily in my work as a machine learning engineer." },
    { name: 'Michael Rodriguez', role: 'AI Researcher', content: "The blog posts on AI ethics have been eye-opening. They've helped me approach my AI research with a more balanced and responsible perspective. Truly valuable content!" }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.name[0]}</div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;