import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";

import cleanup from "../assets/images/forest-cleanup-drive.jpg";
import school1 from "../assets/images/world-env-day-school-1.jpg";
import school2 from "../assets/images/world-env-day-school-2.jpg";
import walk from "../assets/images/nature-walk-volunteers.jpg";
import bajaj from "../assets/images/bajaj-foundation-group.jpg";
import elephant from "../assets/images/elephant-forest.jpg";

const photos = [
  { src: cleanup, tall: true, caption: "Forest clean-up with the Umblebailu Forest Range, Bhadravati" },
  { src: school1, tall: false, caption: "World Environment Day with the children of Gnanabodhini Central School" },
  { src: school2, tall: false, caption: "Guests and educators at the school's Environment Day program" },
  { src: walk, tall: false, caption: "Nature walk through the Bangalore University campus" },
  { src: bajaj, tall: false, caption: "Dhyeya capacity-building program, Sevagram, Wardha" },
  { src: elephant, tall: true, caption: "Elephant corridors of the Western Ghats — what the Sringeri railway puts at risk" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="gallery"
      className="relative px-[6%] py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-forest-900), var(--color-forest-950))" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold-300"
        >
          From the Field
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-balance text-center text-3xl font-semibold text-cream-50 sm:text-5xl"
        >
          Moments from our work
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              onClick={() => setActive(p)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                p.tall ? "row-span-2 aspect-[3/5]" : "aspect-square sm:aspect-[4/5]"
              } ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-medium text-cream-50 sm:text-sm">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-950/95 p-6 backdrop-blur-md"
          >
            <button
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <HiX size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl"
            >
              <img src={active.src} alt={active.caption} className="max-h-[75vh] w-full rounded-2xl object-contain" />
              <p className="mt-4 text-center text-sm text-cream-100/80">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
