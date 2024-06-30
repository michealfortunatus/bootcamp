"use client"
import React, { useState, FormEvent } from 'react';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Successfully subscribed with ${email}`);
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-10 shadow-md rounded-lg">
      <h2 className=" mb-2 w-full text-center text-black font-montserrat text-xl sm:text-2xl md:text-3xl font-bold leading-normal">Email capture form for updates and promotions</h2>
      <p className="text-black font-montserrat text-lg font-normal leading-normal text-opacity-75 text-center mb-6">
        Subscribe to our newsletters and stay up to date on features and releases.
      </p>
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}
      <form className="flex w-full max-w-md rounded-full border-2 border-black border-opacity-75" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="flex-grow p-3 rounded-full"
          required
        />
        <button
          type="submit"
          className="p-0 md:p-3  bg-[#031428] text-white border-2 border-black rounded-full"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
