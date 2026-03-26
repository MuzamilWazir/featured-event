import React from "react";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Eventify</h1>
      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
