export default function Home() {
  const roles = [
    ["Remote Customer Service Representative", "Respond to client inquiries, follow up with leads, and support customer communication remotely."],
    ["Remote Virtual Assistant", "Support scheduling, email handling, research, data organization, and daily admin tasks remotely."],
    ["Remote Data Entry Assistant", "Update records, organize client/property information, and maintain accurate digital files remotely."],
    ["Remote Marketing Assistant", "Assist with online campaigns, social media tasks, property posts, and digital outreach remotely."],
    ["Remote IT Support Assistant", "Support basic website, email, software, and technical issues remotely."],
    ["Real Estate Assistant", "Support agents, listings, scheduling and client communication."],
    ["Customer Support Representative", "Help clients with questions, updates and property inquiries."],
    ["Marketing Assistant", "Assist with property marketing, online content, and campaigns."],
    ["Listing Coordinator", "Manage property details, photos, updates, and listing organization."],
    ["Administrative Assistant", "Handle records, appointments, emails, and daily office coordination."],
    ["Data Entry Assistant", "Organize property data, client records, reports, and internal files."],
    ["IT Support Assistant", "Help maintain basic systems, email accounts, website tools, and technical support."],
    ["Web / Digital Assistant", "Support website updates, online forms, listings, and digital content."],
    ["Social Media Manager", "Plan and manage posts, engagement, property highlights, and online presence."],
    ["Sales Representative", "Follow leads, assist prospects, and support client conversion."],
    ["Property Research Assistant", "Research neighborhoods, property records, market trends, and opportunities."],
    ["Virtual Assistant", "Provide remote support for scheduling, communication, research, and admin tasks."],
  ];

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#132b3a]">
      <header className="border-b border-[#d8cbb8] bg-[#f4efe6] px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h2 className="font-serif text-4xl tracking-wide">Grandeur</h2>
            <p className="text-xs uppercase tracking-[0.35em]">Properties</p>
          </div>

          <a
            href="/apply"
            className="rounded-full bg-[#7b2d26] px-6 py-3 font-semibold text-white"
          >
            Apply Now
          </a>
        </div>
      </header>

      <section className="bg-[#123044] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#d89b4a]">
            Grandeur Properties Careers
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Build your career with extraordinary properties and exceptional service.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#e9ded0]">
            Join a growing real estate company focused on professionalism,
            client service, innovation, and long term success.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/apply"
              className="rounded-full bg-[#d89b4a] px-7 py-4 font-bold text-[#132b3a]"
            >
              Apply Now
            </a>

            <a
              href="#roles"
              className="rounded-full border border-white/30 px-7 py-4 text-white"
            >
              View Roles
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl">
            Why Work With Grandeur Properties?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Growth Culture", "Learn, develop your skills, and grow with a company focused on excellence."],
              ["Professional Standards", "We value communication, responsibility, honesty, and great service."],
              ["Real Opportunities", "Be part of building trusted real estate experiences for clients."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#d8cbb8] bg-white p-7 shadow-sm"
              >
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-[#5f5a52]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7b2d26]">
          Open Positions
        </p>

        <h2 className="mt-4 font-serif text-5xl">Join our growing team.</h2>

        <p className="mt-4 max-w-2xl text-[#5f5a52]">
          As Grandeur Properties grows, we are building a strong team across real estate,
          client service, operations, marketing, technology, and administration.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {roles.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#d8cbb8] bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-[#5f5a52]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-[#7b2d26] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-5xl">Hiring Process</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["Apply Online", "Application Review", "Interview", "Welcome to the Team"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 p-6">
                {item}
              </div>
            ))}
          </div>

          <a
            href="/apply"
            className="mt-10 inline-block rounded-full bg-[#d89b4a] px-8 py-4 font-bold text-[#132b3a]"
          >
            Start Application
          </a>
        </div>
      </section>
    </main>
  );
}