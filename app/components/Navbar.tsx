"use client";

import { useState } from "react";

interface NavbarProps {
  onCreateEvent: () => void;
}

export default function Navbar({ onCreateEvent }: NavbarProps): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home" className="text-2xl font-black tracking-tight no-underline">
          <span className="text-red-600">Event</span>
          <span className="text-gray-900">ify</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-600 uppercase tracking-[3px]">
          <a href="#home"    className="hover:text-red-600 transition-colors">Home</a>
          <a href="#events"  className="text-red-600 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-red-600">
            Service
          </a>
          <a href="#about"   className="hover:text-red-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
        </div>

        <button
          onClick={onCreateEvent}
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-5 py-2.5 uppercase tracking-[2px] transition-all active:scale-95"
        >
          + Create Event
        </button>

        <button
          className="md:hidden text-2xl text-gray-700 ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-xs font-bold uppercase tracking-[3px] text-gray-700">
          <a href="#home"    onClick={() => setMenuOpen(false)} className="hover:text-red-600">Home</a>
          <a href="#events"  onClick={() => setMenuOpen(false)} className="text-red-600">Service</a>
          <a href="#about"   onClick={() => setMenuOpen(false)} className="hover:text-red-600">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
