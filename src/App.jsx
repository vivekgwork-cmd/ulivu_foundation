import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Stats from "./components/Stats.jsx";
import Programs from "./components/Programs.jsx";
import Campaign from "./components/Campaign.jsx";
import Gallery from "./components/Gallery.jsx";
import Partners from "./components/Partners.jsx";
import Involved from "./components/Involved.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Lenis owns scrolling now, so plain <a href="#..."> jumps need to be
    // routed through it explicitly or they land instantly with no easing.
    function onClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (id === "#" || id === "#top") {
        e.preventDefault();
        lenis.scrollTo(0);
        return;
      }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -84 });
      }
    }
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <div className="grain relative">
      <AnimatePresence mode="wait">{loading && <Preloader key="preloader" />}</AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main className="relative">
        {/* Every section below carries its own top→bottom gradient, tuned so
            each one ends exactly where the next begins — one continuous
            flow of colour with no hard seams anywhere on the page. */}
        <Hero />
        <About />
        <Stats />
        <Programs />
        <Campaign />
        <Gallery />
        <Partners />
        <Involved />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
