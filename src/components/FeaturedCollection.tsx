"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Noir",
    subtitle: "Dark Architecture",
    desc: "Monolithic silhouettes forged in shadow",
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=85",
    size: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Rust",
    subtitle: "Earthy Tones",
    desc: "Warmth drawn from the earth itself",
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=85",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Chaos",
    subtitle: "Modern Edge",
    desc: "Structure meets beautiful disorder",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=900&q=85",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Rebel",
    subtitle: "Street Soul",
    desc: "Born from the concrete and the cold",
    src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&q=85",
    size: "md:col-span-2 md:row-span-1",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="section-padding relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-body text-[11px] font-medium tracking-[0.35em] text-brand/60 uppercase">
            Featured
          </p>
          <div className="mt-2 flex items-center gap-6">
            <h2 className="font-serif text-5xl font-bold leading-none md:text-7xl lg:text-8xl">
              The Collection
            </h2>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-stone to-transparent md:block" />
          </div>
          <p className="mt-4 font-elegant text-base italic text-earthen md:text-lg">
            Four pillars. One vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-6">
          {items.map((item, i) => (
            <GridCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GridCard({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.77, 0, 0.175, 1] as const,
      }}
      className={`group relative cursor-pointer overflow-hidden ${item.size} col-span-2 md:col-span-1`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full md:min-h-[400px]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/0" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="font-display text-5xl leading-none tracking-tight text-foreground md:text-6xl">
            {item.title}
          </span>
          <p className="mt-1 font-body text-[11px] font-medium tracking-[0.25em] text-brand/70 uppercase">
            {item.subtitle}
          </p>
          <p className="mt-2 max-w-[200px] font-elegant text-sm italic text-earthen/80">
            {item.desc}
          </p>
        </div>

        <div className="absolute right-5 top-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background/50 text-sm backdrop-blur-sm">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
