import React from "react";
import { Link } from "react-router-dom";

const categories = ["AC Repair", "Tiffin Services", "Plumber", "Education", "Legal"];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to ServiceHub</h1>
      <p className="mb-6">Find trusted professionals for any service you need.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/services/${cat.toLowerCase().replace(/\s+/g, "-")}`}
            className="border rounded-xl p-4 hover:shadow-md bg-white"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}