import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { involvedCards } from "../data/content.js";

export default function Involved() {
  return (
    <section
      id="involved"
      className="relative px-[6%] py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-cream-50), var(--color-cream-100))" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Join In</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl">
              There's a place for you in the Symbiocene
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-forest-700/75">
              Whether you have an hour, a weekend, or an institution behind you — there's a
              way to plug in.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {involvedCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="flex flex-col justify-between rounded-[1.5rem] bg-forest-900 p-7 text-cream-50 shadow-[0_25px_50px_-25px_rgba(20,43,20,0.6)]"
              >
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-cream-100/75">{c.text}</p>
                </div>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300"
                >
                  {c.cta} <FaArrowRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
