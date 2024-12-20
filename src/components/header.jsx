<<<<<<< HEAD
import React, { useState } from "react";
=======


import React from "react";
>>>>>>> 848b7bfdcabad5bcee5f83a2c75c368b54f75661
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<<<<<<< HEAD
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 md:p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold">
          Pe<span className="text-primary-color">Unique</span>
        </h1>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:flex md:static md:w-auto md:gap-8`}
        >
          <Link
            to="/"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/support"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href="#"
            className="btn py-3 px-8 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Get Started
          </a>
          <Link
            to="/login"
            className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Buttons in the collapsible menu (small screens) */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <a
            href="#"
            className="btn py-3 px-8 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Get Started
          </a>
          <Link
            to="/login"
            className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </header>
=======
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 md:p-6 h-auto">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-semibold">
        Pe<span className="text-primary-color">Unique</span>
      </h1>
      <nav className="flex">
        <ul className="flex gap-20">
          <li>
            <Link to="/" className="text-xl hover:text-secondary-color">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl hover:text-secondary-color">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl hover:text-secondary-color">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/support" className="text-xl hover:text-secondary-color">
              Support
            </Link>
          </li>
        </ul>
      </nav>
      <div className="btns flex gap-4">
        <a href="#" className="btn py-3 px-8 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white">
          Get Started
        </a>
        <Link to='/login' className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white">
          Login
        </Link>
      </div>
    </div>
  </header>
>>>>>>> 848b7bfdcabad5bcee5f83a2c75c368b54f75661
  );
};

export default Header;