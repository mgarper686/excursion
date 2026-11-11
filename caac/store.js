// Capa de sincronización. Con Firebase configurado usa Realtime Database;
// si no, usa un modo local (localStorage + BroadcastChannel) para pruebas.
window.Store = (function () {
  const cfg = window.CONFIG || {};
  const root = "salas/" + (cfg.sala || "caac");
  const useFB = !!(cfg.firebase && cfg.firebase.databaseURL && window.firebase);
  const listeners = []; // {path, cb}

  // ---------- helpers de rutas ----------
  const norm = p => (root + "/" + p).replace(/\/+/g, "/").replace(/\/$/, "");
  const getIn = (obj, path) => path.split("/").filter(Boolean).reduce((o, k) => (o == null ? undefined : o[k]), obj);
  const setIn = (obj, path, val) => {
    const ks = path.split("/").filter(Boolean); let o = obj;
    for (let i = 0; i < ks.length - 1; i++) { if (typeof o[ks[i]] !== "object" || o[ks[i]] === null) o[ks[i]] = {}; o = o[ks[i]]; }
    if (val === null || val === undefined) delete o[ks[ks.length - 1]]; else o[ks[ks.length - 1]] = val;
  };

  if (useFB) {
    firebase.initializeApp(cfg.firebase);
    const db = firebase.database();
    return {
      mode: "firebase",
      get: p => db.ref(norm(p)).get().then(s => s.val()),
      set: (p, v) => db.ref(norm(p)).set(v),
      update: (p, o) => db.ref(norm(p)).update(o),
      on: (p, cb) => { const r = db.ref(norm(p)); const h = s => cb(s.val()); r.on("value", h); return () => r.off("value", h); },
      transaction: (p, fn) => db.ref(norm(p)).transaction(fn).then(r => r.snapshot.val()),
      now: () => Date.now() + (window.__fbOffset || 0),
      onlineRef: p => { const r = db.ref(norm(p)); r.onDisconnect().remove(); return r; }
    };
  }

  // ---------- modo local ----------
  const KEY = "caac_local_db";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } };
  const save = db => localStorage.setItem(KEY, JSON.stringify(db));
  const chan = ("BroadcastChannel" in window) ? new BroadcastChannel("caac_local") : null;
  const fire = () => { const db = load(); listeners.forEach(l => l.cb(clone(getIn(db, norm(l.path))))); };
  const clone = v => v === undefined ? null : JSON.parse(JSON.stringify(v));
  const notify = () => { if (chan) chan.postMessage("x"); fire(); };
  if (chan) chan.onmessage = fire;
  window.addEventListener("storage", e => { if (e.key === KEY) fire(); });

  return {
    mode: "local",
    get: p => Promise.resolve(clone(getIn(load(), norm(p)))),
    set: (p, v) => { const db = load(); setIn(db, norm(p), v); save(db); notify(); return Promise.resolve(); },
    update: (p, o) => { const db = load(); Object.keys(o).forEach(k => setIn(db, norm(p + "/" + k), o[k])); save(db); notify(); return Promise.resolve(); },
    on: (p, cb) => { const l = { path: p, cb }; listeners.push(l); setTimeout(() => cb(clone(getIn(load(), norm(p)))), 0); return () => { const i = listeners.indexOf(l); if (i >= 0) listeners.splice(i, 1); }; },
    transaction: (p, fn) => { const db = load(); const cur = clone(getIn(db, norm(p))); const nv = fn(cur); if (nv !== undefined) { setIn(db, norm(p), nv); save(db); notify(); } return Promise.resolve(nv === undefined ? cur : nv); },
    now: () => Date.now(),
    onlineRef: () => null
  };
})();

// Utilidades compartidas
window.U = {
  // Diálogo propio (los confirm()/alert() del navegador no funcionan en todos los visores)
  ask: (msg, okText, cancelText) => new Promise(res => {
    const w = document.createElement("div");
    w.style.cssText = "position:fixed;inset:0;background:#0008;display:flex;align-items:center;justify-content:center;z-index:999;padding:20px";
    w.innerHTML = `<div style="background:var(--card,#fff);color:var(--ink,#111);border-radius:16px;padding:20px;max-width:360px;width:100%;font:16px/1.4 system-ui,sans-serif"><p style="margin:0 0 14px;white-space:pre-line">${window.U.esc(msg)}</p><div style="display:flex;gap:8px">${cancelText === null ? "" : `<button data-r="0" style="flex:1;padding:12px;border:0;border-radius:10px;background:var(--line,#ddd);color:inherit;font-weight:700;font-size:15px">${window.U.esc(cancelText || "Cancelar")}</button>`}<button data-r="1" style="flex:1;padding:12px;border:0;border-radius:10px;background:var(--teal,#1fa5c8);color:#fff;font-weight:700;font-size:15px">${window.U.esc(okText || "Aceptar")}</button></div></div>`;
    w.querySelectorAll("button").forEach(b => b.onclick = () => { w.remove(); res(b.dataset.r === "1"); });
    document.body.appendChild(w);
  }),
  alert: msg => window.U.ask(msg, "Vale", null),
  esc: t => String(t ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])),
  id: () => Math.random().toString(36).slice(2, 10),
  slug: t => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  points: (correct, elapsedMs) => {
    if (!correct) return 0;
    const c = window.CONFIG || {};
    const max = c.puntosMax || 1000, min = c.puntosMin || 500, secs = c.segundosRespuesta || 20;
    const f = Math.min(1, Math.max(0, elapsedMs / (secs * 1000)));
    return Math.round(max - (max - min) * f);
  },
  // Foto: primero la local (img/xxx.jpg), si no existe, la de la web del archivo del CAAC
  imgTag: (stop, cls) => `<img class="${cls || ""}" src="${stop.foto}" data-web="${stop.fotoWeb}" data-n="${window.U.esc(stop.nombre)}" onerror="U.imgErr(this)" alt="${window.U.esc(stop.nombre)}" loading="lazy">`,
  imgErr: img => {
    const st = +(img.dataset.stage || 0);
    if (st === 0) { img.dataset.stage = 1; img.src = img.dataset.web; return; }
    img.onerror = null; img.dataset.stage = 2;
    const t = (img.dataset.n || "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
    img.src = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#1b3358"/><text x="200" y="118" fill="#9fd7e8" font-family="sans-serif" font-size="40" text-anchor="middle">📷</text><text x="200" y="165" fill="#fff" font-family="sans-serif" font-size="16" text-anchor="middle">${t}</text><text x="200" y="195" fill="#9fd7e8" font-family="sans-serif" font-size="12" text-anchor="middle">pon tu foto en img/</text></svg>`);
  }
};
