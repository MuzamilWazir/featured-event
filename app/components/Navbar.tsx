"use client";

import { useState } from "react";

interface NavbarProps {
  onCreateEvent: () => void;
}

export default function Navbar({ onCreateEvent }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tight no-underline">
          <span className="text-red-600">Event</span>
          <span className="text-gray-900">ify</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-600 uppercase tracking-widest">
          <a href="#home"    className="hover:text-red-600 transition-colors">Home</a>
          <a href="#events"  className="text-red-600 underline underline-offset-4 decoration-red-600">
            Service
          </a>
          <a href="#about"   className="hover:text-red-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={onCreateEvent}
          className="hidden md:block bg-red-600 hover:bg-red-700 text-white text-xs font-black px-5 py-2.5 uppercase tracking-widest transition-all active:scale-95"
        >
          + Create Event
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-700">
          <a href="#home"    onClick={() => setMenuOpen(false)} className="hover:text-red-600">Home</a>
          <a href="#events"  onClick={() => setMenuOpen(false)} className="text-red-600">Service</a>
          <a href="#about"   onClick={() => setMenuOpen(false)} className="hover:text-red-600">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Contact</a>
          <button
            onClick={() => { setMenuOpen(false); onCreateEvent(); }}
            className="bg-red-600 text-white font-black py-2.5 uppercase tracking-widest text-xs w-full"
          >
            + Create Event
          </button>
        </div>
      )}
    </nav>
  );
}
