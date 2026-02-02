export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-semibold">Core Capabilities</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Technology Advisory",
              desc: "National programs, multilateral initiatives, governance, and foresight.",
            },
            {
              title: "Space & Mission Systems Engineering",
              desc: "Satellite architectures, EO, PNT, ground segments, MBSE.",
            },
            {
              title: "AI & Data Systems",
              desc: "AI evaluation, secure data platforms, mission-critical analytics.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="border border-neutral-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-medium">{c.title}</h3>
              <p className="text-neutral-400 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
