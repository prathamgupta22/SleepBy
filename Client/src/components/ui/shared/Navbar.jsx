import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white p-4 border-b-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">
            <span className="font-bold text-gray-900">Sleep</span>
            <span className="text-red-600 font-bold">Wysa</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-black font-semibold hover:text-gray-500 transition"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-black font-semibold hover:text-gray-500 transition"
          >
            About
          </Link>
          <Link
            to="/signup"
            className="text-black font-semibold hover:text-gray-500 transition"
          >
            SignUp
          </Link>
          <Link
            to="/login"
            className="text-black font-semibold hover:text-gray-500 transition"
          >
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
