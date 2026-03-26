import React from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: Props): React.JSX.Element {
  return (
    <input
      type="text"
      placeholder="Search events..."
      className="border p-2 w-full mb-6"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
