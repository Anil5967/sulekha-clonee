import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">ServiceHub</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/post-requirement" className="hover:text-blue-500">Post Requirement</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
        <Link to="/register" className="hover:text-blue-500">Register</Link>
      </div>
    </nav>
  );
}