export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Space, AI & Mission Systems
          <br />
          for National & Global Programs
        </h1>

        <p className="text-xl text-neutral-400 max-w-3xl">
          I work with governments, international organizations, and industry
          partners to design, govern, and deploy advanced space systems,
          artificial intelligence, and resilient technology infrastructure.
        </p>

        <div className="flex gap-4">
          <a
            href="#engagement"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            Engage
          </a>
          <a
            href="#capabilities"
            className="px-6 py-3 border border-neutral-700 rounded-lg"
          >
            Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
