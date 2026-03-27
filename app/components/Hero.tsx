"use client";

import Image from "next/image";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-white flex items-center overflow-hidden"
    >
      {/* Red bottom accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-red-600 z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ── Left: Content ── */}
        <div className="relative z-10">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-red-600 border-l-4 border-red-600 pl-3 mb-5">
            Pakistan&apos;s Event Hub
          </span>

          <h1 className="text-6xl md:text-7xl font-black leading-none tracking-tight text-gray-900 mb-5">
            Discover
            <br />
            <span className="text-red-600">Events</span>
            <br />
            Near You
          </h1>

          <p className="text-sm font-black uppercase tracking-widest text-gray-400 mb-5">
            Find · Connect · Register
          </p>

          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
            Discover workshops, tech talks, networking nights, and community
            events — all curated in one clean, modern platform built for
            Pakistan&apos;s growing event scene.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-8">
            {[
              { icon: "f",  label: "Facebook" },
              { icon: "𝕏",  label: "Twitter"  },
              { icon: "in", label: "LinkedIn"  },
              { icon: "▶",  label: "YouTube"   },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500 hover:border-red-600 hover:text-red-600 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#events"
              className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 uppercase text-xs tracking-widest transition-all shadow-lg shadow-red-100 active:scale-95"
            >
              Browse Events
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-black px-8 py-3.5 uppercase text-xs tracking-widest transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* ── Right: Dashboard Illustration ── */}
        <div className="hidden md:flex items-center justify-center">
          <Image 
            src="/heroImage.png" 
            alt="Dashboard Illustration" 
            width={700} 
            height={700}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
