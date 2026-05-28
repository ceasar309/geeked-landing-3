"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

const heroImages = [
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=85",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=85",
  "https://images.unsplash.com/photo-1485236715568-ddc5ee6cd227?w=1600&q=85",
];

const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] as const },
  },
};

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {heroImages.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            initial={{ opacity: i === 0 ? 1 : 0, scale: 1.1 }}
            animate={{
              opacity: i === 0 ? [1, 0.4, 1] : [0, 0.5, 0],
              scale: [1.1, 1.05, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 5,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-body text-[11px] font-medium tracking-[0.4em] text-brand/70 uppercase"
          >
            Luxury Streetwear Collection
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-brand/40" />
            <span className="font-elegant text-xs italic text-earthen tracking-wider">
              Est. 2024
            </span>
            <span className="h-px w-8 bg-brand/40" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[20vw] leading-[0.8] tracking-tight text-foreground md:text-[16vw] lg:text-[13vw]"
          >
            GEEKED
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            className="font-serif text-[4vw] font-bold italic leading-none text-brand/30 md:text-[3vw] lg:text-[2.2vw]"
          >
            Luxury in Rebellion
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-lg font-body text-sm font-light leading-relaxed text-earthen md:text-base"
          >
            Where rustic soul meets modern chaos. Luxury redefined for the bold,
            the broken, and the beautiful.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            <MagneticButton>
              <span className="inline-block rounded-full border border-brand bg-brand px-10 py-3.5 font-body text-[11px] font-semibold tracking-[0.25em] text-background transition-all hover:bg-transparent hover:text-brand uppercase">
                Explore Collection
              </span>
            </MagneticButton>
            <MagneticButton>
              <span className="inline-block rounded-full border border-white/15 bg-transparent px-10 py-3.5 font-body text-[11px] font-semibold tracking-[0.25em] text-foreground/70 transition-all hover:border-white/30 hover:text-foreground uppercase">
                View Lookbook
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-body text-[9px] font-light tracking-[0.3em] text-earthen uppercase">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-brand/40 to-transparent" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
        style={{ opacity }}
      >
        {["IG", "YT", "X"].map((s) => (
          <button
            key={s}
            className="font-body text-[9px] font-medium tracking-[0.2em] text-earthen transition-colors hover:text-brand uppercase"
          >
            {s}
          </button>
        ))}
      </motion.div>
    </section>
  );
}
