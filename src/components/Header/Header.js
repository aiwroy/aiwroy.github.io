import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <div className="container">
          <div className="logo">AI with Roy</div>
          <ul className="nav-links">
            {['Home', 'Resources', 'Courses', 'Blog', 'Community', 'About', 'Contact'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;