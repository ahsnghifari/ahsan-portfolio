import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#5c4632]/10 bg-[#30271f] text-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Branding */}
          <div>
            <Link href="#home" className="text-2xl font-semibold tracking-wide">
              Ahsan.
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/60">
              Backend Developer focused on building functional, reliable, and
              maintainable digital systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a5a58d]">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-[#f5f1e8]/60 transition-colors duration-300 hover:text-[#f5f1e8]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a5a58d]">
              Connect
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f1e8]/15 text-[#f5f1e8]/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5f1e8]/40 hover:text-[#f5f1e8]"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahsan-ghifari-ab1a0824b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f1e8]/15 text-[#f5f1e8]/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5f1e8]/40 hover:text-[#f5f1e8]"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#f5f1e8]/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#f5f1e8]/40">
            © {new Date().getFullYear()} Ahsan Ghifari. All rights reserved.
          </p>

          <Link
            href="#home"
            className="group flex w-fit items-center gap-2 text-sm text-[#f5f1e8]/60 transition-colors duration-300 hover:text-[#f5f1e8]"
          >
            Back to top
            <FiArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
