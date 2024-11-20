import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-pickle text-black h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Discover the Thrill of Pickleball</h1>
        <p className="text-lg mb-6">
          A sport for everyone. Fast-paced, fun, and easy to learn!
        </p>
        <button className="bg-white text-pickle px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
