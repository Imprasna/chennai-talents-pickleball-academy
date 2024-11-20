import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="mb-2">Follow Us on Social Media</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-pickle hover:text-white">Facebook</a>
        <a href="#" className="text-pickle hover:text-white">Instagram</a>
        <a href="#" className="text-pickle hover:text-white">Twitter</a>
      </div>
      <p className="text-gray-400 text-sm mt-4">&copy; 2024 Pickleball Sports. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
