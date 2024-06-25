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
      <h2 className="text-2xl font-bold mb-2">Email capture form for updates and promotions</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletters and stay up to date on features and releases.
      </p>
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}
      <form className="flex w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          required
        />
        <button
          type="submit"
          className="p-3 bg-black text-white rounded-r-lg hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
