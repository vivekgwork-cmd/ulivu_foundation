import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={logo}
          alt="Ulivu Foundation"
          className="h-24 w-24 rounded-full bg-cream-50 p-3 sm:h-28 sm:w-28"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-[2px] w-40 overflow-hidden rounded-full bg-forest-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gold-400"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
