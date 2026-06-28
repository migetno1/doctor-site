import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookButton } from "./BookButton";

/** Persistent booking CTA for small screens (header CTA is hidden on mobile). */
export function MobileBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/90 px-4 py-3 backdrop-blur-xl md:hidden"
        >
          <BookButton size="md" className="w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
