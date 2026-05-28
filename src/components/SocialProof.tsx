"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const posts = [
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=85",
    handle: "@geeked",
    likes: "12.4k",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85",
    handle: "@geeked",
    likes: "8.2k",
  },
  {
    src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=700&q=85",
    handle: "@geeked",
    likes: "15.7k",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85",
    handle: "@geeked",
    likes: "6.9k",
  },
  {
    src: "https://images.unsplash.com/photo-1485236715568-ddc5ee6cd227?w=700&q=85",
    handle: "@geeked",
    likes: "21.3k",
  },
  {
    src: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=700&q=85",
    handle: "@geeked",
    likes: "9.8k",
  },
  {
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=85",
    handle: "@geeked",
    likes: "11.2k",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85",
    handle: "@geeked",
    likes: "14.6k",
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, -250]);

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
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] as const }}
          className="mb-16 text-center"
        >
          <p className="font-body text-[11px] font-medium tracking-[0.35em] text-brand/60 uppercase">
            The Culture
          </p>
          <h2 className="font-serif text-5xl font-bold leading-none md:text-7xl lg:text-8xl">
            #GEEKED
          </h2>
          <p className="mt-3 font-elegant text-base italic text-earthen md:text-lg">
            Join the community. Wear the movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="space-y-3 md:space-y-4">
            {posts.slice(0, 2).map((post, i) => (
              <PostCard key={i} post={post} motionY={y1} />
            ))}
          </div>
          <div className="space-y-3 md:space-y-4">
            {posts.slice(2, 4).map((post, i) => (
              <PostCard key={i} post={post} motionY={y2} />
            ))}
          </div>
          <div className="hidden space-y-3 md:block md:space-y-4">
            {posts.slice(4, 6).map((post, i) => (
              <PostCard key={i} post={post} motionY={y1} />
            ))}
          </div>
          <div className="hidden space-y-3 md:block md:space-y-4">
            {posts.slice(6, 8).map((post, i) => (
              <PostCard key={i} post={post} motionY={y2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCard({
  post,
  motionY,
}: {
  post: (typeof posts)[0];
  motionY: MotionValue<number>;
}) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden"
      style={{ y: motionY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={post.src}
          alt={post.handle}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="font-body text-sm font-medium text-foreground">
            {post.handle}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-brand" aria-label="heart" role="img">
              ♥
            </span>
            <span className="font-body text-xs text-foreground/70">
              {post.likes}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
