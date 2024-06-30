import React from 'react';
import BackgroundImageLarge from '../assets/background3.png';
import BackgroundImageSmall from '../assets/mobile-bg.png';

const Hero: React.FC = () => {
  return (
    <div className="relative text-white py-20 px-4 text-center md:text-left cursor-pointer ">
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${BackgroundImageLarge.src})` }}
      ></div>
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover block md:hidden "
        style={{ backgroundImage: `url(${BackgroundImageSmall.src})`, backgroundSize: 'contain' }}
      ></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="flex-1 mt-10 md:mt-0">
          <div className="relative w-40 h-40 md:w-64 md:h-64 mx-auto md:mx-0">
            {/* <Image src={HeroImage} alt="Learning" layout="fill" objectFit="cover" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
