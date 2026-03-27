interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: Props): React.JSX.Element {
  return (
    <div className="relative mb-8 max-w-xl">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search events by name..."
        className="w-full pl-11 pr-4 py-3 border border-gray-200 text-sm bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
