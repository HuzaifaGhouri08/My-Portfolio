"use client"; 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'; // Import Next.js Image component

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

      if (form.current) {
      emailjs
        .sendForm('service_mjyk5yr', 'template_ykbhexi', form.current, 'ZWglnUDfnc3dFIFec')
        .then(
          () => {
            alert("Your message has been sent successfully!");
            form.current?.reset();
          },
          (error) => {
            alert("Failed to send message, please try again.");
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section id="contact">
      <div className="min-h-screen flex items-center pt-24 justify-center bg-primary p-4">
        <div className="bg-[#0B0D24] rounded-lg shadow-lg flex flex-col md:flex-row p-8 max-w-4xl w-full animate-fadeIn">
          {/* Left Side Image */}
          <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
            <Image
              src="/contacts.jpg"
              alt="Contact Illustration"
              width={240} 
              height={240}
              className="w-48 h-48 md:w-60 md:h-60 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-lightPurple"
            />
          </div>

          {/* Right Side Form */}
          <div className="flex-1 md:ml-6">
            <h1 className="text-3xl font-extrabold text-purple mb-6 tracking-widest font-grover">Get In Touch</h1>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 font-itim">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required
                  id='first_name'
                  name="first_name"
                  type="text"
                  placeholder="First name"
                  className="p-3 rounded bg-purple text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lightPurple transition duration-300"
                />
                <input required
                  id='last_name'
                  name="last_name"
                  type="text"
                  placeholder="Last name"
                  className="p-3 rounded bg-purple text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lightPurple transition duration-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required
                id='email_id'
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded bg-purple text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lightPurple transition duration-300"
                />
                <input required
                id='con_num'
                  name="phone_no"
                  type="tel"
                  placeholder="Phone no"
                  className="p-3 rounded bg-purple text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lightPurple transition duration-300"
                />
              </div>
              <textarea
              id='message'
                name="message"
                placeholder="Message"
                className="w-full p-3 rounded bg-purple text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lightPurple transition duration-300"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 rounded bg-purple text-white font-semibold text-lg hover:bg-lightPurple transform hover:scale-100 transition duration-300"
              >
                Send
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-6 text-2xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transform hover:scale-125 hover:rotate-6 hover:shadow-lg transition duration-300"
              >
                <Image src="/facebook-icon.png" alt="Facebook" width={32} height={32} className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/huzaifaghouri/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transform hover:scale-125 hover:-rotate-6 hover:shadow-lg transition duration-300"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transform hover:scale-125 hover:rotate-6 hover:shadow-lg transition duration-300"
              >
                <Image src="/instagrams.png" alt="Instagram" width={32} height={32} className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/HuzaifaGhouri08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transform hover:scale-125 hover:-rotate-6 hover:shadow-lg transition duration-300"
              >
                <Image src="/github-icon.png" alt="GitHub" width={32} height={32} className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
