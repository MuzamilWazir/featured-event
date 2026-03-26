"use client";
import { useState } from "react";
import { Event } from "../types/event";

interface Props {
  event: Event;
  onClose: () => void;
}

export default function RegisterModal({ event, onClose }: Props): React.JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) { setError("Name and email are required."); return; }
    setLoading(true);
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId: event.id, eventName: event.name, name, email, phone }),
    });

    setLoading(false);
    if (res.ok) setSuccess(true);
    else setError("Something went wrong. Please try again.");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {success ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">You're registered!</h3>
            <p className="text-gray-500 text-sm mb-6">See you at <strong>{event.name}</strong>.</p>
            <button onClick={onClose} className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold">Done</button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Register for Event</h3>
                <p className="text-sm text-indigo-600 font-medium">{event.name}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="flex flex-col gap-3 mb-4">
              <input
                type="text" placeholder="Full Name *"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={name} onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email" placeholder="Email Address *"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel" placeholder="Phone (optional)"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-semibold py-2.5 rounded-xl text-sm transition-all"
            >
              {loading ? "Registering..." : "Confirm Registration"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
