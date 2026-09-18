"use client";

import { motion } from "motion/react";

export default function FadeIn({ children, duration = 0.6, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
