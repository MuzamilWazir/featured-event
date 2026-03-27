export default function Loader(): React.JSX.Element {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="bg-white border border-gray-100 shadow-sm overflow-hidden animate-pulse"
        >
          <div className="h-1 bg-gray-200 w-full" />
          <div className="p-6">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-100 rounded w-2/3" />
              <div className="h-4 bg-gray-100 rounded w-1/2" />
              <div className="h-4 bg-gray-100 rounded w-1/3" />
            </div>
            <div className="h-14 bg-gray-100 rounded mb-5" />
            <div className="h-11 bg-gray-200 rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
