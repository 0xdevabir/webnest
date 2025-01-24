'use client';

import { useState } from 'react';
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu state (open/close)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-[8vw] sm:text-[4vw] font-bold z-20">wn</a>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-orange-500 transition-all">Home</a>
          <a href="/about" className="hover:text-orange-500 transition-all">About</a>
          <a href="/services" className="hover:text-orange-500 transition-all">Services</a>
          <a href="/contact" className="hover:text-orange-500 transition-all">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col justify-between items-center space-y-2 w-8 h-8 cursor-pointer relative z-20"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-1 bg-white rounded-full transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded-full transition duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded-full transform transition duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`z-10 md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a
          href="/"
          className="text-lg text-white py-2 hover:text-orange-500 transition-all duration-300 delay-100"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-lg text-white py-2 hover:text-orange-500 transition-all duration-300 delay-200"
        >
          About
        </a>
        <a
          href="/services"
          className="text-lg text-white py-2 hover:text-orange-500 transition-all duration-300 delay-300"
        >
          Services
        </a>
        <a
          href="/contact"
          className="text-lg text-white py-2 hover:text-orange-500 transition-all duration-300 delay-400"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
