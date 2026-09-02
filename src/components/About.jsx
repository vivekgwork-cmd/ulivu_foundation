import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import treeImg from "../assets/images/forest-mist.jpg";
import logo from "../assets/images/logo.png";
import { pillars } from "../data/content.js";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-[6%] py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-forest-950), var(--color-forest-900))" }}
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-forest-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-400/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(10,26,11,0.55)]">
            <motion.img
              src={treeImg}
              alt="A lone tree standing wide against an open sky"
              className="h-full w-full scale-110 object-cover"
              style={{ y: imgY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
          </div>
          <motion.img
            src={logo}
            alt="Ulivu Foundation"
            className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full border-4 border-cream-50 bg-cream-50 p-2 shadow-xl sm:h-28 sm:w-28"
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <div>
          <motion.p custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-500">
            Who We Are
          </motion.p>
          <motion.h2 custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-balance text-3xl font-semibold leading-tight text-cream-50 sm:text-5xl">
            A Centre for the Symbiocene
          </motion.h2>

          <motion.p custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-6 text-[15px] leading-relaxed text-cream-100/80 sm:text-base">
            The <strong className="text-gold-300">Symbiocene</strong> is the era we're trying to
            build — one where human life grows in symbiosis with the rest of the living world,
            instead of at its expense. Ulivu Foundation was founded by{" "}
            <strong className="text-cream-50">Dr. Seema S. R.</strong>, an academician, researcher
            and environmental changemaker, to turn that idea into everyday practice: in apartment
            courtyards, school grounds, forest ranges and village panchayats across Karnataka.
          </motion.p>
          <motion.p custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-cream-100/70 sm:text-base">
            We work as connectors as much as doers — bringing together residents, students,
            foresters, panchayats and fellow non-profits around three commitments.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-cream-50/10 bg-cream-50/5 p-5 backdrop-blur-sm transition-colors hover:border-gold-400/40 hover:bg-cream-50/10"
              >
                <p.icon className="mb-3 text-2xl text-gold-400" />
                <h3 className="mb-1.5 font-semibold text-cream-50">{p.title}</h3>
                <p className="text-sm leading-relaxed text-cream-100/70">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
