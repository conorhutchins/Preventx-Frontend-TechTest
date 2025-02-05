import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome to Cons Preventx FE Test
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Click below to view detailed information about a screen.
        </p>
        <Link href="/screen/SR8704928">
          <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition">
            View Screen Details
          </button>
        </Link>
      </div>
    </div>
  );
}
