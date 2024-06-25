"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">TECHNEW</div>
        <div className="hidden md:flex space-x-6">
        <Link href="/"><li className="text-white">Home</li></Link>
        <Link href="/todolist"><li className="text-white">BootCamp</li></Link>
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
          <Link href="/"><li className="block text-white p-2">Home</li></Link>
          <Link href="/todolist"><li className="block text-white p-2">BootCamp</li></Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
