export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-gray-900 text-white">

      {/* ── Main band ── */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-center">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-red-600 flex items-center justify-center text-2xl font-black text-white shrink-0">
              E
            </div>
            <div>
              <p className="font-black text-xl leading-tight">
                <span className="text-white">Eventify</span>{" "}
                <span className="text-red-500">Team</span>
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                Event Platform · Pakistan
              </p>
              <div className="w-10 h-0.5 bg-red-600 mt-2" />
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2.5 text-sm text-gray-400">
            {[
              { icon: "📞", text: "+92 339 411 1994" },
              { icon: "✉️", text: "hello@eventify.pk"  },
              { icon: "🌐", text: "www.eventify.pk"    },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-red-500">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* Logo + slogan */}
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-4xl font-black tracking-tight">
              <span className="text-red-500">Event</span>ify
            </span>
            <span className="text-xs text-gray-600 uppercase tracking-widest">
              Discover · Connect · Register
            </span>
          </div>

        </div>
      </div>

      {/* ── Red address + socials bar ── */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-red-100">
            <span>📍</span>
            <span>Golden Heights, Gulberg Greens, Islamabad, Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            {[
              { icon: "📷", label: "Instagram" },
              { icon: "𝕏",  label: "Twitter"   },
              { icon: "f",  label: "Facebook"   },
              { icon: "in", label: "LinkedIn"   },
              { icon: "▶",  label: "YouTube"    },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 bg-gray-900 hover:bg-white hover:text-gray-900 text-white flex items-center justify-center text-xs font-bold transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="bg-black py-3 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Eventify. All rights reserved. Built with Next.js + TypeScript.
      </div>

    </footer>
  );
}
