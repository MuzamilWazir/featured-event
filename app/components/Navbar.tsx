interface NavbarProps {
  onCreateEvent: () => void;
}

export default function Navbar({ onCreateEvent }: NavbarProps): React.JSX.Element {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-indigo-600 tracking-tight">Eventify</span>
          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">Beta</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Events</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <button
          onClick={onCreateEvent}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm"
        >
          + Create Event
        </button>
      </div>
    </nav>
  );
}
