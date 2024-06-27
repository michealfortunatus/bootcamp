import React from 'react';
import { FaFacebookF, FaTwitter , FaLinkedinIn  } from "react-icons/fa";




const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072951] text-white py-8 px-2 md:w-[1440px] md:h-[300px]" >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className=" text-white text-6xl font-bold font-poppins">LOGO</h1>
          <p className="mt-4 w-[321px] font-montserrat text-base font-light">Subscribe to our newsletters and stay up to date on features and releases.</p>
          <p className="mt-2 font-montserrat text-base font-bold">Copyrights @ Progfams 2024</p>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 gap-[100px]  ">
          <div className="flex flex-col space-y-8 text-center md:text-left">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Service</a>
          </div>
          <div className="flex flex-col space-y-8 text-center md:text-left">
            <a href="#" className="hover:underline">Works</a>
            <a href="#" className="hover:underline">Boot Camp</a>
          </div>
          <div className="flex flex-col space-y-8 text-center md:text-left">
            <a href="#" className="hover:underline">Consultation</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>
        </div>
        <div className="text-center md:text-left m-12">
          <p className="font-bold">Contact</p>
          <p className="mt-2">+234 810 112 8072</p>
          <p>Info@Progfams.com</p>
          <p>10B, Harmony Close, <br></br> Ikeja, Lagos.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
          
          <a href="#" className="bg-white rounded-full p-2">
          <FaLinkedinIn  className="w-6 h-6 text-black"/>
          </a>
            <a href="#" className="bg-white rounded-full p-2">
            <FaTwitter className="w-6 h-6 text-black " />
            </a>
            <a href="#" className="bg-white rounded-full p-2">
            <FaFacebookF className="w-6 h-6 text-black" />
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
