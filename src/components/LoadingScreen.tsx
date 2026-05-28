"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] as const }}
        >
          <motion.span
            className="font-display text-[18vw] leading-none tracking-tight text-brand md:text-[12vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] as const }}
          >
            GEEKED
          </motion.span>
          <motion.div
            className="mt-4 h-[1px] bg-brand/40 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.77, 0, 0.175, 1] as const }}
          />
          <motion.p
            className="mt-4 font-elegant text-sm italic text-earthen tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Rustic soul. Modern chaos.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
