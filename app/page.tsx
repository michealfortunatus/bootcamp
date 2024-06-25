import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Subscribe from './components/About';

const Home: React.FC = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <About/>
      <Testimonial/>
      <Subscribe/>
    </div>
  );
};

export default Home;
