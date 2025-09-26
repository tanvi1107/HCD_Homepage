import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#1a1a1a] rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-lg w-[90%] max-w-9xl">
      
      {/* Left Logo */}
      <div className="bg-[#e6ff00] rounded-full px-6 md:px-9 py-2 font-bold text-black text-lg md:text-xl whitespace-nowrap">
        HCD
      </div>

      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-[#e6ff00] md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Center Links */}
      <ul className={`flex flex-col md:flex-row md:space-x-10 text-white font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-[#1a1a1a] md:bg-transparent rounded-b-xl md:rounded-none shadow-md md:shadow-none transition-max-height duration-300 overflow-hidden ${isOpen ? "max-h-60 py-4" : "max-h-0 md:max-h-full"}`}>
        <li className="text-center md:text-left px-4 md:px-0 py-2 md:py-0 border-b border-gray-700 md:border-none">
          <a href="#home" className="cursor-pointer hover:text-[#e6ff00]">
            Home
          </a>
        </li>
        <li className="text-center md:text-left px-4 md:px-0 py-2 md:py-0 border-b border-gray-700 md:border-none">
          <a href="#nps-cargo" className="cursor-pointer hover:text-[#e6ff00]">
            NPS Cargo
          </a>
        </li>
        <li className="text-center md:text-left px-4 md:px-0 py-2 md:py-0 border-b border-gray-700 md:border-none">
          <a href="#servicing" className="cursor-pointer hover:text-[#e6ff00]">
            Servicing
          </a>
        </li>
        <li className="text-center md:text-left px-4 md:px-0 py-2 md:py-0">
          <a href="#dealership" className="cursor-pointer hover:text-[#e6ff00]">
            Dealership
          </a>
        </li>
      </ul>

      {/* Right Button */}
      <button className="hidden md:flex items-center space-x-2 text-[#e6ff00] font-medium hover:underline whitespace-nowrap">
        <span>View NPS Quick</span>
        <span>➝</span>
      </button>
    </nav>
  );
}
