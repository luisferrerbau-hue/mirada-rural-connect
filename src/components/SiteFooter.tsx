import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-auto brightness-0 invert opacity-90" />
            <span className="font-serif text-xl">mirada rural</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Damos voz al medio rural. Una mirada honesta a los pueblos que se vacían,
            a las personas que se quedan y a los paisajes que nos sostienen.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Explora</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/historias" className="hover:text-primary-foreground">Historias</Link></li>
            <li><Link to="/causa" className="hover:text-primary-foreground">La causa</Link></li>
            <li><Link to="/manifiesto" className="hover:text-primary-foreground">Manifiesto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>hola@miradarural.es</li>
            <li>@miradarural</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-6 py-6 text-center text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
        © {new Date().getFullYear()} Mirada Rural · Hecho desde el campo
      </div>
    </footer>
  );
}
