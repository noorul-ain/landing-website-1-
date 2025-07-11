import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-blue-700 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white transform rotate-45 rounded-sm flex items-center justify-center">
            <div className="w-5 h-5 bg-blue-700 transform -rotate-45 rounded-sm"></div>
          </div>
          <span className="text-white text-xl font-bold">Edusity</span>
        </div>

        {/* Desktop Links */}
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
          <a
            href="#contact"
            className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4 px-4 pb-4 bg-blue-700 rounded-md">
          <a href="#home" className="block text-white hover:text-blue-200" onClick={toggleMenu}>
            Home
          </a>
          <a href="#program" className="block text-white hover:text-blue-200" onClick={toggleMenu}>
            Program
          </a>
          <a href="#about" className="block text-white hover:text-blue-200" onClick={toggleMenu}>
            About us
          </a>
          <a href="#campus" className="block text-white hover:text-blue-200" onClick={toggleMenu}>
            Campus
          </a>
          <a href="#testimonials" className="block text-white hover:text-blue-200" onClick={toggleMenu}>
            Testimonials
          </a>
          <a
            href="#contact"
            className="block text-center bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-50"
            onClick={toggleMenu}
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
