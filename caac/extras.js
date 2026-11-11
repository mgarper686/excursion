/* Contenido ampliado: guion extra para el profesor, preguntas de estudio (NO están en el audio),
   preguntas sorpresa «¿sabes dónde estamos?» y esquemas (imágenes) para enseñar al alumnado.
   Se fusiona con data.js al cargar. Para añadir tus propias imágenes: copia el archivo a img/esquemas/
   y añade una línea en ESQUEMAS (id, titulo, img). Luego pon el id en "esquemas" de la parada que quieras. */

window.ESQUEMAS = [
  { id:"cronologia", titulo:"Fechas clave en la historia del edificio", img:"img/esquemas/cronologia.png" },
  { id:"tres-vidas", titulo:"Las tres vidas del edificio", img:"img/esquemas/tres-vidas.png" },
  { id:"cadena-loza", titulo:"Así se hacía la loza de la Cartuja", img:"img/esquemas/cadena-loza.png" },
  { id:"padres-legos", titulo:"Padres y legos: dos mundos en un monasterio", img:"img/esquemas/padres-legos.png" },
  { id:"plano", titulo:"Plano de la visita", img:"img/plano.jpg" }
];

const E_ESTUDIO = "📚 ¡¡Esta NO está en el audio!! ¿Has estudiado?";
window.E_ESTUDIO = E_ESTUDIO;

