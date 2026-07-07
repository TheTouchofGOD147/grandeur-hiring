"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-yellow-500">
          ← Back to Careers
        </a>

        <h1 className="text-4xl font-bold mt-8">Apply to Grandeur Properties</h1>

        <p className="text-gray-300 mt-4">
          Fill out the form below and our hiring team will review your application.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 bg-white text-black rounded-2xl p-6 space-y-5">
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label className="font-semibold">Full Name *</label>
            <input
              name="name"
              required
              className="w-full mt-2 border rounded-lg p-3"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="font-semibold">Email *</label>
            <input
              name="email"
              type="email"
              required
              className="w-full mt-2 border rounded-lg p-3"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="font-semibold">Phone *</label>
            <input
              name="phone"
              required
              className="w-full mt-2 border rounded-lg p-3"
              placeholder="(555) 555-5555"
            />
          </div>

          <div>
            <label className="font-semibold">Location</label>
            <input
              name="location"
              className="w-full mt-2 border rounded-lg p-3"
              placeholder="City, State"
            />
          </div>

          <div>
            <label className="font-semibold">Position *</label>
            <select name="position" required className="w-full mt-2 border rounded-lg p-3">
              <option value="">Select a position</option>
              <option>Remote Customer Service Representative</option>
              <option>Remote Payroll Manager</option>
              <option>Remote Senior Accountant</option>
              <option>Remote Book Keeper</option>
              <option>Remote General Manager</option>
              <option>Remote Tax Accountant</option>
              <option>Remote Book Keeper Assistant</option>
              <option>Remote Finance Officer</option>
              <option>Remote Virtual Assistant</option>
              <option>Remote Data Entry Assistant</option>
              <option>Remote Marketing Assistant</option>
              <option>Remote IT Support Assistant</option>
              <option>Real Estate Assistant</option>
              <option>Customer Support Representative</option>
              <option>Marketing Assistant</option>
              <option>Listing Coordinator</option>
              <option>Administrative Assistant</option>
              <option>Data Entry Assistant</option>
              <option>IT Support Assistant</option>
              <option>Web / Digital Assistant</option>
              <option>Social Media Manager</option>
              <option>Sales Representative</option>
              <option>Property Research Assistant</option>
              <option>Virtual Assistant</option>
              <option>Other</option>
              
            </select>
          </div>

          <div>
            <label className="font-semibold">Experience / Skills</label>
            <textarea
              name="experience"
              rows={6}
              className="w-full mt-2 border rounded-lg p-3"
              placeholder="Tell us about your experience, skills, availability, and why you are interested."
            />
          </div>

          <div>
            <label className="font-semibold">Resume</label>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg"
          >
            {status === "sending" ? "Submitting..." : "Submit Application"}
          </button>

          {status === "success" && (
            <p className="bg-green-100 text-green-800 p-3 rounded-lg font-semibold">
              Application submitted successfully. Please check your email for confirmation.
            </p>
          )}

          {status === "error" && (
            <p className="bg-red-100 text-red-800 p-3 rounded-lg font-semibold">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}