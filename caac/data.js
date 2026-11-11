// ============================================================
//  DATOS DE LA VISITA
//  - PARADAS: orden, foto, posición en el plano (x,y en %), texto del audio,
//    guion para el profesor y preguntas cerradas.
//  - El campo "audio" es lo que oirá el alumnado. Está escrito a partir de las
//    fichas del archivo del CAAC: SUSTITÚYELO por el texto del Genially si quieres
//    que sea literal.
//  - Fotos: pon tus propias fotos en img/ con el nombre indicado en "foto".
//    Si no existe, se carga "fotoWeb" (archivo histórico del CAAC).
// ============================================================
const W = "https://ws130.juntadeandalucia.es/archivo-caac/img/inf/espacios/";

window.PARADAS = [
  {
    id: "puerta-tierra", nombre: "Puerta de Tierra", plano: "1", x: 35, y: 94,
    foto: "img/puerta-tierra.jpg", fotoWeb: W + "01.jpg",
    audio: "Estamos en la Puerta de Tierra, la entrada principal del monasterio de Santa María de las Cuevas. Esta zona era la parte pública de la Cartuja: aquí estaban el zaguán, las cuadras, la hospedería y el comedor de pobres. En 1755 el terremoto de Lisboa, y después varias riadas, destruyeron estos edificios, y entre 1756 y 1766 el arquitecto Ambrosio de Figueroa los reconstruyó. Fíjate en la portada: está diseñada como un gran arco de triunfo, con dos cuerpos y un pequeño ático, hecha de piedra y ladrillo. Las dos hornacinas, hoy vacías, tuvieron las estatuas de San Hugo y San Bruno, talladas por Pedro Roldán en 1650. Sobre el arco verás una imagen en mármol de Santa María de las Cuevas, del siglo quince, y arriba del todo el escudo de don Gonzalo de Mena, el arzobispo que fundó este monasterio en el año 1400.",
    profesor: [
      "Reunir al grupo. Explicar las tres vidas del edificio: monasterio (1400), fábrica de cerámica (1841) y centro de arte (1997).",
      "Señalar el río: estamos en una isla entre dos brazos del Guadalquivir."
    ],
    preguntas: [
      { q: "Según el audio, ¿qué destruyó esta zona del monasterio en 1755?",
        opciones: ["Un incendio", "El terremoto de Lisboa y las riadas", "Las tropas francesas", "Una explosión en la fábrica"], correcta: 1 },
      { q: "¿Quién reconstruyó estos edificios entre 1756 y 1766?",
        opciones: ["Pedro Roldán", "Gonzalo de Mena", "Ambrosio de Figueroa", "Charles Pickman", "Cristóbal Colón"], correcta: 2 },
      { q: "Las dos hornacinas de la portada están vacías. ¿Qué había en ellas?",
        opciones: ["Dos campanas", "Las estatuas de San Hugo y San Bruno", "Dos jarrones de cerámica", "Dos escudos"], correcta: 1 },
      { q: "La portada está hecha como un arco de triunfo, igual que los de los emperadores romanos. ¿Por qué crees que eligieron esa forma para la entrada de un monasterio?",
        opciones: ["Para que pasaran los carros más grandes", "Para dar sensación de grandeza e importancia al entrar", "Porque era más barato", "Porque lo obligaba el rey"], correcta: 1 }
    ]
  },
  {
    id: "capilla-afuera", nombre: "Capilla de Afuera", plano: "2", x: 42, y: 90,
    foto: "img/capilla-afuera.jpg", fotoWeb: W + "01.jpg",
    audio: "Esta es la Capilla de Afuera, también llamada Capilla Pública o Capilla de las Mujeres. La construyó Ambrosio de Figueroa entre 1756 y 1766, sobre una antigua ermita destruida por el terremoto de Lisboa de 1755 y por las riadas. Era el único lugar del monasterio abierto a todo el mundo, también a las mujeres, porque en el resto de la Cartuja solo podían entrar los monjes. Alrededor de la capilla estaban el comedor de pobres y la llamada cocina del infierno, donde se daba de comer a los necesitados. Todo esto era el Conjunto de Afuera: la parte pública del monasterio. La vida de los monjes quedaba dentro, tras la Puerta de Cadenas. Esta capilla ha tenido muchos usos: polvorín durante la invasión francesa, iglesia y almacén cuando esto era una fábrica de loza, y Pabellón Real en la Expo del 92. Hoy acoge obras de artistas contemporáneos.",
    profesor: [
      "Mostrar la cúpula y la portada tipo arco de triunfo.",
      "Idea clave: «afuera» = fuera de la clausura. Los monjes casi no salían, pero atendían a los necesitados."
    ],
    preguntas: [
      { q: "¿Por qué se llama también «Capilla de las Mujeres»?",
        opciones: ["Porque la construyeron mujeres", "Porque era el único lugar del monasterio donde podían entrar las mujeres", "Porque está dedicada a santas", "Porque las monjas vivían aquí"], correcta: 1 },
      { q: "¿Qué era la «cocina del infierno»?",
        opciones: ["Un horno de cerámica", "La cocina donde se preparaba la comida para los pobres", "Una sala de castigo", "La cocina de los monjes"], correcta: 1 },
      { q: "¿Para qué se usó la capilla durante la Expo del 92?",
        opciones: ["Como almacén", "Como polvorín", "Como Pabellón Real", "Como cafetería", "Como taquilla"], correcta: 2 },
      { q: "Los monjes vivían encerrados, pero esta parte del monasterio estaba abierta a todos. ¿Por qué crees que necesitaban una zona pública?",
        opciones: ["Para cobrar entrada a los visitantes", "Para atender a los pobres y relacionarse con la ciudad sin romper la clausura", "Porque les gustaba el ruido", "Porque los obligaba el rey"], correcta: 1 }
    ]
  },
  {
    id: "conjunto-afuera", nombre: "Conjunto de Afuera: Alicia y el hombre-orquesta", plano: "2", x: 40, y: 84,
    foto: "img/alicia.jpg", fotoWeb: "img/alicia.jpg",
    fotos: ["img/alicia.jpg","img/hombre-orquesta.jpg"],
    audio: "Estamos en el Conjunto de Afuera, la zona semipública del monasterio. Aquí Ambrosio de Figueroa amplió el zaguán para dar cobijo a los pobres que cada día venían a comer. Su comedor se llamaba la cocina de la carne o del infierno, porque en ella se cocinaba carne, un alimento prohibido para los monjes. La Puerta de Cadenas separaba esta zona de la clausura, donde reinaba el silencio. Con la fábrica de Pickman estos edificios se convirtieron en casas de obreros, y para la Expo del 92 se restauraron. Hoy miras dos obras de arte. En la antigua celda del hermano portero, la artista Cristina Lucas instaló en 2009 a Alicia: una figura gigante que ha crecido tanto que saca la cara y el brazo por las ventanas, como en el cuento de Lewis Carroll cuando come el pastel que dice cómeme. La artista habla de las mujeres encerradas en su casa. Y la escultura del hombre-orquesta es de Curro González: un artista cargado de instrumentos frente a la Puerta de la Fama, buscando el éxito. Cuando cruzas esa puerta suena una fanfarria y una cámara te graba: por un momento, el famoso eres tú.",
    profesor: [
      "Conjunto de Afuera = zona semipública (fieles, pobres). Puerta de Cadenas = frontera con la clausura. Entre ambas, el patio del Ave María.",
      "«Cocina de la carne o del infierno»: ahí se cocinaba carne, prohibida en la dieta cartuja. Hoy ese espacio es sede de la Universidad Internacional de Andalucía; el resto, del CAAC.",
      "Con Pickman fueron casas de la fábrica; rehabilitación de Fernando Mendoza y Roberto Luna para el Pabellón Real de la Expo'92.",
      "ALICIA (Cristina Lucas, Jaén 1973; obra de 2009): en la antigua celda del portero. Alicia crece sin control tras comer el pastel «CÓMEME» y no cabe en la habitación. Lectura feminista: la mujer encerrada en su casa como forma de opresión.",
      "HOMBRE-ORQUESTA (Curro González, Sevilla 1960): el artista cargado de instrumentos frente a la «Puerta de la Fama». Al cruzarla suena una fanfarria y una cámara graba al visitante, que se ve en una sala contigua: se intercambian los papeles artista/público. Si se puede, cruzad la puerta."
    ],
    preguntas: [
      { q: "¿Por qué se llamaba «cocina del infierno» al comedor de los pobres?",
        opciones: ["Porque hacía mucho calor", "Porque allí se cocinaba carne, prohibida para los monjes", "Porque estaba en un sótano", "Porque se quemó en un incendio"], correcta: 1 },
      { q: "¿Qué puerta separaba la zona pública de la clausura de los monjes?",
        opciones: ["La Puerta de Tierra", "La Puerta de Cadenas", "La Puerta de la Fama", "El Arco de Legos"], correcta: 1 },
      { q: "¿En qué libro se inspira la escultura de Alicia?",
        opciones: ["Peter Pan", "Alicia en el País de las Maravillas", "El Principito", "Pinocho", "Harry Potter"], correcta: 1 },
      { q: "Alicia saca la cara y el brazo por las ventanas porque no cabe en la habitación. ¿Qué quiere decir la artista con eso?",
        opciones: ["Que la habitación es muy pequeña", "Que las mujeres han vivido encerradas en su casa, sin poder crecer libremente", "Que los monjes eran gigantes", "Que la escultura no cabía en el camión"], correcta: 1 },
      { q: "¿Qué pasa cuando un visitante cruza la «Puerta de la Fama» del hombre-orquesta?",
        opciones: ["Se cierra la puerta", "Suena una fanfarria y una cámara le graba: el visitante se convierte en el famoso", "Se enciende una luz roja", "Hay que pagar entrada"], correcta: 1 },
      { q: "El hombre-orquesta lleva todos los instrumentos encima y busca la fama. ¿Qué crees que quiere decir Curro González sobre los artistas?",
        opciones: ["Que deben saber tocar muchos instrumentos", "Que cargan con mucho esfuerzo para conseguir el éxito, y eso es algo irónico", "Que ganan mucho dinero", "Que solo trabajan en la calle"], correcta: 1 }
    ]
  },
  {
    id: "atrio", nombre: "Atrio", plano: "4", x: 36, y: 56,
    foto: "img/atrio.jpg", fotoWeb: W + "02.jpg",
    audio: "Este patio es el atrio: el cruce entre varios edificios del monasterio. Enfrente tienes la fachada de la iglesia. A la izquierda estaba la celda del prior, el monje que mandaba; cuando esto fue una fábrica, aquí vivió su dueño, Charles Pickman, y después fue el laboratorio de la loza. A la derecha está la Procuración, donde se llevaban las cuentas, que más tarde fue la casa de la familia Pickman. Fíjate en el pequeño estanque y en la Cruz de los Ladrones, del siglo dieciséis, con una Piedad en la base: estaba en el camino entre Triana y la Cartuja y los caminantes se paraban a rezar ante ella. Mira ahora la fachada de la iglesia. La parte de abajo, de piedra, es de 1419; la de arriba, de ladrillo, de 1523. Tiene un rosetón y azulejos de Triana del siglo dieciséis. Por esta puerta entraban los visitantes importantes, como el rey Felipe II; los monjes entraban desde la clausura. Para la Expo del 92 el arquitecto José Ramón Sierra restauró el atrio y colocó el Memorial de la Arqueología: piezas antiguas del edificio ordenadas por fechas, entre ellas escudos de la Casa de Medinaceli.",
    profesor: [
      "Orientar: enfrente iglesia; izquierda celda del prior (ss. XV-XIX) → vivienda de Pickman y laboratorio de la fábrica; derecha Procuración (intendencia) → vivienda familiar de los Pickman. Hubo una hospedería: queda la galería porticada de ladrillo.",
      "Cruz de los Ladrones (s. XVI), con Piedad en la base: fue humilladero en el camino Triana–Cartuja, junto a la entrada principal.",
      "Fachada de la iglesia: uno de los pocos pórticos gótico-mudéjares policromados. Cuerpo inferior en piedra franca (h. 1419), superior en ladrillo (ampliación de 1523). Rosetón y azulejería trianera del s. XVI (talleres de los Pulido o Pedro Herrera).",
      "Por esta puerta entraban legos y visitantes ilustres (Enrique IV, Felipe II); los monjes padres, desde la clausura.",
      "Expo'92: rehabilitación de José Ramón Sierra (1945). Memorial de la Arqueología: piezas originales en orden cronológico. Buscar puntas de diamante, palmetas y escudos de Medinaceli."
    ],

    preguntas: [
      { q: "Cuando el monasterio era una fábrica, ¿quién vivió en la antigua celda del prior?",
        opciones: ["El rey Felipe II", "Charles Pickman, el dueño de la fábrica", "El arquitecto José Ramón Sierra", "Los monjes legos"], correcta: 1 },
      { q: "¿Qué era la Cruz de los Ladrones?",
        opciones: ["Una cruz para castigar a los ladrones", "Un humilladero del camino entre Triana y la Cartuja, donde se paraba a rezar", "La tumba de un ladrón famoso", "Una cruz de la fábrica"], correcta: 1 },
      { q: "La fachada de la iglesia tiene dos partes de épocas distintas. ¿Cuál es la más antigua?",
        opciones: ["La de arriba, de ladrillo (1523)", "La de abajo, de piedra (1419)", "Las dos son del mismo año", "El rosetón"], correcta: 1 },
      { q: "¿Qué es el Memorial de la Arqueología?",
        opciones: ["Un museo de dinosaurios", "Piezas antiguas del propio edificio colocadas en orden cronológico", "Una tumba de los monjes", "Un cuadro de la Expo 92"], correcta: 1 },
      { q: "Los visitantes importantes entraban por esta puerta y los monjes por otra, desde la clausura. ¿Por qué crees que no entraban todos por la misma?",
        opciones: ["Porque la puerta era muy estrecha", "Para que los monjes no se mezclaran con la gente de fuera y mantuvieran el silencio", "Porque los monjes no tenían llave", "Porque los reyes lo prohibían"], correcta: 1 }
    ]
  },
  {
    id: "casa-prior", nombre: "Casa del Prior", plano: "5", x: 31, y: 52,
    foto: "img/casa-prior.jpg", fotoWeb: W + "02.jpg",
    audio: "Esta era la casa del prior, el monje que dirigía el monasterio. Mientras los demás monjes vivían en celdas pequeñas y austeras, el prior tenía una auténtica casa palaciega. Se entraba desde el atrio por un porche con arcos, y dentro había dos plantas alrededor de un patio con una fuente. Abajo estaban el oratorio, la biblioteca y hasta una cárcel para los monjes rebeldes. Arriba vivían el prior, sus criados y los visitantes importantes: aquí durmieron los reyes Enrique IV y Felipe II. También tenía una huerta privada. En esta casa hubo cuadros de Murillo, Velázquez, Alonso Cano y Zurbarán, los grandes pintores del Siglo de Oro. Y una biblioteca famosa, con más de tres mil doscientos libros, muchos de ellos manuscritos con ilustraciones, que atraía a sabios de toda España. Después de que los monjes se fueran, Charles Pickman convirtió esta casa en su vivienda y en los laboratorios de la fábrica de loza.",
    profesor: [
      "Casa palaciega frente a la austeridad de las celdas. Acceso desde el atrio por porche con arcadas de medio punto; dos plantas en torno a un patio porticado con fuente y artesonados con azulejos. Construcción que se cree del s. XVI.",
      "Planta baja: oratorio, biblioteca y cárcel para monjes rebeldes. Planta alta: residencias del prior, servidumbre y visitantes ilustres. Huerta privada con vistas a la huerta mayor.",
      "Obras de Murillo (1617-1682), Velázquez (1599-1660), Alonso Cano (1601-1667) y Zurbarán (1598-1664). Pernoctaron Enrique IV (1425-1474) y Felipe II (1527-1598).",
      "Biblioteca: fondos de Fadrique Enríquez de Ribera, I marqués de Tarifa (1476-1539), del cosmógrafo Jerónimo de Chaves (1523-1574) y del erudito Benito Arias Montano (1527-1598): más de 3.200 volúmenes, incunables y códices iluminados.",
      "Tras la desamortización: residencia particular de Charles Pickman (Londres 1808 - Sevilla 1883) y laboratorios de la fábrica de loza.",
      "VERIFICAR qué se visita hoy de este espacio y si se entra o se ve desde el atrio."
    ],

    preguntas: [
      { q: "¿Quién era el prior?",
        opciones: ["El cocinero del monasterio", "El monje que dirigía el monasterio", "El dueño de la fábrica", "El portero"], correcta: 1 },
      { q: "¿Qué había en la planta baja de la casa del prior, además del oratorio y la biblioteca?",
        opciones: ["Un horno de cerámica", "Una cárcel para monjes rebeldes", "Una piscina", "Un taller de pintura"], correcta: 1 },
      { q: "¿Qué dos reyes durmieron en esta casa?",
        opciones: ["Los Reyes Católicos", "Enrique IV y Felipe II", "Carlos III y Fernando VII", "Alfonso X y Pedro I"], correcta: 1 },
      { q: "¿Cuál de estos pintores NO tuvo obras en la casa del prior?",
        opciones: ["Murillo", "Velázquez", "Zurbarán", "Picasso", "Alonso Cano"], correcta: 3 },
      { q: "Los monjes vivían en celdas pobres y el prior en una casa de palacio con criados. ¿Por qué crees que había esa diferencia?",
        opciones: ["Porque el prior era más rico", "Porque el prior gobernaba el monasterio y recibía a reyes y personajes importantes", "Porque los monjes no querían vivir bien", "Porque la casa era de los Pickman"], correcta: 1 },
      { q: "La biblioteca tenía más de 3.200 libros en el siglo XVI, cuando los libros eran rarísimos. ¿Por qué crees que venían sabios de toda España a verla?",
        opciones: ["Porque los libros eran gratis", "Porque reunía conocimientos de todas las ciencias que no se podían encontrar en otro sitio", "Porque el prior lo obligaba", "Porque estaba cerca del río"], correcta: 1 }
    ]
  },
  {
    id: "iglesia", nombre: "Iglesia", plano: "5", x: 37, y: 43,
    foto: "img/iglesia.jpg", fotoWeb: W + "02.jpg",
    fotos: ["img/iglesia.jpg","img/iglesia-boveda.jpg","img/iglesia-abside.jpg"],
    audio: "Estamos en la iglesia. Se empezó a construir en 1410 gracias al dinero de Per Afán de Ribera, y se terminó en 1419: un templo gótico de una sola nave. En 1523 se amplió con la Capilla de Santa Ana, donde estuvo enterrado Cristóbal Colón. Mira hacia arriba: el techo son bóvedas de crucería, con nervios de piedra que se cruzan. En los puntos donde se cruzan verás unas estrellas de acero: las puso el arquitecto José Ramón Sierra en la restauración de 1992, y recuerdan el escudo de Gonzalo de Mena, el fundador del monasterio. Al fondo, la bóveda del ábside es la más bonita, con sus nervios abriéndose como un abanico. A su derecha está el reloj, con una maquinaria hecha por fray Manuel Navarro en 1817; a su izquierda, un medallón que representa la vida de los monjes. Antiguamente la iglesia se dividía en cuatro partes: los visitantes miraban desde una reja, luego estaban los monjes legos, después los monjes padres, y al fondo, en el presbiterio, las tumbas de la familia Ribera. Cuando esto fue una fábrica, la iglesia sirvió para secar moldes y guardar loza. Hoy es la sala principal del museo.",
    profesor: [
      "Historia: obras iniciadas en 1410 con el patronazgo de Per Afán de Ribera «el viejo» (c. 1338-1423), tras el retraso por la muerte de Gonzalo de Mena (c. 1337-1401) y la incautación de fondos por el infante Fernando (1380-1416). Terminada en 1419: gótica, una sola nave.",
      "1523: ampliación con la Capilla de Santa Ana (Colón, 1451-1506), traslado de la fachada, cuerpo superior en ladrillo y rosetón. Decoración barroca posterior: pintura mural.",
      "Organización en cuatro tramos: visitantes tras la reja → coro de legos → altar intermedio con esculturas de Juan Solís (1577-1623) y Juan de Mesa (1583-1627) → sillería de los padres → presbiterio con los enterramientos de los Ribera.",
      "ARTE · Bóvedas de crucería (foto 1): nervios que reparten el peso; en las claves, esculturas de acero de José Ramón Sierra (Olivares, 1945), rehabilitación de la zona monumental 1986-1992. Las estrellas recuerdan el escudo de Gonzalo de Mena y Roelas.",
      "ARTE · Bóveda absidial (foto 2): la más rica en nervaduras; restos pictóricos. Derecha: estucado del reloj (maquinaria de fray Manuel Navarro, 1817). Izquierda: tondo con alegoría de la vida cartuja. Accesos: derecha al Claustrillo mudéjar, izquierda a la Capilla De Profundis y la sacristía.",
      "Siglo XIX: ocupación francesa y desamortización dispersan el patrimonio. Con Pickman (1808-1883): secadero de moldes y almacén de loza."
    ],

    preguntas: [
      { q: "¿Qué son las estrellas de acero que hay en el techo?",
        opciones: ["Adornos de la época de los monjes", "Esculturas puestas en la restauración de 1992 que recuerdan el escudo del fundador", "Lámparas de la fábrica", "Señales para los visitantes"], correcta: 1 },
      { q: "¿Cómo se llama este tipo de techo, con nervios de piedra que se cruzan?",
        opciones: ["Bóveda de cañón", "Cúpula", "Bóveda de crucería", "Artesonado", "Techo plano"], correcta: 2 },
      { q: "¿Para qué se usó la iglesia cuando el monasterio era una fábrica?",
        opciones: ["Como comedor de obreros", "Para secar moldes y guardar loza", "Como oficinas", "Como escuela"], correcta: 1 },
      { q: "¿Quién pagó la construcción de la iglesia?",
        opciones: ["Cristóbal Colón", "Per Afán de Ribera", "Charles Pickman", "El rey Felipe II"], correcta: 1 },
      { q: "Los nervios de la bóveda se cruzan y se apoyan en los pilares. Sin saber nada de arquitectura, ¿para qué crees que sirven?",
        opciones: ["Solo para decorar", "Para repartir el peso del techo y llevarlo hasta los pilares", "Para colgar lámparas", "Para que el techo parezca más bajo"], correcta: 1 },
      { q: "Los visitantes veían la misa desde una reja, lejos del altar, y los monjes padres estaban al fondo. ¿Qué nos dice eso de la vida en la Cartuja?",
        opciones: ["Que la iglesia era muy pequeña", "Que los monjes vivían separados del mundo exterior incluso dentro de su propia iglesia", "Que no cabía nadie más", "Que la reja era para proteger el oro"], correcta: 1 }
    ]
  },
  {
    id: "santa-ana", nombre: "Capilla de Colón o de Santa Ana", plano: "5", x: 34, y: 49,
    foto: "img/santa-ana.jpg", fotoWeb: W + "03.jpg",
    audio: "Esta es la Capilla de Santa Ana, también llamada Capilla de Colón. La construyó en 1507 el prior Diego de Luján. En su cripta estuvieron enterrados, entre 1509 y 1537, Cristóbal Colón, su hermano Diego y su hijo Diego. Colón era muy amigo de un monje de aquí, fray Gaspar de Gorricio, que le ayudó a preparar los argumentos para convencer a los Reyes Católicos de pagar su segundo viaje a América, y que guardó sus documentos en el monasterio. En 1537 los restos de la familia se llevaron a Santo Domingo, en la actual República Dominicana, y en 1899 los que se atribuyen a Cristóbal Colón volvieron a Sevilla: hoy están en la Catedral. Fíjate en la cúpula de media naranja: en las cuatro esquinas, las pechinas, está el escudo del fundador, Gonzalo de Mena. En las paredes hay azulejos de Juan Bautista Pisano, dos de ellos con San Matías y San Juan. En el siglo diecisiete aquí estaba el Cristo de la Clemencia de Martínez Montañés, que ahora está en la Catedral. Cuando esto fue una fábrica, la capilla sirvió de archivo de la loza.",
    profesor: [
      "1507: la construye el prior Diego de Luján. Cripta: restos de Cristóbal Colón (1451-1506), su hermano Diego y su primogénito Diego, entre 1509 y 1537.",
      "Vínculo de Colón con la Cartuja: estancias en la hospedería y amistad con fray Gaspar de Gorricio (†1515), que le ayudó a argumentar ante los Reyes Católicos el segundo viaje y custodió el Archivo Colombino.",
      "1537: traslado a la Catedral de Santo Domingo. 1899: los restos atribuidos a Colón vuelven a Sevilla (Catedral). Sigue habiendo debate: contarlo como tal.",
      "1523: la capilla se integra en la iglesia. Cúpula de media naranja con pechinas con el escudo de Gonzalo de Mena. Zócalos de azulejos atribuidos a Juan Bautista Pisano (1508-?), dos figurativos: San Matías y San Juan Bautista.",
      "Siglo XVII: presidida por el Cristo de la Clemencia de Martínez Montañés (1568-1649), hoy en la Catedral. Ocupación francesa (1810-1812) y etapa Pickman: archivo de la fábrica de loza."
    ],

    preguntas: [
      { q: "¿Entre qué años estuvo enterrado Cristóbal Colón en esta capilla?",
        opciones: ["1492 y 1500", "1509 y 1537", "1600 y 1650", "1841 y 1899"], correcta: 1 },
      { q: "¿Quién era fray Gaspar de Gorricio?",
        opciones: ["El hermano de Colón", "Un monje amigo de Colón que le ayudó a preparar su segundo viaje", "El dueño de la fábrica", "El arquitecto de la capilla"], correcta: 1 },
      { q: "¿Dónde están hoy los restos atribuidos a Cristóbal Colón?",
        opciones: ["En esta cripta", "En la Catedral de Sevilla", "En Génova", "En Madrid", "En el fondo del mar"], correcta: 1 },
      { q: "¿Qué hay en las pechinas (las esquinas) de la cúpula?",
        opciones: ["Estrellas de acero", "El escudo de Gonzalo de Mena, el fundador", "Retratos de Colón", "Azulejos con barcos"], correcta: 1 },
      { q: "¿Qué obra famosa estuvo en esta capilla en el siglo XVII?",
        opciones: ["La Última Cena", "El Cristo de la Clemencia de Martínez Montañés", "La Gioconda", "El Guernica"], correcta: 1 },
      { q: "Colón guardó sus documentos en este monasterio incluso antes de morir. ¿Por qué crees que eligió un monasterio para eso?",
        opciones: ["Porque los monjes sabían leer mapas", "Porque era un lugar seguro, tranquilo y con amigos de confianza", "Porque estaba cerca de su casa", "Porque los monjes se lo pidieron"], correcta: 1 }
    ]
  },
  {
    id: "refectorio", nombre: "Refectorio", plano: "5", x: 40, y: 50,
    foto: "img/refectorio.jpg", fotoWeb: W + "07.jpg",
    audio: "Este es el refectorio, el comedor de los monjes. Pero no comían aquí todos los días: los cartujos comían solos en sus celdas, y solo venían al refectorio los domingos, en las fiestas y en los funerales. Monjes y legos comían separados por un muro con puertas y ventanas, en silencio, mientras uno leía desde el púlpito. Mira el techo: es un artesonado mudéjar de madera de 1588, uno de los mejor conservados de Sevilla, decorado con los escudos de Gonzalo de Mena. En las paredes, los zócalos de azulejos de los siglos dieciséis y diecisiete muestran influencia de talleres italianos y portugueses. Presidiendo la sala estaba el gran cuadro de la Sagrada Cena, de Alonso Vázquez, que hoy está en el Museo de Bellas Artes de Sevilla, junto a otras pinturas atribuidas a Alonso Cano. Cuando esto fue una fábrica, el refectorio se convirtió en la sala bizcochera: el almacén de las piezas de loza ya cocidas, pero todavía sin decorar.",
    profesor: [
      "Comedor comunitario solo domingos, festividades y funerales; a diario cada monje comía en su celda. Monjes y legos separados por un muro con puertas y ventanas; lectura desde el púlpito, en silencio.",
      "Artesonado mudéjar de 1588, de los mejor conservados de Sevilla, con escudos de Gonzalo de Mena (c. 1337-1401). Zócalos cerámicos ss. XVI-XVII con influencia italiana y portuguesa.",
      "Pintura: Sagrada Cena (c. 1588) de Alonso Vázquez (1540-1608), hoy en el Museo de Bellas Artes; ciclo pictórico atribuido a Alonso Cano (1601-1667).",
      "Etapa fabril: sala bizcochera = almacén de «bizcocho», la loza cocida una vez y aún sin esmaltar ni decorar. Conectar con el proceso: moldes (iglesia) → bizcocho (aquí) → decoración → segunda cocción."
    ],

    preguntas: [
      { q: "¿Cuándo comían los monjes en el refectorio?",
        opciones: ["Todos los días", "Solo los domingos, en las fiestas y en los funerales", "Nunca, era solo para visitantes", "Solo en Navidad"], correcta: 1 },
      { q: "¿De qué año es el artesonado (techo de madera) del refectorio?",
        opciones: ["1400", "1588", "1817", "1992"], correcta: 1 },
      { q: "¿Qué era la «sala bizcochera» en la época de la fábrica?",
        opciones: ["Una pastelería para los obreros", "El almacén de loza ya cocida pero sin decorar", "La cocina de la fábrica", "El comedor de los Pickman"], correcta: 1 },
      { q: "¿Qué cuadro presidía la sala y hoy está en el Museo de Bellas Artes?",
        opciones: ["La Sagrada Cena de Alonso Vázquez", "El Cristo de la Clemencia", "Las Meninas", "La Virgen de las Cuevas", "Un retrato de Colón"], correcta: 0 },
      { q: "Los monjes comían a diario solos en su celda y solo se juntaban aquí los domingos. ¿Qué nos dice eso de la vida cartuja?",
        opciones: ["Que no se llevaban bien", "Que vivían en soledad y silencio casi todo el tiempo, como ermitaños dentro del monasterio", "Que el refectorio era muy pequeño", "Que no les gustaba la comida"], correcta: 1 }
    ]
  },
  {
    id: "magdalena", nombre: "Capilla de la Magdalena", plano: "5", x: 42, y: 47,
    foto: "img/magdalena.jpg", fotoWeb: W + "06.jpg",
    audio: "La Capilla de la Magdalena fue lo primero que se construyó del monasterio, a comienzos del siglo quince. A su alrededor se levantaron las primeras celdas de los monjes. Sirvió como iglesia hasta que se terminó la iglesia grande, en 1420, y después como sala de reuniones de los monjes hasta 1454. Es una joya del arte mudéjar: mira las bóvedas, planas y todas de tamaños distintos. En las paredes quedan pinturas muy antiguas: San Cristóbal, Santa Ana con la Virgen y el Niño, y una Magdalena que casi no se ve, en el arco del fondo. En 1588 se le añadió un espacio con una cúpula de ocho lados, decorada en 1605 con yeserías barrocas. Los azulejos con flores y puntas de diamante llevan el escudo de Gonzalo de Mena, el fundador del monasterio, que estuvo enterrado aquí hasta el siglo diecinueve. Durante la invasión francesa la capilla fue una botica, una farmacia; y en la época de la fábrica, el taller donde se decoraba la loza. En la restauración para la Expo del 92 se dejaron a la vista las huellas antiguas de las bóvedas y los azulejos se colocaron en marcos separados.",
    profesor: [
      "Primera edificación de la Cartuja (comienzos del s. XV), lejos de la ermita franciscana de la Virgen de las Cuevas. Núcleo inicial de la clausura. Iglesia hasta 1420 (inauguración del templo mayor); Sala Capitular hasta 1454.",
      "Mudéjar sevillano: bóvedas de espejo desiguales. Pinturas murales primitivas: San Cristóbal, Santa Ana triple con donantes, Magdalena apenas perceptible en el arco del último tramo.",
      "Tras ampliar el refectorio (1588): espacio con cúpula octogonal, yeserías barrocas de «cartón recortado» (1605). Paños cerámicos con flores, puntas de diamante y escudos de Gonzalo de Mena (c. 1337-1401), cuyos restos reposaron aquí hasta la desamortización de Mendizábal (1836).",
      "Invasión francesa (1810-1812): botica. Etapa fabril: taller de decoración de loza (siguiente paso tras el «bizcocho» del refectorio).",
      "Expo'92: criterio de restauración moderno: huellas arqueológicas visibles en las bóvedas y azulejos recolocados en marcos independientes para distinguir lo original de lo nuevo."
    ],

    preguntas: [
      { q: "¿Qué tiene de especial esta capilla en la historia del monasterio?",
        opciones: ["Es la más grande", "Fue lo primero que se construyó, el núcleo inicial", "Fue la última en construirse", "La construyeron los franceses"], correcta: 1 },
      { q: "¿Para qué se usó la capilla durante la invasión francesa?",
        opciones: ["Como botica (farmacia)", "Como cuadra", "Como prisión", "Como comedor"], correcta: 0 },
      { q: "¿Y en la época de la fábrica?",
        opciones: ["Como almacén de moldes", "Como horno", "Como taller de decoración de la loza", "Como oficina de Pickman", "Como vivienda"], correcta: 2 },
      { q: "¿Quién estuvo enterrado en esta capilla hasta el siglo XIX?",
        opciones: ["Cristóbal Colón", "Gonzalo de Mena, el fundador", "Charles Pickman", "Per Afán de Ribera"], correcta: 1 },
      { q: "Las bóvedas son todas de tamaños distintos y en la restauración se dejaron a la vista las marcas antiguas. ¿Por qué crees que no las «arreglaron» para que quedaran perfectas?",
        opciones: ["Porque no tenían dinero", "Porque las huellas del pasado forman parte de la historia del edificio y se quiere que se vean", "Porque se les olvidó", "Porque los monjes lo prohibieron"], correcta: 1 }
    ]
  },
  {
    id: "claustrillo", nombre: "Claustrillo mudéjar", plano: "5", x: 43, y: 43,
    foto: "img/claustrillo.jpg", fotoWeb: W + "04.jpg",
    audio: "Este patio se llama Claustrillo porque es el claustro más pequeño del monasterio. Se construyó en 1454 y es uno de los mejores ejemplos del arte mudéjar en Sevilla, la mezcla del arte cristiano y el musulmán. Fíjate en los materiales: techos de madera, tejas, pilares de ladrillo rojo, columnas de mármol blanco con capiteles en forma de campana que recuerdan a la Alhambra de Granada, y azulejos con dibujos geométricos entrelazados. Este patio era el pasillo que conectaba las zonas comunes: desde aquí los monjes padres iban a la iglesia, a la Sala Capitular, a la Capilla de la Magdalena y al refectorio, sin cruzarse con los legos. Cuando esto fue una fábrica, el patio se conservó casi intacto y daba paso a la carpintería, la sala de pintura y la bizcochera. Debajo del refectorio estaba la bodega, y las antiguas cocinas son hoy la biblioteca del museo. Alrededor del patio verás lápidas y esculturas de personas rezando: son de la familia Ribera, duques de Medinaceli, que ayudaron al monasterio con su dinero y, a cambio, fueron enterrados aquí durante generaciones.",
    profesor: [
      "Construido en 1454; el claustro más pequeño. Mudéjar sevillano: artesonados de madera, cubiertas de teja, pilares de ladrillo con molduras góticas, columnas de mármol blanco con capiteles campaniformes de influencia nazarí, arcos peraltados sobre almohadillas, azulejos policromados de lacería.",
      "Función: distribuidor de las zonas comunes. Conectaba la clausura de los monjes padres (oración, sacramentos) con iglesia, Sala Capitular, Magdalena y refectorio, evitando el contacto con los legos (mantenimiento).",
      "Etapa fabril: casi intacto; acceso a carpintería (Sala Capitular), sala de pintura (Magdalena) y bizcochera (refectorio). Bodega bajo el refectorio; cocinas → hoy biblioteca del CAAC.",
      "Lápidas, lauda de bronce y esculturas orantes de la Fundación Casa Ducal de Medinaceli. Per Afán de Ribera el Viejo (c. 1338-1423), I Adelantado Mayor de Andalucía desde 1396, enterrado en la iglesia en 1420; varias generaciones de la familia sepultadas aquí.",
      "Pregunta de observación: que busquen el ladrillo, el mármol y el azulejo y digan de dónde cree cada uno que sale el material (barro del río → ladrillo y azulejo)."
    ],

    preguntas: [
      { q: "¿Por qué se llama «Claustrillo»?",
        opciones: ["Por el nombre de un monje", "Porque es el claustro más pequeño del monasterio", "Porque está lleno de claustros", "Porque lo construyó un tal Claustrillo"], correcta: 1 },
      { q: "¿Qué es el estilo mudéjar?",
        opciones: ["Arte solo cristiano", "Arte solo musulmán", "Una mezcla de arte cristiano y musulmán", "Un estilo inglés del siglo XIX"], correcta: 2 },
      { q: "¿A qué monumento recuerdan las columnas con capiteles en forma de campana?",
        opciones: ["A la Giralda", "A la Alhambra de Granada", "A la Mezquita de Córdoba", "Al Coliseo de Roma", "A la Torre Eiffel"], correcta: 1 },
      { q: "¿Qué son hoy las antiguas cocinas del monasterio?",
        opciones: ["La cafetería", "La biblioteca del museo", "Un horno", "La taquilla"], correcta: 1 },
      { q: "¿Por qué hay tantas tumbas de la familia Ribera, duques de Medinaceli, en el monasterio?",
        opciones: ["Porque eran monjes", "Porque ayudaron al monasterio con su dinero y a cambio se enterraron aquí", "Porque vivían al lado", "Porque lo ordenó el rey"], correcta: 1 },
      { q: "Este claustro es de ladrillo y azulejo, no de piedra. ¿De dónde crees que salía el material?",
        opciones: ["Lo traían en barco desde Italia", "Del barro del río, cocido en hornos", "De una cantera de piedra", "De la Giralda"], correcta: 1 }
    ]
  },
  {
    id: "sala-capitular", nombre: "Sala Capitular", plano: "5", x: 45, y: 39,
    foto: "img/sala-capitular.jpg", fotoWeb: W + "05.jpg",
    audio: "Esta es la Sala Capitular, construida en 1454 junto al Claustrillo. Aquí se reunían los monjes, y era el único lugar del monasterio donde podían hablar y romper su silencio. Es una de las primeras capillas de estilo renacentista italiano en España: estamos a finales del siglo quince, justo cuando el gótico se va acabando y llegan a Sevilla las nuevas ideas del Renacimiento. Mira la bóveda: es gótica, estrellada, con los nervios cruzándose. En el centro está el escudo de las Cinco Llagas, el emblema de la Casa de Medinaceli. Las figuras talladas en la piedra son de las esculturas renacentistas más antiguas de Sevilla. Los azulejos de la pared son de 1607. Desde 1490 esta sala se convirtió en el panteón de la familia: aquí están los sepulcros de don Pedro Enríquez y de su esposa Catalina de Ribera, y la lápida de su hijo Fadrique. Cuando esto fue una fábrica, la sala se usó como carpintería y los sepulcros se llevaron al Panteón de Sevillanos Ilustres. En 1992 volvieron a su sitio. Hoy es el único espacio del monasterio que sigue siendo sagrado: aquí se celebran misas en memoria de la familia Medinaceli.",
    profesor: [
      "1454, junto al Claustrillo. Lugar de reunión («capítulo»): único espacio donde los monjes rompían el silencio.",
      "Una de las primeras capillas renacentistas de estilo italiano en España: transición gótico final → Renacimiento (finales del s. XV).",
      "Bóveda estrellada gótica. Clave central: escudo de las Cinco Llagas (Casa Ducal de Medinaceli); claves secundarias: escudos de los Sotomayor. Bajorrelieves naturalistas y clasicistas del primer Renacimiento: de los conjuntos escultóricos más antiguos del gótico-renacentista sevillano. Zócalo de azulejos de 1607.",
      "Panteón desde 1490: Pedro Enríquez de Quiñones (†1493), IV Adelantado Mayor de Andalucía por su matrimonio con Beatriz y luego Catalina de Ribera (†1505). Mausoleos, lauda de su hijo Fadrique Enríquez de Ribera (1476-1539), osario y altar que se conserva.",
      "Etapa fabril: carpintería. Sepulcros al Panteón de Sevillanos Ilustres (cripta de la Anunciación); regresan en 1992. Único espacio sacralizado del monasterio: misas en memoria de los Medinaceli.",
      "Enlace con la parada anterior: Fadrique Enríquez de Ribera es el fundador de la Casa de Pilatos."
    ],

    preguntas: [
      { q: "¿Qué tenía de especial esta sala para los monjes?",
        opciones: ["Era donde dormían", "Era el único lugar donde podían hablar", "Era donde cocinaban", "Era donde recibían a los reyes"], correcta: 1 },
      { q: "¿Qué estilo artístico empieza a verse en esta sala, a finales del siglo XV?",
        opciones: ["El románico", "El barroco", "El Renacimiento italiano", "El modernismo", "El mudéjar"], correcta: 2 },
      { q: "¿Qué escudo hay en el centro de la bóveda?",
        opciones: ["El de Gonzalo de Mena", "El de las Cinco Llagas, de la Casa de Medinaceli", "El de los Reyes Católicos", "El de la fábrica Pickman"], correcta: 1 },
      { q: "¿Para qué se usó esta sala en la época de la fábrica?",
        opciones: ["Como carpintería", "Como horno", "Como oficina", "Como tienda"], correcta: 0 },
      { q: "¿Qué pasó con los sepulcros de los Ribera cuando llegó la fábrica?",
        opciones: ["Se destruyeron", "Se llevaron al Panteón de Sevillanos Ilustres y volvieron en 1992", "Se vendieron a Inglaterra", "Se enterraron en el jardín"], correcta: 1 },
      { q: "Los nervios de esta bóveda forman una estrella y se decoran con escudos. En la iglesia, en cambio, las bóvedas eran más sencillas. ¿Por qué crees que aquí se esmeraron más?",
        opciones: ["Porque era la sala más pequeña", "Porque la pagaba una familia poderosa que quería mostrar su prestigio en su propio panteón", "Porque los monjes tenían más tiempo", "Porque se construyó más tarde y había mejores herramientas"], correcta: 1 }
    ]
  },
  {
    id: "profundis-sacristia", nombre: "De Profundis y Sacristía", plano: "5", x: 46, y: 46,
    foto: "img/sacristia.jpg", fotoWeb: W + "08.jpg",
    audio: "Entramos por la Capilla De Profundis, también llamada Capilla del Sepulcro. Aquí se velaba a los monjes que morían, y también a los miembros de la familia Ribera enterrados en el monasterio. Es la única que queda de las capillas que rodeaban la iglesia. Tenía azulejos, un banco corrido y un pequeño altar con imágenes sobre la muerte. En la fábrica fue un almacén, y en la restauración de 1992 se reconstruyó recordando su aspecto antiguo. Al fondo está la sacristía, construida en 1537. Aquí los monjes preparaban las ceremonias y guardaban los objetos de oro y plata y los relicarios, que se perdieron con la invasión francesa. Mira la cúpula estrellada: recuerda la visión de estrellas que tuvo San Bruno, el fundador de los cartujos. Las yeserías barrocas de las paredes las hizo Pedro Roldán en 1655, y enmarcaban una serie de cuadros de Zurbarán que hoy están en el Museo de Bellas Artes. Al frente estuvo un tríptico de San Juan Bautista, pintado hacia 1450 por Roger van der Weyden, uno de los grandes pintores flamencos: fue un regalo del emperador Carlos V, y hoy está en Berlín. En la época de la fábrica las dos salas fueron almacenes.",
    profesor: [
      "DE PROFUNDIS (Capilla del Sepulcro): velatorio de los cartujos fallecidos y de los Ribera enterrados en el monasterio. Única capilla conservada de las que rodeaban la iglesia, muy transformada. Zócalos de azulejos, banco corrido, altar con alegorías de la muerte. Nombre: del salmo 130 («Desde lo profundo»), que se reza por los difuntos.",
      "Fábrica: almacén. Restauración 1986-1992: reconstruida evocando su aspecto original, con la sugerencia de su bóveda de crucería.",
      "SACRISTÍA (1537): preparación de las ceremonias; orfebrería y relicarios, perdidos en la ocupación francesa (1810-1812).",
      "Cúpula estrellada: símbolo de la visión fundacional de San Bruno (las siete estrellas que guiaron a los primeros cartujos). Yeserías barrocas de Pedro Roldán (1624-1699), 1655; enmarcaban lienzos de Zurbarán (1598-1664), hoy en Bellas Artes.",
      "Tríptico de San Juan Bautista de Roger van der Weyden (h. 1450), regalo de Carlos V en 1526; hoy en la Gemäldegalerie de Berlín.",
      "Enlace: Pedro Roldán es también el autor de las estatuas que faltan en la Puerta de Tierra (San Hugo y San Bruno, 1650)."
    ],

    preguntas: [
      { q: "¿Para qué servía la Capilla De Profundis?",
        opciones: ["Para comer", "Para velar a los monjes y a los Ribera fallecidos", "Para hacer cerámica", "Para recibir visitas"], correcta: 1 },
      { q: "¿Qué guardaban los monjes en la sacristía?",
        opciones: ["La comida", "Los objetos de oro y plata y los relicarios para las ceremonias", "Los libros", "Las herramientas"], correcta: 1 },
      { q: "¿Qué pintor hizo la serie de cuadros que estaba en la sacristía y hoy está en Bellas Artes?",
        opciones: ["Velázquez", "Murillo", "Zurbarán", "Goya", "Picasso"], correcta: 2 },
      { q: "¿Qué recuerda la cúpula estrellada de la sacristía?",
        opciones: ["El escudo de los Ribera", "La visión de estrellas de San Bruno, fundador de los cartujos", "El cielo de Sevilla", "El logo de la fábrica"], correcta: 1 },
      { q: "¿Quién regaló el tríptico de Van der Weyden al monasterio?",
        opciones: ["Cristóbal Colón", "El emperador Carlos V", "Charles Pickman", "Felipe II"], correcta: 1 },
      { q: "Muchas obras de arte de la Cartuja están hoy en Bellas Artes, en la Catedral o en Berlín, no aquí. ¿Por qué crees que se dispersaron?",
        opciones: ["Porque los monjes las vendieron para hacerse ricos", "Porque con la invasión francesa y la desamortización el monasterio se vació y sus bienes se repartieron o se perdieron", "Porque eran falsas", "Porque no cabían"], correcta: 1 }
    ]
  },
  {
    id: "claustron", nombre: "Claustrón y la fábrica de Pickman", plano: "6-7-8", x: 37, y: 30,
    foto: "img/claustron.jpg", fotoWeb: W + "10.jpg",
    audio: "Este es el Claustrón, el claustro grande, el corazón del monasterio. Tenía tres galerías y un gran patio en el centro que servía de cementerio. Alrededor estaban las celdas de los monjes, y cada una era como una casita: abajo el estudio y el taller, arriba el dormitorio y el oratorio, y al fondo un pequeño huerto. En el siglo diecinueve la fábrica de loza arrasó casi todo el claustro medieval y lo llenó de hornos de botella de estilo inglés: hoy se conservan cinco, y la gran chimenea, que son el símbolo de la Cartuja. Charles Pickman era un inglés que vendía loza inglesa en Cádiz, pero cuando subieron los impuestos decidió fabricarla aquí. Compró el monasterio en la desamortización: estaba junto al río y junto a Triana, el barrio de los alfareros. Montó una fábrica moderna donde la loza pasaba por una cadena: preparar la pasta, moldear, una primera cocción, el vidriado, y una segunda cocción que daba brillo a los colores. Luego se embalaba y salía en barco por la Puerta del Río a todo el mundo. En 1871 la loza de la Cartuja fue nombrada proveedora de la Casa Real, y en 1873 Pickman recibió el título de marqués. Entre 1986 y 1992 el arquitecto José Ramón Sierra reconstruyó las galerías y las celdas con muros desnudos y formas sencillas, mezclando lo monástico y lo industrial. Hoy son las salas de exposición del museo.",
    profesor: [
      "Claustro Grande: tres galerías (norte, este, sur) y patio central usado como cementerio. Cada celda = unidad autosuficiente de dos plantas: abajo estudio y taller; arriba dormitorio y oratorio; al fondo huerto privado con letrina y leñera. (La celda prioral, ya vista, era la excepción palaciega: jerarquía de la orden.)",
      "Etapa industrial (s. XIX): hornos de botella de tipo inglés, cocían en dos alturas. Se conservan cinco y la gran chimenea: arqueología industrial. La fábrica arrasó casi toda la obra medieval; solo quedaron restos en el ala este.",
      "José Ramón Sierra (Olivares, 1945), 1986-1992: reconstrucción volumétrica de galerías y celdas según las trazas históricas. Lenguaje contemporáneo inspirado en la pintura metafísica de Giorgio de Chirico: muros desnudos, vacíos, geometrías esenciales. Hoy salas de exposición del CAAC.",
      "PICKMAN: Charles Pickman (Londres 1808 - Sevilla 1883) llega a Cádiz en 1822 para seguir el negocio de importación de cerámica inglesa de su hermano. Gusto aristocrático por la loza británica + proteccionismo y aranceles → producir en España. Desamortización de Mendizábal: compra el monasterio (junto al Guadalquivir y a Triana, cuna alfarera). Primer horno en 1841.",
      "Modelo de Staffordshire. Cadena de producción: pastas → moldeado (iglesia: secadero de moldes) → 1ª cocción (bizcocho, almacenado en el refectorio) → vidriado y decoración (taller en la Magdalena) → 2ª cocción → embalaje en la Sala Capitular → embarque por la Puerta del Río.",
      "Diseños inspirados en grabados de cobre: paisajes románticos, escenas orientales, caza. 1871: proveedora oficial de la Casa Real. 1873: Pickman, marqués. La fábrica más importante del sur de Europa; Sevilla pasa de ciudad conventual a capital industrial. Cierre en 1982 (la marca sigue en Salteras).",
      "Pregunta clave para el alumnado: ¿por qué una fábrica de cerámica AQUÍ? Río (transporte y barro), Triana (alfareros), edificio enorme y barato tras la desamortización."
    ],

    preguntas: [
      { q: "¿Qué son las chimeneas con forma de botella?",
        opciones: ["Torres de vigilancia", "Hornos de la fábrica de cerámica, de estilo inglés", "Campanarios", "Depósitos de agua", "Palomares"], correcta: 1 },
      { q: "¿Cuántos hornos de botella se conservan?",
        opciones: ["Uno", "Tres", "Cinco", "Veintidós"], correcta: 2 },
      { q: "¿Para qué servía el patio central del claustro en tiempos de los monjes?",
        opciones: ["Como huerto", "Como cementerio", "Como campo de juegos", "Como mercado"], correcta: 1 },
      { q: "¿Por qué Charles Pickman decidió fabricar loza en España en vez de seguir importándola de Inglaterra?",
        opciones: ["Porque le gustaba Sevilla", "Porque subieron los impuestos a los productos importados", "Porque en Inglaterra se acabó el barro", "Porque se lo pidió el rey"], correcta: 1 },
      { q: "¿En qué orden se fabricaba una pieza de loza?",
        opciones: ["Vidriado → moldeado → cocción", "Moldeado → primera cocción → vidriado → segunda cocción", "Cocción → moldeado → vidriado", "Embalaje → moldeado → cocción"], correcta: 1 },
      { q: "¿Qué consiguió la loza de la Cartuja en 1871?",
        opciones: ["Cerrar la fábrica", "Ser proveedora oficial de la Casa Real", "Ganar un premio en Londres", "Exportar a la Luna"], correcta: 1 },
      { q: "¿Por qué crees que Pickman eligió precisamente este sitio para su fábrica?",
        opciones: ["Porque había barro y río para transportar, Triana con sus alfareros al lado, y un edificio enorme y barato", "Porque era obligatorio por ley", "Porque los monjes se lo regalaron", "Porque no había otro sitio en Sevilla"], correcta: 0 },
      { q: "¿Por qué crees que los hornos tienen esa forma de botella, estrecha arriba?",
        opciones: ["Para que fueran bonitos", "Para concentrar el calor y hacer que el aire caliente suba y tire del fuego, como una chimenea", "Para guardar vino", "Para que no entrara la lluvia"], correcta: 1 }
    ]
  },
  {
    id: "memorial-agua", nombre: "Memorial del Agua", plano: "6", x: 50, y: 38,
    foto: "img/memorial-agua.jpg", fotoWeb: W + "09.jpg",
    audio: "Cuando se restauró el monasterio para la Exposición Universal de 1992, se tomó una decisión: devolverle su aspecto de cartuja, pero sin borrar las huellas de la fábrica ni de las demás épocas. El arquitecto y artista José Ramón Sierra creó tres memoriales que unen el arte contemporáneo con la historia: el Memorial a Pickman, el Memorial de la Arqueología, que ya vimos en el atrio, y este, el Memorial del Agua. Recuerda que el río Guadalquivir marcó la vida del monasterio: casi cada año había inundaciones. Para contarlo, Sierra colocó bajo una lámina de agua trozos originales del edificio: fustes de columnas, basas y capiteles. Es una forma poética de decir que el río y la Cartuja siempre han estado unidos.",
    profesor: [
      "Rehabilitación para la Expo'92: criterio unificador, devolver la fisonomía cartuja sin borrar las huellas de las etapas históricas (monasterio, fábrica).",
      "En la clausura de monjes (hoy CAAC), proyecto de José Ramón Sierra (Olivares, 1945), arquitecto y artista. Tres «memoriales»: Memorial a Pickman, Memorial de la Arqueología (atrio) y Memorial del Agua.",
      "Memorial del Agua: fragmentos arquitectónicos originales (fustes, basas, capiteles) bajo una lámina de agua. Evoca las crecidas del Guadalquivir que marcaron el destino del monasterio.",
      "Hilo del río en toda la visita: barro para ladrillo y loza, transporte (Puerta del Río), Colón y el puerto, inundaciones. Buena parada para repasar."
    ],

    preguntas: [
      { q: "¿Qué hay sumergido bajo el agua en este memorial?",
        opciones: ["Monedas antiguas", "Trozos originales del edificio: fustes, basas y capiteles", "Cerámica de la fábrica", "Barcos de Colón"], correcta: 1 },
      { q: "¿Qué quiere recordar el Memorial del Agua?",
        opciones: ["Las guerras", "Las inundaciones del Guadalquivir que marcaron la vida del monasterio", "La Expo del 92", "A los monjes ahogados"], correcta: 1 },
      { q: "¿Cuántos memoriales creó José Ramón Sierra en la Cartuja?",
        opciones: ["Uno", "Dos", "Tres", "Cinco"], correcta: 2 },
      { q: "En la restauración de 1992 se decidió no borrar las huellas de la fábrica. ¿Por qué crees que no la «limpiaron» para dejar solo el monasterio?",
        opciones: ["Porque no tenían dinero", "Porque la fábrica también es parte de la historia del edificio y de Sevilla", "Porque los hornos no se podían derribar", "Porque a Pickman no le gustaba"], correcta: 1 },
      { q: "El río ha salido en casi todas las paradas. ¿Cuál de estas cosas NO tiene que ver con el Guadalquivir?",
        opciones: ["El barro para ladrillos y loza", "El transporte de la loza en barco", "Las inundaciones", "El estilo mudéjar del claustrillo"], correcta: 3 }
    ]
  },
  {
    id: "ombu", nombre: "Ombú y monumento a Colón", plano: "12", x: 56, y: 78,
    foto: "img/ombu.jpg", fotoWeb: W + "12.jpg",
    audio: "Este gigante es un ombú. Parece un árbol, pero en realidad es un arbusto enorme: crece muy rápido, vive muchísimos años y llega a quince metros de altura. Su tronco no tiene anillos, así que nadie puede saber cuántos años tiene. Viene de las llanuras de Argentina y Uruguay. Aguanta las sequías porque su tronco está cargado de agua, y los insectos no lo atacan porque su savia es tóxica. Según la tradición, este ombú lo plantó Hernando Colón, el hijo de Cristóbal Colón, que era un apasionado de la botánica. Es un recuerdo vivo que une el monasterio con América. A su lado está el monumento a Cristóbal Colón. Lo encargó en 1887 la viuda de Pickman, la dueña de la fábrica, para recordar que el almirante vivió un tiempo en este monasterio, que aquí preparó su segundo viaje a América, y que aquí estuvo enterrado entre 1509 y 1537.",
    profesor: [
      "Ombú (Phytolacca dioica): arbusto gigante, no árbol. Crecimiento rápido, gran longevidad, hasta 15 m. Sin anillos de crecimiento: edad imposible de calcular. Originario de las llanuras de Argentina y Uruguay. Tronco cargado de agua (sequías); savia tóxica (inmune a insectos).",
      "Tradición: plantado por Hernando Colón (Córdoba 1488 - Sevilla 1539), hijo de Cristóbal Colón (Génova 1451 - Valladolid 1506), apasionado de la botánica (y gran bibliófilo: su Biblioteca Colombina está en la Catedral).",
      "Monumento a Colón: encargado en 1887 por la viuda de Pickman, para conmemorar su estancia en el monasterio, la preparación del segundo viaje y su enterramiento aquí (1509-1537). Enlace con la Capilla de Colón.",
      "Observación: que miren el tronco y comparen con un árbol normal (corteza, anillos, ramas)."
    ],

    preguntas: [
      { q: "¿Qué es en realidad el ombú?",
        opciones: ["Un árbol", "Un arbusto gigante", "Una palmera", "Un helecho"], correcta: 1 },
      { q: "¿Por qué no se puede saber la edad del ombú?",
        opciones: ["Porque es muy alto", "Porque su tronco no tiene anillos de crecimiento", "Porque nadie lo ha medido", "Porque crece de noche"], correcta: 1 },
      { q: "¿De dónde viene el ombú?",
        opciones: ["De China", "De Inglaterra", "De Argentina y Uruguay", "De Marruecos", "De Sevilla"], correcta: 2 },
      { q: "Según la tradición, ¿quién lo plantó?",
        opciones: ["Cristóbal Colón", "Hernando Colón, su hijo", "Charles Pickman", "Gonzalo de Mena"], correcta: 1 },
      { q: "¿Quién encargó el monumento a Colón en 1887?",
        opciones: ["El rey", "La viuda de Pickman", "Los monjes", "El Ayuntamiento de Sevilla"], correcta: 1 },
      { q: "Los insectos no atacan al ombú y aguanta meses sin lluvia. ¿Cómo lo consigue?",
        opciones: ["Porque tiene espinas", "Porque su savia es tóxica y su tronco guarda mucha agua", "Porque los monjes lo regaban", "Porque está cerca del río"], correcta: 1 },
      { q: "La dueña de una fábrica de loza pagó un monumento a Colón. ¿Por qué crees que le interesaba recordar a Colón en su fábrica?",
        opciones: ["Porque era pariente suyo", "Porque Colón daba prestigio e historia al edificio y a la marca de la fábrica", "Porque Colón hacía cerámica", "Porque se lo mandó el rey"], correcta: 1 }
    ]
  },
  {
    id: "arco-legos", nombre: "Arco de Legos", plano: "4", x: 60, y: 58,
    foto: "img/arco-legos.jpg", fotoWeb: W + "13.jpg",
    audio: "Terminamos en el Arco de Legos. Se llama así porque daba paso al claustro donde vivían los hermanos legos. En la Cartuja había dos tipos de religiosos: los padres, dedicados solo a la oración, y los legos, que trabajaban para mantener el monasterio y atender a los padres. Este arco era la frontera entre los dos mundos. Cuando Pickman convirtió el monasterio en fábrica, esa separación desapareció. En la restauración para la Expo del 92 el arco se reconstruyó de nuevo, pero dejando claro que es una pieza moderna. Aquí José Ramón Sierra colocó el tercero de sus memoriales, el Memorial a Pickman: un muestrario de azulejos de distintas épocas, unos del propio monasterio y otros de las casas que la fábrica construyó para sus obreros. Es el resumen perfecto de la visita: en un mismo muro, los azulejos de los monjes y los de la fábrica, las muchas vidas de la Cartuja.",
    profesor: [
      "Arco de Legos: conducía al claustro de los hermanos legos (trabajo y sostenimiento) frente a los padres (oración). Frontera física y simbólica entre las dos clausuras.",
      "Siglo XIX: con la fábrica de Pickman (Londres 1808 - Sevilla 1883) la división desaparece. Expo'92: el arco se reconstruye como reposición contemporánea, con su carácter añadido visible.",
      "Memorial a Pickman (José Ramón Sierra, Olivares 1945): muestrario de azulejerías de distintas épocas, del monasterio y de las viviendas que la fábrica levantó en el recinto. Cierra el ciclo de los tres memoriales (Arqueología, Agua, Pickman).",
      "CIERRE: repaso rápido de las tres vidas (monasterio 1400 → fábrica 1841-1982 → Expo'92 y CAAC 1997). Después, ranking final y, si hay tiempo, que cada uno diga el dato que más le ha sorprendido."
    ],

    preguntas: [
      { q: "¿Quiénes eran los hermanos legos?",
        opciones: ["Monjes que solo rezaban", "Religiosos que trabajaban para mantener el monasterio y atender a los padres", "Soldados", "Obreros de la fábrica"], correcta: 1 },
      { q: "¿Qué es el Memorial a Pickman?",
        opciones: ["Una estatua de Pickman", "Un muestrario de azulejos de distintas épocas, del monasterio y de las casas de la fábrica", "Un horno restaurado", "Un cuadro"], correcta: 1 },
      { q: "¿Cuáles son los tres memoriales de José Ramón Sierra en la Cartuja?",
        opciones: ["Arqueología, Agua y Pickman", "Colón, Pickman y los monjes", "Agua, Fuego y Tierra", "Iglesia, Claustro y Huerta"], correcta: 0 },
      { q: "Repaso final: ordena las vidas del edificio.",
        opciones: ["Fábrica → Monasterio → CAAC", "Monasterio → Fábrica → Expo 92 y CAAC", "CAAC → Fábrica → Monasterio", "Expo 92 → Monasterio → Fábrica"], correcta: 1 },
      { q: "El arco se reconstruyó en 1992 dejando claro que es moderno, en vez de imitar el antiguo. ¿Por qué crees que se hizo así?",
        opciones: ["Porque era más barato", "Para no engañar: que se distinga lo original de lo que es nuevo", "Porque no sabían cómo era el antiguo", "Porque lo exigió la Expo"], correcta: 1 },
      { q: "Repaso: ¿qué tienen en común el ladrillo del claustrillo, los azulejos del memorial y la loza de Pickman?",
        opciones: ["Que son de piedra", "Que todos nacen del barro, cocido en hornos", "Que los hicieron los monjes", "Que vienen de Inglaterra"], correcta: 1 }
    ]
  }
];

// Los compositores/as y las preguntas de duelo están en compositores.js; los dibujos, en avatars.js
