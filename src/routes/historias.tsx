import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import farmer from "@/assets/farmer.jpg";
import school from "@/assets/school.jpg";
import fields from "@/assets/fields.jpg";
import hero from "@/assets/hero-village.jpg";

export const Route = createFileRoute("/historias")({
  component: Historias,
  head: () => ({
    meta: [
      { title: "Historias — Mirada Rural" },
      { name: "description", content: "Crónicas y testimonios de la España rural." },
      { property: "og:title", content: "Historias — Mirada Rural" },
      { property: "og:url", content: "/historias" },
    ],
    links: [{ rel: "canonical", href: "/historias" }],
  }),
});

const items = [
  { img: farmer, place: "Teruel", title: "Manuel, el último que riega la huerta", date: "Mayo 2026", excerpt: "A sus 78 años abre la acequia cada mañana. Su gesto sostiene un sistema centenario." },
  { img: school, place: "Zamora", title: "Una escuela que cerró un martes", date: "Abril 2026", excerpt: "Tres niños no eran suficientes. Cuando cierra una escuela, el pueblo deja de tener futuro." },
  { img: fields, place: "Jaén", title: "El olivar que resiste al precio del aceite", date: "Marzo 2026", excerpt: "Cooperativas asociadas para no rendirse ante la gran distribución." },
  { img: hero, place: "Soria", title: "El pueblo que volvió a tener panadería", date: "Febrero 2026", excerpt: "Tres familias, un horno y una decisión: no marcharse." },
  { img: school, place: "Lugo", title: "Telemedicina en una aldea de 14 vecinos", date: "Enero 2026", excerpt: "La fibra llegó tarde, pero llegó. Hoy salva consultas y kilómetros." },
  { img: fields, place: "Cuenca", title: "Pastoras jóvenes del siglo XXI", date: "Diciembre 2025", excerpt: "Dejaron Madrid para reconstruir un rebaño. Y un oficio." },
];

function Historias() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-32">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Crónicas del territorio</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-balance md:text-7xl">
          Historias que se cuentan <em className="text-secondary">a fuego lento</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Reportajes, retratos y testimonios desde los pueblos. Sin filtros urbanos.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          {items.map((s, i) => (
            <article key={s.title} className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
              <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondary">
                <span>{s.place}</span>
                <span className="h-px w-8 bg-secondary/50" />
                <span className="text-muted-foreground">{s.date}</span>
              </div>
              <h2 className={`mt-3 font-serif leading-snug ${i % 3 === 0 ? "text-4xl md:text-5xl" : "text-2xl"}`}>{s.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
