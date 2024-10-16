import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearchLocation, FaBars, FaTimes } from "react-icons/fa"; 

export const Navbar = ({ onCitySearch }) => {
  const [searchCity, setSearchCity] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      onCitySearch(searchCity);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 bg-richblack-900 w-full mx-auto rounded-b-lg sticky top-0 z-50 shadow-lg shadow-blue-500/30">
      <div className='w-8/12 mx-auto'>
        <div className="flex items-center justify-between w-full mx-auto">
          {/* Left side: Logo and Search bar for mobile */}
          <div className="flex items-center justify-between w-full md:w-[60%]">
            {/* Logo: Show "V" on mobile and "Vaayu" on larger screens */}
            <NavLink to="/" className="text-richblack-100 text-3xl font-bold font-inter mr-4 md:mr-0">
              <span className="block md:hidden text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">V</span>
              <span className="hidden md:block">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'>Vaa</span><span className='text-richblack-100'>yu</span>
              </span>
            </NavLink>

            {/* Search Bar: Always visible, but styled differently on mobile */}
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 w-full md:w-[80%] md:flex-row">
              {/* Input container with relative positioning */}
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  value={searchCity}
                  onChange={handleSearchChange}
                  placeholder="Search city"
                  className="pl-10 pr-4 py-2 rounded-md text-black w-full md:w-full" // Ensure full width for both mobile and desktop
                />
                {/* Search icon inside the input field */}
                <FaSearchLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-richblackYellow text-white font-semibold"
              >
                {/* Removed text and only kept the button without text */}
              </button>
            </form>
          </div>

          {/* Right side: Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink
              to="/"
              exact
              className={({ isActive }) => `text-xl ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
            >
              Home
            </NavLink>
            <NavLink
              to="/heatmap"
              className={({ isActive }) => `text-xl ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
            >
              Heatmap
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) => `text-xl ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
            >
              Info
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `text-xl ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
            >
              About
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden"> {/* Visible on small screens */}
            <button onClick={toggleMobileMenu} className="text-richblack-100 focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Show close icon if menu is open */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-2"> {/* Hidden on large screens */}
            <NavLink
              to="/"
              exact
              className={({ isActive }) => `text-lg ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/heatmap"
              className={({ isActive }) => `text-lg ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
              onClick={toggleMobileMenu}
            >
              Heatmap
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) => `text-lg ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
              onClick={toggleMobileMenu}
            >
              Info
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `text-lg ${isActive ? 'text-blue-500' : 'text-richblack-100'} hover:text-richblack-yellow`}
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
