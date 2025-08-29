"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ type: "Say Hi", name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message Sent!");
    setForm({ type: "Say Hi", name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-8 rounded-xl shadow-md flex flex-col gap-4 max-w-md w-full">
      <div className="flex gap-4">
        <label>
          <input type="radio" name="type" value="Say Hi" checked={form.type==="Say Hi"} onChange={handleChange} />
          Say Hi
        </label>
        <label>
          <input type="radio" name="type" value="Get a Quote" checked={form.type==="Get a Quote"} onChange={handleChange} />
          Get a Quote
        </label>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="px-3 py-2 rounded border border-gray-300 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="px-3 py-2 rounded border border-gray-300 w-full"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="px-3 py-2 rounded border border-gray-300 w-full"
        rows={4}
        required
      />
      <button type="submit" className="bg-[#191A23] text-white px-4 py-2 rounded-lg font-medium hover:opacity-80">
        Send Message
      </button>
    </form>
  );
}
