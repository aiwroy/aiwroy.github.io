import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    { q: "What is AI with Roy?", a: "AI with Roy is a comprehensive learning platform that provides resources, courses, and community support for aspiring AI engineers. Our goal is to help you master artificial intelligence concepts and techniques." },
    { q: "Do I need prior programming experience?", a: "While some programming experience is beneficial, we offer courses for beginners as well. Our Introduction to Python for AI course is a great starting point for those new to programming." },
    { q: "Are the courses self-paced?", a: "Yes, all our courses are self-paced. You can learn at your own speed and revisit the materials as often as you need." },
    { q: "Do you offer job placement assistance?", a: "While we don't offer direct job placement, our career resources section provides guidance on building your portfolio, preparing for interviews, and networking in the AI industry." },
    { q: "Can I get a certificate after completing a course?", a: "Yes, upon successful completion of each course, you'll receive a digital certificate that you can share on your resume or LinkedIn profile." },
    { q: "How can I join the AI community?", a: "You can join our AI community by signing up on our website. This will give you access to our forums, weekly challenges, and virtual meetups." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.q}
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <button className="contact-support-button">Contact Support</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;