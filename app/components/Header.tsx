"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="bg-primary text-white px-4 py-2 md:px-8 md:py-4 font-itim">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="relative w-32 md:w-40">
          <Image src="/logo.png" alt="Name Logo" width={500} height={300} className="bg-transparent" />
        </div>

        {/* Desktop Navigation */}
         <nav className="hidden md:flex space-x-4 lg:space-x-6 ml-auto mt-6">
          <Link href="/#home" className="hover:text-purple hover:underline transition duration-300 mt-2">Home</Link>
          <Link href="#about" className="hover:text-purple hover:underline transition duration-300 mt-2">About</Link>
          <Link href="#skills" className="hover:text-purple hover:underline transition duration-300 mt-2">Skills</Link>
          <Link href="#projects" className="hover:text-purple hover:underline transition duration-300 mt-2">Projects</Link>
          <Link href="#contact" className="bg-transparent border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white transition duration-300">Let&apos;s Connect</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-3xl" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <nav className="md:hidden flex flex-col space-y-2 mt-4 bg-primary text-white px-4 py-4 rounded-md">
          <Link href="#home" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300">Home</Link>
          <Link href="#about" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300">About</Link>
          <Link href="#skills" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300">Skills</Link>
          <Link href="#projects" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300">Projects</Link>
          <Link href="#contact" onClick={toggleNav} className="bg-transparent border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white transition duration-300 w-36">Let&apos;s Connect</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
