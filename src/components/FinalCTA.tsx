"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c8a27a08_0%,_transparent_70%)]" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-brand/10 to-transparent" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ scale, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[11px] font-medium tracking-[0.4em] text-brand/60 uppercase"
        >
          Join the movement
        </motion.p>

        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="h-px w-8 bg-brand/30" />
          <span className="font-elegant text-xs italic text-earthen">
            The Future Awaits
          </span>
          <span className="h-px w-8 bg-brand/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.77, 0, 0.175, 1] as const,
          }}
          className="font-serif text-[12vw] font-bold leading-[0.9] tracking-tight md:text-[9vw] lg:text-[7vw]"
        >
          Enter the
          <br />
          <span className="lux-gradient">World of</span>
          <br />
          <span className="font-display tracking-tight text-foreground">
            GEEKED
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <MagneticButton>
            <span className="inline-block rounded-full border border-brand bg-brand px-12 py-4 font-body text-[11px] font-semibold tracking-[0.3em] text-background transition-all hover:bg-transparent hover:text-brand uppercase">
              Join the Waitlist
            </span>
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 max-w-md font-elegant text-sm italic leading-relaxed text-earthen"
        >
          Be the first to know about drops, exclusive releases, and
          collaborations.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
    </section>
  );
}
