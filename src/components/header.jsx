

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;