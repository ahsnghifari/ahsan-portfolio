"use client";

import { motion } from "motion/react";

export default function SlideUp({
  children,
  duration = 0.7,
  delay = 0,
  distance = 30,
  once = true,
  animateOnView = true,
}) {
  const animationProps = animateOnView
    ? {
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once,
          amount: 0.15,
        },
      }
    : {
        animate: {
          opacity: 1,
          y: 0,
        },
      };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
      }}
      {...animationProps}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
