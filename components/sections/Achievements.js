import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";
import { achievements } from "@/data/detailAchievements";

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SlideUp>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
            Achievements
          </p>
        </SlideUp>

        <SlideUp delay={0.1}>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-6xl">
            Certificates and recognition from my professional journey.
          </h2>
        </SlideUp>

        <div className="mt-16 space-y-6">
          {achievements.map((achievement, index) => (
            <SlideUp
              key={`${achievement.title}-${achievement.issuer}`}
              delay={0.15 + index * 0.1}
            >
              <article className="group rounded-3xl border border-[#5c4632]/10 bg-[#e7ded0]/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7ded0]/50 hover:shadow-lg md:p-6">
                <div className="flex flex-col gap-6 md:flex-row">
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-[#cbbba0] md:w-64 lg:w-72">
                    <Image
                      src={achievement.image}
                      alt={`${achievement.title} certificate`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 288px"
                    />
                  </div>

                  {/* Achievement Content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6b705c]">
                      Achievement
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight text-[#30271f] md:text-3xl">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 text-base font-medium text-[#6b705c]">
                      Issued by {achievement.issuer}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#5c4632]/75 md:text-base">
                      {achievement.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="rounded-full border border-[#5c4632]/15 bg-[#f5f1e8] px-3 py-1.5 text-xs text-[#5c4632]">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-[#6b705c]">
                        Professional Recognition
                      </span>
                    </div>
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
