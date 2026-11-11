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
window.EXTRAS = {
  "puerta-tierra": {
    esquemas:["cronologia","tres-vidas"],
    ampliado:[
      "Antes del monasterio: los almohades usaban la zona para hornos de alfarería (barro del río y cuevas excavadas para sacar arcilla). Leyenda: en 1248 se halló en una cueva una imagen de la Virgen y se construyó la ermita de Santa María de las Cuevas.",
      "A finales del s. XIV el arzobispo Gonzalo de Mena y Roelas dio la ermita a los franciscanos. Conoció a los cartujos de El Paular (Madrid) y se decidió a fundar una cartuja: la Orden autorizó la fundación en 1398.",
      "1400: llegan de El Paular cinco monjes y un lego (Juan Carrillo, Juan Fernández Gallego, Juan de Orduña, Toribio de Madrigal y el lego Juan de Soria). 1401: toman posesión de la ermita; ese mismo año muere el arzobispo.",
      "1404: el papa Benedicto XIII (el «Papa Luna») aprueba la fundación y dona 5.000 doblas de oro y ornamentos.",
      "1494: el viajero alemán Hieronymus Münzer escribe que es la segunda cartuja más rica de la Cristiandad, después de la de Pavía.",
      "La portada principal que vemos la hizo Ambrosio de Figueroa (1766), en la tapia oeste del recinto. Hay otras dos puertas: la de Cadenas (Ave María) y la del Río.",
      "Bien de Interés Cultural desde 1964. Es uno de los cuatro monasterios cartujos de Andalucía (los otros: Jerez, Granada y Cazalla).",
      "Pregunta de calentamiento: ¿por qué esta zona se llama «isla de la Cartuja»? Porque queda entre dos brazos del Guadalquivir."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿De qué monasterio llegaron en el año 1400 los primeros cartujos a Sevilla?", opciones:["Miraflores (Burgos)","El Paular (Madrid)","Scala Dei (Tarragona)","Montserrat (Barcelona)"], correcta:1 }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Puerta del Río","Puerta de Tierra (entrada principal)","Puerta de Cadenas (Ave María)","Arco de Legos","Puerta de la Fama"], correcta:1 }
    ]
  },
  "capilla-afuera": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Daños: terremoto de Lisboa (1755), riada de 1757 y un temporal en 1759. Ambrosio de Figueroa la reconstruye y la termina en 1766. El retablo mayor, de Francisco de Acosta (hacia 1780), sigue en su sitio.",
      "La ermita anterior era la de Santa María de las Cuevas, que antes de los cartujos estuvo en manos de los franciscanos.",
      "Los cartujos tenían dos hospederías: una exterior (junto a la huerta Chica) y otra interior, cerca de la biblioteca, para visitantes de calidad.",
      "Durante la Expo 92 fue parte del Pabellón Real, donde se recibía a jefes de Estado y de Gobierno.",
      "Las riadas fueron una amenaza constante: 1485, 1595, 1603, 1626 y 1784 afectaron al monasterio. Se retomará en el Memorial del Agua."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué orden religiosa tuvo la ermita de Santa María de las Cuevas antes de que llegaran los cartujos?", opciones:["Dominicos","Franciscanos","Jerónimos","Benedictinos"], correcta:1 }
    ]
  },
  "conjunto-afuera": {
    esquemas:["padres-legos"],
    ampliado:[
      "Portada del Ave María o de las Cadenas: de principios del s. XV, con dos escudos de Gonzalo de Mena (un capelo cardenalicio y cinco soles de oro sobre fondo azul).",
      "Hospedería interior: allí se alojaron Felipe II y, entre otros, los pintores Zurbarán y Francisco Pacheco y el escultor Pedro Duque Cornejo, que trabajaron para el monasterio.",
      "Hoy conviven aquí el CAAC y el rectorado de la Universidad Internacional de Andalucía (UNIA), desde 1997.",
      "Cristina Lucas (Jaén, 1973): su obra habla de las mujeres encerradas en casa; Alicia no cabe en la habitación y se asoma por la ventana.",
      "Curro González (Sevilla, 1960): el hombre-orquesta cargado de instrumentos persigue el éxito frente a la Puerta de la Fama. Si cruzáis la puerta, suena una fanfarria y una cámara os graba.",
      "Curiosidad: el pabellón de la Unión Europea de la Expo 92 tenía chimeneas inspiradas en las de la fábrica de la Cartuja."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué universidad tiene hoy su rectorado en el antiguo monasterio?", opciones:["Universidad de Sevilla","Universidad Pablo de Olavide","Universidad Internacional de Andalucía","Universidad Loyola"], correcta:2 }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Conjunto de Afuera (zona semipública)","Claustrón","Sala Capitular","Refectorio","Claustrillo mudéjar"], correcta:0 }
    ]
  },
  "atrio": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Per Afán de Ribera «el Viejo» (c. 1338-1423), I Adelantado Mayor de Andalucía, costeó la iglesia a cambio de que su familia fuera enterrada en ella.",
      "1404: Benedicto XIII aprueba la fundación; 1407: el infante Fernando de Antequera se queda con 30.000 doblas que había dejado el arzobispo para la Reconquista (por eso el dinero llegó tarde).",
      "La fachada de la iglesia es abocinada (se va abriendo hacia fuera), con decoración gótica, mudéjar y plateresca. El zócalo de azulejos del siglo XVI se desmontó a finales del s. XX para protegerlo.",
      "José Ramón Sierra (Olivares, 1945) dirigió la rehabilitación de la zona monumental y creó los tres memoriales: Arqueología (aquí), Agua y Pickman.",
      "Cruz de los Ladrones: humilladero (lugar de rezo) en el camino entre Triana y la Cartuja."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué papa aprobó la fundación del monasterio en 1404 y donó 5.000 doblas de oro?", opciones:["Benedicto XIII (el Papa Luna)","Julio II","Urbano II","Pío IX"], correcta:0 }
    ]
  },
  "casa-prior": {
    esquemas:["padres-legos"],
    ampliado:[
      "Visitantes ilustres: Carlos V (1526, con motivo de su boda con Isabel de Portugal), Felipe II (tres días en mayo de 1570), Felipe IV (4 de marzo de 1642).",
      "Santa Teresa de Jesús visitó el monasterio varias veces en 1575-1576. Por petición suya se construyó una capilla a Santa Ana en la Huerta Grande. Regaló dos relicarios que hoy se conservan en el convento de San José (carmelitas, Sevilla).",
      "Benito Arias Montano (humanista, 1527-1598) hacía retiros espirituales aquí y legó su biblioteca.",
      "Tras la desamortización (1836) el monasterio se usó como prisión, con unos 200 reclusos, que luego se trasladaron al convento de la Trinidad.",
      "La orden cartuja: silencio, soledad y austeridad. Su lema: «Stat Crux dum volvitur orbis» (la Cruz permanece mientras el mundo gira)."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué santa visitó la Cartuja en 1575-1576 y pidió que se construyera una capilla a Santa Ana en la huerta?", opciones:["Santa Teresa de Jesús (de Ávila)","Santa Clara","Santa Rita","Santa Catalina de Siena"], correcta:0 }
    ]
  },
  "iglesia": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Fachada abocinada gótica con decoración mudéjar y plateresca. Nave única con bóveda de crucería y bóveda de abanico en el presbiterio. Las yeserías se añadieron entre 1613 y 1614.",
      "1526: Carlos V visita el monasterio con motivo de su boda con Isabel de Portugal y regala su altar portátil. (Algunas fuentes datan la ampliación de la iglesia en 1523 y otras en 1526.)",
      "Obras que estuvieron aquí y hoy están fuera: el Cristo de la Clemencia de Martínez Montañés (1603, Catedral de Sevilla), cuadros de Zurbarán (Visita de san Bruno al papa Urbano II, Virgen de los cartujos…) y de Velázquez (hoy en museos).",
      "Durante la ocupación francesa (1810-1812) la iglesia fue almacén; los franceses vaciaron el monasterio de contenido religioso.",
      "Los cartujos regresan el 30 de septiembre de 1812; en el Trienio Liberal (1820-1823) fueron exclaustrados y volvieron en 1823; la iglesia volvió al culto en 1827.",
      "Hoy es la sala principal del museo del CAAC y acoge exposiciones."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué emperador visitó el monasterio en 1526 con motivo de su boda con Isabel de Portugal y le regaló su altar portátil?", opciones:["Carlos V","Felipe II","Felipe IV","Alfonso XIII"], correcta:0 }
    ]
  },
  "santa-ana": {
    esquemas:["cronologia"],
    ampliado:[
      "Fray Gaspar Gorricio fue amigo, consejero y albacea de la familia Colón; ayudó a Colón con el «Libro de las profecías», dedicado a los Reyes Católicos.",
      "1502: Colón propuso fundar un monasterio cartujo en La Española con Gorricio como prior. Los cartujos lo rechazaron.",
      "Colón murió en Valladolid el 20 de mayo de 1506. Sus restos se entregaron a la Cartuja el 11 de abril de 1509. Antes de esta capilla estuvieron en la bóveda de los Henríquez.",
      "Diego Colón (hijo) murió el 24 de febrero de 1526 y fue enterrado aquí; Luis Colón fue el último Colón enterrado en la capilla. Los traslados a Santo Domingo se sitúan entre 1537 y comienzos del XVII según las fuentes.",
      "Los restos que hoy están en la Catedral de Sevilla (llegados en 1899) se han estudiado con ADN: estudios publicados en 2006 apuntan a que corresponden a Colón, aunque Santo Domingo también conserva un enterramiento atribuido a él. Cuéntalo como debate abierto.",
      "La capilla mide 13,80 m de largo por 4,84 m de ancho; las yeserías son de 1604.",
      "La Expo 92 se celebró en esta isla en parte por este vínculo con Colón (500 años del Descubrimiento)."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿En qué ciudad murió Cristóbal Colón en 1506?", opciones:["Sevilla","Génova","Valladolid","Santo Domingo"], correcta:2 }
    ]
  },
  "refectorio": {
    esquemas:["cadena-loza"],
    ampliado:[
      "El artesonado es de pino de Flandes (1587, Diego Cerezo y Lucas de Cárdenas); en 1588 se amplió la sala y se añadieron paneles cerámicos.",
      "Zurbarán pintó «San Hugo en el refectorio de los cartujos» (hacia 1655); hoy está en el Museo de Bellas Artes de Sevilla.",
      "La dieta cartuja era muy austera: no comían carne nunca (por eso la «cocina de la carne» del Conjunto de Afuera era para los pobres y visitantes).",
      "Con la fábrica fue la «sala bizcochera»: se almacenaba el bizcocho (loza cocida una vez, sin esmaltar).",
      "Debajo estuvo la bodega; las cocinas del monasterio son hoy la biblioteca del CAAC."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Quién pintó «San Hugo en el refectorio de los cartujos», hoy en el Museo de Bellas Artes de Sevilla?", opciones:["Murillo","Zurbarán","Velázquez","Goya"], correcta:1 }
    ]
  },
  "magdalena": {
    esquemas:["cadena-loza"],
    ampliado:[
      "Retablo donado en 1467 por el rey Alfonso V de Portugal. Restaurada en 1709-1710. El retablo lleva una estatua de Pedro Duque Cornejo (1751).",
      "Es la primera iglesia del monasterio: cuando se terminó la iglesia grande (1419-1420) pasó a ser sala de reuniones.",
      "En la fábrica: taller de decoración. Allí se pintaban y estampaban los diseños (grabados de cobre: paisajes románticos, escenas orientales, caza) antes de la segunda cocción.",
      "Criterio de restauración de 1992: lo antiguo se deja visible (huellas de bóvedas) y lo nuevo se distingue (azulejos en marcos separados)."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué rey de Portugal donó en 1467 un retablo a la Capilla de la Magdalena?", opciones:["Manuel I","Alfonso V","Juan II","Sebastián I"], correcta:1 }
    ]
  },
  "claustrillo": {
    esquemas:["padres-legos"],
    ampliado:[
      "Per Afán de Ribera «el Viejo» (c. 1338-1423) fue Adelantado Mayor de Andalucía desde 1396. Enterrado en la iglesia (1420), su familia fue sepultada aquí durante generaciones.",
      "Lauda de Per Afán de Ribera y Portocarrero (Juan Bautista Vázquez el Viejo y Bartolomé Morel, 1573) y estatuas orantes de Juana de Zúñiga y Catalina Cortés (Diego de Pesquera, 1575).",
      "Había tres claustros: el Claustrillo (padres, zonas comunes), el Claustrón (celdas) y el Claustro de Legos (trabajo). Del claustro de San Miguel ya no queda nada; daba acceso a la capilla de San Bruno (1441).",
      "Materiales mudéjares: ladrillo, madera, teja, mármol, azulejo. Idea: ladrillo y azulejo salen del barro; por eso la loza llegó a esta isla."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué cargo tuvo Per Afán de Ribera «el Viejo» desde 1396, cuya familia está enterrada en el monasterio?", opciones:["Almirante de Castilla","Adelantado Mayor de Andalucía","Asistente de Sevilla","Gran Maestre de Santiago"], correcta:1 }
    ]
  },
  "sala-capitular": {
    esquemas:["padres-legos"],
    ampliado:[
      "Los sepulcros renacentistas de Pedro Enríquez y Catalina de Ribera se atribuyen a escultores genoveses (Antonio María Aprile da Carona y Pace Gazzini, 1525 y 1531).",
      "Fadrique Enríquez de Ribera (1476-1539), hijo de Pedro y Catalina, fue el primer marqués de Tarifa y fundador de la Casa de Pilatos de Sevilla, a la vuelta de su peregrinación a Jerusalén (1518-1520).",
      "Zócalo de azulejos de 1607. Sigue siendo el único espacio sacralizado: misas en memoria de los Medinaceli.",
      "En el capítulo, los monjes confesaban faltas ante la comunidad y se tomaban decisiones; era el único lugar donde podían hablar."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué famoso palacio sevillano fundó Fadrique Enríquez de Ribera, hijo de los enterrados en esta sala?", opciones:["Palacio de las Dueñas","Casa de Pilatos","Palacio de San Telmo","Alcázar de Sevilla"], correcta:1 }
    ]
  },
  "profundis-sacristia": {
    esquemas:[],
    ampliado:[
      "«De profundis»: palabras iniciales del salmo 130 («Desde lo hondo, a ti grito, Señor»), que se reza por los difuntos.",
      "San Bruno (h. 1030-1101) fundó en 1084 la Gran Cartuja, en los Alpes (cerca de Grenoble). Sus compañeros se retiraron al silencio. De ahí «cartuja» = Chartreuse.",
      "La sacristía (1537) guardaba orfebrería y relicarios que se perdieron en la ocupación francesa. En 1811 los franceses usaron la sacristía como carnicería.",
      "Roger van der Weyden: tríptico de San Juan Bautista (h. 1450), regalo de Carlos V en 1526; hoy en la Gemäldegalerie de Berlín.",
      "Zurbarán pintó para la Cartuja una serie con escenas de la orden (hoy en el Museo de Bellas Artes de Sevilla)."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n«De profundis» son las primeras palabras de un salmo que se reza por los difuntos. ¿De qué salmo se trata?", opciones:["Salmo 23","Salmo 51","Salmo 130","Salmo 150"], correcta:2 }
    ]
  },
  "claustron": {
    esquemas:["cadena-loza","tres-vidas"],
    ampliado:[
      "Cronología de Pickman: llega a Sevilla un comerciante inglés (Charles/Carlos Pickman, 1808-1883); compra el monasterio hacia 1838-1840; la fábrica empieza a producir en 1841. En 1879 compra también las huertas Grande, Vieja y del Compás.",
      "1856-1888: premios en exposiciones internacionales (París 1856, Londres 1862, Oporto 1865, Viena 1872, Filadelfia 1876, Barcelona 1888…). 1871: proveedora de la Casa Real. 1873: Amadeo I le concede el título de marqués de Pickman.",
      "Hornos de botella: cocían en dos alturas; en la década de 1950 se sustituyeron por hornos túnel. Se conservan cinco hornos y una gran chimenea.",
      "Antes: en 1811 el mariscal Soult convirtió el convento en cuartel de artillería (doble foso, puente levadizo, baluartes). El 19 de febrero de 1836 llegó la desamortización de Mendizábal.",
      "Cierre: en 1982 el Ministerio de Obras Públicas expropia el conjunto y la fábrica se traslada a Salteras (algunas fuentes dicen que se produjo hasta 1984).",
      "Colección Pickman: unas 15.000 piezas de los siglos XIX y XX en el Museo de la Fábrica (Salteras), visitable con cita previa.",
      "Rehabilitación: José Ramón Sierra dirigió la recuperación monumental (1986-1992). Guillermo Vázquez Consuegra reformó parte de la fábrica para el Instituto Andaluz del Patrimonio Histórico (1988-1995).",
      "La silueta de los hornos es el símbolo de la Cartuja: quedó incluso en el diseño de chimeneas del pabellón de la UE en la Expo 92."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿En qué año empezó a funcionar la fábrica de loza de Pickman en el monasterio?", opciones:["1810","1841","1873","1892"], correcta:1 },
      { q:E_ESTUDIO+"\nLa reconstrucción del Claustrón (1986-1992) se inspiró en la pintura metafísica de un artista italiano. ¿Cuál?", opciones:["Giorgio de Chirico","Caravaggio","Modigliani","Botticelli"], correcta:0 }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Claustrillo mudéjar","Claustrón, con los hornos de la fábrica","Atrio de la iglesia","Capilla de Afuera","Casa del Prior"], correcta:1 }
    ]
  },
  "memorial-agua": {
    esquemas:["tres-vidas"],
    ampliado:[
      "Riadas que afectaron al monasterio: 1485, 1595, 1603, 1626 y 1784; además el terremoto de Lisboa (1755).",
      "La Expo 92 conmemoró los 500 años del Descubrimiento de América; la isla de la Cartuja se eligió en parte por el vínculo de Colón con el monasterio.",
      "El monasterio fue el Pabellón Real de la Expo. El director del conjunto monumental fue Bartolomé Ruiz González (1989-1994).",
      "El CAAC se creó en febrero de 1990 y desde 1997 tiene su sede en la Cartuja. Es un organismo autónomo de la Junta de Andalucía.",
      "Hilo del río: barro (ladrillo y loza), puerto (Colón), transporte (Puerta del Río) y crecidas (este memorial)."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿Qué se conmemoraba con la Exposición Universal de Sevilla de 1992, celebrada en esta isla?", opciones:["Los 500 años del Descubrimiento de América","Los 100 años de la Torre Eiffel","El Tratado de Tordesillas","La Constitución de 1812"], correcta:0 }
    ],
    sorpresa:[
      { donde:true, q:"📍 ¿Sabes dónde estamos?", opciones:["Memorial del Agua","Memorial a Pickman","Memorial de la Arqueología","Fuente del Prior","Estanque del atrio"], correcta:0 }
    ]
  },
  "ombu": {
    esquemas:[],
    ampliado:[
      "Hernando Colón (Córdoba 1488 - Sevilla 1539), hijo del almirante y gran bibliófilo, reunió la Biblioteca Colombina (unos 15.000 volúmenes en su época), que se conserva en la Catedral de Sevilla.",
      "El monumento a Colón de 1887 lo mandó colocar María Josefa Pickman, viuda del fundador de la fábrica.",
      "El ombú (Phytolacca dioica) no hace madera propiamente dicha: su tronco es fibroso y acumula agua, por eso aguanta la sequía.",
      "Juega con la comparación: tronco de un árbol típico (anillos, corteza dura) frente al ombú (sin anillos, blando)."
    ],
    estudio:[
      { q:E_ESTUDIO+"\nLa Biblioteca Colombina, formada por Hernando Colón, el hijo de Cristóbal, se conserva hoy en…", opciones:["La Catedral de Sevilla","El Alcázar de Sevilla","La Cartuja de Sevilla","La Biblioteca Nacional (Madrid)"], correcta:0 }
    ]
  },
  "arco-legos": {
    esquemas:["padres-legos","cronologia"],
    ampliado:[
      "El monasterio es Monumento Nacional / BIC desde 1964. Es uno de los cuatro monasterios cartujos de Andalucía.",
      "El Claustro de Legos (s. XV) fue en parte derribado para la fábrica; el claustro de San Miguel ya no existe.",
      "El CAAC organizó tres ediciones de la Bienal Internacional de Arte Contemporáneo de Sevilla (BIACS): 2004, 2006 y 2008.",
      "Artistas de la colección: Luis Gordillo, Candida Höfer, Rebecca Horn, Pablo Palazuelo, Joseph Kosuth, Louise Bourgeois…",
      "Cierre para el alumnado: «tres vidas»: monasterio (1400), fábrica (1841-1982), CAAC (1997). Cada uno cuenta el dato que más le ha sorprendido."
    ],
    estudio:[
      { q:E_ESTUDIO+"\n¿En qué año se instaló el Centro Andaluz de Arte Contemporáneo (CAAC) como museo en el monasterio?", opciones:["1982","1992","1997","2004"], correcta:2 }
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
