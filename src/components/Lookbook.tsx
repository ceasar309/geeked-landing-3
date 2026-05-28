"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const lookbookItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=85",
    title: "AW25",
    subtitle: "Noir Collection",
    color: "#080705",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1000&q=85",
    title: "SS25",
    subtitle: "Rust Revival",
    color: "#1a1614",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=85",
    title: "AW24",
    subtitle: "Concrete Dreams",
    color: "#080705",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=85",
    title: "SS24",
    subtitle: "Urban Solitude",
    color: "#1a1614",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=85",
    title: "AW23",
    subtitle: "Raw Origins",
    color: "#080705",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=1000&q=85",
    title: "SS23",
    subtitle: "Dawn",
    color: "#1a1614",
  },
];

export default function Lookbook() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      if (sectionRef.current && trackRef.current) {
        const containerW = sectionRef.current.offsetWidth;
        const trackW = trackRef.current.scrollWidth;
        setScrollDistance(Math.max(0, trackW - containerW));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        Math.floor(v * lookbookItems.length),
        lookbookItems.length - 1
      );
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] as const }}
            className="section-padding absolute left-0 top-16 z-20"
          >
            <p className="font-body text-[11px] font-medium tracking-[0.35em] text-brand/60 uppercase">
              Archive
            </p>
            <h2 className="font-serif text-5xl font-bold leading-none md:text-7xl lg:text-8xl">
              Lookbook
            </h2>
          </motion.div>

          <div className="flex h-full items-center pl-6 md:pl-12 lg:pl-24">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 md:gap-8"
            >
              {lookbookItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative w-[75vw] flex-shrink-0 md:w-[50vw] lg:w-[38vw]"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 75vw, 38vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
                    >
                      <span className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                        {item.title}
                      </span>
                      <p className="mt-1 font-body text-[11px] font-medium tracking-[0.25em] text-brand/70 uppercase">
                        {item.subtitle}
                      </p>
                    </motion.div>

                    <div className="absolute left-5 top-5">
                      <span className="font-display text-8xl font-bold text-foreground/5 md:text-9xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              {lookbookItems.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] w-6 transition-all duration-300 ${
                    i === activeIndex ? "bg-brand w-10" : "bg-stone"
                  }`}
                />
              ))}
            </div>
            <span className="font-body text-[9px] font-light tracking-[0.2em] text-earthen uppercase">
              {String(activeIndex + 1).padStart(2, "0")} / {String(lookbookItems.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
