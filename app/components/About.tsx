"use client"
import React from 'react';


const About: React.FC = () => {
  const gradientStyles = {
    backgroundImage: 'linear-gradient(to right, #F90 50%, #072951 50%)',
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden m-5 p-5 md:m-20 rounded-[24px] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#f90]"></div>
      <div className="absolute top-0 bottom-0 left-0 w-1" style={gradientStyles}></div>
      <div className="absolute top-0 bottom-0 right-0 w-1" style={gradientStyles}></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#072951]" ></div>

      <div className="flex-1 md:w-[572px] h-[582px]">
        <img
          src="/about.png"
          alt="Child looking at computer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6">
        <h2 className=" mb-4 md:w-[530px] text-black font-montserrat text-3xl font-bold">Fast track your Tech Career</h2>
        <p className="mb-4 md:w-[500px] text-black text-opacity-75 font-montserrat text-xl font-light">
          Get the right teams with zero worries for your project every now and
          then. Get the right teams with zero worries for your project every now
          and then.
        </p>
      <div className="flex items-center p-6 gap-10 ">
        <div className="mb-4">
        <button className="block mt-4 text-white rounded-lg bg-blue-900  px-6 py-2 justify-center items-center ">
        #30,000.00
        </button>
          {/* <span className="block text-lg font-bold text-blue-600">#30,000.00</span>
          <span className="block text-gray-500">3 months</span> */}
        <button className=" block mt-4 bg-black text-white px-6 py-2 rounded-lg ">
         Mon-Fri (4pm - 6pm)
        </button>
        </div>
        <div className="mb-4">
        <button className=" block mt-4 bg-[#4393D8] text-white px-4 py-2 rounded-md rounded-lg">
          3 months
        </button>
        <button className=" block mt-4 bg-[#8D8D8D] text-white px-4 py-2 rounded-md ">
        GoogleMeet
        </button>
          {/* <span className="block text-gray-500">Mon-Fri (4pm - 6pm)</span>
          <span className="block text-gray-500">GoogleMeet</span> */}
        </div>
        </div>
        <div className='flex items-center gap-10 '>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          
          </button>
          <p className='text-blue-900 font-montserrat text-2xl font-semibold'>
          More details
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
