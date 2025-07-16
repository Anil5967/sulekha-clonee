import React, { useState } from "react";
import axios from "axios";

export default function PostRequirement() {
  const [form, setForm] = useState({ name: "", service: "", contact: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/requirements", form);
      setMessage(res.data.message);
      setForm({ name: "", service: "", contact: "" });
    } catch (err) {
      setMessage(err.response?.data?.error || "Submission failed");
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Post Your Requirement</h2>
      {message && <div className="mb-4 text-purple-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="service"
          placeholder="Service Needed"
          className="w-full p-2 border rounded"
          value={form.service}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Details"
          className="w-full p-2 border rounded"
          value={form.contact}
          onChange={handleChange}
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
