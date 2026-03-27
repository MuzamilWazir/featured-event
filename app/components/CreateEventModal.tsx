"use client";

import { useState } from "react";
import { Event } from "../types/event";

interface Props {
  onClose: () => void;
  onAdd: (event: Event) => void;
  existingCount: number;
}

const CATEGORIES = ["Technology", "Design", "Business", "Arts", "Other"];

export default function CreateEventModal({ onClose, onAdd, existingCount }: Props): React.JSX.Element {
  const [form, setForm] = useState({
    name: "", date: "", time: "",
    location: "", description: "",
    category: "Technology", seats: "50",
  });
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    if (!form.name || !form.date || !form.location) {
      setError("Name, date, and location are required.");
      return;
    }
    const newEvent: Event = {
      id: existingCount + 1,
      ...form,
      seats: parseInt(form.seats) || 50,
    };
    onAdd(newEvent);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 bg-red-600 w-full" />

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">
              Create New Event
            </h3>
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

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Event Name *"
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
              <input
                type="text"
                placeholder="Time (e.g. 10:00 AM)"
                className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                value={form.time}
                onChange={(e) => handleChange("time", e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Location *"
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />

            <textarea
              placeholder="Short description"
              rows={3}
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />

            <div className="grid grid-cols-2 gap-3">
              <select
                className="border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Available Seats"
                min="1"
                className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                value={form.seats}
                onChange={(e) => handleChange("seats", e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-gray-900 hover:bg-red-600 text-white font-black py-3.5 uppercase text-xs tracking-[2px] transition-all duration-300"
          >
            Publish Event
          </button>
        </div>
      </div>
    </div>
  );
}
