"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import careers from "../data/careers.json";

function ApplicationForm() {
  const params = useSearchParams();
  const requestedPosition = params.get("position") ?? "";
  const initialPosition = careers.some((career) => career.title === requestedPosition)
    ? requestedPosition
    : "";

  const [position, setPosition] = useState(initialPosition);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setPosition("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-[#061e38] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100";

  return (
    <main className="min-h-screen bg-[#f4f6f9] text-[#061e38]">
      <header className="bg-[#061e38] px-5 py-5 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-xl font-black">
            <span className="text-[#ffc20a]">GRANDEUR</span> BUILDCREST
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-200 hover:text-[#ffc20a]">
            Back to Careers
          </Link>
        </div>
      </header>

      <section className="bg-[#061e38] px-5 pb-20 pt-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black tracking-[0.2em] text-[#ffc20a]">
            CAREER APPLICATION
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Your next chapter starts here.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Tell us about your experience and the construction career
            path you are interested in exploring.
          </p>
        </div>
      </section>

      <section className="relative mx-auto -mt-10 max-w-4xl px-5 pb-20">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
        >
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="mb-9 border-b border-slate-200 pb-7">
            <h2 className="text-2xl font-black">Personal Information</h2>
            <p className="mt-2 text-sm text-slate-500">
              Fields marked * are required.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm font-bold">
              Full Name *
              <input name="name" required className={inputClass} placeholder="Your full name" />
            </label>

            <label className="block text-sm font-bold">
              Email Address *
              <input name="email" type="email" required className={inputClass} placeholder="you@example.com" />
            </label>

            <label className="block text-sm font-bold">
              Phone Number *
              <input name="phone" type="tel" required className={inputClass} placeholder="Your phone number" />
            </label>

            <label className="block text-sm font-bold">
              Location
              <input name="location" className={inputClass} placeholder="City, State" />
            </label>
          </div>

          <div className="mt-10 border-b border-slate-200 pb-7">
            <h2 className="text-2xl font-black">Professional Background</h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose a career path and share your relevant experience.
            </p>
          </div>

          <div className="mt-7 space-y-7">
            <label className="block text-sm font-bold">
              Position of Interest *
              <select
                name="position"
                required
                value={position}
                onChange={(event) => setPosition(event.target.value)}
                className={inputClass}
              >
                <option value="">Select a construction career</option>
                {careers.map((career) => (
                  <option key={career.slug} value={career.title}>
                    {career.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="block text-sm font-bold">
              Experience and Skills
              <textarea
                name="experience"
                rows={6}
                className={inputClass}
                placeholder="Describe your experience, relevant skills, certifications, and professional interests."
              />
            </label>

            <label className="block text-sm font-bold">
              Resume (PDF, DOC, or DOCX)
              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className={inputClass}
              />
            </label>
          </div>

          <div className="mt-10 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            Submitting your information allows our hiring team to review
            your application. Career profiles do not guarantee an
            available vacancy or employment offer.
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 w-full rounded-xl bg-[#ffc20a] px-6 py-4 font-black text-[#061e38] transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Submitting Application..." : "Submit Application"}
          </button>

          {status === "success" && (
            <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 font-semibold text-green-800">
              Your application was submitted successfully.
              Please check your email for confirmation.
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 font-semibold text-red-800">
              We could not submit your application. Please try again.
            </p>
          )}
        </form>
      </section>

      <footer className="bg-[#061e38] px-5 py-8 text-center text-sm text-slate-300">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f4f6f9] p-10">Loading application...</main>}>
      <ApplicationForm />
    </Suspense>
  );
}