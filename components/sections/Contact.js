import SlideUp from "@/components/animations/SlideUp";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    value: "ahsanghifari04@gmail.com",
    href: "mailto:ahsanghifari04@gmail.com",
    icon: FiMail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/ahsan-ghifari",
    href: "https://www.linkedin.com/in/ahsan-ghifari",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    value: "github.com/ahsnghifari",
    href: "https://github.com/ahsnghifari",
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <SlideUp>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#6b705c]">
            Contact
          </p>
        </SlideUp>

        {/* Heading */}
        <SlideUp delay={0.1}>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#30271f] md:text-6xl">
            Let&apos;s build something useful together.
          </h2>
        </SlideUp>

        {/* Description */}
        <SlideUp delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5c4632]/75">
            Have a project, collaboration, or opportunity in mind? Feel free to
            get in touch with me.
          </p>
        </SlideUp>

        {/* Contact Links */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <SlideUp key={contact.name} delay={0.25 + index * 0.1}>
                <a
                  href={contact.href}
                  target={contact.name === "Email" ? undefined : "_blank"}
                  rel={
                    contact.name === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="group flex items-center gap-5 rounded-2xl border border-[#5c4632]/10 bg-[#e7ded0]/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7ded0]/50 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#30271f] text-[#f5f1e8] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#6b705c]">
                      {contact.name}
                    </p>

                    <p className="mt-1 truncate text-sm text-[#5c4632]">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
