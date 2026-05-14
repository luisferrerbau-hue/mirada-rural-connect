import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto — Mirada Rural" },
      { name: "description", content: "Cuéntanos tu historia o súmate al proyecto Mirada Rural." },
      { property: "og:title", content: "Contacto — Mirada Rural" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-32 pt-32 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">Escríbenos</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-balance md:text-6xl">
            Cuéntanos tu <em className="text-secondary">historia</em>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Si conoces una historia que merece ser contada, una iniciativa que da
            esperanza o un problema que nadie escucha, este es el sitio.
          </p>
          <div className="mt-12 space-y-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</p>
              <p className="mt-1 font-serif text-xl">hola@miradarural.es</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Redes</p>
              <p className="mt-1 font-serif text-xl">@miradarural</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-6 border border-border bg-card p-8 md:p-10"
        >
          {sent ? (
            <div className="py-12 text-center">
              <h3 className="font-serif text-3xl text-primary">Gracias.</h3>
              <p className="mt-3 text-sm text-muted-foreground">Te leeremos con calma. Como se hacen las cosas en el campo.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nombre</label>
                <input required className="mt-2 w-full border-b border-input bg-transparent py-2 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pueblo / Provincia</label>
                <input className="mt-2 w-full border-b border-input bg-transparent py-2 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                <input type="email" required className="mt-2 w-full border-b border-input bg-transparent py-2 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tu historia</label>
                <textarea required rows={5} className="mt-2 w-full resize-none border-b border-input bg-transparent py-2 outline-none focus:border-primary" />
              </div>
              <button className="w-full rounded-sm bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90">
                Enviar
              </button>
            </>
          )}
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
