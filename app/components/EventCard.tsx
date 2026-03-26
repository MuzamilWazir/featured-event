import React from "react";
import { Event } from "../types/event";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props): React.JSX.Element {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{event.name}</h3>
      <p>{event.date} - {event.time}</p>
      <p>{event.location}</p>
      <p className="text-sm text-gray-600">{event.description}</p>

      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </div>
  );
}
