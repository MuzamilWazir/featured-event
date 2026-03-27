export default function Hero(): React.JSX.Element {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-white flex items-center overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-red-600 z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="relative z-10">
          <span className="inline-block text-xs font-black uppercase tracking-[4px] text-red-600 border-l-4 border-red-600 pl-3 mb-5">
            Pakistan&apos;s Event Hub
          </span>

          <h1 className="text-6xl md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-5">
            Discover
            <br />
            <span className="text-red-600">Events</span>
            <br />
            Near You
          </h1>

          <h2 className="text-sm font-black uppercase tracking-[5px] text-gray-500 mb-5">
            Find · Connect · Register
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
            Discover workshops, tech talks, networking nights, and community
            events — all curated in one clean, modern platform built for
            Pakistan&apos;s growing event scene.
          </p>

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

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#events"
              className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 uppercase text-xs tracking-[3px] transition-all shadow-lg shadow-red-100 active:scale-95"
            >
              Browse Events
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-black px-8 py-3.5 uppercase text-xs tracking-[3px] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="hidden md:block relative h-[480px]">

          <div className="absolute top-0 right-4 bg-gray-900 text-white px-5 py-3 shadow-xl rotate-1 z-20">
            <p className="text-[10px] text-gray-400 uppercase tracking-[3px]">Events Today</p>
            <p className="text-3xl font-black text-red-500">+128</p>
          </div>

          <div className="absolute top-12 right-0 w-[400px] bg-white border border-gray-200 shadow-2xl rotate-1 p-5 z-10">
            <div className="flex gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex items-end gap-2 h-28 px-2 mb-4">
              {[55, 75, 40, 90, 65, 50, 95, 70].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-sm ${
                    i === 3 || i === 6 ? "bg-red-600" : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
            <div className="space-y-2 px-2">
              {[
                { dot: "bg-red-600", width: "w-8" },
                { dot: "bg-gray-400", width: "w-6" },
                { dot: "bg-gray-900", width: "w-10" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${row.dot}`} />
                  <div className="h-2 bg-gray-100 rounded flex-1" />
                  <div className={`h-2 ${row.width} bg-gray-200 rounded`} />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-0 w-48 bg-white border border-red-100 shadow-xl -rotate-2 overflow-hidden z-20">
            <div className="h-20 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full border-4 border-white/30 border-r-transparent rotate-45" />
            </div>
            <div className="p-3">
              <div className="h-2 bg-gray-100 rounded mb-2" />
              <div className="h-2 bg-red-100 rounded w-3/4" />
            </div>
          </div>

          <div className="absolute bottom-0 left-24 w-16 h-32 bg-gray-900 opacity-[0.07] rounded-t-full" />
          <div className="absolute bottom-0 right-24 w-14 h-28 bg-gray-900 opacity-[0.07] rounded-t-full" />
        </div>
      </div>
    </section>
  );
}
