import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-6 right-6 z-[70] grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-forest-950 shadow-[0_15px_35px_-10px_rgba(226,161,58,0.9)]"
          aria-label="Back to top"
        >
          <HiArrowUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
