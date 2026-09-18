import SlideUp from "@/components/animations/SlideUp";

export default function About() {
  return (
    <section id="about" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <SlideUp>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
            About Me
          </p>
        </SlideUp>

        {/* Main Heading */}
        <SlideUp delay={0.1}>
          <h2 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-6xl lg:text-7xl">
            Backend Developer focused on building{" "}
            <span className="text-[#6b705c]">
              functional and reliable digital systems.
            </span>
          </h2>
        </SlideUp>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Description */}
          <SlideUp delay={0.2}>
            <div>
              <p className="text-lg leading-relaxed text-[#5c4632]/80">
                I am a Backend Developer with hands-on experience in developing
                web applications, backend systems, and API-based services. I
                enjoy turning requirements and ideas into structured,
                functional, and maintainable digital solutions.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-[#5c4632]/80">
                My experience comes from working on various projects, ranging
                from administrative systems and service platforms to monitoring
                and educational applications. I focus on building systems that
                work reliably behind the interface.
              </p>
            </div>
          </SlideUp>

          {/* Highlights */}
          <SlideUp delay={0.3}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-[#5c4632]/10 bg-[#e7ded0]/40 p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg font-semibold text-[#30271f]">
                  Backend Development
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#5c4632]/70">
                  Building server-side functionality and application logic.
                </p>
              </div>

              <div className="rounded-2xl border border-[#5c4632]/10 bg-[#e7ded0]/40 p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg font-semibold text-[#30271f]">
                  API & Database
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#5c4632]/70">
                  Working with APIs, databases, authentication, and data
                  management.
                </p>
              </div>

              <div className="rounded-2xl border border-[#5c4632]/10 bg-[#e7ded0]/40 p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg font-semibold text-[#30271f]">
                  System Development
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#5c4632]/70">
                  Developing practical digital systems based on project
                  requirements.
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
