import SlideUp from "@/components/animations/SlideUp";
import { projects } from "@/data/detailProjects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <SlideUp>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
            Projects
          </p>
        </SlideUp>

        {/* Heading */}
        <SlideUp delay={0.1}>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-6xl">
            Selected projects and systems I have worked on.
          </h2>
        </SlideUp>

        {/* Projects */}
        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <SlideUp key={project.title} delay={0.15 + index * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="group rounded-3xl border border-[#5c4632]/10 bg-[#e7ded0]/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7ded0]/50 hover:shadow-lg md:p-6">
                  <div className="flex flex-col gap-6 md:flex-row">
                    {/* Project Thumbnail */}
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl bg-[#cbbba0] md:w-64 lg:w-72">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 288px"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6b705c]">
                          {project.category}
                        </p>

                        <h3 className="text-2xl font-semibold tracking-tight text-[#30271f] md:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-[#5c4632]/75 md:text-base">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies + Footer */}
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-[#5c4632]/15 bg-[#f5f1e8] px-3 py-1.5 text-xs text-[#5c4632]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-[#5c4632]/10 pt-4">
                          <span className="text-sm text-[#6b705c]">
                            0{index + 1}
                          </span>

                          <span className="text-sm font-medium text-[#5c4632] transition-transform duration-300 group-hover:translate-x-1">
                            View Project →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
