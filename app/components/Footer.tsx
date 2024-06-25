import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex-1">
        <img
          src="/path/to/your/image.png"
          alt="Child looking at computer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Fast track your Tech Career</h2>
        <p className="mb-4">
          Get the right teams with zero worries for your project every now and
          then. Get the right teams with zero worries for your project every now
          and then.
        </p>
        <div className="mb-4">
          <span className="block text-lg font-bold text-blue-600">#30,000.00</span>
          <span className="block text-gray-500">3 months</span>
        </div>
        <div className="mb-4">
          <span className="block text-gray-500">Mon-Fri (4pm - 6pm)</span>
          <span className="block text-gray-500">GoogleMeet</span>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          More details
        </button>
      </div>
    </div>
  );
};

export default About;


