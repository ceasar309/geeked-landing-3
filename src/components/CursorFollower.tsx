"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 200, damping: 30, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 30, mass: 0.5 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/50 md:block"
        style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/80 md:block"
        style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
