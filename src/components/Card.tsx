import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Card; 