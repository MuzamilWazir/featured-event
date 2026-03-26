import { Event } from "../types/event";

interface Props {
  event: Event;
  onRegister: () => void;
}

const categoryColors: Record<string, string> = {
  Technology: "bg-blue-100 text-blue-700",
  Design: "bg-purple-100 text-purple-700",
  Business: "bg-green-100 text-green-700",
  Arts: "bg-pink-100 text-pink-700",
  Default: "bg-gray-100 text-gray-600",
};

export default function EventCard({ event, onRegister }: Props): React.JSX.Element {
  const colorClass = categoryColors[event.category] ?? categoryColors.Default;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col group">
      <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 ${colorClass}`}>
        {event.category}
      </span>
      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {event.name}
      </h3>
      <div className="flex flex-col gap-1 text-sm text-gray-500 mb-3">
        <span>📅 {new Date(event.date).toLocaleDateString("en-PK", { weekday: "short", year: "numeric", month: "long", day: "numeric" })} · {event.time}</span>
        <span>📍 {event.location}</span>
        <span>🪑 {event.seats} seats available</span>
      </div>
      <p className="text-sm text-gray-600 flex-1 mb-5 leading-relaxed">{event.description}</p>
      <button
        onClick={onRegister}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-95"
      >
        Register Now
      </button>
    </div>
  );
}
