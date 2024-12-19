import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-semibold">
          Pe<span className="text-primary-color">Unique</span>
        </h1>
        <nav className="flex">
          <Link to="/" className="text-2xl ml-8 hover:text-secondary-color">
            Home
          </Link>
          <Link to="/about" className="text-2xl ml-8 hover:text-secondary-color">
            About
          </Link>
          <Link to="/contact" className="text-2xl ml-8 hover:text-secondary-color">
            Contact
          </Link>
          <Link to="/support" className="text-2xl ml-8 hover:text-secondary-color">
            Support
          </Link>
        </nav>
        <div className="btns flex gap-4">
          <a href="#" className="btn py-3 px-8 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white">
            Get Started
          </a>
          <a href="#" className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
