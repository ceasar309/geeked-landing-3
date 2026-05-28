"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const products = [
  {
    name: "Noir Bomber",
    category: "Outerwear",
    price: "$420",
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85",
    tag: "New",
    color: "#1a1614",
  },
  {
    name: "Rust Hoodie",
    category: "Tops",
    price: "$180",
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=85",
    tag: "Best Seller",
    color: "#2c2825",
  },
  {
    name: "Chaos Pants",
    category: "Bottoms",
    price: "$260",
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&q=85",
    tag: "Limited",
    color: "#1a1614",
  },
];

export default function ProductHighlights() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-body text-[11px] font-medium tracking-[0.35em] text-brand/60 uppercase">
              Highlights
            </p>
            <h2 className="font-serif text-5xl font-bold leading-none md:text-7xl lg:text-8xl">
              Essential
              <br />
              Pieces
            </h2>
          </div>
          <MagneticButton>
            <span className="inline-block rounded-full border border-white/15 px-7 py-2.5 font-body text-[10px] font-semibold tracking-[0.3em] text-foreground/60 transition-all hover:border-white/30 hover:text-foreground uppercase">
              View All →
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div className="grid gap-8 md:grid-cols-3 md:gap-8" style={{ y }}>
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [4, -4]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.77, 0, 0.175, 1] as const,
      }}
      className="group"
    >
      <motion.div
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{ rotateX, rotateY, perspective: 1000 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Image
          src={product.src}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/0" />

        <div className="absolute left-5 top-5">
          <span className="inline-block rounded-full bg-brand/90 px-3.5 py-1 font-body text-[9px] font-bold tracking-[0.2em] text-background uppercase">
            {product.tag}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="rounded-full border border-foreground/30 bg-background/40 px-8 py-3 font-body text-[10px] font-semibold tracking-[0.25em] text-foreground backdrop-blur-md uppercase">
            Quick View
          </span>
        </div>
      </motion.div>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight">
            {product.name}
          </h3>
          <p className="mt-0.5 font-body text-[10px] font-medium tracking-[0.25em] text-earthen uppercase">
            {product.category}
          </p>
        </div>
        <span className="font-serif text-lg font-semibold text-brand">
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}
