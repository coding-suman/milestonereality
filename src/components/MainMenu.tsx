// components/MainMenu.tsx

"use client"; // This is a client-side component

import { useState } from "react";
import { Menu, Close, QuestionMark, Instagram, Facebook } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-blue-900 text-white w-full shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/next.svg" alt="Milestone Realty - Logo" className="h-10 w-auto" />
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="/" className="text-yellow-400 font-semibold hover:underline">Home</a>
              <a href="/projects" className="hover:text-yellow-400 hover:underline">Projects</a>
              <a href="/about" className="hover:text-yellow-400 hover:underline">About Us</a>
              <a href="/contact" className="hover:text-yellow-400 hover:underline">Contact Us</a>
            </div>
            {/* Social Icons */}
            <div className="hidden md:flex space-x-2">
              <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold flex items-center gap-2">
                <QuestionMark /> Enquire Now
              </button>
              <button className="bg-yellow-400 text-blue-900 p-2 rounded-md">
                <Instagram sx={{ color: pink[500] }} />
              </button>
              <button className="bg-yellow-400 text-blue-900 p-2 rounded-md">
                <Facebook />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={handleMenuToggle} className="text-white p-2">
                {isMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900 px-4 pb-4">
            <a href="/" className="block text-yellow-400 font-semibold py-2">Home</a>
            <a href="/projects" className="block text-white py-2 hover:text-yellow-400">Projects</a>
            <a href="/about" className="block text-white py-2 hover:text-yellow-400">About Us</a>
            <a href="/contact" className="block text-white py-2 hover:text-yellow-400">Contact Us</a>
            <button className="w-full bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold flex items-center justify-center gap-2 mt-2">
              <span>Enquire Now</span>
            </button>
            <div className="flex justify-center space-x-2 mt-4">
              <button className="bg-yellow-400 text-blue-900 p-2 rounded-md">
                <Instagram sx={{ color: pink[500] }} />
              </button>
              <button className="bg-yellow-400 text-blue-900 p-2 rounded-md">
                <Facebook />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MainMenu;
