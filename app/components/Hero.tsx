export default function Hero(): React.JSX.Element {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
      <span className="text-sm uppercase tracking-widest text-indigo-200 font-semibold">Pakistan's Event Hub</span>
      <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
        Discover Events Near You
      </h1>
      <p className="text-indigo-100 max-w-xl mx-auto text-base md:text-lg">
        Find workshops, tech talks, networking nights, and more — all in one place.
      </p>
    </section>
  );
}
