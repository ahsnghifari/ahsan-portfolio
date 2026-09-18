"use client";

import { FiFileText } from "react-icons/fi";

export default function FloatingCV() {
  return (
    <a
      href="/cv/CV-AHSAN-GHIFARI.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View CV"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#30271f] text-[#f5f1e8] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-[#5c4632] hover:shadow-xl md:bottom-8 md:right-8"
    >
      <div className="flex flex-col items-center gap-0.5">
        <FiFileText size={20} />
        <span className="text-[10px] font-medium tracking-wide">CV</span>
      </div>
    </a>
  );
}
