import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedResources from './components/FeaturedResources/FeaturedResources';
import LearningPaths from './components/LearningPaths/LearningPaths';
import AITools from './components/AITools/AITools';
import BlogPosts from './components/BlogPosts/BlogPosts';
import Testimonials from './components/Testimonials/Testimonials';
import FeaturedCourses from './components/FeaturedCourses/FeaturedCourses';
import Community from './components/Community/Community';
import FAQ from './components/FAQ/FAQ';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <FeaturedResources />
        <LearningPaths />
        <AITools />
        <BlogPosts />
        <Testimonials />
        <FeaturedCourses />
        <Community />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;