import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white">My Next.js App</h1>
        <p className="text-white/80 mt-2">Welcome to our awesome application!</p>
      </div>
    </header>
  );
};

export default Header; 