import Link from "next/link";
import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-24 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Hero Content */}
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
              Backend Developer
            </p>

            <SlideUp animateOnView={false}>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-7xl lg:text-8xl">
                Building systems
                <br />
                <span className="text-[#6b705c]">behind the interface.</span>
              </h1>
            </SlideUp>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5c4632]/80">
              I build web applications and backend systems with a focus on
              functionality, reliability, and clean architecture.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-full bg-[#30271f] px-7 py-3 text-sm font-medium text-[#f5f1e8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5c4632]"
              >
                View Projects
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-[#5c4632]/30 px-7 py-3 text-sm font-medium text-[#5c4632] transition-all duration-300 hover:-translate-y-1 hover:border-[#5c4632]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <SlideUp animateOnView={false} delay={0.2}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-[#5c4632]/10 bg-[#e7ded0]">
              <Image
                src="/images/profile/profile.jpeg"
                alt="Ahsan Ghifari"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </SlideUp>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex items-center gap-4 text-sm text-[#6b705c]">
          <span className="h-px w-12 bg-[#6b705c]" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
