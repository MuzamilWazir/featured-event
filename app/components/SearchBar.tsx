interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: Props): React.JSX.Element {
  return (
    <div className="relative mb-8">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
      <input
        type="text"
        placeholder="Search events by name..."
        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
