import React from "react";
import { useParams } from "react-router-dom";

export default function Services() {
  const { category } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{category.replace(/-/g, " ").toUpperCase()} Services</h2>
      <p>Service listing feature coming soon.</p>
    </div>
  );
}