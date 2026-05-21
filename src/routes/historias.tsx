import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { stories } from "@/data/stories";

export const Route = createFileRoute("/historias")({
  component: Historias,
  head: () => ({
    meta: [
      { title: "Historias — Mirada Rural" },
      { name: "description", content: "13 crónicas periodísticas sobre despoblación rural en España: Molina, Sanabria, Albarracín, Jaén, O Cebreiro, Cuenca, Ansias, Tarazona, Sorbillán, Chinchilla, Tordesillas y más." },
      { property: "og:title", content: "Historias — Mirada Rural" },
      { property: "og:url", content: "/historias" },
    ],
    links: [{ rel: "canonical", href: "/historias" }],
  }),
});

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
          Reportajes y datos verificados desde los pueblos. Del Señorío de Molina (Guadalajara) a los Ancares lucenses. Pulsa cualquier crónica para leerla entera.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          {stories.map((s, i) => (
            <Link
              to="/historias/$slug"
              params={{ slug: s.slug }}
              key={s.slug}
              className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={s.img} alt={s.title} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondary">
                <span>{s.place}</span>
                <span className="h-px w-8 bg-secondary/50" />
                <span className="text-muted-foreground">{s.date}</span>
              </div>
              <h2 className={`mt-3 font-serif leading-snug ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl"}`}>{s.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
              <span className="mt-4 inline-block border-b border-foreground/30 pb-0.5 text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:border-foreground group-hover:text-foreground">
                Leer la crónica →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-16 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Imágenes: Wikimedia Commons (CC BY-SA / CC0). Cada crónica incluye la atribución concreta de la fotografía. Datos demográficos: INE, padrón continuo 2024.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
