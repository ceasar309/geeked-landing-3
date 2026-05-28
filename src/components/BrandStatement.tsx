"use client";

import { motion } from "framer-motion";

const statements = [
  {
    text: "Built for the misfits.",
    sub: "The outcasts. The dreamers. The ones who refuse to blend in.",
  },
  {
    text: "Luxury in rebellion.",
    sub: "Refined craftsmanship meets raw, unapologetic attitude.",
  },
  {
    text: "Rustic soul. Modern chaos.",
    sub: "Earth-born textures tangled with the pulse of the city.",
  },
];

export default function BrandStatement() {
  return (
    <section className="section-padding relative overflow-hidden py-40 md:py-56">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone/10 to-transparent" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-brand/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="mb-24 text-center"
        >
          <p className="font-body text-[11px] font-medium tracking-[0.35em] text-brand/50 uppercase">
            The Manifesto
          </p>
          <div className="mx-auto mt-3 h-px w-12 bg-brand/30" />
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {statements.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.6 }}
              className={`relative ${i % 2 === 0 ? "md:text-left md:pr-20" : "md:text-right md:pl-20"}`}
            >
              <motion.span
                className="font-display absolute -top-8 left-0 text-[120px] font-bold leading-none text-brand/5 md:text-[200px]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>

              <motion.h2
                className={`relative font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.77, 0, 0.175, 1] as const,
                }}
              >
                {s.text}
              </motion.h2>

              <motion.p
                className={`mt-4 max-w-2xl font-elegant text-base italic leading-relaxed text-earthen md:text-lg ${i % 2 === 0 ? "md:text-left" : "md:ml-auto md:text-right"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {s.sub}
              </motion.p>

              {i === 1 && (
                <motion.div
                  className="mx-auto mt-8 h-px w-24 bg-brand/20 md:hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-32 max-w-2xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-brand/30" />
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-brand/40 uppercase">
              Our Ethos
            </span>
            <span className="h-px w-12 bg-brand/30" />
          </div>
          <p className="font-elegant text-lg italic leading-relaxed text-earthen md:text-xl">
            We exist at the intersection of raw authenticity and refined
            craftsmanship. Every stitch tells a story. Every silhouette defies
            convention. Geeked is not just clothing — it&apos;s a statement of
            intent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
