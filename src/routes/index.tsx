import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/real/virgen-hoz.jpg";
import { stories } from "@/data/stories";

const featured = stories.slice(0, 3);

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mirada Rural — Visibilidad para los pueblos" },
      { name: "description", content: "Damos voz a la España rural: despoblación, servicios, cultura y futuro." },
      { property: "og:title", content: "Mirada Rural" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const stats = [
  { num: "5.000", label: "pueblos en riesgo de desaparecer" },
  { num: "48%", label: "del territorio con menos de 8 hab/km²" },
  { num: "1.840", label: "municipios sin médico cada día" },
  { num: "−12%", label: "población rural en 20 años" },
];

const stories = [
  {
    img: hero,
    place: "La Siberia · Badajoz",
    title: "El Mirador de la Virgen de la Hoz",
    excerpt:
      "La comarca extremeña de La Siberia, Reserva de la Biosfera desde 2019, no llega a 8 hab/km². Desde el mirador sobre el embalse de Cíjara se ven veinte kilómetros de monte sin una sola luz.",
  },
  {
    img: sanabria,
    place: "Puebla de Sanabria · Zamora",
    title: "La provincia que más se ha vaciado",
    excerpt:
      "Zamora ha perdido el 16% de su población desde 2000 (INE). En Sanabria quedan pueblos con menos de diez vecinos en invierno.",
  },
  {
    img: olivar,
    place: "Sierra de Jaén · Andalucía",
    title: "El olivar tradicional contra el precio del aceite",
    excerpt:
      "300.000 hectáreas de olivar de pendiente. Cada campaña por debajo de coste expulsa a 2.000 pequeños propietarios.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative grain overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-secondary">Una mirada honesta</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-balance text-foreground md:text-7xl lg:text-8xl">
            Los pueblos no se{" "}
            <em className="text-secondary">vacían solos</em>.
            Alguien deja de mirarlos.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
            Desde el Mirador de la Virgen de la Hoz, en La Siberia extremeña, hasta los Ancares lucenses: recogemos las historias, los datos y las voces que no salen en las noticias. Para que el campo deje de ser paisaje y vuelva a ser país.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/historias" className="rounded-sm bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-primary/90">
              Lee las historias
            </Link>
            <Link to="/manifiesto" className="border-b border-foreground/40 pb-1 text-sm tracking-wide text-foreground/80 hover:border-foreground hover:text-foreground">
              Lee el manifiesto →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-6 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-12">
              <div className="font-serif text-5xl text-primary md:text-6xl">{s.num}</div>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO PULL QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Nuestra causa</p>
        <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-balance md:text-6xl">
          Detrás de cada cifra hay una <em className="text-secondary">cocina encendida</em>,
          una panadería que cierra, una abuela que aprende a usar el videobanco.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          No queremos romantizar ni denunciar por denunciar. Queremos contar. Mostrar lo
          que pasa cuando se cierra el último bar, cuando llega la fibra, cuando vuelve
          una familia. Porque ver es el primer paso para cambiar.
        </p>
      </section>

      {/* STORIES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Historias del campo</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Lo que está pasando ahora</h2>
          </div>
          <Link to="/historias" className="hidden text-sm tracking-wide text-foreground/70 hover:text-foreground md:block">
            Ver todas →
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.title} className="group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-secondary">{s.place}</p>
              <h3 className="mt-3 font-serif text-2xl leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grain relative overflow-hidden bg-secondary px-8 py-20 text-secondary-foreground md:px-20 md:py-28">
          <div className="relative max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Suma tu mirada.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-secondary-foreground/85">
              Si vives, trabajas o naciste en un pueblo, tu historia importa. Cuéntanosla
              y la convertimos en altavoz.
            </p>
            <Link to="/contacto" className="mt-10 inline-block rounded-sm bg-background px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-foreground transition hover:bg-background/90">
              Cuéntanos tu historia
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
