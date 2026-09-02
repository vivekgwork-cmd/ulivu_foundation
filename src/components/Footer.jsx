import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-[6%] pb-10 pt-24 text-center"
      style={{ background: "linear-gradient(180deg, var(--color-cream-50), var(--color-forest-950) 18%)" }}
    >
      <img
        src={logo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 opacity-[0.05]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4">
        <img src={logo} alt="Ulivu Foundation" className="h-14 w-14 rounded-full bg-cream-50 p-2" />
        <p className="text-sm font-medium tracking-wide text-cream-100/80">
          Centre for Symbiocene &middot; Conservation &middot; Research &middot; Community
        </p>
        <p className="text-xs text-cream-100/45">
          © {new Date().getFullYear()} Ulivu Foundation. Built with roots, not templates.
        </p>
      </div>
    </footer>
  );
}
