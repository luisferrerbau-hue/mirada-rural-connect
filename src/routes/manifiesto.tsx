import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/manifiesto")({
  component: Manifiesto,
  head: () => ({
    meta: [
      { title: "Manifiesto — Mirada Rural" },
      { name: "description", content: "El manifiesto de Mirada Rural: una declaración de intenciones por el medio rural." },
      { property: "og:title", content: "Manifiesto — Mirada Rural" },
      { property: "og:url", content: "/manifiesto" },
    ],
    links: [{ rel: "canonical", href: "/manifiesto" }],
  }),
});

const points = [
  "Creemos que un pueblo de quince habitantes vale lo mismo que un barrio de quince mil.",
  "Defendemos el derecho a quedarse, a volver y a llegar por primera vez.",
  "No romantizamos la pobreza: exigimos servicios, no postales.",
  "Escuchamos antes de contar. Las historias no son nuestras, son prestadas.",
  "Pensamos que cuidar la tierra es cuidar a quien la trabaja.",
  "Sabemos que mirar es político. Mirar al campo, también.",
];

function Manifiesto() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-32">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Manifiesto</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.1] text-balance md:text-7xl">
          Lo que <em className="text-secondary">defendemos</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <ol className="space-y-12">
          {points.map((p, i) => (
            <li key={i} className="flex gap-6 border-t border-border pt-8">
              <span className="font-serif text-2xl text-secondary">0{i + 1}</span>
              <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">{p}</p>
            </li>
          ))}
        </ol>

        <p className="mt-20 border-t border-border pt-10 text-center font-serif text-xl italic text-muted-foreground">
          «Donde hay un pueblo, hay un país». — Mirada Rural
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
