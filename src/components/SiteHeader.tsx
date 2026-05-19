import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/historias", label: "Historias" },
    { to: "/causa", label: "La causa" },
    { to: "/manifiesto", label: "Manifiesto" },
    { to: "/contacto", label: "Contacto" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Mirada Rural" className="h-10 w-auto" />
          <span className="hidden font-serif text-lg tracking-tight sm:block">
            <span className="text-primary">Mirada</span>{" "}
            <span className="text-secondary">Rural</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contacto"
          className="hidden rounded-sm bg-primary px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-primary/90 md:inline-block"
        >
          Súmate
        </Link>
      </div>
    </header>
  );
}
