import SlideUp from "@/components/animations/SlideUp";
import { experiences } from "@/data/detailExperience";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#e7ded0]/30 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <SlideUp>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
            Experience
          </p>
        </SlideUp>

        {/* Heading */}
        <SlideUp delay={0.1}>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-6xl">
            Experience building and supporting digital systems.
          </h2>
        </SlideUp>

        {/* Experience List */}
        <div className="mt-16">
          {experiences.map((experience, index) => (
            <SlideUp
              key={`${experience.company}-${experience.role}`}
              delay={0.15 + index * 0.1}
            >
              <article className="border-t border-[#5c4632]/15 py-10 last:border-b">
                <div className="grid gap-6 lg:grid-cols-[180px_1fr_220px] lg:gap-10">
                  {/* Period */}
                  <div>
                    <p className="text-sm font-medium text-[#6b705c]">
                      {experience.period}
                    </p>
                  </div>

                  {/* Main Information */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#30271f] md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-base font-medium text-[#6b705c]">
                      {experience.company}
                    </p>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5c4632]/75">
                      {experience.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap content-start gap-2 lg:justify-end">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#5c4632]/15 bg-[#f5f1e8] px-3 py-1.5 text-xs text-[#5c4632]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
