"use client";

import { useState } from "react";
import { Event } from "../types/event";

interface Props {
  event: Event;
  onClose: () => void;
}

export default function RegisterModal({ event, onClose }: Props): React.JSX.Element {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [phone,   setPhone]   = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error,   setError]   = useState("");

  const handleSubmit = async () => {
    if (!name || !email) { setError("Name and email are required."); return; }
    if (!email.includes("@")) { setError("Enter a valid email address."); return; }

    setLoading(true);
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: event.id,
        eventName: event.name,
        name,
        email,
        phone,
      }),
    });

    setLoading(false);
    if (res.ok) setSuccess(true);
    else setError("Something went wrong. Please try again.");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 bg-red-600 w-full" />

        <div className="p-8">
          {success ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-red-50 border-2 border-red-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🎉
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-wide">
                You&apos;re Registered!
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                See you at{" "}
                <strong className="text-red-600">{event.name}</strong>.
                <br />
                Confirmation sent to <strong>{email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3 uppercase text-xs tracking-[3px] transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">
                    Register
                  </h3>
                  <p className="text-sm text-red-600 font-bold mt-1">{event.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {event.date} · {event.time} · {event.location}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-900 text-xl leading-none"
                >
                  ✕
                </button>
              </div>

              {error && (
                <p className="text-red-600 text-sm mb-4 border-l-4 border-red-600 pl-3">
                  {error}
                </p>
              )}

              <div className="flex flex-col gap-3 mb-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white font-black py-3.5 uppercase text-xs tracking-[2px] transition-all"
              >
                {loading ? "Registering..." : "Confirm Registration"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
