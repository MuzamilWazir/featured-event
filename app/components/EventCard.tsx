import { Event } from "../types/event";

interface Props {
  event: Event;
  onRegister: () => void;
}

const categoryColors: Record<string, string> = {
  Technology: "bg-red-50 text-red-700 border border-red-200",
  Design:     "bg-gray-100 text-gray-700 border border-gray-200",
  Business:   "bg-gray-900 text-white border border-gray-900",
  Arts:       "bg-red-600 text-white border border-red-600",
  Other:      "bg-gray-100 text-gray-600 border border-gray-200",
};

export default function EventCard({ event, onRegister }: Props): React.JSX.Element {
  const colorClass = categoryColors[event.category] ?? categoryColors.Other;

  const formattedDate = new Date(event.date + "T00:00:00").toLocaleDateString(
    "en-PK",
    { weekday: "short", year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="group bg-white border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="h-1 bg-gray-100 group-hover:bg-red-600 transition-colors duration-300" />

      <div className="p-6 flex flex-col flex-1">
        <span className={`text-[10px] font-black px-3 py-1 uppercase tracking-[2px] w-fit mb-4 ${colorClass}`}>
          {event.category}
        </span>

        <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
          {event.name}
        </h3>

        <div className="flex flex-col gap-1.5 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-2">
            <span className="text-red-600">📅</span>
            {formattedDate} · {event.time}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-red-600">📍</span>
            {event.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-red-600">🪑</span>
            {event.seats} seats available
          </span>
        </div>

        <p className="text-sm text-gray-600 flex-1 leading-relaxed mb-6">
          {event.description}
        </p>

        <button
          onClick={onRegister}
          className="w-full bg-gray-900 hover:bg-red-600 text-white font-black py-3 text-xs uppercase tracking-[2px] transition-all duration-300 active:scale-[0.98]"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
