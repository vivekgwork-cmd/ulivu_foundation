import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const CONTACTS = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 74837 06324",
    href: "https://wa.me/917483706324",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@ulivu_foundation",
    href: "https://www.instagram.com/ulivu_foundation/",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bengaluru & Shivamogga, Karnataka",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-[6%] py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-cream-100), var(--color-cream-50))" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-600"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-balance text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl"
        >
          Let's grow something together
        </motion.h2>
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-forest-700/75"
        >
          Have a question, an idea, or a school/community that wants to work with us?
          Reach out through any of these — we read every message.
        </motion.p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CONTACTS.map((c, i) => {
            const Tag = c.href ? motion.a : motion.div;
            return (
              <Tag
                key={c.label}
                {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={c.href ? { y: -6 } : {}}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-7 shadow-[0_20px_45px_-25px_rgba(20,43,20,0.35)] transition-colors hover:shadow-[0_25px_55px_-20px_rgba(20,43,20,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-forest-900 text-lg text-cream-50">
                  <c.icon />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-700/60">{c.label}</p>
                  <p className="mt-1 font-semibold text-forest-900">{c.value}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
