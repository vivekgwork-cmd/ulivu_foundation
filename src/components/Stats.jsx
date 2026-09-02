import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { stats } from "../data/content.js";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString("en-IN") + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section
      className="relative px-[6%] py-20"
      style={{ background: "linear-gradient(180deg, var(--color-forest-900), var(--color-forest-800))" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-semibold text-gold-300 text-3xl sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[16ch] text-xs leading-snug text-cream-100/70 sm:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
