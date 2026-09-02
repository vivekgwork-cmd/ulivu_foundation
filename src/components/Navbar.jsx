import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#partners", label: "Partners" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-950/70 py-3 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Ulivu Foundation" className="h-10 w-10 rounded-full bg-cream-50 p-1.5 sm:h-11 sm:w-11" />
          <span className="flex flex-col leading-none">
            <span className="font-semibold tracking-wide text-cream-50">ULIVU</span>
            <span className="text-[9px] font-medium tracking-[0.35em] text-gold-400">FOUNDATION</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-cream-100/90 transition-colors hover:text-gold-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-forest-950 shadow-[0_8px_24px_-8px_rgba(226,161,58,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-gold-300"
          >
            Contact Us
          </a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-full text-cream-50 lg:hidden"
          aria-label="Open menu"
        >
          <HiMenu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-forest-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full text-cream-50"
                aria-label="Close menu"
              >
                <HiX size={28} />
              </button>
            </div>
            <motion.nav className="flex flex-col items-center gap-8 pt-10">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="text-2xl font-medium text-cream-50"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
