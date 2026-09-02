import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import ghats from "../assets/images/western-ghats-mountains.jpg";
import { campaignPoints, campaignStats } from "../data/content.js";

export default function Campaign() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-[6%] py-28 sm:py-36">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: 1.2 }}>
        <img src={ghats} alt="Misty ridgelines of the Western Ghats" className="h-full w-full object-cover" />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-forest-700) 0%, rgba(58,98,49,0.55) 12%, rgba(30,58,28,0.6) 30%, rgba(10,26,11,0.72) 75%, var(--color-forest-900) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-300">Active Campaign</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
            Save Sringeri. <br className="hidden sm:block" />
            Save the Western Ghats.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-cream-100/80 sm:text-base">
            A proposed Shivamogga–Sringeri–Mangaluru railway line would cut through one of
            the world's biodiversity hotspots — felling forests, fragmenting wildlife
            corridors, and destabilising slopes prone to landslides.
          </p>

          <motion.a
            whileHover={{ x: 6 }}
            href="https://www.instagram.com/ulivu_foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-300/50 px-6 py-3 text-sm font-semibold text-gold-300"
          >
            Follow the Campaign <FaArrowRight size={13} />
          </motion.a>
        </motion.div>

        <div className="space-y-8">
          <ul className="space-y-4">
            {campaignPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-cream-100/85 sm:text-[15px]"
              >
                <HiArrowLongRight className="mt-0.5 shrink-0 text-gold-400" size={20} />
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 divide-x divide-cream-50/15 rounded-2xl border border-cream-50/15 bg-cream-50/5 backdrop-blur-sm"
          >
            {campaignStats.map((s) => (
              <div key={s.label} className="px-3 py-5 text-center">
                <p className="text-xl font-bold text-gold-300 sm:text-2xl">
                  {s.value}
                  <span className="text-xs font-medium text-gold-300/80">{s.unit}</span>
                </p>
                <p className="mt-1 text-[11px] leading-tight text-cream-100/65 sm:text-xs">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border-l-4 border-gold-400 bg-cream-50/5 p-5 text-sm text-cream-100/85"
          >
            <strong className="text-gold-300">Our ask: </strong>
            cancel the DPR tender, drop the Sringeri railway alignment, and invest in
            upgrading existing roads instead.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
