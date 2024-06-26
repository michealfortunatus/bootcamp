"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cover bg-center p-4 cursor-pointer" style={{ backgroundImage: "url('/navbarimg2.png')" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 ml-14">
          <Image src="/TECHNEW.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link href="/" passHref>
            <span className="text-[20px] font-montserrat font-medium leading-[24px] text-[#FFF]">Home</span>
          </Link>
          <Link href="/todolist" passHref>
            <span className="text-[20px] font-montserrat font-extrabold leading-[24px] text-[#4393D8]">Bootcamp</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" passHref>
            <span className="block p-2 text-[20px] font-montserrat font-medium leading-[24px] text-[#FFF]">Home</span>
          </Link>
          <Link href="/todolist" passHref>
            <span className="text-[20px] font-montserrat font-extrabold leading-[24px] text-[#4393D8]">Bootcamp</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
