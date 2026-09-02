import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <section
      id="contact"
      className="relative px-[6%] py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, var(--color-cream-100), var(--color-cream-50))" }}
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Get In Touch</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl">
            Let's grow something together
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-forest-700/75">
            Have a question, an idea, or a school/community that wants to work with us?
            Send a message — we read every one.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href="https://wa.me/917483706324" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 font-semibold text-forest-800 transition-colors hover:text-gold-600">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-900 text-cream-50"><FaWhatsapp /></span>
              +91 74837 06324
            </a>
            <a href="https://www.instagram.com/ulivu_foundation/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 font-semibold text-forest-800 transition-colors hover:text-gold-600">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-900 text-cream-50"><FaInstagram /></span>
              @ulivu_foundation
            </a>
            <span className="flex items-center gap-3 font-semibold text-forest-800">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-900 text-cream-50"><FaMapMarkerAlt /></span>
              Bengaluru &amp; Shivamogga, Karnataka
            </span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[1.75rem] bg-white p-8 shadow-[0_30px_60px_-30px_rgba(20,43,20,0.35)] sm:p-10"
        >
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-semibold text-forest-800">Name</label>
            <input required type="text" className="w-full rounded-xl border border-forest-900/10 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400" />
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-semibold text-forest-800">Email</label>
            <input required type="email" className="w-full rounded-xl border border-forest-900/10 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400" />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-semibold text-forest-800">Message</label>
            <textarea required rows={4} className="w-full resize-none rounded-xl border border-forest-900/10 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400" />
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full rounded-full bg-gold-400 py-3.5 text-sm font-semibold text-forest-950 shadow-[0_15px_35px_-12px_rgba(226,161,58,0.8)]"
          >
            Send Message
          </motion.button>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-xl bg-mint-100 p-3 text-xs text-forest-800"
            >
              Thanks for reaching out! This form is a demo — connect it to your email
              service (e.g. Formspree) or use WhatsApp/Instagram above for real messages.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
