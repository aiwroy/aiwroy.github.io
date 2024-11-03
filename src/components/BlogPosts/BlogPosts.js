import React from 'react';
import './BlogPosts.css';

const BlogPosts = () => {
  const posts = [
    { title: 'The Future of AI in Healthcare', date: 'May 15, 2023' },
    { title: 'Mastering Neural Networks', date: 'May 10, 2023' },
    { title: 'Ethics in AI Development', date: 'May 5, 2023' }
  ];

  return (
    <section className="blog-posts">
      <div className="container">
        <h2>Latest from the Blog</h2>
        <div className="posts-grid">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <h3>{post.title}</h3>
              <p>Exploring the latest developments and insights in AI.</p>
              <div className="post-footer">
                <span className="post-date">{post.date}</span>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-button">View All Posts</button>
      </div>
    </section>
  );
};

export default BlogPosts;