"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percentage: 94 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "Next.js", percentage: 75 },
  { name: "Tailwind.css", percentage: 70 },
  { name: "Python", percentage: 30 },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold: 0.5 });

    // Store the current ref in a variable before using it
    const currentRef = skillsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored ref during cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills">
      <div ref={skillsRef} className="bg-[#0B0D24] pt-24 text-white min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl p-4 sm:p-8">
          <h2 className="font-grover col-span-full text-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-purple tracking-widest">
            Skills
          </h2>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center opacity-0"
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-purple-500"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${isVisible ? skill.percentage : 0}, 100`}
                    stroke={`url(#${skill.name})`}
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    style={{
                      transition: "stroke-dasharray 2s ease-out",
                    }}
                  />
                  <defs>
                    <linearGradient id={skill.name} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9b34eb" />
                      <stop offset="100%" stopColor="#5a3dd9" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white">
                  {skill.percentage}%
                </span>
              </div>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-itim font-medium text-gray-400">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
