import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import fields from "@/assets/fields.jpg";

export const Route = createFileRoute("/causa")({
  component: Causa,
  head: () => ({
    meta: [
      { title: "La causa — Mirada Rural" },
      { name: "description", content: "Los problemas estructurales del medio rural y por qué importan." },
      { property: "og:title", content: "La causa — Mirada Rural" },
      { property: "og:url", content: "/causa" },
    ],
    links: [{ rel: "canonical", href: "/causa" }],
  }),
});

const issues = [
  { n: "01", t: "Despoblación", d: "Cada año desaparecen pueblos enteros del mapa. Una de cada dos provincias pierde habitantes." },
  { n: "02", t: "Servicios públicos", d: "Sanidad, educación y transporte se concentran en las ciudades. La distancia es desigualdad." },
  { n: "03", t: "Conectividad", d: "Sin fibra ni cobertura, no hay teletrabajo ni telemedicina. La España de dos velocidades." },
  { n: "04", t: "Agricultura justa", d: "Precios en origen por debajo del coste, intermediarios que ganan más que quien siembra." },
  { n: "05", t: "Memoria y cultura", d: "Tradiciones, oficios y lenguas que se pierden con cada vecino que se va." },
  { n: "06", t: "Crisis climática", d: "Sequías, incendios y desertificación afectan primero a quienes viven del territorio." },
];

function Causa() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative grain overflow-hidden">
        <div className="absolute inset-0">
          <img src={fields} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-32">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Por qué Mirada Rural</p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
            La España rural no es un decorado. Es <em className="text-secondary">la mitad del país</em>.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {issues.map((i) => (
            <div key={i.n} className="border-t border-border pt-6">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-4xl text-secondary">{i.n}</span>
                <h3 className="font-serif text-3xl">{i.t}</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
