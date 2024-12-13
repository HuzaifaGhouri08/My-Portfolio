"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const titles = ["Frontend Developer", "Video Editor", "Photo Editor"];

const MainSection: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[index % titles.length];
      if (deleting) {
        setText(currentTitle.substring(0, text.length - 1));
        setSpeed(100); // Speed up when deleting
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        setSpeed(200); // Slower when typing
      }

      if (!deleting && text === currentTitle) {
        setTimeout(() => setDeleting(true), 1000); // Pause before deleting
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => prev + 1); // Move to next title
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, index, speed]);

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.png')" }}>
      <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-5 md:p-10 bg">
        
        {/* Left Side: Text */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block font-itim tracking-widest text-lg border-2 border-purple px-4 py-1 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-2xl md:text-5xl font-grover font-light text-white">
            Hi! I&apos;m Huzaifa Khan {" "}
            <span className="text-purple brightness-125">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>
          
          <p className="text-gray-300 text-md md:text-base font-itim">Passionate Front-end Developer. Continuously learning and exploring the MERN stack to elevate my development capabilities.</p>
          
          <motion.button
            className="bg-transparent font-itim text-white border border-gray-300 py-2 px-5 rounded-full hover:bg-purple transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
          > 
            <Link href="/contact">Let&apos;s Connect</Link>
          </motion.button>
        </motion.div>
        
        {/* Right Side: Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image src="/profile.jpg" alt="Profile Image" width={200} height={200} className="rounded-full shadow-lg"/>
        </motion.div>
        
      </section>
    </div>
  );
};

export default MainSection;
