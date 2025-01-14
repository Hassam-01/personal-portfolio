import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-opacity-90 shadow-lg">
      <div className="flex justify-between items-center text-white p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <h1>MyBrand</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
          <a href="#instagram" className="hover:text-gray-400 transition">
            Insta
          </a>
          <a href="#github" className="hover:text-gray-400 transition">
            Github
          </a>
          <a href="#linkedin" className="hover:text-gray-400 transition">
            LinkedIn
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white p-4 space-y-4">
          <a
            href="#home"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#instagram"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Insta
          </a>
          <a
            href="#github"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Github
          </a>
          <a
            href="#linkedin"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}
