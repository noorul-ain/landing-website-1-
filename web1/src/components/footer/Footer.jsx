import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f5] border-t py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 space-y-4 sm:space-y-0">
        
        <div className="text-center sm:text-left">
          <p>© 2024 Edusify. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <a 
            href="#" 
            className="text-black hover:text-gray-800 transition-colors duration-200"
          >
            Terms of Services
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