// Por qué se recomienda cada esquema en cada parada (se muestra al profesor junto al ⭐)
window.ESQ_WHY = {
  "puerta-tierra":{ "cronologia":"Es el punto de partida: con las cinco fechas (1248, 1399, 1810-39, 1986-92 y 1997) das el hilo de toda la visita.", "tres-vidas":"Cuando digas que el edificio ha tenido tres vidas (monasterio, fábrica y museo), enséñalo: es la idea que se repite en todas las paradas." },
  "capilla-afuera":{ "tres-vidas":"Esta capilla vivió las tres épocas (monjes, Pabellón Real de la Expo 92 y museo): sirve para situarla." },
  "conjunto-afuera":{ "padres-legos":"Aquí estaban la hospedería y los servicios: muestra quién vivía dentro (padres) y quién trabajaba (legos) para entender para qué servía cada edificio." },
  "atrio":{ "tres-vidas":"Al contar la fundación (Per Afán, Benedicto XIII) colócala como la primera vida del edificio, antes de la fábrica y el museo." },
  "casa-prior":{ "padres-legos":"El prior mandaba sobre los padres: el esquema explica la jerarquía y la vida de la orden." },
  "iglesia":{ "tres-vidas":"Iglesia, almacén francés y sala del museo: es el mejor ejemplo de las tres vidas en un solo espacio." },
  "santa-ana":{ "cronologia":"Colón murió en 1506 y sus restos llegaron en 1509: colócalo en la línea del tiempo y enlázalo con la Expo 92." },
  "refectorio":{ "cadena-loza":"Aquí se guardaba la loza cocida una vez (sala bizcochera): el esquema te dice en qué paso de la fabricación estaba." },
  "magdalena":{ "cadena-loza":"Fue el taller de decoración: enseña el paso de dibujar y estampar dentro de la cadena de la loza." },
  "claustrillo":{ "padres-legos":"Este claustro era de los padres: contrástalo con el de legos y con el Claustrón." },
  "sala-capitular":{ "padres-legos":"Aquí decidían los padres: ayuda a explicar su vida de silencio y de comunidad." },
  "claustron":{ "cadena-loza":"Es la parada de la fábrica: sigue el esquema (de la arcilla a la pieza esmaltada) mientras señalas los hornos.", "tres-vidas":"Cierra la segunda vida (fábrica, hasta 1982) y abre la tercera (museo): úsalo para resumir lo visto." },
  "memorial-agua":{ "tres-vidas":"El agua marca las tres vidas (barro, riadas y Expo): úsalo para atar cabos con el recorrido." },
  "arco-legos":{ "padres-legos":"Último claustro: los legos trabajaban; cierra la idea de los dos mundos.", "cronologia":"Para el cierre: repasa las fechas con el alumnado y pregúntales cuáles recuerdan." }
};
window.EXTRAS = {
  "puerta-tierra": {
    esquemas:["cronologia","tres-vidas"],
    ampliado:[
      "Antes del monasterio: los almohades usaban la zona para hornos de alfarería (barro del río y cuevas excavadas para sacar arcilla). Leyenda: en 1248 se halló en una cueva una imagen de la Virgen y se construyó la ermita de Santa María de las Cuevas. || Los almohades hacían cerámica aquí, y según la leyenda una Virgen hallada en una cueva en 1248 dio origen a la ermita.",
      "A finales del s. XIV el arzobispo Gonzalo de Mena y Roelas dio la ermita a los franciscanos. Conoció a los cartujos de El Paular (Madrid) y se decidió a fundar una cartuja: la Orden autorizó la fundación en 1398. || Un arzobispo conoció a los cartujos de El Paular y consiguió permiso para fundar una cartuja en 1398.",
      "1400: llegan de El Paular cinco monjes y un lego (Juan Carrillo, Juan Fernández Gallego, Juan de Orduña, Toribio de Madrigal y el lego Juan de Soria). 1401: toman posesión de la ermita; ese mismo año muere el arzobispo. || En 1400 llegaron cinco monjes y un lego desde El Paular, y en 1401 tomaron posesión de la ermita.",
      "1404: el papa Benedicto XIII (el «Papa Luna») aprueba la fundación y dona 5.000 doblas de oro y ornamentos. || El Papa Luna aprobó la fundación en 1404 y regaló 5.000 doblas de oro.",
      "1494: el viajero alemán Hieronymus Münzer escribe que es la segunda cartuja más rica de la Cristiandad, después de la de Pavía. || En 1494 un viajero alemán la llamó la segunda cartuja más rica de la Cristiandad.",
      "La portada principal que vemos la hizo Ambrosio de Figueroa (1766), en la tapia oeste del recinto. Hay otras dos puertas: la de Cadenas (Ave María) y la del Río. || La portada que vemos es del siglo XVIII, y el recinto tiene otras dos puertas: Cadenas y Río.",
      "Bien de Interés Cultural desde 1964. Es uno de los cuatro monasterios cartujos de Andalucía (los otros: Jerez, Granada y Cazalla). || Es monumento protegido desde 1964 y una de las cuatro cartujas andaluzas.",
      "Pregunta de calentamiento: ¿por qué esta zona se llama «isla de la Cartuja»? Porque queda entre dos brazos del Guadalquivir. || Pregunta: ¿por qué «isla»? Porque el Guadalquivir la rodea con dos brazos."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿De qué monasterio llegaron en el año 1400 los primeros cartujos a Sevilla?", opciones:["Miraflores (Burgos)","El Paular (Madrid)","Scala Dei (Tarragona)","Montserrat (Barcelona)"], correcta:1, pista:"Está en la sierra de Madrid, cerca de Rascafría." }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Puerta del Río","Puerta de Tierra (entrada principal)","Puerta de Cadenas (Ave María)","Arco de Legos","Puerta de la Fama"], correcta:1 }
    ]
  },
  "capilla-afuera": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Daños: terremoto de Lisboa (1755), riada de 1757 y un temporal en 1759. Ambrosio de Figueroa la reconstruye y la termina en 1766. El retablo mayor, de Francisco de Acosta (hacia 1780), sigue en su sitio. || Un terremoto, una riada y un temporal la dañaron en cuatro años; se reconstruyó y terminó en 1766.",
      "La ermita anterior era la de Santa María de las Cuevas, que antes de los cartujos estuvo en manos de los franciscanos. || Antes de los cartujos era la ermita de Santa María de las Cuevas, de los franciscanos.",
      "Los cartujos tenían dos hospederías: una exterior (junto a la huerta Chica) y otra interior, cerca de la biblioteca, para visitantes de calidad. || Había dos hospederías: una fuera para el pueblo y otra dentro para visitantes importantes.",
      "Durante la Expo 92 fue parte del Pabellón Real, donde se recibía a jefes de Estado y de Gobierno. || En la Expo 92 fue parte del Pabellón Real, donde se recibía a jefes de Estado.",
      "Las riadas fueron una amenaza constante: 1485, 1595, 1603, 1626 y 1784 afectaron al monasterio. Se retomará en el Memorial del Agua. || Las riadas fueron una amenaza constante durante siglos; lo retomamos en el Memorial del Agua."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué orden religiosa tuvo la ermita de Santa María de las Cuevas antes de que llegaran los cartujos?", opciones:["Dominicos","Franciscanos","Jerónimos","Benedictinos"], correcta:1, pista:"Son los frailes de San Francisco de Asís." }
    ]
  },
  "conjunto-afuera": {
    esquemas:["padres-legos"],
    ampliado:[
      "Portada del Ave María o de las Cadenas: de principios del s. XV, con dos escudos de Gonzalo de Mena (un capelo cardenalicio y cinco soles de oro sobre fondo azul). || Esta puerta, de principios del XV, lleva los escudos del arzobispo fundador.",
      "Hospedería interior: allí se alojaron Felipe II y, entre otros, los pintores Zurbarán y Francisco Pacheco y el escultor Pedro Duque Cornejo, que trabajaron para el monasterio. || En la hospedería durmieron reyes y pintores famosos como Zurbarán.",
      "Hoy conviven aquí el CAAC y el rectorado de la Universidad Internacional de Andalucía (UNIA), desde 1997. || Hoy comparten el edificio el museo CAAC y el rectorado de la UNIA.",
      "Cristina Lucas (Jaén, 1973): su obra habla de las mujeres encerradas en casa; Alicia no cabe en la habitación y se asoma por la ventana. || Cristina Lucas habla de mujeres encerradas en casa: Alicia no cabe en su habitación.",
      "Curro González (Sevilla, 1960): el hombre-orquesta cargado de instrumentos persigue el éxito frente a la Puerta de la Fama. Si cruzáis la puerta, suena una fanfarria y una cámara os graba. || Curro González retrata a quien persigue la fama con un hombre-orquesta; si cruzas la puerta, suena una fanfarria.",
      "Curiosidad: el pabellón de la Unión Europea de la Expo 92 tenía chimeneas inspiradas en las de la fábrica de la Cartuja. || Dato curioso: el pabellón de la UE en la Expo copió las chimeneas de la fábrica."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué universidad tiene hoy su rectorado en el antiguo monasterio?", opciones:["Universidad de Sevilla","Universidad Pablo de Olavide","Universidad Internacional de Andalucía","Universidad Loyola"], correcta:2, pista:"Sus siglas son UNIA." }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Conjunto de Afuera (zona semipública)","Claustrón","Sala Capitular","Refectorio","Claustrillo mudéjar"], correcta:0 }
    ]
  },
  "atrio": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Per Afán de Ribera «el Viejo» (c. 1338-1423), I Adelantado Mayor de Andalucía, costeó la iglesia a cambio de que su familia fuera enterrada en ella. || Per Afán de Ribera pagó la iglesia a cambio de que su familia se enterrara en ella.",
      "1404: Benedicto XIII aprueba la fundación; 1407: el infante Fernando de Antequera se queda con 30.000 doblas que había dejado el arzobispo para la Reconquista (por eso el dinero llegó tarde). || El dinero del arzobispo llegó tarde porque el infante Fernando se quedó con 30.000 doblas en 1407.",
      "La fachada de la iglesia es abocinada (se va abriendo hacia fuera), con decoración gótica, mudéjar y plateresca. El zócalo de azulejos del siglo XVI se desmontó a finales del s. XX para protegerlo. || La fachada se abre hacia fuera y mezcla gótico, mudéjar y plateresco; el zócalo de azulejos se retiró para protegerlo.",
      "José Ramón Sierra (Olivares, 1945) dirigió la rehabilitación de la zona monumental y creó los tres memoriales: Arqueología (aquí), Agua y Pickman. || José Ramón Sierra dirigió la restauración y creó tres memoriales: Arqueología, Agua y Pickman.",
      "Cruz de los Ladrones: humilladero (lugar de rezo) en el camino entre Triana y la Cartuja. || La Cruz de los Ladrones era un sitio de rezo en el camino de Triana a la Cartuja."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué papa aprobó la fundación del monasterio en 1404 y donó 5.000 doblas de oro?", opciones:["Benedicto XIII (el Papa Luna)","Julio II","Urbano II","Pío IX"], correcta:0, pista:"Lo llamaban «Papa Luna» y era aragonés." }
    ]
  },
  "casa-prior": {
    esquemas:["padres-legos"],
    ampliado:[
      "Visitantes ilustres: Carlos V (1526, con motivo de su boda con Isabel de Portugal), Felipe II (tres días en mayo de 1570), Felipe IV (4 de marzo de 1642). || Por aquí pasaron Carlos V, Felipe II y Felipe IV.",
      "Santa Teresa de Jesús visitó el monasterio varias veces en 1575-1576. Por petición suya se construyó una capilla a Santa Ana en la Huerta Grande. Regaló dos relicarios que hoy se conservan en el convento de San José (carmelitas, Sevilla). || Santa Teresa visitó el monasterio en 1575-76 y pidió una capilla a Santa Ana en la huerta.",
      "Benito Arias Montano (humanista, 1527-1598) hacía retiros espirituales aquí y legó su biblioteca. || Arias Montano, un sabio humanista, hacía retiros aquí y dejó su biblioteca.",
      "Tras la desamortización (1836) el monasterio se usó como prisión, con unos 200 reclusos, que luego se trasladaron al convento de la Trinidad. || Tras 1836 sirvió de prisión para unos 200 reclusos.",
      "La orden cartuja: silencio, soledad y austeridad. Su lema: «Stat Crux dum volvitur orbis» (la Cruz permanece mientras el mundo gira). || Los cartujos vivían en silencio, soledad y austeridad: «la Cruz permanece mientras el mundo gira»."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué santa visitó la Cartuja en 1575-1576 y pidió que se construyera una capilla a Santa Ana en la huerta?", opciones:["Santa Teresa de Jesús (de Ávila)","Santa Clara","Santa Rita","Santa Catalina de Siena"], correcta:0, pista:"Fundó las carmelitas descalzas y se llamaba Teresa." }
    ]
  },
  "iglesia": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Fachada abocinada gótica con decoración mudéjar y plateresca. Nave única con bóveda de crucería y bóveda de abanico en el presbiterio. Las yeserías se añadieron entre 1613 y 1614. || Es una iglesia de una sola nave, gótica por fuera, con bóveda de abanico y yeserías de 1613.",
      "1526: Carlos V visita el monasterio con motivo de su boda con Isabel de Portugal y regala su altar portátil. (Algunas fuentes datan la ampliación de la iglesia en 1523 y otras en 1526.) || Carlos V la visitó en 1526 por su boda y regaló su altar portátil.",
      "Obras que estuvieron aquí y hoy están fuera: el Cristo de la Clemencia de Martínez Montañés (1603, Catedral de Sevilla), cuadros de Zurbarán (Visita de san Bruno al papa Urbano II, Virgen de los cartujos…) y de Velázquez (hoy en museos). || Muchas obras maestras de Montañés, Zurbarán y Velázquez salieron de aquí y están en otros museos.",
      "Durante la ocupación francesa (1810-1812) la iglesia fue almacén; los franceses vaciaron el monasterio de contenido religioso. || En la ocupación francesa la iglesia fue almacén y se vació de contenido religioso.",
      "Los cartujos regresan el 30 de septiembre de 1812; en el Trienio Liberal (1820-1823) fueron exclaustrados y volvieron en 1823; la iglesia volvió al culto en 1827. || Los monjes volvieron en 1812 y 1823, y la iglesia reabrió al culto en 1827.",
      "Hoy es la sala principal del museo del CAAC y acoge exposiciones. || Hoy es la sala principal de exposiciones del CAAC."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué emperador visitó el monasterio en 1526 con motivo de su boda con Isabel de Portugal y le regaló su altar portátil?", opciones:["Carlos V","Felipe II","Felipe IV","Alfonso XIII"], correcta:0, pista:"Su hijo fue el rey Felipe II." }
    ]
  },
  "santa-ana": {
    esquemas:["cronologia"],
    ampliado:[
      "Fray Gaspar Gorricio fue amigo, consejero y albacea de la familia Colón; ayudó a Colón con el «Libro de las profecías», dedicado a los Reyes Católicos. || Gorricio, monje amigo de Colón, le ayudó con su libro de profecías.",
      "1502: Colón propuso fundar un monasterio cartujo en La Española con Gorricio como prior. Los cartujos lo rechazaron. || Colón quiso fundar una cartuja en América y los monjes dijeron que no.",
      "Colón murió en Valladolid el 20 de mayo de 1506. Sus restos se entregaron a la Cartuja el 11 de abril de 1509. Antes de esta capilla estuvieron en la bóveda de los Henríquez. || Colón murió en 1506 y sus restos llegaron a la Cartuja en 1509.",
      "Diego Colón (hijo) murió el 24 de febrero de 1526 y fue enterrado aquí; Luis Colón fue el último Colón enterrado en la capilla. Los traslados a Santo Domingo se sitúan entre 1537 y comienzos del XVII según las fuentes. || Su hijo Diego y su nieto Luis también están enterrados aquí, hasta su traslado a Santo Domingo.",
      "Los restos que hoy están en la Catedral de Sevilla (llegados en 1899) se han estudiado con ADN: estudios publicados en 2006 apuntan a que corresponden a Colón, aunque Santo Domingo también conserva un enterramiento atribuido a él. Cuéntalo como debate abierto. || El ADN apunta a que los restos de la Catedral son de Colón, pero es un debate abierto.",
      "La capilla mide 13,80 m de largo por 4,84 m de ancho; las yeserías son de 1604. || La capilla es pequeña (13,80 × 4,84 m) y sus yeserías son de 1604.",
      "La Expo 92 se celebró en esta isla en parte por este vínculo con Colón (500 años del Descubrimiento). || La Expo 92 eligió esta isla en parte por el vínculo de Colón con la Cartuja."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿En qué ciudad murió Cristóbal Colón en 1506?", opciones:["Sevilla","Génova","Valladolid","Santo Domingo"], correcta:2, pista:"Es una ciudad de Castilla y León que hoy tiene un museo sobre Colón." }
    ]
  },
  "refectorio": {
    esquemas:["cadena-loza"],
    ampliado:[
      "El artesonado es de pino de Flandes (1587, Diego Cerezo y Lucas de Cárdenas); en 1588 se amplió la sala y se añadieron paneles cerámicos. || El techo es de pino de Flandes (1587) y la sala se amplió en 1588 con paneles cerámicos.",
      "Zurbarán pintó «San Hugo en el refectorio de los cartujos» (hacia 1655); hoy está en el Museo de Bellas Artes de Sevilla. || Zurbarán pintó aquí a San Hugo comiendo con los cartujos; el cuadro está hoy en el Bellas Artes.",
      "La dieta cartuja era muy austera: no comían carne nunca (por eso la «cocina de la carne» del Conjunto de Afuera era para los pobres y visitantes). || Los cartujos jamás comían carne; la cocina de carne era para pobres y visitantes.",
      "Con la fábrica fue la «sala bizcochera»: se almacenaba el bizcocho (loza cocida una vez, sin esmaltar). || Con la fábrica se usó para guardar la loza cocida una vez, sin esmaltar.",
      "Debajo estuvo la bodega; las cocinas del monasterio son hoy la biblioteca del CAAC. || Debajo estuvo la bodega, y las cocinas son hoy la biblioteca del CAAC."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Quién pintó «San Hugo en el refectorio de los cartujos», hoy en el Museo de Bellas Artes de Sevilla?", opciones:["Murillo","Zurbarán","Velázquez","Goya"], correcta:1, pista:"Pintó monjes con hábitos blancos muy realistas; era de Extremadura." }
    ]
  },
  "magdalena": {
    esquemas:["cadena-loza"],
    ampliado:[
      "Retablo donado en 1467 por el rey Alfonso V de Portugal. Restaurada en 1709-1710. El retablo lleva una estatua de Pedro Duque Cornejo (1751). || El rey de Portugal regaló el retablo en 1467 y Duque Cornejo hizo la estatua en 1751.",
      "Es la primera iglesia del monasterio: cuando se terminó la iglesia grande (1419-1420) pasó a ser sala de reuniones. || Fue la primera iglesia del monasterio, hasta que se terminó la grande.",
      "En la fábrica: taller de decoración. Allí se pintaban y estampaban los diseños (grabados de cobre: paisajes románticos, escenas orientales, caza) antes de la segunda cocción. || En la fábrica era el taller donde se dibujaban los diseños de la loza.",
      "Criterio de restauración de 1992: lo antiguo se deja visible (huellas de bóvedas) y lo nuevo se distingue (azulejos en marcos separados). || En 1992 se dejó visible lo antiguo y se distinguió lo nuevo."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué rey de Portugal donó en 1467 un retablo a la Capilla de la Magdalena?", opciones:["Manuel I","Alfonso V","Juan II","Sebastián I"], correcta:1, pista:"Su reino está junto a España, al oeste." }
    ]
  },
  "claustrillo": {
    esquemas:["padres-legos"],
    ampliado:[
      "Per Afán de Ribera «el Viejo» (c. 1338-1423) fue Adelantado Mayor de Andalucía desde 1396. Enterrado en la iglesia (1420), su familia fue sepultada aquí durante generaciones. || Per Afán fue gobernador de Andalucía y su familia está enterrada aquí desde hace siglos.",
      "Lauda de Per Afán de Ribera y Portocarrero (Juan Bautista Vázquez el Viejo y Bartolomé Morel, 1573) y estatuas orantes de Juana de Zúñiga y Catalina Cortés (Diego de Pesquera, 1575). || Hay una lápida de 1573 y dos estatuas orantes de damas de la familia, de 1575.",
      "Había tres claustros: el Claustrillo (padres, zonas comunes), el Claustrón (celdas) y el Claustro de Legos (trabajo). Del claustro de San Miguel ya no queda nada; daba acceso a la capilla de San Bruno (1441). || Había tres claustros: padres, celdas y legos; el cuarto, San Miguel, ha desaparecido.",
      "Materiales mudéjares: ladrillo, madera, teja, mármol, azulejo. Idea: ladrillo y azulejo salen del barro; por eso la loza llegó a esta isla. || Ladrillo, madera, teja y azulejo: el barro explica por qué la loza nació en esta isla."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué cargo tuvo Per Afán de Ribera «el Viejo» desde 1396, cuya familia está enterrada en el monasterio?", opciones:["Almirante de Castilla","Adelantado Mayor de Andalucía","Asistente de Sevilla","Gran Maestre de Santiago"], correcta:1, pista:"Era un cargo de gobierno de la frontera sur del reino." }
    ]
  },
  "sala-capitular": {
    esquemas:["padres-legos"],
    ampliado:[
      "Los sepulcros renacentistas de Pedro Enríquez y Catalina de Ribera se atribuyen a escultores genoveses (Antonio María Aprile da Carona y Pace Gazzini, 1525 y 1531). || Los sepulcros de los Enríquez de Ribera son renacentistas y de escultores genoveses.",
      "Fadrique Enríquez de Ribera (1476-1539), hijo de Pedro y Catalina, fue el primer marqués de Tarifa y fundador de la Casa de Pilatos de Sevilla, a la vuelta de su peregrinación a Jerusalén (1518-1520). || Su hijo Fadrique fundó la Casa de Pilatos al volver de Jerusalén.",
      "Zócalo de azulejos de 1607. Sigue siendo el único espacio sacralizado: misas en memoria de los Medinaceli. || Es el único espacio todavía sagrado: se celebran misas por los Medinaceli.",
      "En el capítulo, los monjes confesaban faltas ante la comunidad y se tomaban decisiones; era el único lugar donde podían hablar. || Aquí los monjes confesaban sus faltas y decidían juntos; era el único lugar donde hablaban."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué famoso palacio sevillano fundó Fadrique Enríquez de Ribera, hijo de los enterrados en esta sala?", opciones:["Palacio de las Dueñas","Casa de Pilatos","Palacio de San Telmo","Alcázar de Sevilla"], correcta:1, pista:"Su nombre recuerda al gobernador romano que juzgó a Jesús." }
    ]
  },
  "profundis-sacristia": {
    esquemas:[],
    ampliado:[
      "«De profundis»: palabras iniciales del salmo 130 («Desde lo hondo, a ti grito, Señor»), que se reza por los difuntos. || «De profundis» significa «desde lo hondo»: el salmo que se reza por los difuntos.",
      "San Bruno (h. 1030-1101) fundó en 1084 la Gran Cartuja, en los Alpes (cerca de Grenoble). Sus compañeros se retiraron al silencio. De ahí «cartuja» = Chartreuse. || San Bruno fundó la orden en 1084 en los Alpes, de Chartreuse viene «cartuja».",
      "La sacristía (1537) guardaba orfebrería y relicarios que se perdieron en la ocupación francesa. En 1811 los franceses usaron la sacristía como carnicería. || La sacristía guardaba tesoros que se perdieron con los franceses, que la usaron de carnicería.",
      "Roger van der Weyden: tríptico de San Juan Bautista (h. 1450), regalo de Carlos V en 1526; hoy en la Gemäldegalerie de Berlín. || Un tríptico de Van der Weyden regalado por Carlos V está hoy en Berlín.",
      "Zurbarán pintó para la Cartuja una serie con escenas de la orden (hoy en el Museo de Bellas Artes de Sevilla). || Zurbarán pintó para la Cartuja una serie sobre la vida de la orden."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n«De profundis» son las primeras palabras de un salmo que se reza por los difuntos. ¿De qué salmo se trata?", opciones:["Salmo 23","Salmo 51","Salmo 130","Salmo 150"], correcta:2, pista:"Es un número entre 100 y 150 y múltiplo de 10." }
    ]
  },
  "claustron": {
    esquemas:["cadena-loza","tres-vidas"],
    ampliado:[
      "Cronología de Pickman: llega a Sevilla un comerciante inglés (Charles/Carlos Pickman, 1808-1883); compra el monasterio hacia 1838-1840; la fábrica empieza a producir en 1841. En 1879 compra también las huertas Grande, Vieja y del Compás. || Pickman, un inglés, compró el monasterio y la fábrica empezó a producir en 1841.",
      "1856-1888: premios en exposiciones internacionales (París 1856, Londres 1862, Oporto 1865, Viena 1872, Filadelfia 1876, Barcelona 1888…). 1871: proveedora de la Casa Real. 1873: Amadeo I le concede el título de marqués de Pickman. || Ganó premios en ferias internacionales y fue proveedora de la Casa Real y marquesado en 1873.",
      "Hornos de botella: cocían en dos alturas; en la década de 1950 se sustituyeron por hornos túnel. Se conservan cinco hornos y una gran chimenea. || Los hornos de botella se cambiaron por hornos túnel en los años 50; aún quedan cinco y la chimenea.",
      "Antes: en 1811 el mariscal Soult convirtió el convento en cuartel de artillería (doble foso, puente levadizo, baluartes). El 19 de febrero de 1836 llegó la desamortización de Mendizábal. || Antes, Soult lo convirtió en cuartel en 1811 y en 1836 llegó la desamortización.",
      "Cierre: en 1982 el Ministerio de Obras Públicas expropia el conjunto y la fábrica se traslada a Salteras (algunas fuentes dicen que se produjo hasta 1984). || La fábrica se cerró y expropió en 1982, y se trasladó a Salteras.",
      "Colección Pickman: unas 15.000 piezas de los siglos XIX y XX en el Museo de la Fábrica (Salteras), visitable con cita previa. || Una colección de 15.000 piezas se conserva en el Museo de Salteras.",
      "Rehabilitación: José Ramón Sierra dirigió la recuperación monumental (1986-1992). Guillermo Vázquez Consuegra reformó parte de la fábrica para el Instituto Andaluz del Patrimonio Histórico (1988-1995). || Sierra restauró los monumentos y Vázquez Consuegra reformó la fábrica entre 1986 y 1995.",
      "La silueta de los hornos es el símbolo de la Cartuja: quedó incluso en el diseño de chimeneas del pabellón de la UE en la Expo 92. || Los hornos son el símbolo de la Cartuja, hasta en la Expo."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿En qué año empezó a funcionar la fábrica de loza de Pickman en el monasterio?", opciones:["1810","1841","1873","1892"], correcta:1, pista:"Es un año de la primera mitad del siglo XIX." },
      { q:E_ESTUDIO+"\nLa reconstrucción del Claustrón (1986-1992) se inspiró en la pintura metafísica de un artista italiano. ¿Cuál?", opciones:["Giorgio de Chirico","Caravaggio","Modigliani","Botticelli"], correcta:0, pista:"Hizo pintura metafísica: plazas vacías y sombras largas. Se apellida «De …»." }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Claustrillo mudéjar","Claustrón, con los hornos de la fábrica","Atrio de la iglesia","Capilla de Afuera","Casa del Prior"], correcta:1 }
    ]
  },
  "memorial-agua": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Riadas que afectaron al monasterio: 1485, 1595, 1603, 1626 y 1784; además el terremoto de Lisboa (1755). || Las riadas de cinco siglos y el terremoto de 1755 golpearon el monasterio.",
      "La Expo 92 conmemoró los 500 años del Descubrimiento de América; la isla de la Cartuja se eligió en parte por el vínculo de Colón con el monasterio. || La Expo conmemoró los 500 años del Descubrimiento y se hizo aquí por Colón.",
      "El monasterio fue el Pabellón Real de la Expo. El director del conjunto monumental fue Bartolomé Ruiz González (1989-1994). || El monasterio fue el Pabellón Real de la Expo.",
      "El CAAC se creó en febrero de 1990 y desde 1997 tiene su sede en la Cartuja. Es un organismo autónomo de la Junta de Andalucía. || El CAAC nació en 1990 y se instaló en la Cartuja en 1997.",
      "Hilo del río: barro (ladrillo y loza), puerto (Colón), transporte (Puerta del Río) y crecidas (este memorial). || El río une la historia: da barro, puerto, transporte e inundaciones."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué se conmemoraba con la Exposición Universal de Sevilla de 1992, celebrada en esta isla?", opciones:["Los 500 años del Descubrimiento de América","Los 100 años de la Torre Eiffel","El Tratado de Tordesillas","La Constitución de 1812"], correcta:0, pista:"Fue en 1992, y tiene relación con 1492." }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Memorial del Agua","Memorial a Pickman","Memorial de la Arqueología","Fuente del Prior","Estanque del atrio"], correcta:0 }
    ]
  },
  "ombu": {
    esquemas:[],
    ampliado:[
      "Hernando Colón (Córdoba 1488 - Sevilla 1539), hijo del almirante y gran bibliófilo, reunió la Biblioteca Colombina (unos 15.000 volúmenes en su época), que se conserva en la Catedral de Sevilla. || Hernando Colón, hijo del almirante, reunió una biblioteca enorme que hoy está en la Catedral.",
      "El monumento a Colón de 1887 lo mandó colocar María Josefa Pickman, viuda del fundador de la fábrica. || Un monumento a Colón de 1887 lo colocó la viuda de Pickman.",
      "El ombú (Phytolacca dioica) no hace madera propiamente dicha: su tronco es fibroso y acumula agua, por eso aguanta la sequía. || El ombú no tiene madera: su tronco es blando y guarda agua para resistir la sequía.",
      "Juega con la comparación: tronco de un árbol típico (anillos, corteza dura) frente al ombú (sin anillos, blando). || Compara el ombú con un árbol normal: sin anillos y blando."
    ],
    estudio:[
      { q:E_ESTUDIO+"\nLa Biblioteca Colombina, formada por Hernando Colón, el hijo de Cristóbal, se conserva hoy en…", opciones:["La Catedral de Sevilla","El Alcázar de Sevilla","La Cartuja de Sevilla","La Biblioteca Nacional (Madrid)"], correcta:0, pista:"Está en la Catedral, junto a la Giralda." }
    ]
  },
  "arco-legos": {
    esquemas:["padres-legos","cronologia"],
    ampliado:[
      "El monasterio es Monumento Nacional / BIC desde 1964. Es uno de los cuatro monasterios cartujos de Andalucía. || Es monumento protegido desde 1964 y una de las cuatro cartujas andaluzas.",
      "El Claustro de Legos (s. XV) fue en parte derribado para la fábrica; el claustro de San Miguel ya no existe. || El claustro de legos se derribó en parte para hacer la fábrica.",
      "El CAAC organizó tres ediciones de la Bienal Internacional de Arte Contemporáneo de Sevilla (BIACS): 2004, 2006 y 2008. || El CAAC organizó tres bienales de arte contemporáneo: 2004, 2006 y 2008.",
      "Artistas de la colección: Luis Gordillo, Candida Höfer, Rebecca Horn, Pablo Palazuelo, Joseph Kosuth, Louise Bourgeois… || En la colección hay artistas como Gordillo, Höfer, Horn y Kosuth.",
      "Cierre para el alumnado: «tres vidas»: monasterio (1400), fábrica (1841-1982), CAAC (1997). Cada uno cuenta el dato que más le ha sorprendido. || Cierre: tres vidas, monasterio, fábrica y museo; cada alumno cuenta el dato que más le sorprendió."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿En qué año se instaló el Centro Andaluz de Arte Contemporáneo (CAAC) como museo en el monasterio?", opciones:["1982","1992","1997","2004"], correcta:2, pista:"Fue en la década de 1990, después de la Expo." }
    ]
  }
};

