import { useAuth } from "@/context/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 border-b-2 shadow-md">
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

          {auth.user ? (
            <Link
              onClick={handleLogout}
              to="/login"
              className="text-black font-semibold hover:text-gray-500 transition"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-black font-semibold hover:text-gray-500 transition"
            >
              Login
            </Link>
          )}
          <Link
            to="/sleep"
            className="text-black font-semibold hover:text-gray-500 transition"
          >
            Summary
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg p-4">
          <Link
            to="/"
            className="block text-black font-semibold hover:text-gray-500 transition mb-4"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/About"
            className="block text-black font-semibold hover:text-gray-500 transition mb-4"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/signup"
            className="block text-black font-semibold hover:text-gray-500 transition mb-4"
            onClick={() => setIsOpen(false)}
          >
            SignUp
          </Link>
          {auth.user ? (
            <Link
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              to="/login"
              className="block text-black font-semibold hover:text-gray-500 transition mb-4"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="block text-black font-semibold hover:text-gray-500 transition mb-4"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
