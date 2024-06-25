import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-500 p-10 rounded-lg shadow-md text-white">
      <div className="flex-1 md:mr-10 mb-6 md:mb-0">
        <h2 className="text-sm text-orange-300 uppercase mb-2">Testimonials</h2>
        <h3 className="text-3xl font-bold mb-4">See what others are saying about us</h3>
        <p className="mb-6">
          "Explore the course catalog and syllables to identify courses that align with personal learning objectives. Take advantage of interactive tutorials we offer to reinforce your understanding and apply concepts in real world scenarios."
        </p>
        <p className="font-bold">Faaruq Azeez</p>
        <p className="mb-6">
          Founder, Justwear<br />United Arab Emirates
        </p>
        <div className="flex items-center justify-between text-orange-300">
          <button className="text-2xl">&larr;</button>
          <button className="text-2xl">&rarr;</button>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative">
          <div className="absolute top-2 left-2 bg-gray-700 rounded-lg p-2">
            <img
              src="/path/to/your/image.png"
              alt="Two people collaborating"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="bg-gray-800 rounded-lg p-2">
            <img
              src="/path/to/your/image.png"
              alt="Two people collaborating"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
