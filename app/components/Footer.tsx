"use client";
import { useState } from 'react';
import React from 'react';
import { FiMenu } from 'react-icons/fi'; // Importing a menu icon
import Image from 'next/image'; // Importing the optimized Image component

const Footer: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <footer className="bg-[#0B0D24] py-10 text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
                {/* About Me with Menu Icon */}
                <div className="relative">
                    <div className="flex justify-center items-center">
                        <h2 className="text-purple font-grover text-lg font-normal mb-2 flex-grow text-center">About Me</h2>

                        {/* Menu Icon */}
                        <button
                            className="md:hidden"
                            onClick={() => setShowMenu(!showMenu)}
                            aria-label="Toggle Menu"
                        >
                            <FiMenu className="text-white w-6 h-6 ml-2" />
                        </button>
                    </div>
                    <p className="font-itim text-white text-center">Hello! I&apos;m Huzaifa Ghouri, a passionate frontend developer, currently lreaning MERN.</p>
                </div>

                {/* Quick Links */}
                <div className={`text-lg text-white ${showMenu ? 'block' : 'hidden'} md:block`}>
                    <h2 className="text-purple font-grover font-normal mb-2 text-center">Quick Links</h2>
                    <a href="#home" className="font-itim block hover:text-purple hover:underline transition duration-300 mt-2 font-grover">
                        Home
                    </a>
                    <a href="#about" className="font-itim block hover:text-purple hover:underline transition duration-300 mt-2 font-grover">
                        About
                    </a>
                    <a href="#skills" className="font-itim block hover:text-purple hover:underline transition duration-300 mt-2 font-grover">
                        Skills
                    </a>
                    <a href="#projects" className="font-itim block hover:text-purple hover:underline transition duration-300 mt-2 font-grover">
                        Projects
                    </a>
                    <a href="#contact" className="font-itim block hover:text-purple hover:underline transition duration-300 mt-2 font-grover">
                        Contact
                    </a>
                </div>

                {/* Contact Me */}
                <div>
                    <h2 className="text-purple font-grover text-lg font-normal mb-2 text-center">Contact Me</h2>
                    <ul className="space-y-1 font-itim text-white text-center">
                        <li>Email: huzaifaam991@gmail.com</li>
                        <li>Address: Karachi, Pakistan</li>
                    </ul>
                </div>

                {/* Follow Me */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-purple font-grover text-lg font-normal mb-2 text-center">Follow Me</h2>
                    <div className='flex justify-center space-x-4 text-2xl'>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="transform hover:scale-125 hover:rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <Image src="/facebook-icon.png" alt="Facebook" width={32} height={32} />
                        </a>
                        <a
                            href="https://linkedin.com/in/huzaifaghouri/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="transform hover:scale-125 hover:-rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <Image src="/linkedin-icon.png" alt="LinkedIn" width={32} height={32} />
                        </a>
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="transform hover:scale-125 hover:rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <Image src="/instagrams.png" alt="Instagram" width={32} height={32} />
                        </a>
                        <a
                            href="https://github.com/huzaifaghouri08"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="transform hover:scale-125 hover:-rotate-6 hover:shadow-lg transition duration-300"
                        >
                            <Image src="/github-icon.png" alt="GitHub" width={32} height={32} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
