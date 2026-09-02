import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import hero from "../assets/images/nilgiris-sunrise.jpg";
import logo from "../assets/images/logo.png";

const words = ["Rooted", "in", "nature.", "Growing", "the", "Symbiocene."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.28]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img src={hero} alt="Sunrise over the Nilgiri hills, Western Ghats" className="h-full w-full object-cover" />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/45 to-forest-950"
        style={{ opacity: overlayOpacity }}
      />

      {/* floating brand accents */}
      <motion.img
        src={logo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 h-40 w-40 opacity-[0.08] sm:h-56 sm:w-56"
        animate={{ rotate: [0, 8, 0], y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute left-[8%] top-1/3 h-2.5 w-2.5 rounded-full bg-gold-300/70 animate-float-slow" />
      <div className="pointer-events-none absolute right-[18%] top-1/4 h-1.5 w-1.5 rounded-full bg-gold-300/60 animate-float-slower" />

      <motion.div
        className="relative z-10 flex h-full w-[90%] max-w-6xl flex-col justify-center mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-300"
        >
          Bengaluru &amp; Shivamogga, Karnataka
        </motion.p>

        <h1 className="max-w-3xl text-balance text-[2.6rem] font-semibold leading-[1.08] text-cream-50 sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              className={`mr-3 inline-block ${w === "Symbiocene." ? "text-gold-300" : ""}`}
              initial={{ opacity: 0, y: 40, rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-6 max-w-xl text-base text-cream-100/85 sm:text-lg"
        >
          Ulivu Foundation works at the meeting point of conservation, research and
          community — planting forests, closing the waste loop, and standing up for
          the wild places that sustain us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-950 shadow-[0_15px_35px_-10px_rgba(226,161,58,0.75)]"
          >
            See Our Work
          </motion.a>
          <motion.a
            whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.97 }}
            href="#involved"
            className="rounded-full border border-cream-50/40 px-7 py-3.5 text-sm font-semibold text-cream-50"
          >
            Get Involved
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2 text-cream-50/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <HiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
