// ============================================================
//  CONFIGURACIÓN — es el único archivo que tienes que tocar
// ============================================================
window.CONFIG = {

  // Nombre de la sala (si haces varias excursiones, cambia el nombre
  // para que cada una tenga su propio ranking).
  sala: "caac-2026",

  // PIN para abrir profesor.html (se pide una vez por dispositivo).
  pin: "1234",

  // --- Firebase (sincroniza profesor y alumnado en tiempo real) ---
  // 1. Entra en https://console.firebase.google.com → "Añadir proyecto".
  // 2. Compilación → Realtime Database → Crear base de datos → modo de prueba.
  // 3. Configuración del proyecto → "Tus apps" → icono </> (web) → copia el objeto
  //    firebaseConfig y pégalo aquí. Necesita el campo databaseURL.
  //
  // Si lo dejas vacío, la app funciona en MODO LOCAL: solo sincroniza pestañas
  // del mismo navegador (sirve para probarla en tu ordenador, no para la excursión).
  firebase: {
    // apiKey: "...",
    // authDomain: "....firebaseapp.com",
    // databaseURL: "https://....firebasedatabase.app",
    // projectId: "...",
    // appId: "..."
  },

  // Puntuación tipo Kahoot: máximo por acierto y segundos hasta llegar al mínimo.
  puntosMax: 1000,
  puntosMin: 500,
  segundosRespuesta: 20
};
