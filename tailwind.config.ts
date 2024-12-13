import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'], 
        itim: ['Itim', 'cursive'],
        grover: ['"Irish Grover"', 'cursive'],
      },
      colors: {
        primary: '#0D1729',       // Dark background color
        purple: '#B68AD3',        // Purple color for buttons and borders
        lightPurple: '#5C0B91',   // Light purple for hover effects
        grayText: '#B0A7A7',      // Text color for subheadings
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards', // New fade-in animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
