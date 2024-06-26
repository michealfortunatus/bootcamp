import React from 'react';
import Image from 'next/image';


const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-transparent p-10 rounded-lg shadow-md text-white">
      <div className="flex-1 md:mr-10 mb-6 md:mb-0">
        <h2 className="text-sm text-[#8D8D8D] font-montserrat text-lg font-medium leading-relaxed mb-2 w-[185px]">Testimonials</h2>
        <h3 className="text-3xl font-bold mb-4 text-black font-montserrat ">See what others are saying about us</h3>
        <p className="mb-6 w-[601px] text-black font-montserrat text-lg font-normal leading-loose">
          &quot Explore the course catalog and syllables to identify courses that align with personal learning objectives. Take advantage of interactive tutorials we offer to reinforce your understanding and apply concepts in real world scenarios.&quot
        </p>
        <p className="font-bold w-[203px] text-black font-montserrat text-xl  leading-normal">Faaruq Azeez</p>
        <p className="mb-6 w-[273px] text-black font-montserrat text-xl font-normal leading-normal">
          Founder, Justwear<br /><span className='w-[307px] text-black font-montserrat text-xl font-normal leading-normal text-opacity-50'>United Arab Emirates </span>
        </p>
        <div className="flex items-center  gap-[79px] ml-0 text-black">
          <button className="text-2xl">&larr;</button>
          <button className="text-2xl">&rarr;</button>
        </div>
      </div>
    
      <div className="relative mt-8">
        <div className="absolute inset-0 bg-gray-800 rounded-xl transform -translate-x-2 -translate-y-8"></div>
        <Image
          src="/about.png"
          alt="Testimonial"
          width={536}
          height={502}
          className="relative rounded-xl"
        />
      </div>
    </div>
  );
};

export default Testimonial;
