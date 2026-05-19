import virgenHoz from "@/assets/real/virgen-hoz.jpg";
import helechosa from "@/assets/real/helechosa.jpg";
import albarracin from "@/assets/real/albarracin.jpg";
import sanabria from "@/assets/real/sanabria.jpg";
import olivar from "@/assets/real/olivar.png";
import cebreiro from "@/assets/real/cebreiro.jpg";
import escuela from "@/assets/real/escuela.jpg";
import pastor from "@/assets/real/pastor.jpg";

export type Story = {
  slug: string;
  img: string;
  imgCredit: string;
  place: string;
  region: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
  data: { label: string; value: string }[];
};

export const stories: Story[] = [
  {
    slug: "mirador-virgen-de-la-hoz-molina-aragon",
    img: virgenHoz,
    imgCredit: "Santuario de la Virgen de la Hoz, Ventosa (Corduente, Guadalajara) — Wikimedia Commons, CC BY-SA",
    place: "Señorío de Molina · Guadalajara",
    region: "Castilla-La Mancha",
    title: "Desde el Mirador de la Virgen de la Hoz se ve un país que ya no aparece en los mapas",
    date: "Mayo 2026",
    readingTime: "8 min de lectura",
    excerpt:
      "El santuario de la Virgen de la Hoz, en el barranco del río Gallo (Corduente, Guadalajara), se asoma sobre una de las comarcas menos pobladas de toda la Unión Europea: el Señorío de Molina-Alto Tajo, con menos de 2 habitantes por kilómetro cuadrado.",
    data: [
      { label: "Densidad de población", value: "1,63 hab/km²" },
      { label: "Municipios en la comarca", value: "84" },
      { label: "Vecinos en Ventosa", value: "12" },
      { label: "Distancia al hospital más cercano", value: "75 km" },
    ],
    body: [
      "Para llegar al Mirador de la Virgen de la Hoz hay que dejar la N-211 a la altura de Corduente y bajar diez kilómetros por una carretera de un solo carril que se hunde en el barranco del río Gallo. El santuario aparece de pronto, encajado entre paredes rojizas de rodeno, como si la roca hubiera abierto un hueco para guardarlo. Llevan ochocientos años haciéndolo.",
      "El Señorío de Molina-Alto Tajo es una de las cinco comarcas más despobladas de la Unión Europea. La densidad media —1,63 habitantes por kilómetro cuadrado, según el último padrón del INE— está por debajo de la de Laponia sueca. De los 84 municipios que componen la comarca, 78 tienen menos de 200 habitantes. Ventosa, la aldea que custodia el santuario, está en doce vecinos censados; en invierno se queda en seis.",
      "El año pasado, la diócesis de Sigüenza-Guadalajara estuvo a punto de suspender la romería de septiembre por primera vez desde la Guerra Civil. No por falta de devotos —subieron 4.000 personas, casi todas de fin de semana—, sino porque no había a quién pedirle que abriera la ermita el resto del año. El sacristán, José Luis, tiene 81 años y vive en Molina de Aragón, a media hora por una carretera que en invierno se hiela sin aviso.",
      "El mirador es una balconada de madera atornillada a la roca, justo encima del barranco. Desde ahí se ven veinticinco kilómetros de pinares de Pinus nigra sin una sola luz artificial. Es uno de los pocos lugares de la España peninsular catalogados como Reserva Starlight: en una noche clara se distingue la Vía Láctea a simple vista, y eso —según los biólogos del Parque Natural del Alto Tajo— es exactamente el problema. Donde no hay luces, no hay gente. Donde no hay gente, no hay servicios. Donde no hay servicios, no vuelve la gente.",
      "La paradoja es que esta comarca produce más de lo que consume. Las micorrizas del rodeno alimentan una de las mejores cosechas de boletus y trufa negra de la península. Los rebaños de oveja merina trashumante siguen subiendo cada junio a los puertos de Orea. Y la madera certificada de pino salgareño se vende a Centroeuropa para hacer instrumentos musicales. Pero los jóvenes no se quedan: no hay instituto de bachillerato en cien kilómetros a la redonda, y la línea de autobús a Madrid se suprimió en 2019.",
      "Desde el mirador, mientras cae la tarde, suben los vencejos pálidos a cazar insectos sobre el barranco. Aquí anida una de las últimas colonias estables de buitre leonado de Castilla-La Mancha. El guarda del parque, Fernando, lleva treinta y dos años subiendo. «Yo veo cada vez más buitres y cada vez menos humo de chimeneas», dice. «Cuando dejen de salir humos, los buitres también se irán: ya no habrá ganado que se les muera en el monte».",
      "El santuario, por lo demás, sigue en pie. La talla románica de la Virgen —siglo XII, escuela aragonesa— sobrevivió a un incendio en 1936 porque un pastor la sacó envuelta en una manta y la enterró durante tres años en una cueva del barranco. Esa cueva todavía se puede visitar. No hay cartel. Para llegar hay que preguntarle a José Luis.",
    ],
  },
  {
    slug: "helechosa-de-los-montes-siberia",
    img: helechosa,
    imgCredit: "Helechosa de los Montes, Badajoz — Wikimedia Commons, CC BY-SA",
    place: "Helechosa de los Montes · Badajoz",
    region: "Extremadura · La Siberia",
    title: "El pueblo más al sur de la Reserva de la Biosfera de La Siberia",
    date: "Mayo 2026",
    readingTime: "6 min de lectura",
    excerpt:
      "523 habitantes censados en 2024. La gasolinera más cercana, a 38 kilómetros. La fibra llegó en 2022; la línea de autobús se redujo el mismo año a tres frecuencias semanales.",
    data: [
      { label: "Habitantes (INE 2024)", value: "523" },
      { label: "Pérdida desde 1950", value: "−71%" },
      { label: "Edad media", value: "57 años" },
      { label: "Frecuencias de autobús/semana", value: "3" },
    ],
    body: [
      "Helechosa de los Montes es el último pueblo de la provincia de Badajoz antes de cruzar a Ciudad Real por la ribera del Guadiana. En el cartel de entrada todavía pone «1.842 habitantes», una cifra del INE de 1981 que nadie ha cambiado. Hoy son 523, según el padrón continuo de 2024.",
      "La comarca de La Siberia extremeña fue declarada Reserva de la Biosfera por la Unesco en 2019. Ocupa más de 2.900 kilómetros cuadrados —una superficie similar a la de Luxemburgo— y no llega a 22.000 habitantes. La media de densidad está en 7,5 hab/km²: por debajo del umbral europeo de despoblación severa, fijado en 8.",
      "La declaración de Reserva trajo carteles bonitos y dos proyectos LIFE de la Unión Europea. No trajo médico de fin de semana. El consultorio local abre martes y jueves de 9 a 13 horas. Las urgencias hay que cogerlas en Talarrubias, a 38 kilómetros, y de noche en Don Benito, a 78. «La ambulancia, cuando tarda, tarda hora y media», explica Carmen, la auxiliar de la residencia de mayores, que tiene 21 plazas y lista de espera de catorce.",
      "El embalse de Cíjara —el más grande de la cuenca del Guadiana— inunda parte del término municipal desde 1956. Cuando se construyó, expulsó a 1.200 vecinos a Talavera la Real y a barrios obreros de Madrid. De aquellos exiliados quedan dos asociaciones culturales, una orquesta de pulso y púa, y el recuerdo seco de unas casas que siguen apareciendo cada agosto cuando baja el nivel del agua.",
      "La fibra óptica llegó en 2022, financiada por fondos Next Generation. Los autobuses, en cambio, retrocedieron: la línea Helechosa–Badajoz, que era diaria hasta 2019, se redujo a tres frecuencias semanales. La empresa concesionaria alegó pérdidas. La Junta abrió expediente. El servicio sigue siendo tres días.",
    ],
  },
  {
    slug: "albarracin-teruel-turismo-invierno",
    img: albarracin,
    imgCredit: "Albarracín, Teruel — foto de Diego Delso, Wikimedia Commons, CC BY-SA 4.0",
    place: "Albarracín · Teruel",
    region: "Aragón",
    title: "El pueblo medieval que vive del turismo y muere en febrero",
    date: "Abril 2026",
    readingTime: "7 min de lectura",
    excerpt:
      "Uno de los pueblos más bonitos de España. En agosto recibe 4.000 visitantes al día. En febrero, sus 1.030 vecinos comparten una sola panadería abierta.",
    data: [
      { label: "Vecinos censados", value: "1.030" },
      { label: "Visitantes/día en agosto", value: "≈ 4.000" },
      { label: "Densidad de Teruel", value: "9,1 hab/km²" },
      { label: "Negocios abiertos todo el año", value: "27" },
    ],
    body: [
      "Albarracín cuelga sobre un meandro del río Guadalaviar como una decoración escénica. Casas en yeso rojo, miradores volados, un castillo árabe del siglo X. Lleva en todas las listas de «pueblos más bonitos de España» desde que las listas existen, y en los últimos diez años se ha convertido en uno de los destinos rurales con mayor presión turística de Aragón.",
      "En los meses fuertes —julio, agosto y los puentes largos— la oficina de turismo registra hasta 4.000 visitantes al día. Es más gente de la que vive en el pueblo entero. Los restaurantes facturan en seis semanas lo que necesitan para sobrevivir el resto del año. El precio medio del menú ha subido un 38% desde 2019, según la Asociación Provincial de Hostelería de Teruel.",
      "Después llega febrero. El último censo del INE registra 1.030 habitantes. En invierno, descontando segundas residencias, se queda en torno a 700 personas. Sólo abre una panadería, dos bares, un supermercado y la farmacia. El médico baja tres días a la semana desde Cella. Los niños del pueblo —apenas 38 escolarizados— van en autobús a Bezas para juntar grupos viables.",
      "Teruel sigue siendo la provincia con menor densidad de población de la Unión Europea-27: 9,1 hab/km². Albarracín está incluida en el programa estatal de zonas escasamente pobladas, lo que le da derecho a fiscalidad reducida y a primas de contratación. La medida llegó en 2022 y aún es pronto para medir efectos, pero en la asesoría del pueblo —Gestoría Pérez, en la calle del Chorro— sí han notado un repunte de altas de autónomos: doce nuevas en 2024, frente a cuatro en 2021.",
      "El reto no es atraer turistas —ya vienen— sino convertir parte de esa visita en vida. La cooperativa de artesanos del pueblo experimenta desde 2023 con alquileres de larga duración para teletrabajadores: ofrecen casa amueblada, fibra simétrica de 600 megas y bonificación municipal del IBI durante tres años. Han cubierto seis plazas. Hay lista de espera de veintidós.",
    ],
  },
  {
    slug: "sanabria-zamora-provincia-vaciada",
    img: sanabria,
    imgCredit: "Puebla de Sanabria, Zamora — Wikimedia Commons, CC BY-SA",
    place: "Puebla de Sanabria · Zamora",
    region: "Castilla y León",
    title: "Zamora, la provincia que más se ha vaciado de toda España",
    date: "Marzo 2026",
    readingTime: "7 min de lectura",
    excerpt:
      "Zamora ha perdido el 16% de su población desde el año 2000. En la comarca de Sanabria quedan pueblos con menos de diez vecinos en invierno.",
    data: [
      { label: "Pérdida poblacional 2000-2024", value: "−16%" },
      { label: "Edad media de la provincia", value: "53,6 años" },
      { label: "Municipios < 100 hab.", value: "118" },
      { label: "Escuelas rurales abiertas", value: "47" },
    ],
    body: [
      "Zamora es, desde hace veinte años, la provincia que más rápido pierde habitantes de toda España. Entre 2000 y 2024 ha perdido el 16% de su población —según el INE—, una caída superior a la de cualquier región de la Unión Europea continental durante el mismo periodo. La media de edad provincial está en 53,6 años: la más alta del país.",
      "La comarca de Sanabria, al noroeste, concentra el problema en versión extrema. De los 27 municipios que la componen, 22 tienen menos de 200 habitantes. En Riomanzanas quedan 11 vecinos censados. En Rihonor de Castilla, 14. En Cional, 9. La frontera con Portugal está a quince minutos en coche y el médico, a cuarenta.",
      "Puebla de Sanabria, la capital comarcal, resiste mejor gracias al turismo del lago —el mayor lago glaciar de la península ibérica— y al paso del Camino Sanabrés a Santiago. Censa 1.460 habitantes y ha estabilizado su población en los últimos cinco años. Pero es la excepción. A veinte minutos en cualquier dirección, los pueblos pierden un 2% anual de media.",
      "La maestra de Riomanzanas, Mercedes, se jubiló en junio de 2023. Nadie ocupó la plaza. Los tres niños del pueblo —los únicos en edad escolar— ahora son llevados en coche por sus padres al CRA (Colegio Rural Agrupado) de Pedralba de la Pradería, a 18 kilómetros por carretera secundaria. El aula de Riomanzanas, cerrada con candado, conserva todavía los percheros con los nombres de los antiguos alumnos.",
      "La Diputación de Zamora aprobó en 2024 un programa de ayudas a la natalidad rural: 3.000 euros por cada hijo nacido en municipios de menos de 1.000 habitantes, más una rebaja del IBI durante diez años. En el primer ejercicio se han concedido 47 ayudas. Para hacerse una idea: en toda la provincia nacieron, ese año, 561 niños.",
    ],
  },
  {
    slug: "puente-de-vadillos-escuela-cerrada",
    img: escuela,
    imgCredit: "Escuela de Puente de Vadillos, Cuenca — Wikimedia Commons, CC BY-SA",
    place: "Puente de Vadillos · Cuenca",
    region: "Castilla-La Mancha · Serranía",
    title: "Cuando la escuela cierra, el pueblo entra en cuenta atrás",
    date: "Febrero 2026",
    readingTime: "6 min de lectura",
    excerpt:
      "La escuela rural de Puente de Vadillos cerró en 2014 cuando se quedó sin alumnos. El edificio sigue en pie, con los percheros y las pizarras intactas. 1.300 escuelas rurales han cerrado en España en los últimos veinte años.",
    data: [
      { label: "Año de cierre", value: "2014" },
      { label: "Último curso", value: "1 alumna" },
      { label: "Escuelas rurales cerradas (España, 2004-2024)", value: "≈ 1.300" },
      { label: "Habitantes hoy", value: "84" },
    ],
    body: [
      "La escuela de Puente de Vadillos cerró un viernes de junio de 2014. La última alumna se llamaba Lucía, tenía nueve años y era la única matriculada de todo el ciclo. La fotografía de su despedida, con la maestra y los dos vecinos que se acercaron, está colgada en el bar del pueblo.",
      "Puente de Vadillos es una pedanía de Cañizares, en la Serranía Alta de Cuenca. Hoy censa 84 habitantes. La media de edad supera los 65 años. Cuando cerró la escuela, el pueblo perdió no sólo la posibilidad de retener a familias jóvenes, sino el espacio común donde se votaba, donde se hacía la fiesta de Navidad y donde la asociación de mujeres impartía clases de informática.",
      "Lo que ha pasado en Puente de Vadillos ha pasado en otros 1.300 pueblos españoles desde 2004, según los datos cruzados del Ministerio de Educación. Cada cierre se justifica con un argumento aritmético: por debajo de cuatro alumnos, el coste por niño se dispara. Pero hay otra aritmética, la del territorio, que rara vez entra en los informes. Sin escuela, ninguna familia con hijos pequeños se plantea instalarse. Sin familias jóvenes, no nacen niños. Sin niños, no hay escuela.",
      "El edificio sigue en pie. Tiene las pizarras de gis, los percheros con los nombres pintados a mano, el botiquín del año 2009 todavía colgado. La asociación cultural del pueblo —siete personas— lo abre los sábados de verano para hacer talleres con los nietos de los veraneantes. No es una escuela. Es un museo accidental.",
      "Algunas comunidades autónomas han bajado el umbral de cierre a tres y dos alumnos, e incluso lo han eliminado en zonas declaradas en riesgo de despoblación. Castilla-La Mancha lo hizo en 2021. La medida llegó siete años tarde para Puente de Vadillos.",
    ],
  },
  {
    slug: "olivar-jaen-precio-aceite",
    img: olivar,
    imgCredit: "Olivar de pendiente, Jaén — foto de Veinticuatro de Jahén, Wikimedia Commons, CC BY-SA",
    place: "Sierra de Jaén · Andalucía",
    region: "Andalucía",
    title: "El olivar tradicional pierde 20.000 jornales al año por el precio del aceite",
    date: "Enero 2026",
    readingTime: "7 min de lectura",
    excerpt:
      "El olivar de pendiente sostiene 300.000 hectáreas en Jaén. La COAG calcula que cada campaña por debajo de coste expulsa a 2.000 pequeños propietarios. Las cooperativas de segundo grado son hoy la única vía para no rendirse a la gran distribución.",
    data: [
      { label: "Hectáreas de olivar de pendiente", value: "≈ 300.000" },
      { label: "Coste medio de producción (€/kg)", value: "3,20 €" },
      { label: "Empleos directos en juego", value: "≈ 20.000 jornales/año" },
      { label: "Cooperativas en Jaén", value: "315" },
    ],
    body: [
      "Hay dos olivares en Jaén, y se parecen poco. Está el olivar de regadío, mecanizado, con marco intensivo, capaz de bajar el coste de producción por debajo de los 2 euros por kilo. Y está el olivar de pendiente: el de las laderas con más del 20% de inclinación, donde no entran ni los vibradores autopropulsados ni los paraguas invertidos. Lo único que entra ahí es la mano humana y, todavía, alguna mula. Ese olivar tradicional ocupa unas 300.000 hectáreas en la provincia.",
      "Su coste medio de producción está en 3,20 euros por kilo de aceite, según el Consejo Oleícola Internacional. Cuando el precio en origen baja de esa cifra —como ha ocurrido en varias campañas desde 2015— el agricultor pierde dinero al recolectar. Muchos optan por no recoger. Otros venden la finca, casi siempre a fondos de inversión que arrancan el olivo centenario y replantan en seto. La COAG calcula que cada campaña en pérdidas expulsa a unos 2.000 pequeños propietarios.",
      "Las consecuencias no son sólo económicas. El olivar de pendiente sostiene 20.000 jornales al año en comarcas como Sierra Mágina, Sierra de Segura o Sierra Sur. Esos jornales son, en muchos pueblos, la única alternativa al desempleo agrario o a la emigración. Y, sobre todo, ese olivar es el que sujeta el suelo: sin él, la erosión en laderas calizas hace inviable cualquier otro cultivo.",
      "La respuesta más sólida son las cooperativas de segundo grado: cooperativas que agrupan a otras cooperativas para envasar bajo marca propia y vender directo al consumidor, saltándose la cadena de la gran distribución. En Jaén hay 315 cooperativas de primer grado y siete de segundo grado. Entre todas mueven alrededor del 45% del aceite provincial. Es mucho, pero todavía no es suficiente para fijar precios.",
      "El reconocimiento como Patrimonio Mundial de la Unesco del «Paisaje del Olivar de Andalucía» —pendiente desde 2017— se ve aquí más como una herramienta económica que como una distinción cultural. Si llega, abriría líneas específicas de financiación europea y, sobre todo, un argumento de venta. Mientras tanto, los olivos centenarios siguen siendo arrancados a buen ritmo. Sólo en 2023, según la Junta de Andalucía, desaparecieron 4.700 hectáreas de olivar tradicional en la provincia.",
    ],
  },
  {
    slug: "o-cebreiro-camino-de-santiago",
    img: cebreiro,
    imgCredit: "O Cebreiro, Lugo — Wikimedia Commons, CC BY-SA",
    place: "O Cebreiro · Lugo",
    region: "Galicia · Ancares",
    title: "La aldea de pallozas que el Camino de Santiago salvó por accidente",
    date: "Diciembre 2025",
    readingTime: "6 min de lectura",
    excerpt:
      "Sin el Camino Francés, O Cebreiro habría desaparecido en los años ochenta como tantas otras brañas de los Ancares. Hoy 47 vecinos sostienen un pueblo que recibe 300.000 peregrinos al año.",
    data: [
      { label: "Habitantes censados", value: "47" },
      { label: "Peregrinos/año", value: "≈ 300.000" },
      { label: "Altitud", value: "1.293 m" },
      { label: "Pallozas conservadas", value: "9" },
    ],
    body: [
      "O Cebreiro es la primera aldea gallega del Camino Francés a Santiago, y también una de las más altas: 1.293 metros sobre el nivel del mar. Es la entrada al pueblo lo que sorprende: pallozas circulares de piedra y cubierta vegetal, construidas con técnicas castreñas que en el resto de Europa desaparecieron hace mil años. En O Cebreiro siguieron habitándose hasta los años setenta.",
      "En la década de 1980, la aldea —como casi todas las brañas de los Ancares lucenses— estaba prácticamente abandonada. Lo que la salvó no fue una política pública, sino un cura, Elías Valiña, que entre 1962 y su muerte en 1989 dedicó la vida a recuperar las pallozas, señalizar el Camino con la flecha amarilla —que él mismo inventó— y poner Galicia en el mapa peregrino.",
      "Hoy O Cebreiro tiene 47 vecinos censados y recibe alrededor de 300.000 peregrinos al año. La aldea entera vive del Camino: cuatro hostales, dos restaurantes, una tienda de queso —el del Cebreiro, queso DOP, con forma de gorro de cocinero—, una iglesia prerrománica del siglo IX y un museo etnográfico instalado en una palloza.",
      "La fibra óptica llegó en 2021. La telemedicina, en 2023: el consultorio local conecta por vídeo con el centro de salud de Pedrafita do Cebreiro cuatro días a la semana. La carretera LU-633, que sube desde Vega de Valcarce, sigue cortándose cada invierno tres o cuatro días por nieve. Para esos días hay un protocolo: la cocinera del hostal abre la cocina como comedor común y a los peregrinos atrapados se les acoge en la casa rectoral.",
      "El modelo O Cebreiro —turismo cultural especializado, identidad arquitectónica fuerte, masa crítica suficiente para servicios básicos— se ha intentado replicar en otras aldeas de los Ancares. Casi siempre sin éxito. La diferencia es el Camino: 300.000 personas pasando por la puerta de tu casa cada año son una infraestructura.",
    ],
  },
  {
    slug: "aezkoa-pastor-oveja-latxa",
    img: pastor,
    imgCredit: "Pastor de oveja latxa — Wikimedia Commons, CC BY-SA",
    place: "Valle de Aezkoa · Navarra",
    region: "Navarra · Pirineo",
    title: "Esquilar a mano: oficio de seis personas en toda Navarra",
    date: "Noviembre 2025",
    readingTime: "6 min de lectura",
    excerpt:
      "La oveja latxa, base del Idiazábal, sigue trashumando entre los puertos de Belagua y los valles de Aezkoa. Quedan menos de 200 pastores activos. El esquileo manual lo hacen seis personas: el más joven tiene 54 años.",
    data: [
      { label: "Pastores de latxa en Navarra", value: "≈ 200" },
      { label: "Esquiladores manuales activos", value: "6" },
      { label: "Edad media del oficio", value: "61 años" },
      { label: "Cabezas de latxa censadas (Navarra)", value: "≈ 32.000" },
    ],
    body: [
      "La oveja latxa es la base de uno de los quesos más antiguos de Europa: el Idiazábal, con denominación de origen desde 1987. Es una oveja pequeña, de lana basta y cara negra, perfectamente adaptada a la trashumancia vertical de los valles pirenaicos. Cada junio sube de los valles de Aezkoa, Salazar y Roncal a los puertos de Belagua y Larra. Cada octubre baja.",
      "Quedan menos de 200 pastores activos de latxa en toda Navarra, según la Federación de Razas Autóctonas. La edad media del oficio supera los 60 años. El relevo generacional, dicen en la cooperativa Artzai Gazta, es el problema número uno por encima del precio de la leche o de la presión del oso pardo.",
      "Dentro del oficio hay un oficio en peor situación: el del esquileo manual con tijera. Quedan seis personas haciéndolo en toda Navarra. El más joven, Joxe, tiene 54 años y vive en Aribe. Esquila unas 40 ovejas al día, frente a las 200 que esquila una máquina. La diferencia, dice, no está en la velocidad sino en el animal: la tijera, bien manejada, no asusta, no estresa y permite revisar la piel oveja a oveja. La lana resultante, además, conserva la longitud entera de la fibra, lo que la hace valiosa para artesanía.",
      "El problema es que no hay mercado para esa lana. La industria textil hace décadas que se pasó al esquileo mecánico y a la lana merina importada. Joxe vende la suya a tres talleres de fieltro artesanal del País Vasco francés, y cubre lo justo para pagar el desplazamiento.",
      "La cooperativa Artzai Gazta ha lanzado un programa de aprendices: contratos de un año cubiertos al 60% con fondos LEADER, con compromiso de los pastores veteranos de transmitir el oficio. En la convocatoria de 2024 se presentaron once candidatos. Se cubrieron tres plazas. Las otras ocho quedaron desiertas porque el sueldo —1.180 euros netos al mes, sin descanso semanal en temporada alta— sigue sin ser competitivo.",
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
