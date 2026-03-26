export default function Loader(): React.JSX.Element {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((n) => (
        <div key={n} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-100 rounded w-1/2 mb-2" />
          <div className="h-4 bg-gray-100 rounded w-2/3 mb-4" />
          <div className="h-16 bg-gray-100 rounded mb-4" />
          <div className="h-10 bg-gray-200 rounded-xl w-full" />
        </div>
      ))}
    </div>
  );
}
