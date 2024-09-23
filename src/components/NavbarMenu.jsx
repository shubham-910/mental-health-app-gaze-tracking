import React, { useState, useEffect } from 'react';

const NavbarManu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set `isScrolled` to true if the page is scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove scroll event listener from window
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 px-8 z-10 transition-colors duration-300 ${isScrolled ? 'bg-hover-navcolor' : 'bg-transparent'}`}>
  <div className="container mx-auto flex justify-between items-center">
    <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}></div>

    {/* Wrap other menu items in a flex-grow div */}
    <div className="flex-grow">
      <ul className="flex space-x-6">
        <li>
          <a href="/main" className={`hover:text-gray-300 ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white'}`}>
            App info
          </a>
        </li>
        <li>
          <a href="/about-us" className={`hover:text-gray-300 ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white'}`}>
            Preferences
          </a>
        </li>
        <li>
          <a href="/contact-us" className={`hover:text-gray-300 ${isScrolled ? 'text-black hover:text-gray-800' : 'text-white'}`}>
            Insights
          </a>
        </li>
      </ul>
    </div>

    {/* Place the logout button in its own div to stay at the right */}
    <div>
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
</nav>

  );
};

export default NavbarManu;
