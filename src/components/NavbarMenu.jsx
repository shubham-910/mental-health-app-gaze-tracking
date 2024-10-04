import React, { useState, useEffect } from 'react';

const NavbarManu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 px-8 z-10 transition-colors duration-300 ${isScrolled ? 'bg-hover-navcolor' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
          <a href='/home'>GazeTrack</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-3xl ${isScrolled ? 'text-black' : 'text-white'}`}
          >
            ☰
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="/home" className={`hover:text-gray-300 ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white'}`}>
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className={`hover:text-gray-300 ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white'}`}>
                About Us
              </a>
            </li>
            <li>
              <a href="/insights" className={`hover:text-gray-300 ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white'}`}>
                Insights
              </a>
            </li>
          </ul>
        </div>

        {/* Logout Button for Desktop */}
        <div className="hidden md:block">
          <a
            href="#logout"
            className={`py-2 px-4 border rounded transition-colors ${
              isScrolled 
                ? 'border-black text-black hover:bg-white hover:text-red-500' 
                : 'border-white text-white hover:bg-white hover:text-red-500'
            }`}
          >
            Log out
          </a>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-hover-navcolor p-4 text-black space-y-4">
          <a href="/home" className="block">App Info</a>
          <a href="/about-us" className="block">About Us</a>
          <a href="/insights" className="block">Insights</a>
          <a href="#logout" className="block">Log out</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarManu;
