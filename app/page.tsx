import Link from "next/link";
import careers from "./data/careers.json";

export default function HomePage() {
  const categories = [...new Set(careers.map((career) => career.category))];

  return (
    <main className="min-h-screen bg-[#f4f6f9] text-[#061e38]">
      <header className="border-b border-white/10 bg-[#061e38] px-5 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-[#ffc20a]">GRANDEUR</span> BUILDCREST
          </Link>

          <nav className="flex items-center gap-5 text-sm font-semibold">
            <Link href="#careers" className="hover:text-[#ffc20a]">
              Explore Careers
            </Link>
            <Link
              href="/apply"
              className="rounded-lg bg-[#ffc20a] px-5 py-3 font-black text-[#061e38]"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#061e38] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black tracking-[0.25em] text-[#ffc20a]">
            GRANDEUR BUILDCREST CONSTRUCTION GROUP
          </p>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Build your future.
            <span className="block text-[#ffc20a]">
              Shape what comes next.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Explore construction career paths across engineering,
            project management, skilled trades, site operations,
            safety, and professional support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#careers"
              className="rounded-lg bg-[#ffc20a] px-7 py-4 font-black text-[#061e38]"
            >
              Explore Career Paths
            </Link>

            <Link
              href="/apply"
              className="rounded-lg border border-white/30 px-7 py-4 font-bold"
            >
              Submit an Application
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Build with purpose", "Explore the people and disciplines behind construction projects."],
            ["Develop your expertise", "Discover engineering, field, management, and technical career paths."],
            ["Explore opportunities", "Learn about professional roles and submit your information for consideration."],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 h-1 w-14 rounded-full bg-[#ffc20a]" />
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="careers" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black tracking-[0.2em] text-amber-700">
            EXPLORE YOUR PATH
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Construction Careers
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            Browse {careers.length} career profiles across {categories.length}
            {" "}professional categories. These profiles describe career
            paths and do not represent confirmed open vacancies.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {careers.map((career) => (
              <article
                key={career.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:border-amber-400 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-widest text-amber-700">
                  {career.category}
                </p>

                <h3 className="mt-4 flex-1 text-xl font-black">
                  {career.title}
                </h3>

                <Link
                  href={`/apply?position=${encodeURIComponent(career.title)}`}
                  className="mt-7 inline-flex w-fit rounded-lg bg-[#ffc20a] px-5 py-3 text-sm font-black"
                >
                  Apply for Consideration
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061e38] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black">
            Ready to take the next step?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Share your experience and professional interests with our team.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-block rounded-lg bg-[#ffc20a] px-8 py-4 font-black text-[#061e38]"
          >
            Start Application
          </Link>
        </div>
      </section>

      <footer className="bg-[#041529] px-5 py-8 text-center text-sm text-slate-400">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}