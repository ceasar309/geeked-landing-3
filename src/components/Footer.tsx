"use client";

import { motion } from "framer-motion";

const links = {
  Collections: ["Noir", "Rust", "Chaos", "Rebel"],
  About: ["Story", "Sustainability", "Careers", "Press"],
  Support: ["FAQ", "Shipping", "Returns", "Contact"],
  Social: ["Instagram", "YouTube", "Twitter", "TikTok"],
};

export default function Footer() {
  return (
    <footer className="section-padding relative pb-8 pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] as const }}
          className="mb-16"
        >
          <span className="font-display text-7xl tracking-tight text-foreground md:text-9xl lg:text-[10rem]">
            GEEKED
          </span>
          <p className="mt-2 font-elegant text-base italic text-earthen md:text-lg">
            Rustic soul. Modern chaos.
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-brand/20 via-brand/10 to-transparent" />
        </motion.div>

        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          {Object.entries(links).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="mb-5 font-body text-[9px] font-semibold tracking-[0.3em] text-brand/60 uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="cursor-pointer font-elegant text-base font-light text-earthen transition-colors hover:text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-stone/50 pt-8 md:flex-row">
          <p className="font-body text-[10px] font-light text-earthen/50">
            &copy; 2024 GEEKED. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <span
                key={item}
                className="cursor-pointer font-body text-[10px] font-light text-earthen/50 transition-colors hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="font-elegant text-xs italic text-earthen/30">
            Made with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
