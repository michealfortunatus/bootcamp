import React from 'react';
import Image from 'next/image';
// import HeroImage from '../assets/Hero.png';
import BackgroundImage from '../assets/background3.png';

const Hero: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-20 px-4 text-center md:text-left cursor-pointer"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
       <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Get the best knowledge from our Versatile Tutors</h1>
          <button className="bg-white text-blue-900 py-2 px-4 rounded">Start learning!</button>
        </div>  */}
        <div className="flex-1 mt-10 md:mt-0">
           <div className="relative w-40 h-40 md:w-64 md:h-64  mx-auto md:mx-0"> 
            {/* <Image src={HeroImage} alt="Learning" layout="fill" objectFit="cover" /> */}
           </div> 
        </div>
      </div> 
    </div>
  );
};

export default Hero;
