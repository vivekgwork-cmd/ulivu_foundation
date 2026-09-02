import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { programs } from "../data/content.js";

function ProgramCard({ program, index }) {
  const Icon = program.icon;
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="group relative rounded-[1.75rem] bg-cream-50 p-8 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.5)]"
    >
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-forest-800 text-2xl text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
        <Icon />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-forest-900">{program.title}</h3>
      <p className="text-sm leading-relaxed text-forest-700/80">{program.text}</p>
      <span className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-forest-900/5 transition-all group-hover:ring-gold-400/50" />
    </motion.article>
  );
}

export default function Programs() {
  return (
    <section
      id="work"
      className="relative px-[6%] py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-forest-800), var(--color-forest-700))" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold-300"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-center text-3xl font-semibold text-cream-50 sm:text-5xl"
        >
          Six ways we show up for the planet
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-lg text-center text-sm text-cream-100/70 sm:text-base"
        >
          From a single sapling to a policy campaign, our programs meet the environment
          crisis at every scale.
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
