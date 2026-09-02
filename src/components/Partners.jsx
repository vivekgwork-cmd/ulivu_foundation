import { motion } from "framer-motion";
import { partners } from "../data/content.js";

export default function Partners() {
  const loop = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-forest-950), var(--color-cream-50) 55%, var(--color-cream-50))" }}
    >
      <div className="px-[6%]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold-600"
        >
          Working Together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-balance text-center text-3xl font-semibold text-forest-900 sm:text-5xl"
        >
          Partners &amp; collaborators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-lg text-center text-sm text-forest-700/70 sm:text-base"
        >
          Real change needs many hands. We're proud to work alongside these institutions.
        </motion.p>
      </div>

      <div className="relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-forest-900/10 bg-white px-6 py-3 text-sm font-semibold text-forest-800 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
