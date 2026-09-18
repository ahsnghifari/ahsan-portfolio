"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#5c4632]/10 bg-[#f5f1e8]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#home"
          className="text-xl font-semibold tracking-wide text-[#30271f]"
        >
          Ahsan Ghifari
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#5c4632] transition-all duration-300 hover:-translate-y-1 hover:text-[#30271f] hover:drop-shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#30271f] md:hidden"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#5c4632]/10 bg-[#f5f1e8] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-[#5c4632]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
