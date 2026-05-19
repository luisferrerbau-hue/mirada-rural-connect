import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getStory, stories } from "@/data/stories";

export const Route = createFileRoute("/historias/$slug")({
  component: StoryDetail,
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.story;
    if (!s) return { meta: [{ title: "Historia — Mirada Rural" }] };
    return {
      meta: [
        { title: `${s.title} — Mirada Rural` },
        { name: "description", content: s.excerpt },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.excerpt },
        { property: "og:image", content: s.img },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: s.img },
      ],
      links: [{ rel: "canonical", href: `/historias/${s.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-serif text-5xl text-primary">Historia no encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">Esta crónica aún no está publicada.</p>
        <Link to="/historias" className="mt-6 inline-flex rounded-sm bg-primary px-5 py-2 text-sm text-primary-foreground">
          Ver todas las historias
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <p className="text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function StoryDetail() {
  const { story } = Route.useLoaderData();
  const others = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO IMG */}
      <section className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <img src={story.img} alt={story.title} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* HEADER */}
      <section className="mx-auto max-w-3xl px-6 pt-12 md:pt-16">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondary">
          <span>{story.place}</span>
          <span className="h-px w-8 bg-secondary/50" />
          <span className="text-muted-foreground">{story.date}</span>
          <span className="h-px w-8 bg-secondary/50" />
          <span className="text-muted-foreground">{story.readingTime}</span>
        </div>
        <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-balance md:text-6xl">
          {story.title}
        </h1>
        <p className="mt-8 border-l-2 border-secondary/60 pl-6 font-serif text-xl italic leading-relaxed text-foreground/85 md:text-2xl">
          {story.excerpt}
        </p>
      </section>

      {/* DATA */}
      <section className="mx-auto mt-12 max-w-3xl px-6">
        <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border bg-muted/30 md:grid-cols-4 md:divide-y-0">
          {story.data.map((d) => (
            <div key={d.label} className="px-4 py-5">
              <div className="font-serif text-2xl text-primary md:text-3xl">{d.value}</div>
              <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-7">
          {story.body.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-serif text-2xl leading-snug text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-primary"
                  : "text-[17px] leading-[1.75] text-foreground/85"
              }
            >
              {p}
            </p>
          ))}
        </div>
        <p className="mt-16 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          Imagen: {story.imgCredit}. Datos: INE, padrón continuo 2024, organizaciones citadas.
        </p>
      </article>

      {/* MORE */}
      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Seguir leyendo</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Otras crónicas de Mirada Rural</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {others.map((o) => (
              <Link to="/historias/$slug" params={{ slug: o.slug }} key={o.slug} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.img} alt={o.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-secondary">{o.place}</p>
                <h3 className="mt-2 font-serif text-xl leading-snug">{o.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/historias" className="text-sm tracking-wide text-foreground/70 hover:text-foreground">
              Ver todas las historias →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
