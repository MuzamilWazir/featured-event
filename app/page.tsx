"use client";

import { useEffect, useState } from "react";
import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import EventCard        from "./components/EventCard";
import SearchBar        from "./components/SearchBar";
import RegisterModal    from "./components/RegisterModal";
import CreateEventModal from "./components/CreateEventModal";
import ContactSection   from "./components/ContactSection";
import Footer           from "./components/Footer";
import Loader           from "./components/Loader";
import { Event }        from "./types/event";

export default function Home() {
  const [events,          setEvents]          = useState<Event[]>([]);
  const [search,          setSearch]          = useState<string>("");
  const [loading,         setLoading]         = useState<boolean>(true);
  const [selectedEvent,   setSelectedEvent]   = useState<Event | null>(null);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: Event[]) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddEvent = (newEvent: Event) => {
    setEvents((prev) => [...prev, newEvent]);
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-white">

      <Navbar onCreateEvent={() => setShowCreateModal(true)} />

      <Hero />

      {/* ── Featured Events ── */}
      <section id="events" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600 border-l-4 border-red-600 pl-3 block mb-3">
                What&apos;s On
              </span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                Featured <span className="text-red-600">Events</span>
              </h2>
            </div>
            <span className="text-sm text-gray-400 font-semibold hidden sm:block">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
            </span>
          </div>

          <SearchBar search={search} setSearch={setSearch} />

          {loading ? (
            <Loader />
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg font-semibold">No events found for &quot;{search}&quot;</p>
              <p className="text-sm mt-2">Try a different search term.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRegister={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-red-600 border-l-4 border-red-600 pl-3 block mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl font-black text-gray-900 mb-5 tracking-tight">
              Built for Pakistan&apos;s
              <br />
              <span className="text-red-600">Event Community</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Eventify is a modern event discovery platform connecting people with local workshops,
              tech conferences, networking events, and cultural experiences across Pakistan.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether you&apos;re a student, a professional, or an organiser — Eventify is your platform.
            </p>
            <div className="flex gap-10">
              {[
                { num: "500+", label: "Events Listed"  },
                { num: "12k+", label: "Registrations"  },
                { num: "8",    label: "Cities Covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-red-600">{stat.num}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-red-600 translate-x-4 translate-y-4" />
            <div className="relative bg-gray-900 p-10 text-white">
              <p className="text-2xl font-black mb-4 leading-snug">
                &ldquo;The best place to discover what&apos;s happening in your city.&rdquo;
              </p>
              <p className="text-gray-400 text-sm">— Eventify Community</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

      {selectedEvent && (
        <RegisterModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
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
