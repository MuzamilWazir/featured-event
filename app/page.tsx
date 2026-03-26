"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import RegisterModal from "./components/RegisterModal";
import CreateEventModal from "./components/CreateEventModal";
import { Event } from "./types/event";

export default function Home(): React.JSX.Element {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: Event[]) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddEvent = (newEvent: Event) => {
    setEvents((prev) => [newEvent, ...prev]);
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onCreateEvent={() => setShowCreateModal(true)} />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Events</h2>

        <SearchBar search={search} setSearch={setSearch} />

        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onRegister={() => setSelectedEvent(event)} />
            ))}
          </div>
        )}
      </section>

      {selectedEvent && (
        <RegisterModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {showCreateModal && (
        <CreateEventModal
          onClose={() => setShowCreateModal(false)}
          onAdd={handleAddEvent}
          existingCount={events.length}
        />
      )}
    </div>
  );
}
