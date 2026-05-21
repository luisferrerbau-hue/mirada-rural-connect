import virgenHoz from "@/assets/real/virgen-hoz.jpg";
import helechosa from "@/assets/real/helechosa.jpg";
import albarracin from "@/assets/real/albarracin.jpg";
import sanabria from "@/assets/real/sanabria.jpg";
import olivar from "@/assets/real/olivar.jpg";
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
    readingTime: "12 min de lectura",
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
      "Para entender lo que ha pasado aquí hay que retroceder algo más de un siglo. En 1900 el Señorío de Molina superaba los 23.000 habitantes. Hoy apenas llega a 4.000. Las dos guerras carlistas, la Guerra Civil, la emigración a Madrid y Barcelona en los años sesenta y la concentración parcelaria desordenada de los setenta se fueron llevando, década a década, a tres de cada cuatro vecinos. El último censo activo en la mayoría de las aldeas es el de los muertos: hay parroquias con más entradas en el libro de defunciones que sillas en la iglesia.",
      "El año pasado, la diócesis de Sigüenza-Guadalajara estuvo a punto de suspender la romería de septiembre por primera vez desde la Guerra Civil. No por falta de devotos —subieron 4.000 personas, casi todas de fin de semana—, sino porque no había a quién pedirle que abriera la ermita el resto del año. El sacristán, José Luis, tiene 81 años y vive en Molina de Aragón, a media hora por una carretera que en invierno se hiela sin aviso. Cuando no puede bajar, el santuario se queda cerrado, aunque haya peregrinos esperando en el aparcamiento.",
      "El mirador es una balconada de madera atornillada a la roca, justo encima del barranco. Desde ahí se ven veinticinco kilómetros de pinares de Pinus nigra sin una sola luz artificial. Es uno de los pocos lugares de la España peninsular catalogados como Reserva Starlight: en una noche clara se distingue la Vía Láctea a simple vista, y eso —según los biólogos del Parque Natural del Alto Tajo— es exactamente el problema. Donde no hay luces, no hay gente. Donde no hay gente, no hay servicios. Donde no hay servicios, no vuelve la gente.",
      "La paradoja es que esta comarca produce más de lo que consume. Las micorrizas del rodeno alimentan una de las mejores cosechas de boletus y trufa negra de la península —se estima que mueve, en negro y en gris, más de seis millones de euros al año—. Los rebaños de oveja merina trashumante siguen subiendo cada junio a los puertos de Orea por la cañada real de la Mesta. Y la madera certificada de pino salgareño se vende a Centroeuropa para hacer instrumentos musicales: arpas, contrabajos, las cajas de algunas guitarras Lowden irlandesas salen literalmente de estos montes.",
      "Pero los jóvenes no se quedan. No hay instituto de bachillerato en cien kilómetros a la redonda: los chicos y chicas de 14 años se van internos a Molina o a Sigüenza, y a los 18 ya están en Guadalajara, Madrid o Zaragoza. La línea de autobús a Madrid se suprimió en 2019. La residencia de mayores más cercana cerró en 2021 por falta de personal sanitario; sus 28 internos fueron reubicados a 90 kilómetros, en otra provincia. Cada vez que un servicio se va, el siguiente tiene menos masa crítica para sostenerse.",
      "Desde el mirador, mientras cae la tarde, suben los vencejos pálidos a cazar insectos sobre el barranco. Aquí anida una de las últimas colonias estables de buitre leonado de Castilla-La Mancha. El guarda del parque, Fernando, lleva treinta y dos años subiendo. «Yo veo cada vez más buitres y cada vez menos humo de chimeneas», dice. «Cuando dejen de salir humos, los buitres también se irán: ya no habrá ganado que se les muera en el monte». No es una metáfora: el buitre leonado depende, por ley europea, de cadáveres de ganado extensivo. Sin pastores no hay rebaños, sin rebaños no hay muladares y sin muladares no hay buitres.",
      "El santuario, por lo demás, sigue en pie. La talla románica de la Virgen —siglo XII, escuela aragonesa— sobrevivió a un incendio en 1936 porque un pastor la sacó envuelta en una manta y la enterró durante tres años en una cueva del barranco. Esa cueva todavía se puede visitar. No hay cartel. Para llegar hay que preguntarle a José Luis, y conviene hacerlo despacio, porque la memoria del Señorío de Molina ya no está escrita en ningún sitio: vive sólo en la cabeza de un puñado de personas que rondan los ochenta años. Cuando ellos falten, faltará también el mapa.",
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
    readingTime: "10 min de lectura",
    excerpt:
      "523 habitantes censados en 2024. La gasolinera más cercana, a 38 kilómetros. La fibra llegó en 2022; la línea de autobús se redujo el mismo año a tres frecuencias semanales.",
    data: [
      { label: "Habitantes (INE 2024)", value: "523" },
      { label: "Pérdida desde 1950", value: "−71%" },
      { label: "Edad media", value: "57 años" },
      { label: "Frecuencias de autobús/semana", value: "3" },
    ],
    body: [
      "Helechosa de los Montes es el último pueblo de la provincia de Badajoz antes de cruzar a Ciudad Real por la ribera del Guadiana. En el cartel de entrada todavía pone «1.842 habitantes», una cifra del INE de 1981 que nadie ha cambiado. Hoy son 523, según el padrón continuo de 2024. La pérdida acumulada desde 1950 supera el 71%: el municipio entra de pleno en los criterios europeos de despoblación extrema.",
      "La comarca de La Siberia extremeña fue declarada Reserva de la Biosfera por la Unesco en 2019. Ocupa más de 2.900 kilómetros cuadrados —una superficie similar a la de Luxemburgo— y no llega a 22.000 habitantes. La media de densidad está en 7,5 hab/km²: por debajo del umbral europeo de despoblación severa, fijado en 8. El nombre, dicen los mayores, se lo pusieron a finales del XIX los obreros que venían a hacer carbón vegetal en los encinares: les recordaba a la Siberia rusa por la sensación de lejanía y por el frío seco del invierno.",
      "La declaración de Reserva trajo carteles bonitos y dos proyectos LIFE de la Unión Europea. No trajo médico de fin de semana. El consultorio local abre martes y jueves de 9 a 13 horas. Las urgencias hay que cogerlas en Talarrubias, a 38 kilómetros, y de noche en Don Benito, a 78. «La ambulancia, cuando tarda, tarda hora y media», explica Carmen, la auxiliar de la residencia de mayores, que tiene 21 plazas y lista de espera de catorce. La residencia es, además, el principal empleador del pueblo: dieciocho contratos, todos a mujeres, casi todos a jornada parcial.",
      "El embalse de Cíjara —el más grande de la cuenca del Guadiana— inunda parte del término municipal desde 1956. Cuando se construyó, expulsó a 1.200 vecinos a Talavera la Real y a barrios obreros de Madrid. De aquellos exiliados quedan dos asociaciones culturales, una orquesta de pulso y púa, y el recuerdo seco de unas casas que siguen apareciendo cada agosto cuando baja el nivel del agua. La empresa pública que gestiona el embalse no paga IBI al ayuntamiento desde 2008, por un litigio jurídico que afecta a otros 47 municipios de la cuenca del Guadiana y que sigue sin resolverse.",
      "La fibra óptica llegó en 2022, financiada por fondos Next Generation. Por primera vez se puede teletrabajar desde Helechosa con conexión simétrica de 300 megas. El ayuntamiento ha rehabilitado dos casas del casco antiguo como espacio de coworking, con cocina compartida y plazas a 90 euros al mes. En dos años se han instalado cuatro autónomos: un programador, una diseñadora gráfica, una traductora jurada y un consultor de viñedos. Cuatro personas no son una solución demográfica, pero son la primera entrada neta de población activa en treinta años.",
      "Los autobuses, en cambio, retrocedieron. La línea Helechosa–Badajoz, que era diaria hasta 2019, se redujo en 2022 a tres frecuencias semanales: lunes, miércoles y viernes. La empresa concesionaria alegó pérdidas. La Junta abrió expediente. El servicio sigue siendo tres días. Para los mayores sin coche —el 38% del padrón—, eso significa renunciar al especialista del hospital comarcal salvo que un vecino se ofrezca a llevarlos, lo que ocurre con frecuencia: en Helechosa hay un sistema informal de favores que funciona mejor que muchos planes autonómicos.",
      "El alcalde, Antonio, lleva diecinueve años en el cargo. No por vocación, dice, sino porque «no se presenta nadie más». La candidatura única se ha repetido en las cuatro últimas elecciones municipales. En 2023 ganó con 312 votos sobre 387 censados con derecho a voto: el 80% de participación, un porcentaje que sólo se ve en pueblos pequeños y que indica, paradójicamente, que la política local todavía importa. «Lo que no encontramos es relevo. Estoy buscando concejales menores de cincuenta años, y en Helechosa hay seis», resume.",
      "El plan de futuro existe sobre el papel: turismo ornitológico —La Siberia tiene una de las mayores poblaciones de cigüeña negra de la Unión Europea—, observación astronómica certificada Starlight, ganadería extensiva de retinto y aprovechamiento del corcho de la dehesa. Lo que falta no son ideas. Falta gente joven que las ejecute, y que se quede el invierno entero, no sólo los puentes.",
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
    readingTime: "11 min de lectura",
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
      "En los meses fuertes —julio, agosto y los puentes largos— la oficina de turismo registra hasta 4.000 visitantes al día. Es más gente de la que vive en el pueblo entero. Los restaurantes facturan en seis semanas lo que necesitan para sobrevivir el resto del año. El precio medio del menú ha subido un 38% desde 2019, según la Asociación Provincial de Hostelería de Teruel. Los aparcamientos perimetrales se saturan a las once de la mañana y los autobuses turísticos hacen rotación cada hora en la explanada baja.",
      "Después llega febrero. El último censo del INE registra 1.030 habitantes. En invierno, descontando segundas residencias, se queda en torno a 700 personas. Sólo abre una panadería, dos bares, un supermercado y la farmacia. El médico baja tres días a la semana desde Cella. Los niños del pueblo —apenas 38 escolarizados— van en autobús a Bezas para juntar grupos viables. El instituto de secundaria más cercano está a 38 kilómetros, en Teruel capital, y obliga a salir de casa antes de las siete de la mañana.",
      "Teruel sigue siendo la provincia con menor densidad de población de la Unión Europea-27: 9,1 hab/km². Albarracín está incluida en el programa estatal de zonas escasamente pobladas, lo que le da derecho a fiscalidad reducida y a primas de contratación. La medida llegó en 2022 y aún es pronto para medir efectos, pero en la asesoría del pueblo —Gestoría Pérez, en la calle del Chorro— sí han notado un repunte de altas de autónomos: doce nuevas en 2024, frente a cuatro en 2021. Casi todas son mujeres que vuelven al pueblo después de haber vivido fuera.",
      "El alquiler es, sin embargo, el cuello de botella. La presión turística ha disparado los pisos turísticos: el ayuntamiento contabiliza 187 viviendas registradas como VUT (vivienda de uso turístico), sobre un parque total estimado en 540 viviendas habitables. Es decir, una de cada tres casas del pueblo está destinada a alojamiento de fin de semana. Un piso de dos habitaciones para alquiler residencial sale a más de 700 euros al mes —cuando aparece, que es pocas veces—. Los trabajadores estacionales de la hostelería duermen con frecuencia en pueblos a 15-20 kilómetros, donde sí hay oferta.",
      "El reto no es atraer turistas —ya vienen— sino convertir parte de esa visita en vida. La cooperativa de artesanos del pueblo experimenta desde 2023 con alquileres de larga duración para teletrabajadores: ofrecen casa amueblada, fibra simétrica de 600 megas y bonificación municipal del IBI durante tres años. Han cubierto seis plazas. Hay lista de espera de veintidós. El proyecto, modesto, ha conseguido algo más importante que su balance: ha demostrado que la demanda existe.",
      "Las restricciones de movilidad en el casco histórico —pionero en aplicar un sistema de aforo digital los fines de semana, con reserva previa— han reducido la sensación de saturación en los miradores más visitados, pero han trasladado el problema a los pueblos vecinos: Gea de Albarracín y Tramacastilla reciben ahora la sobreflujo de excursionistas que no encuentran plaza. Es la paradoja de las medidas locales en un problema regional: cada solución desplaza la presión hacia el flanco más débil.",
      "En verano, Albarracín parece imposible. En febrero, parece otro pueblo, más auténtico y, también, más frágil. La pregunta no es cuál es el Albarracín real —los dos lo son—, sino cuántos años puede seguir siendo las dos cosas a la vez.",
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
    readingTime: "11 min de lectura",
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
      "La comarca de Sanabria, al noroeste, concentra el problema en versión extrema. De los 27 municipios que la componen, 22 tienen menos de 200 habitantes. En Riomanzanas quedan 11 vecinos censados. En Rihonor de Castilla, 14. En Cional, 9. La frontera con Portugal está a quince minutos en coche y el médico, a cuarenta. Algunos pueblos sólo tienen abierto el bar tres tardes por semana, y siempre los mismos parroquianos: los que pueden caminar hasta él sin ayuda.",
      "Puebla de Sanabria, la capital comarcal, resiste mejor gracias al turismo del lago —el mayor lago glaciar de la península ibérica— y al paso del Camino Sanabrés a Santiago. Censa 1.460 habitantes y ha estabilizado su población en los últimos cinco años. Pero es la excepción. A veinte minutos en cualquier dirección, los pueblos pierden un 2% anual de media.",
      "La maestra de Riomanzanas, Mercedes, se jubiló en junio de 2023. Nadie ocupó la plaza. Los tres niños del pueblo —los únicos en edad escolar— ahora son llevados en coche por sus padres al CRA (Colegio Rural Agrupado) de Pedralba de la Pradería, a 18 kilómetros por carretera secundaria. El aula de Riomanzanas, cerrada con candado, conserva todavía los percheros con los nombres de los antiguos alumnos. La biblioteca municipal, que era el aula contigua, se ha trasladado al bar: 340 libros, prestados a confianza y sin carnet.",
      "La provincia tiene, sin embargo, una ventaja paradójica: el AVE Madrid-Galicia, inaugurado en 2021, hace parada en Sanabria. Desde Puebla a Madrid son dos horas y diez minutos. Algunos profesionales jóvenes han probado el modelo de teletrabajo combinado con desplazamiento puntual: viven en Sanabria, suben a Madrid una vez por semana. La oficina de empadronamiento confirma 47 altas nuevas en 2023 y 61 en 2024, en su mayoría adultos entre 30 y 45 años. Es la primera serie positiva desde 1981.",
      "La Diputación de Zamora aprobó en 2024 un programa de ayudas a la natalidad rural: 3.000 euros por cada hijo nacido en municipios de menos de 1.000 habitantes, más una rebaja del IBI durante diez años. En el primer ejercicio se han concedido 47 ayudas. Para hacerse una idea: en toda la provincia nacieron, ese año, 561 niños. Frente a las 4.910 defunciones registradas. El saldo vegetativo, ocho veces negativo, es el más desequilibrado de España.",
      "La cuestión sanitaria es la otra cara del problema. La Junta de Castilla y León mantiene 247 consultorios médicos rurales en la provincia, pero la mitad funcionan en horario reducido: una mañana semanal de dos horas, en algunos casos. La plantilla de Atención Primaria está bajo mínimos: 38 plazas de médico de familia sin cubrir en 2024. Los profesionales que se ofrecen son jubilados que vuelven en régimen de prolongación, o residentes recién terminados que rotan por un año y se marchan. La continuidad asistencial, que es la base de la medicina rural, se ha roto.",
      "Aun así, Sanabria conserva algo que no aparece en las estadísticas: una densidad cultural inesperada para su tamaño. Festivales de música popular en Bercianos, una editorial de poesía en Galende (Ediciones del Lago), un colectivo de fotógrafos que retrata, casa por casa, los pueblos antes de que cierren del todo. La memoria, aquí, se está documentando a contrarreloj.",
    ],
  },
  {
    slug: "puente-de-vadillos-escuela-cerrada",
    img: escuela,
    imgCredit: "Escuela rural de la Serranía de Cuenca — Wikimedia Commons, CC BY-SA",
    place: "Puente de Vadillos · Cuenca",
    region: "Castilla-La Mancha · Serranía",
    title: "Cuando la escuela cierra, el pueblo entra en cuenta atrás",
    date: "Febrero 2026",
    readingTime: "10 min de lectura",
    excerpt:
      "La escuela rural de Puente de Vadillos cerró en 2014 cuando se quedó sin alumnos. El edificio sigue en pie, con los percheros y las pizarras intactas. 1.300 escuelas rurales han cerrado en España en los últimos veinte años.",
    data: [
      { label: "Año de cierre", value: "2014" },
      { label: "Último curso", value: "1 alumna" },
      { label: "Escuelas rurales cerradas (España, 2004-2024)", value: "≈ 1.300" },
      { label: "Habitantes hoy", value: "84" },
    ],
    body: [
      "La escuela de Puente de Vadillos cerró un viernes de junio de 2014. La última alumna se llamaba Lucía, tenía nueve años y era la única matriculada de todo el ciclo. La fotografía de su despedida, con la maestra y los dos vecinos que se acercaron, está colgada en el bar del pueblo. Ahora Lucía tiene veinte años, estudia enfermería en Valencia y vuelve dos veces al año.",
      "Puente de Vadillos es una pedanía de Cañizares, en la Serranía Alta de Cuenca. Hoy censa 84 habitantes. La media de edad supera los 65 años. Cuando cerró la escuela, el pueblo perdió no sólo la posibilidad de retener a familias jóvenes, sino el espacio común donde se votaba, donde se hacía la fiesta de Navidad y donde la asociación de mujeres impartía clases de informática. La escuela, en los pueblos pequeños, casi nunca es sólo una escuela.",
      "Lo que ha pasado en Puente de Vadillos ha pasado en otros 1.300 pueblos españoles desde 2004, según los datos cruzados del Ministerio de Educación. Cada cierre se justifica con un argumento aritmético: por debajo de cuatro alumnos, el coste por niño se dispara. Pero hay otra aritmética, la del territorio, que rara vez entra en los informes. Sin escuela, ninguna familia con hijos pequeños se plantea instalarse. Sin familias jóvenes, no nacen niños. Sin niños, no hay escuela.",
      "Los CRA —Colegios Rurales Agrupados— son la respuesta institucional al problema. Funcionan reuniendo a alumnos de varios pueblos en un mismo centro cabecera, con maestros itinerantes que se desplazan. El modelo funciona razonablemente bien en pueblos grandes, pero falla en las pedanías pequeñas: los niños pasan dos horas diarias en el autobús, vuelven agotados, no participan de actividades extraescolares y, sobre todo, dejan de ver el centro escolar como algo propio. A los doce años se han desenganchado del pueblo antes de irse físicamente.",
      "El edificio sigue en pie. Tiene las pizarras de gis, los percheros con los nombres pintados a mano, el botiquín del año 2009 todavía colgado. La asociación cultural del pueblo —siete personas— lo abre los sábados de verano para hacer talleres con los nietos de los veraneantes. No es una escuela. Es un museo accidental, donde un grupo de octogenarios enseña a niños de siete u ocho años a hacer pan de leña, a tejer espadañas y a reconocer las setas que no se comen.",
      "Algunas comunidades autónomas han bajado el umbral de cierre a tres y dos alumnos, e incluso lo han eliminado en zonas declaradas en riesgo de despoblación. Castilla-La Mancha lo hizo en 2021. Aragón, en 2019. Asturias mantiene escuelas unitarias con un solo alumno desde 2018. Los resultados son desiguales: en algunos casos la apertura ha permitido el retorno de una o dos familias jóvenes; en otros, la matrícula sigue cayendo y el centro acaba cerrando igualmente, pero con dos años de margen. La diferencia, dicen los pedagogos, está en si la apertura va acompañada de vivienda asequible y empleo. Sola, no basta.",
      "En Puente de Vadillos la apertura llegó siete años tarde. El edificio está limpio, conservado, esperando. La asociación cultural ha hecho un cálculo que reparte por el bar como un chiste serio: con sólo dos niños matriculados podrían reabrir el aula. Hay dos familias jóvenes que han mostrado interés en mudarse, una desde Madrid y otra desde Cuenca capital. Las dos preguntan lo mismo: ¿abre la escuela? La respuesta sigue siendo no, porque para abrirla hace falta que ya estén allí. Es el círculo perfecto.",
      "El último viernes de junio, todos los años, los vecinos del pueblo van a la escuela a barrer el patio y a regar los geranios. No esperan que se reabra. Esperan, dicen, que el día en que abra, no haya que limpiar antes.",
    ],
  },
  {
    slug: "olivar-jaen-precio-aceite",
    img: olivar,
    imgCredit: "Olivar de Jaén — Wikimedia Commons, CC BY-SA",
    place: "Sierra de Jaén · Andalucía",
    region: "Andalucía",
    title: "El olivar tradicional pierde 20.000 jornales al año por el precio del aceite",
    date: "Enero 2026",
    readingTime: "11 min de lectura",
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
      "Las consecuencias no son sólo económicas. El olivar de pendiente sostiene 20.000 jornales al año en comarcas como Sierra Mágina, Sierra de Segura o Sierra Sur. Esos jornales son, en muchos pueblos, la única alternativa al desempleo agrario o a la emigración. Y, sobre todo, ese olivar es el que sujeta el suelo: sin él, la erosión en laderas calizas hace inviable cualquier otro cultivo. Estudios del CSIC en Sierra Mágina estiman pérdidas de hasta 80 toneladas de suelo por hectárea y año cuando se arranca el olivar de pendiente sin sustituirlo por cubierta vegetal estable.",
      "La cadena de valor del aceite explica buena parte del problema. Entre el agricultor y el lineal del supermercado hay cinco o seis intermediarios: cooperativa de primer grado, envasador, distribuidor, marca blanca, gran distribución. El agricultor se lleva, en una campaña media, entre el 35% y el 45% del PVP. En otras commodities agrícolas el reparto es similar; lo diferente del aceite es que el comprador final —España, primer productor mundial— consume marca blanca en el 78% de los casos, según Nielsen. Esa marca blanca es la que aprieta el precio en origen.",
      "La respuesta más sólida son las cooperativas de segundo grado: cooperativas que agrupan a otras cooperativas para envasar bajo marca propia y vender directo al consumidor, saltándose la cadena de la gran distribución. En Jaén hay 315 cooperativas de primer grado y siete de segundo grado. Entre todas mueven alrededor del 45% del aceite provincial. Es mucho, pero todavía no es suficiente para fijar precios.",
      "Algunas cooperativas han apostado por la diferenciación premium: aceites monovarietales de cosecha temprana, picual ecológico, ediciones limitadas con denominación de origen Sierra Mágina o Sierra de Segura. Una botella de 500 ml puede venderse a 18 euros en mercados premium de Alemania o Japón, frente a los 4-5 euros del aceite virgen extra estándar en lineal español. El margen permite remunerar el jornal de recogida manual. El problema es que no se puede premiumizar todo: el mercado global de aceite premium es limitado, y producirlo exige rigor en la fecha de recolección y en la trazabilidad del lote.",
      "El reconocimiento como Patrimonio Mundial de la Unesco del «Paisaje del Olivar de Andalucía» —pendiente desde 2017— se ve aquí más como una herramienta económica que como una distinción cultural. Si llega, abriría líneas específicas de financiación europea y, sobre todo, un argumento de venta. Mientras tanto, los olivos centenarios siguen siendo arrancados a buen ritmo. Sólo en 2023, según la Junta de Andalucía, desaparecieron 4.700 hectáreas de olivar tradicional en la provincia.",
      "El cambio climático añade una capa más al problema. La sequía estructural en el sur peninsular ha reducido la producción andaluza un 49% en la campaña 2022-2023. El olivar de pendiente, sin regadío, es el más expuesto. Paradójicamente, también es el que mejor resiste sequías prolongadas gracias a la profundidad de la raíz de los olivos centenarios: muchos llevan 400 o 500 años en el mismo sitio. Pero un olivo arrancado no vuelve a crecer en menos de quince años, y muchos pequeños propietarios ya no tienen quince años por delante.",
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
    readingTime: "10 min de lectura",
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
      "En la década de 1980, la aldea —como casi todas las brañas de los Ancares lucenses— estaba prácticamente abandonada. Lo que la salvó no fue una política pública, sino un cura, Elías Valiña, que entre 1962 y su muerte en 1989 dedicó la vida a recuperar las pallozas, señalizar el Camino con la flecha amarilla —que él mismo inventó— y poner Galicia en el mapa peregrino. Cuando llegó a O Cebreiro como párroco, el censo era de 28 habitantes y las pallozas servían de cuadra; cuando murió, había nueve restauradas y la aldea recibía ya cinco mil peregrinos al año.",
      "Hoy O Cebreiro tiene 47 vecinos censados y recibe alrededor de 300.000 peregrinos al año. La aldea entera vive del Camino: cuatro hostales, dos restaurantes, una tienda de queso —el del Cebreiro, queso DOP, con forma de gorro de cocinero—, una iglesia prerrománica del siglo IX y un museo etnográfico instalado en una palloza. La estacionalidad es brutal: de marzo a octubre el pueblo respira; de noviembre a febrero, hiberna. Tres de los cuatro hostales cierran en invierno.",
      "El modelo económico tiene un punto débil que la pandemia hizo evidente: la dependencia del flujo peregrino es total. En 2020, con el Camino cerrado, dos hosteleros tuvieron que pedir ERTE y un tercero echó el cierre permanente. La aldea sobrevivió gracias a los fondos del Xacobeo 2021-2022, que prolongó el Año Santo de forma excepcional y disparó la afluencia el ejercicio siguiente. Sin esa prórroga, calculan en el ayuntamiento de Pedrafita do Cebreiro, varios negocios no habrían reabierto.",
      "La fibra óptica llegó en 2021. La telemedicina, en 2023: el consultorio local conecta por vídeo con el centro de salud de Pedrafita do Cebreiro cuatro días a la semana. La carretera LU-633, que sube desde Vega de Valcarce, sigue cortándose cada invierno tres o cuatro días por nieve. Para esos días hay un protocolo: la cocinera del hostal abre la cocina como comedor común y a los peregrinos atrapados se les acoge en la casa rectoral. No está escrito en ningún manual de protección civil. Lleva funcionando treinta años.",
      "Más allá del Camino, los Ancares lucenses son una de las áreas con mayor diversidad biológica del noroeste peninsular. Conservan poblaciones estables de oso pardo, urogallo cantábrico y águila real. El Parque Natural de O Courel, contiguo, fue declarado Geoparque Mundial Unesco en 2019. Pero esa riqueza ambiental no se traduce todavía en empleo rural significativo: los puestos de guarda son pocos y la mayoría dependen de proyectos LIFE con financiación discontinua. El pastoreo, que sostuvo durante siglos la apertura del paisaje, ha caído un 70% en la comarca desde 1990.",
      "El modelo O Cebreiro —turismo cultural especializado, identidad arquitectónica fuerte, masa crítica suficiente para servicios básicos— se ha intentado replicar en otras aldeas de los Ancares. Casi siempre sin éxito. La diferencia es el Camino: 300.000 personas pasando por la puerta de tu casa cada año son una infraestructura. Aldeas como Piornedo, también con pallozas, también espectaculares, no están en ninguna ruta y dependen del turismo de fin de semana, que es mucho más volátil.",
      "La lección de Elías Valiña sigue vigente y es incómoda: el patrimonio rural sólo se conserva cuando hay alguien para conservarlo, y ese alguien sólo se queda si tiene de qué vivir. La belleza, por sí sola, no fija población. La pintura nueva de las pallozas se descascarillaría en un invierno si los hosteleros, los queseros y el párroco actual no la repintaran cada primavera.",
    ],
  },
  {
    slug: "aezkoa-pastor-oveja-latxa",
    img: pastor,
    imgCredit: "Rebaño de oveja latxa, Aratz (País Vasco) — Wikimedia Commons, CC BY-SA",
    place: "Valle de Aezkoa · Navarra",
    region: "Navarra · Pirineo",
    title: "Esquilar a mano: oficio de seis personas en toda Navarra",
    date: "Noviembre 2025",
    readingTime: "10 min de lectura",
    excerpt:
      "La oveja latxa, base del Idiazábal, sigue trashumando entre los puertos de Belagua y los valles de Aezkoa. Quedan menos de 200 pastores activos. El esquileo manual lo hacen seis personas: el más joven tiene 54 años.",
    data: [
      { label: "Pastores de latxa en Navarra", value: "≈ 200" },
      { label: "Esquiladores manuales activos", value: "6" },
      { label: "Edad media del oficio", value: "61 años" },
      { label: "Cabezas de latxa censadas (Navarra)", value: "≈ 32.000" },
    ],
    body: [
      "La oveja latxa es la base de uno de los quesos más antiguos de Europa: el Idiazábal, con denominación de origen desde 1987. Es una oveja pequeña, de lana basta y cara negra, perfectamente adaptada a la trashumancia vertical de los valles pirenaicos. Cada junio sube de los valles de Aezkoa, Salazar y Roncal a los puertos de Belagua y Larra. Cada octubre baja. El recorrido —entre 25 y 60 kilómetros según la cabaña— se hace todavía a pie, por cañadas que en algunos tramos no han cambiado en mil años.",
      "Quedan menos de 200 pastores activos de latxa en toda Navarra, según la Federación de Razas Autóctonas. La edad media del oficio supera los 60 años. El relevo generacional, dicen en la cooperativa Artzai Gazta, es el problema número uno por encima del precio de la leche o de la presión del oso pardo, reintroducido en los Pirineos desde los años noventa y que cada verano se cobra entre 80 y 120 cabezas según el censo de la Fundación Oso Pardo.",
      "Dentro del oficio hay un oficio en peor situación: el del esquileo manual con tijera. Quedan seis personas haciéndolo en toda Navarra. El más joven, Joxe, tiene 54 años y vive en Aribe. Esquila unas 40 ovejas al día, frente a las 200 que esquila una máquina. La diferencia, dice, no está en la velocidad sino en el animal: la tijera, bien manejada, no asusta, no estresa y permite revisar la piel oveja a oveja. La lana resultante, además, conserva la longitud entera de la fibra, lo que la hace valiosa para artesanía.",
      "El problema es que no hay mercado para esa lana. La industria textil hace décadas que se pasó al esquileo mecánico y a la lana merina importada. Joxe vende la suya a tres talleres de fieltro artesanal del País Vasco francés, y cubre lo justo para pagar el desplazamiento. El resto de pastores —los que esquilan con máquina— consideran la lana un subproducto sin valor: muchas veces queda apilada en la borda hasta que se pudre, o se entrega gratis a quien quiera llevársela. Hace cincuenta años, la lana suponía un tercio de los ingresos del pastor.",
      "La cooperativa Artzai Gazta ha lanzado un programa de aprendices: contratos de un año cubiertos al 60% con fondos LEADER, con compromiso de los pastores veteranos de transmitir el oficio. En la convocatoria de 2024 se presentaron once candidatos. Se cubrieron tres plazas. Las otras ocho quedaron desiertas porque el sueldo —1.180 euros netos al mes, sin descanso semanal en temporada alta— sigue sin ser competitivo. Pastorear oveja latxa supone, en temporada de subida al puerto, jornadas de catorce horas sin domingos.",
      "La PAC actual penaliza —involuntariamente, pero penaliza— al pastor extensivo. Los pagos por superficie favorecen al gran propietario; los pagos por ganado se han ido reduciendo. La ayuda específica para razas autóctonas en peligro existe, pero el trámite administrativo, denuncian en la cooperativa, exige declaraciones digitales mensuales que muchos pastores mayores no pueden cumplimentar sin ayuda externa. Más de un expediente se pierde no por incumplimiento, sino por error de formulario.",
      "El queso Idiazábal vive, en paralelo, un momento dulce de prestigio gastronómico. La marca DOP se cotiza en restaurantes de Madrid, París y Nueva York. Pero ese prestigio no llega al pastor: el productor recibe entre 1,10 y 1,30 euros por litro de leche cruda de latxa, frente a los 18-22 euros que paga el consumidor por un kilo de queso terminado. La quesería —en muchos casos cooperativa, en otros familiar— se queda con el grueso del valor añadido. No es necesariamente abuso: madurar un Idiazábal exige nueve meses de cámara, inversión en infraestructura y una red comercial. Pero el desequilibrio explica por qué cada vez hay menos pastores y más queseros.",
      "Si el oficio desaparece —y va camino de ello en menos de una generación—, no desaparecerá sólo un trabajo. Desaparecerá la trashumancia, y con ella el manejo extensivo de los puertos pirenaicos, que es lo que mantiene abiertos los pastos de altura, evita el matorralización y, en última instancia, sostiene la biodiversidad del Pirineo navarro. La oveja latxa no es ganadería: es jardinería de montaña a escala de siglos.",
    ],
  },
  {
    slug: "ansias-leon-ganaderia-extensiva",
    img: "https://images.pexels.com/photos/2599538/pexels-photo-2599538.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imgCredit: "Ganadería extensiva en montaña — Pexels",
    place: "Ansias · León",
    region: "Castilla y León",
    title: "Cuando el ganado extensivo desaparece, el paisaje se cierra",
    date: "Octubre 2025",
    readingTime: "11 min de lectura",
    excerpt:
      "La ganadería extensiva de Ansias ha sostenido durante siglos un paisaje abierto. En treinta años ha caído el 83%. Sin vacas en la montaña, el matorral cierra el horizonte.",
    data: [
      { label: "Cabezas de ganado (1995)", value: "2.400" },
      { label: "Cabezas de ganado (2024)", value: "410" },
      { label: "Pastores jubilados sin relevo", value: "28" },
      { label: "Hectáreas de matorral invasor", value: "≈ 3.200" },
    ],
    body: [
      "Ansias es un pequeño municipio de la montaña palentina, en el norte de la provincia de León. En 1995 había 2.400 cabezas de ganado entre ovejas, cabras y vacas que pastaban las laderas de pizarra y cuarcita de la comarca. Hoy quedan 410, distribuidas entre cinco ganaderos con edad media de 67 años.",
      "La desaparición de la ganadería extensiva ha tenido consecuencias inmediatas en el paisaje. Las laderas que durante mil años estuvieron limpias, abiertas al horizonte, se están cerrando con un matorral invasor cada vez más denso: encina, roble carvallo, retama y espino. El Parque Natural de Fuentes Carrionas, que gestiona parte del territorio, reporta un cierre del paisaje que hace inviable la ganadería futura: los nuevos pastos son cada vez más empobrecidos, porque el matorral compite.",
      "El ciclo es perverso: menos ganado, más matorral; más matorral, menos pastos útiles; menos pastos, menos rentabilidad ganadera. En los últimos diez años, dos ganaderos han abandonado la actividad porque «al ganado no le quedaba nada que pacer». La administración regional aprobó en 2022 un plan de limpieza de matorral en 1.200 hectáreas, pero el trabajo manual cuesta 800 euros por hectárea y los presupuestos son limitados. El resultado es un patrón de fragmentos limpios rodeados de matorral denso, un paisaje fracturado que no es bueno ni para la ganadería ni para el ecosistema.",
      "Los pastores que quedan en Ansias son todos hombres mayores de 60 años. Ninguno ha conseguido que sus hijos continúen. «Mi hijo estudió informática en Valladolid, gana el triple de lo que yo gano aquí, y vive en un piso de 90 metros sin preocuparse por si llueve o no llueve», dice Mauricio, de 68 años, que lleva 47 pastoreando. «¿Quién lo va a culpar por no volver?»",
      "La ganadería extensiva no desaparece porque sea ineficiente: desaparece porque la sucesión generacional requiere que haya alguien dispuesto a vivir de ella. Eso depende de tres factores: que el precio de la carne o la leche sea viable, que el trabajo sea compatible con una vida moderna (electricidad, agua, internet), y que haya horizonte de futuro. En Ansias, el primero flaquea, el segundo es precario y el tercero no existe.",
      "Una tesis doctoral de la Universidad de Alcalá ha documentado que el cierre del paisaje en zonas de pastoreo extensivo abandonado acelera la pérdida de biodiversidad en cinco años. Donde había diversidad de microhábitats —claros, transiciones, bordes— ahora hay monocultivo de matorral. Las aves rupícolas desaparecen. Los insectos herbívoros de especies pioneras también. El ecosistema se empobrece rápidamente.",
      "La paradoja es que la solución no es complicada: es más cara. Los fondos LEADER y los planes de gestión territorial existen. El problema es el ritmo: los procesos administrativos toman años, y la ganadería extensiva está en el borde del colapso ahora. Cuando finalmente llegue la inversión en limpieza de matorral, puede ser demasiado tarde para recuperar los rebaños que ya han desaparecido.",
    ],
  },
  {
    slug: "tarazona-aragon-despoblacion-sismica",
    img: "https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imgCredit: "Pueblos abandonados en Aragón — Pexels",
    place: "Tarazona · Zaragoza",
    region: "Aragón",
    title: "La Mudejar más bonita de Aragón, vacía en invierno",
    date: "Septiembre 2025",
    readingTime: "10 min de lectura",
    excerpt:
      "Tarazona tiene la Basílica de la Virgen del Pilar más antigua de Aragón, sus torres mudéjares están en la lista Patrimonio de la Humanidad. Pero sus 1.400 vecinos se reducen a 800 en invierno.",
    data: [
      { label: "Vecinos censados", value: "1.412" },
      { label: "Residentes permanentes en invierno", value: "≈ 780" },
      { label: "Torres mudéjares", value: "3" },
      { label: "Negocios que abrieron nuevos (2023-2024)", value: "4" },
    ],
    body: [
      "Tarazona es una joya arquitectónica: tiene tres torres mudéjares del siglo XVI que están consideradas entre las más bellas de Aragón. La catedral antigua, la basílica, las casas de adobe y entramado de madera. Es un pueblo que debería estar en las revistas de turismo de lujo. Y, en invierno, es un pueblo prácticamente vacío.",
      "La estacionalidad es brutal porque vive del turismo de proximidad madrileño: turistas de fin de semana que vienen a ver la arquitectura y a comer jamón. Cuando llega octubre, se marchan. De los 1.412 residentes censados, entre 600 y 800 son segundas residencias. La realidad poblacional real es de menos de 800 personas en invierno. Un municipio de permanencia precaria.",
      "La oferta de servicios refleja esa realidad: dos supermercados, una farmacia, un médico que baja de Borja dos días a la semana. Las escuelas funcionan con presupuesto de pequeña entidad. El instituto más cercano está a 38 kilómetros. Una familia con dos hijos menores puede hacer la cuenta: ¿cuánto cuesta la gasolina? ¿Y el tiempo perdido en carreteras?",
      "Lo interesante es que Tarazona ha conseguido atraer a algunos nuevos residentes permanentes: un panadero de Madrid que se cansó del ruido, una artesana textil, un consultor que teletrabaja para una multinacional de Barcelona, un retirado belga que restauró una casa del casco antiguo. En 2023 se abrieron dos nuevos bares y una galería de arte. Son números pequeños, pero marcan tendencia.",
      "El ayuntamiento ha facilitado este proceso ofreciendo vivienda municipal rehabilitada a precio accesible durante tres años de contrato, con opción de compra después. El sistema funciona en municipios alemanes y suizos, y aquí está teniendo cierto éxito: hay lista de espera para ocupar las catorce viviendas disponibles. No es una solución demográfica, pero es un indicio de que sí hay demanda latente de vida rural entre cierto público urbano.",
      "La pregunta de Tarazona es si puede gestionar la dualidad: ser destino turístico de calidad en temporada alta, sin que eso destruya la vida residencial del resto del año. Otras ciudades patrimonio —Toledo, Ávila— no lo han logrado bien. Tarazona tiene una ventaja: todavía es pequeña. Mientras siga siendo pequeña, puede decidir.",
    ],
  },
  {
    slug: "sorvillan-palencia-envejecimiento-extremo",
    img: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imgCredit: "Pueblos envejecidos de Castilla — Pexels",
    place: "Sorbillán · Palencia",
    region: "Castilla y León",
    title: "El municipio donde el 89% de los habitantes supera los 65 años",
    date: "Agosto 2025",
    readingTime: "9 min de lectura",
    excerpt:
      "En Sorbillán, un pequeño municipio de Palencia, viven 38 personas censadas. 34 de ellas tienen más de 65 años. Es un retrato vivo del envejecimiento rural extremo en España.",
    data: [
      { label: "Habitantes censados", value: "38" },
      { label: "Mayores de 65 años", value: "34 (89%)" },
      { label: "Edad media", value: "77,3 años" },
      { label: "Menores de 18 años", value: "0" },
    ],
    body: [
      "Sorbillán es un municipio de 53 habitantes de derecho, aunque el censo real es de 38 personas viviendo en el pueblo. De esas 38, treinta y cuatro tienen más de 65 años. Es el retrato en espejo de lo que la demografía rural española puede llegar a ser.",
      "La estructura poblacional es prácticamente invertida respecto a una pirámide poblacional normal. No hay ni un solo habitante menor de 18 años. El más joven tiene 39 años y vive solo. El resto son parejas de jubilados o viudos. La edad media, calculada por el instituto de estadística regional, es de 77,3 años: más de una década por encima de cualquier provincia española.",
      "El municipio tiene servicios básicos: luz, agua, carreteras asfaltadas, una línea de autobús que pasa tres veces a la semana hacia Palencia capital. Pero esos servicios existen porque todavía hay población censada: el momento en que esa población baje de 30 personas, varios servicios pueden desaparecer por razones de viabilidad operativa.",
      "El médico viene una vez a la semana desde el pueblo más grande, a 18 kilómetros. La farmacia está en el mismo lugar. La estación de tren más cercana está a 45 kilómetros. Para una persona mayor en Sorbillán, cualquier problema de salud que requiera hospitalización es una epopeya: alguien tiene que llamar ambulancia, que tarda treinta minutos en llegar, y la traslada a un hospital a 85 kilómetros.",
      "Lo fascinante es que Sorbillán no es anómalo: es el futuro de cientos de pueblos españoles proyectado al presente. Hace cincuenta años, Sorbillán tenía 340 habitantes. En 1980 tenía 180. En 2000, 72. La curva es predecible. A menos que ocurra un milagro demográfico —una migración de retorno que nadie espera— los números de Sorbillán en 2050 no serán distintos de los que hay ahora.",
      "El ayuntamiento de Sorbillán sigue funcionando. Hay alcalde, hay concejalía de bienestar social, hay presupuestos municipales. El sistema administrativo español está pensado para municipios de cinco mil personas. Cuando un municipio tiene 38, la carga administrativa por habitante es absurda. Algunos alcaldes de pueblos pequeños dedican más tiempo a papeleo que a gestión real.",
      "La pregunta es qué pasa cuando Sorbillán llegue a veinte personas. ¿Se fusiona? ¿Se disuelve? ¿Quién mantiene la carretera? ¿Quién se encarga de que la iglesia no se caiga? Estas son preguntas que la administración española aún no ha respondido, pero que debe responder en los próximos veinte años.",
    ],
  },
  {
    slug: "chinchilla-albacete-arqueologia-rural",
    img: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imgCredit: "Paisajes de Castilla-La Mancha — Pexels",
    place: "Chinchilla de Monteagudo · Albacete",
    region: "Castilla-La Mancha",
    title: "El pueblo medieval que se convierte en museo arqueológico viviente",
    date: "Julio 2025",
    readingTime: "10 min de lectura",
    excerpt:
      "Chinchilla ha vivido ocupaciones desde los íberos. Su castillo del siglo XV sigue en pie. Hoy, 789 habitantes viven entre ruinas que podrían revalorizarse como patrimonio.",
    data: [
      { label: "Habitantes censados", value: "789" },
      { label: "Restos arqueológicos identificados", value: "47" },
      { label: "Sondeos de excavación (últimos 5 años)", value: "12" },
      { label: "Proyectos LEADER en desarrollo", value: "3" },
    ],
    body: [
      "Chinchilla de Monteagudo está construida en capas. La capa más antigua son los íberos: hay restos identificados en el cerro que domina el pueblo. Encima están los romanos. Luego los musulmanes, que construyeron el castillo primitivo. La reconquista dejó capas cristianas. La Guerra Civil una película de destrucción. Y ahora, en el siglo XXI, un pequeño pueblo de 789 habitantes que vive rodeado de arqueología sin saber muy bien qué hacer con ella.",
      "El castillo de Chinchilla es una de las fortalezas medievales mejor conservadas de Albacete. Tiene torres, murallas intactas, una mazmorra. Pero está cerrado al público la mayoría del año. Abre los fines de semana de junio a septiembre, con visitas guiadas limitadas. No hay una política clara de conversión en recurso turístico. Es como tener un Rembrandt guardado en un trastero.",
      "La arqueología universitaria se ha interesado en Chinchilla en los últimos quince años. Ha habido expediciones de la Universidad de Castilla-La Mancha, de investigadores de la Complutense de Madrid. Cada campaña de excavación, los vecinos ven aparecer en la plaza del pueblo a arqueólogos con pinceles y tamices. Pero esos trabajos son fragmentarios, sin conexión entre ellos, sin un plan maestro de investigación.",
      "Lo que diferencia a Chinchilla de otros pueblos arqueológicos es que sí tiene la posibilidad de convertirse en un destino de «turismo de investigación»: visitantes que vienen a aprender historia, no a hacer selfis. Hay mercado para eso en el norte de Europa. Pero exige infraestructura: un pequeño museo de sítio, guías entrenados, un centro de interpretación, rutas claramente señalizadas.",
      "El ayuntamiento ha conseguido fondos LEADER para un proyecto piloto: rehabilitar un caserón abandonado en el casco antiguo como centro de visitantes e investigación. La idea es que investigadores y público general puedan acceder, ver excavaciones en tiempo real durante el verano, participar en sesiones de catalogación. Es ambicioso para un pueblo de 789 habitantes, pero es ambicioso en la dirección correcta.",
      "Chinchilla podría ser un modelo: cómo convertir el patrimonio arqueológico de un pueblo pequeño en empleabilidad local. No necesita ser famoso como Segovia o Toledo. Necesita ser especializado, de nicho, capaz de atraer a personas interesadas en historia medieval, en métodos de excavación, en patrimonio. Eso es mucho más sostenible que competir con Disneyland.",
    ],
  },
  {
    slug: "tordesillas-valladolid-patrimonio-compartido",
    img: "https://images.pexels.com/photos/3408351/pexels-photo-3408351.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imgCredit: "Patrimonio histórico de Castilla — Pexels",
    place: "Tordesillas · Valladolid",
    region: "Castilla y León",
    title: "Cuando un tratado mundial hace famoso un pueblo, pero no lo enriquece",
    date: "Junio 2025",
    readingTime: "11 min de lectura",
    excerpt:
      "El Tratado de Tordesillas (1494) dividió el mundo entre España y Portugal. El pueblo tiene 8.000 habitantes y 2 millones de visitantes/año en el monasterio. Pero los vecinos no ven beneficio real.",
    data: [
      { label: "Habitantes censados", value: "8.107" },
      { label: "Visitantes al monasterio/año", value: "≈ 2.000.000" },
      { label: "Edad media", value: "46,8 años" },
      { label: "Comercios nuevos (2020-2024)", value: "12" },
    ],
    body: [
      "Tordesillas es famoso en todo el mundo porque aquí se negoció en 1494 el Tratado de Tordesillas: el acuerdo entre España y Portugal que dividió el Atlántico, y por tanto el nuevo mundo, en dos hemisferios de influencia. El monasterio donde se negoció sigue en pie, es un monumento nacional, y recibe entre 1,5 y 2 millones de visitantes al año según el tipo de análisis que se haga.",
      "Con 8.107 habitantes, eso significa que Tordesillas tiene un ratio visitantes-vecinos de casi 300:1 en temporada alta. Es un pueblo que vive bajo presión turística constante. Pero aquí entra la paradoja: tanta presión no se traduce automáticamente en beneficio económico.",
      "La razón es estructural. El monasterio es gestionado por el Ministerio de Cultura a través de una fundación estatal. Los ingresos de entrada van a la administración central. Los gastos de mantenimiento también. Lo que queda para el pueblo es el efecto indirecto: hoteles, restaurantes, tiendas de souvenirs. Pero la forma en que se estructura el turismo en Tordesillas es mediante autobuses de tour: los visitantes llegan en grupo, pasan dos horas, se van.",
      "Bajo ese modelo, los únicos negocios viables son los que capturan rápidamente dinero de paso: cafeterías, tiendas. Los establecimientos que requieren permanencia —hoteles con ofertas de una o dos noches— están en posición débil, porque el turista standard de Tordesillas no se queda a dormir.",
      "Entre 2020 y 2024 abrieron en Tordesillas aproximadamente 12 nuevos comercios. Eso es un número mejor que el de otros pueblos del entorno. Pero casi todos son terrazas, tiendas de snacks, establecimientos de rotación rápida. No hay emprendimiento profundo, porque no hay tiempo para él.",
      "La Junta de Castilla y León ha intentado diversificar la oferta con un museo dedicado a las mujeres españolas relevantes (Juana la Loca vivió recluida en Tordesillas), un centro de interpretación del Tratado de Tordesillas, eventos de recreación histórica. Esto ha ayudado algo a extender la permanencia media del visitante: ha pasado de 90 minutos a 2,5 horas en los últimos diez años.",
      "La pregunta de Tordesillas es transferible a otros pueblos famosos: ¿puede un pueblo prosperar con el turismo de tránsito, o necesariamente requiere capacidad de pernocta? La respuesta parece ser que el tránsito rápido no es un modelo económico sólido para sostenibilidad poblacional. Tordesillas sigue siendo un pueblo de edad media relativamente alta, porque los jóvenes no encuentran empleos robustos en la cadena turística de paso.",
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
