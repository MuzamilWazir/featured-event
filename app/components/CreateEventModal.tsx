"use client";
import { useState } from "react";
import { Event } from "../types/event";

interface Props {
  onClose: () => void;
  onAdd: (event: Event) => void;
  existingCount: number;
}

const categories = ["Technology", "Design", "Business", "Arts", "Other"];

export default function CreateEventModal({ onClose, onAdd, existingCount }: Props): React.JSX.Element {
  const [form, setForm] = useState({ name: "", date: "", time: "", location: "", description: "", category: "Technology", seats: "50" });
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
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-bold text-gray-800">Create New Event</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Event Name *" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <input type="date" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" value={form.date} onChange={(e) => handleChange("date", e.target.value)} />
            <input type="text" placeholder="Time (e.g. 10:00 AM)" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" value={form.time} onChange={(e) => handleChange("time", e.target.value)} />
          </div>
          <input type="text" placeholder="Location *" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" value={form.location} onChange={(e) => handleChange("location", e.target.value)} />
          <textarea placeholder="Short description" rows={3} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white" value={form.category} onChange={(e) => handleChange("category", e.target.value)}>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <input type="number" placeholder="Seats" min="1" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" value={form.seats} onChange={(e) => handleChange("seats", e.target.value)} />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-all"
        >
          Publish Event
        </button>
      </div>
    </div>
  );
}
