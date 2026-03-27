"use client";

import { useState } from "react";

export default function ContactSection(): React.JSX.Element {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error,   setError]   = useState("");

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ── Left: Form ── */}
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-red-600 border-l-4 border-red-600 pl-3 block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Have a question or want to list your event? We&apos;re happy to help.
          </p>

          {success && (
            <div className="mb-5 bg-red-50 border-l-4 border-red-600 px-4 py-3 text-red-700 text-sm font-semibold">
              ✓ Message sent! We&apos;ll get back to you shortly.
            </div>
          )}
          {error && (
            <div className="mb-5 border-l-4 border-red-600 px-4 py-3 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="border border-gray-200 px-4 py-3.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-gray-900 hover:bg-red-600 disabled:bg-gray-300 text-white font-black px-10 py-3.5 uppercase text-xs tracking-widest transition-all duration-300"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>

        {/* ── Right: Info Panel ── */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gray-50 border border-gray-100 -rotate-2" />
          <div className="relative z-10 p-12 text-center">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl">
              💬
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
              We&apos;re Online
            </h3>
            <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
              Our team typically responds within 24 hours.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-600 mb-8">
              {[
                { icon: "📞", text: "+92 339 411 1994" },
                { icon: "✉️", text: "hello@eventify.pk"  },
                { icon: "🌐", text: "www.eventify.pk"    },
              ].map((item) => (
                <div key={item.text} className="flex items-center justify-center gap-3">
                  <span className="w-8 h-8 bg-red-50 border border-red-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              {["f", "𝕏", "in"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 bg-gray-900 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
