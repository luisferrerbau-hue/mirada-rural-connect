import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import cijara from "@/assets/real/cijara.jpg";
import helechosa from "@/assets/real/helechosa.jpg";
import albarracin from "@/assets/real/albarracin.jpg";
import sanabria from "@/assets/real/sanabria.jpg";
import olivar from "@/assets/real/olivar.png";
import cebreiro from "@/assets/real/cebreiro.jpg";
import escuela from "@/assets/real/escuela.jpg";
import pastor from "@/assets/real/pastor.jpg";

export const Route = createFileRoute("/historias")({
  component: Historias,
  head: () => ({
    meta: [
      { title: "Historias — Mirada Rural" },
      { name: "description", content: "Crónicas reales desde los pueblos: La Siberia extremeña, Sanabria, Albarracín, Jaén, O Cebreiro y la Serranía de Cuenca." },
      { property: "og:title", content: "Historias — Mirada Rural" },
      { property: "og:url", content: "/historias" },
    ],
    links: [{ rel: "canonical", href: "/historias" }],
  }),
});

const items = [
  {
    img: cijara,
    place: "La Siberia · Badajoz",
    title: "Desde el Mirador de la Virgen de la Hoz se ve un país que ya no aparece en los mapas",
    date: "Mayo 2026",
    excerpt:
      "La comarca extremeña de La Siberia ocupa más de 2.900 km² y no llega a 22.000 habitantes: menos de 8 hab/km², el umbral europeo de despoblación severa. Desde el mirador sobre el embalse de Cíjara se ven veinte kilómetros de monte sin una luz. La Junta lo declaró Reserva de la Biosfera en 2019; los que viven allí siguen sin médico de fin de semana.",
  },
  {
    img: helechosa,
    place: "Helechosa de los Montes · Badajoz",
    title: "El pueblo más al sur de la Reserva de la Biosfera",
    date: "Mayo 2026",
    excerpt:
      "523 habitantes censados en 2024, según el INE. La gasolinera más cercana está a 38 kilómetros. La fibra llegó en 2022, pero la línea del autobús a Talarrubias se redujo a tres frecuencias semanales.",
  },
  {
    img: albarracin,
    place: "Albarracín · Teruel",
    title: "El pueblo medieval que vive del turismo y muere en febrero",
    date: "Abril 2026",
    excerpt:
      "Uno de los pueblos más bonitos de España según la asociación que lleva ese nombre. En agosto recibe 4.000 visitantes al día. En febrero, sus 1.030 vecinos comparten una sola panadería abierta. Teruel sigue siendo la provincia con menor densidad de población de la UE-27.",
  },
  {
    img: sanabria,
    place: "Puebla de Sanabria · Zamora",
    title: "La provincia que más se ha vaciado de toda España",
    date: "Marzo 2026",
    excerpt:
      "Zamora ha perdido el 16% de su población desde el año 2000 (datos INE). En la comarca de Sanabria quedan pueblos con menos de diez vecinos en invierno. La maestra de Riomanzanas se jubiló y nadie ocupó la plaza.",
  },
  {
    img: escuela,
    place: "Puente de Vadillos · Cuenca",
    title: "Cuando la escuela cierra, el pueblo entra en cuenta atrás",
    date: "Febrero 2026",
    excerpt:
      "La escuela rural de Puente de Vadillos cerró en 2014 cuando se quedó sin alumnos. El edificio sigue en pie, con los percheros y las pizarras intactas. Es la postal repetida de la España vaciada: 1.300 escuelas rurales han cerrado en los últimos veinte años.",
  },
  {
    img: olivar,
    place: "Sierra de Jaén · Andalucía",
    title: "El olivar tradicional pierde 20.000 jornales al año por el precio del aceite",
    date: "Enero 2026",
    excerpt:
      "El olivar de pendiente —el de las laderas, el que no se mecaniza— sostiene 300.000 hectáreas en Jaén. La COAG calcula que cada campaña por debajo de coste expulsa a 2.000 pequeños propietarios. Las cooperativas de segundo grado son hoy la única vía para no rendirse a la gran distribución.",
  },
  {
    img: cebreiro,
    place: "O Cebreiro · Lugo",
    title: "La aldea de pallozas que el Camino de Santiago salvó por accidente",
    date: "Diciembre 2025",
    excerpt:
      "Sin el Camino Francés, O Cebreiro habría desaparecido en los años ochenta como tantas otras brañas de los Ancares. Hoy 47 vecinos sostienen un pueblo que recibe 300.000 peregrinos al año. La fibra llegó en 2021, la telemedicina en 2023.",
  },
  {
    img: pastor,
    place: "Valle de Aezkoa · Navarra",
    title: "Esquilar a mano: oficio de seis personas en toda Navarra",
    date: "Noviembre 2025",
    excerpt:
      "La oveja latxa, base del Idiazábal, sigue trashumando entre los puertos de Belagua y los valles de Aezkoa. Quedan menos de 200 pastores activos. El esquileo manual lo siguen haciendo seis personas: el más joven tiene 54 años.",
  },
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
          Reportajes y datos verificados desde los pueblos. De La Siberia extremeña a los Ancares lucenses.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          {items.map((s, i) => (
            <article key={s.title} className={`group ${i === 0 ? "md:col-span-2" : ""}`}>
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
            </article>
          ))}
        </div>
        <p className="mt-16 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Imágenes: Wikimedia Commons (CC BY-SA / CC0) — Rodelar (Cíjara), Diego Delso (Albarracín), Veinticuatro de Jahén (olivar), entre otros autores. Datos demográficos: INE, padrón continuo 2024.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
