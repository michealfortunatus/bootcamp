import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Testimonial from './components/Testimonial';

const Home: React.FC = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <About/>
      <Testimonial/>
    </div>
  );
};

export default Home;
