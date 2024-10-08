"use client"; // Add this at the top to declare the component as a Client Component

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ComboboxDemo from "../components/combobox";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { selectedOption, name, email, message };

    const response = await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setSelectedOption("");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send the message.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="max-w-screen-xl w-full bg-white rounded-lg shadow-lg p-12 relative z-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-3/5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <ComboboxDemo onSelect={setSelectedOption} />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full"
                >
                  Send Message
                </button>
                {status && (
                  <p className="mt-4 text-sm text-gray-700">{status}</p>
                )}
              </form>
            </div>

            <div className="md:w-2/5 flex flex-col items-center">
              <div className="text-left mb-8">
                <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                <p className="mb-2">123 Nature Lane</p>
                <p className="mb-2">Creativity City, NC 12345</p>
                <p className="mb-4">United States</p>
                <h2 className="text-xl font-semibold mb-4">
                  Contact Information
                </h2>
                <p className="mb-2">Email: info@example.com</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
              </div>
              <Avatar className="w-32 h-32">
                <AvatarImage
                  src="/contact/1516469448723.png"
                  alt="User Avatar"
                />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
