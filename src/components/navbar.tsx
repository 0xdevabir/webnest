'use client';
import Link from "next/link";
import { useState } from 'react';
// import Image from "next/image";
// import logo from "../../../public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu state (open/close)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
   <div className="">
     <nav className="bg-transparent absolute top-0 left-0 w-full z-30 text-white p-[12px] sm:p-[0px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[8vw] sm:text-[4vw] font-bold z-20">
            <span className="text-[#2F3737]">w</span>
            <span className="text-[#A8BCA1]">n</span>
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-10 text-[20px] font-[600]">
          <Link href="/" className="text-[#2F3737] hover:text-[#A8BCA1] transition-all">Home</Link>
          <Link href="/about" className="text-[#2F3737] hover:text-[#A8BCA1] transition-all">About</Link>
          <Link href="/services" className="text-[#2F3737] hover:text-[#A8BCA1] transition-all">Services</Link>
          <Link href="/portfolio" className="text-[#2F3737] hover:text-[#A8BCA1] transition-all">Portfolio</Link>
          <Link href="/blog" className="text-[#2F3737] hover:text-[#A8BCA1] transition-all">Blog</Link>
          <Link href="/contact" className="text-[#2F3737] hover:text-[#A8BCA1] transition-all">Contact</Link>
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
        <div
  className={`z-10 md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}
>
  <Link
    href="/"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-100"
  >
    Home
  </Link>
  <Link
    href="/about"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-200"
  >
    About
  </Link>
  <Link
    href="/services"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-300"
  >
    Services
  </Link>
  <Link
    href="/porfolio"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-300"
  >
    Portfolio
  </Link>
  <Link
    href="/blog"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-400"
  >
    Blog
  </Link>
  <Link
    href="/contact"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-500"
  >
    Contact
  </Link>
</div>

      </div>
    </nav>
   </div>
  );
}
