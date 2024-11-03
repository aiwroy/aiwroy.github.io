import React from 'react';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const courses = [
    { title: 'Introduction to Machine Learning', features: ['10 hours of video content', '5 hands-on projects', 'Certificate upon completion'] },
    { title: 'Deep Learning Masterclass', features: ['15 hours of video content', '8 advanced projects', '1-on-1 mentoring sessions'] },
    { title: 'Natural Language Processing', features: ['12 hours of video content', '6 real-world NLP projects', 'Access to NLP tools and datasets'] }
  ];

  return (
    <section className="featured-courses">
      <div className="container">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p>Comprehensive course to boost your AI skills.</p>
              <ul>
                {course.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="enroll-button">Enroll Now</button>
            </div>
          ))}
        </div>
        <button className="view-all-button">View All Courses</button>
      </div>
    </section>
  );
};

export default FeaturedCourses;