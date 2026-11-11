# Visita guiada al CAAC · app para móviles

Visita gamificada al Monasterio de la Cartuja (CAAC, Sevilla): el profesor dirige la ruta desde su móvil o tablet y el alumnado escucha un audio en cada parada, responde preguntas cerradas y ve un ranking tipo Kahoot.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | **Alumnado.** Es la página del QR. Nombre + compositor/a, audio, preguntas, ranking. |
| `profesor.html` | **Profesor.** Ruta con fotos, plano con la parada actual, botón de audio, lanzar preguntas, ranking, lista de alumnos. Pide un PIN. |
| `data.js` | Paradas, texto de cada audio, guion del profesor, preguntas y respuestas. **Aquí editas el contenido.** |
| `compositores.js` | Lista de compositores/as (45), orden, fichas (fechas y dato curioso) y preguntas de duelo. |
| `avatars.js` | Dibujos de los avatares (los mismos de periodos-clasicos, más los añadidos). |
| `config.js` | Nombre de la sala, PIN y claves de Firebase. |
| `store.js` | Sincronización (no hay que tocarlo). |
| `img/plano.jpg` | Plano del folleto del CAAC. Pon aquí también tus fotos. |

## Puesta en marcha (una vez)

1. **GitHub Pages.** Crea un repositorio, sube esta carpeta tal cual y en *Settings → Pages* elige *Deploy from a branch → main → / (root)*. Tendrás una URL tipo `https://mgarper686.github.io/excursion/caac/`.
2. **Firebase** (necesario para que los móviles se sincronicen entre sí; gratis):
   - https://console.firebase.google.com → *Añadir proyecto*.
   - *Compilación → Realtime Database → Crear base de datos → empezar en modo de prueba*.
   - *Configuración del proyecto → Tus apps → `</>`* → copia el objeto `firebaseConfig` y pégalo en `config.js` dentro de `firebase: { ... }`. Debe incluir `databaseURL`.
   - El modo de prueba caduca a los 30 días: antes de la excursión, en *Realtime Database → Reglas* pon `".read": true, ".write": true` o vuelve a poner una fecha.
3. **PIN.** Cambia `pin` en `config.js`.
4. **QR.** Genera un QR con la URL de `index.html` (por ejemplo en https://www.qr-code-generator.com). Imprímelo grande; si alguien se desconecta, vuelve a escanearlo y entra justo donde estáis.
5. **Prueba en casa.** Abre `profesor.html` en el ordenador y `index.html` en dos móviles. Sin Firebase también puedes probar abriendo las dos páginas en pestañas del mismo navegador (modo local).

## Cómo va la visita

1. El alumnado escanea el QR, escribe su nombre y elige compositor/a. Si ya está cogido, puede retar a un **duelo**: una pregunta de música, gana quien acierte antes. Al entrar se activa el audio del móvil (hace falta un toque del usuario; por eso no suena hasta que no han pulsado).
2. En *profesor.html* ves cuántos han entrado. Pulsa **Empezar la visita**.
3. En cada parada: explicas lo tuyo (tienes el guion en pantalla) y pulsas **▶ Reproducir audio en los móviles**. Suena en los auriculares de cada alumno y tú ves el texto escribiéndose. Puedes marcar *escucharlo también en este dispositivo*.
4. Cuando el texto termina se activa **Lanzar pregunta 1**. Cada pregunta tiene opciones cerradas (pueden ser 4, 5 o 6). Ves en directo cuántos han respondido cada opción y cuál es la correcta. Puntos: 1000 por acertar al instante, bajando hasta 500 a los 20 s (se cambia en `config.js`).
5. Tras la última pregunta pulsas **Mostrar ranking**: les salta a todos. Salen del ranking cuando pulsas **Siguiente parada**.
6. ¿Te has perdido en la ruta? Pestaña **Plano**: toca el punto o la foto de donde estás realmente. El alumnado verá esa parada.
7. Pestaña **Alumnos**: ver quién está conectado, expulsar o reiniciar toda la visita.

## Voz del audio

Por defecto suena la voz de síntesis del móvil: la app elige automáticamente la mejor voz española disponible (en iPhone, «Mónica»; en Android, la de Google) y lee por frases para que la entonación sea natural. Si quieres una voz aún mejor, genera un mp3 por parada con una voz neuronal (por ejemplo en ttsmp3.com o con Edge TTS) y guárdalo como `audio/<id>.mp3`, donde `<id>` es el campo `id` de la parada en `data.js` (`audio/puerta-tierra.mp3`, `audio/iglesia.mp3`…). Si el archivo existe, se reproduce ese; si no, la voz del móvil.

## Fotos

Las fotos de cada parada se cargan automáticamente del archivo histórico del CAAC (ws130.juntadeandalucia.es/archivo-caac) tanto en el móvil del alumnado como en el panel del profesor. Para usar las tuyas, guarda en `img/` un archivo con el nombre que indica `foto` en `data.js` (por ejemplo `img/iglesia.jpg`): si existe, se usa esa.

## Editar el contenido (`data.js`)

- `audio`: texto que oirán. Sustitúyelo por el del Genially si quieres que sea literal. Cuanto más corto, mejor (30-60 s).
- `profesor`: tus notas de guion.
- `preguntas`: `q` (enunciado), `opciones` (lista, las que quieras) y `correcta` (índice empezando en 0).
- `x`, `y`: posición en el plano en % (0-100). Ajústalos si un punto no cae donde debe.
- `foto`: nombre del archivo en `img/`. Si no existe, carga `fotoWeb` (archivo histórico del CAAC).


## Orden de la ruta

Puerta de Tierra → Capilla de Afuera → Atrio → Iglesia → Capilla de Colón (Santa Ana) → Refectorio → Capilla de la Magdalena → Claustrillo mudéjar → Sala Capitular → Casa del Prior → Claustrón, Arco de San Miguel y chimeneas → De Profundis y Sacristía → Memorial del Agua → Ombú y monumento a Colón → Arco de Legos.

## Fuentes

Fichas de espacios del archivo histórico del CAAC (ws130.juntadeandalucia.es/archivo-caac), folleto del CAAC, Wikipedia, artículos de la UPO y Dialnet sobre la fábrica Pickman. Los textos de audio son redacciones propias a partir de esas fichas; contrástalos con el Genially.
