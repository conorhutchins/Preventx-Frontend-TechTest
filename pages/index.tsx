import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const validScreenRefs = ["SR8704928", "SR870434897", "SR835434098"];
  const [screenRef, setScreenRef] = useState(validScreenRefs[0]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Preventext logo */}
      <Image 
        src="/preventx.svg" 
        width={200} 
        height={200} 
        alt="Preventx Logo" 
        className="mb-6"
        priority
      />

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Welcome to Cons FE Test Assignment
        </h1>

        <p className="text-gray-700 text-center mb-4">
          Select a screen reference to view details:
        </p>

        {/* Simple drop down to control selection */}
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 text-center focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setScreenRef(e.target.value)}
          value={screenRef}
        >
          {validScreenRefs.map((sr) => (
            <option key={sr} value={sr}>
              {sr}
            </option>
          ))}
        </select>

        {/* Pass the dynamic link to screen */}
        <Link href={`/screen/${screenRef}`} passHref>
          <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:bg-green-600 hover:shadow-lg">
            View Screen Details
          </button>
        </Link>
      </div>
    </div>
  );
}