// ---- fusión con data.js ----
(function(){
  (window.PARADAS||[]).forEach(s=>{
    const e=(window.EXTRAS||{})[s.id]; if(!e) return;
    s.ampliado=e.ampliado||[]; s.esquemas=e.esquemas||[]; s.sorpresa=e.sorpresa||[];
    (e.estudio||[]).forEach(q=>s.preguntas.push(Object.assign({estudio:true},q,{q:q.q.replace(E_ESTUDIO+"\n","")})));
  });
  // todas las preguntas lanzables de una parada: las normales (incluidas las de estudio) y, a continuación, las sorpresa
  window.qAll = s => s.preguntas.concat(s.sorpresa||[]);
  window.esquema = id => (window.ESQUEMAS||[]).find(x=>x.id===id);
})();

// ---- pistas para preguntas difíciles de data.js (restan puntos si se usan) ----
window.PISTAS = {
  "puerta-tierra#1":"Era arquitecto de Sevilla y su apellido empieza por F.",
  "casa-prior#3":"Uno de ellos nació en el siglo XIX: mucho después del Siglo de Oro.",
  "iglesia#3":"Su apellido es el de la familia que luego se enterró en la iglesia; empieza por R.",
  "santa-ana#0":"Fue después de su muerte (1506) y antes de que se lo llevaran a Santo Domingo.",
  "santa-ana#2":"Está en Sevilla, en el edificio religioso más grande de la ciudad.",
  "refectorio#1":"El techo es de finales del siglo XVI.",
  "refectorio#3":"El pintor se llamaba Alonso y su apellido empieza por V.",
  "claustrillo#2":"Es un palacio nazarí de otra ciudad andaluza.",
  "sala-capitular#2":"En el escudo aparecen cinco heridas de Cristo.",
  "profundis-sacristia#2":"Pintaba monjes y santos con mucho claroscuro; nació en Fuente de Cantos (Badajoz).",
  "profundis-sacristia#4":"Era emperador y rey de España en el siglo XVI.",
  "claustron#1":"Son más de tres y menos de seis.",
  "claustron#4":"La loza se cuece dos veces: el vidriado va entre las dos cocciones.",
  "claustron#5":"Tiene que ver con los reyes.",
  "memorial-agua#2":"Son más de dos y menos de cuatro.",
  "memorial-agua#4":"Piensa en qué cosa no depende del río.",
  "ombu#2":"Está al otro lado del Atlántico, en el cono sur de América.",
  "ombu#4":"Su marido había fundado la fábrica.",
  "arco-legos#2":"Dos ya los has visto: el del atrio y el del agua."
};
(window.PARADAS||[]).forEach(s=>s.preguntas.forEach((q,i)=>{ const p=window.PISTAS[s.id+"#"+i]; if(p&&!q.pista) q.pista=p; }));

// ---- orden aleatorio de las opciones (igual en el profesor y en todos los móviles: semilla = pregunta + momento del lanzamiento) ----
window.perm = function(n, seedStr){
  let h=1779033703^String(seedStr).length;
  for(let i=0;i<String(seedStr).length;i++){ h=Math.imul(h^String(seedStr).charCodeAt(i),3432918353); h=h<<13|h>>>19; }
  let a=h>>>0; const rnd=()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; };
  const o=Array.from({length:n},(_,i)=>i);
  for(let i=n-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [o[i],o[j]]=[o[j],o[i]]; }
  return o;
};
// «texto || palabras clave» -> {t, k}
window.splitAmp = x => { const i=String(x).lastIndexOf(" || "); return i<0?{t:x,k:""}:{t:x.slice(0,i),k:x.slice(i+4)}; };
