import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white transform rotate-45 rounded-sm flex items-center justify-center">
            <div className="w-5 h-5 bg-blue-700 transform -rotate-45 rounded-sm"></div>
          </div>
          <span className="text-white text-xl font-bold">Edusity</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-blue-200 transition-colors duration-200">
            Home
          </a>
          <a href="#program" className="text-white hover:text-blue-200 transition-colors duration-200">
            Program
          </a>
          <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-200">
            About us
          </a>
          <a href="#campus" className="text-white hover:text-blue-200 transition-colors duration-200">
            Campus
          </a>
          <a href="#testimonials" className="text-white hover:text-blue-200 transition-colors duration-200">
            Testimonials
          </a>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200">
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;