export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Un spinner simple con Tailwind */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        <p className="mt-4 text-xl font-medium text-gray-600 italic">
          Trayendo los mejores productos para ti...
        </p>
      </div>
    );
  }