import SlideUp from "@/components/animations/SlideUp";
import { skills } from "@/data/technicalSkills";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#e7ded0]/30 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <SlideUp>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
            Skills
          </p>
        </SlideUp>

        {/* Heading */}
        <SlideUp delay={0.1}>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-6xl">
            Tools and technologies I use to build digital systems.
          </h2>
        </SlideUp>

        {/* Skill Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SlideUp key={skill.category} delay={0.15 + index * 0.1}>
              <div className="h-full rounded-2xl border border-[#5c4632]/10 bg-[#f5f1e8] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xl font-semibold text-[#30271f]">
                  {skill.category}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#5c4632]/70">
                  {skill.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#5c4632]/15 bg-[#e7ded0]/50 px-4 py-2 text-sm text-[#5c4632]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
