/* Música, marcador estilo Kahoot y podio. Compartido por index.html (alumnado) y profesor.html. */
(function(){
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const OC = ["#e14b5e","#2b6fe0","#e8a917","#1f9d55","#8a4fd8","#f0742e","#0e8f8f","#b5479a"];

  /* ---------- estilos ---------- */
  const st = document.createElement("style");
  st.textContent = `
  .kb-wrap{margin:14px 12px;border-radius:22px;padding:18px 14px 20px;color:#fff;overflow:hidden;position:relative;
    background:radial-gradient(120% 90% at 50% 0%,#46309b 0%,#2a1f6b 45%,#16143f 100%);box-shadow:0 10px 30px #1a124b55}
  .kb-wrap::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.25;
    background:repeating-linear-gradient(90deg,#1fa5c8 0 14px,transparent 14px 20px,#39c27a 20px 34px,transparent 34px 40px) top/100% 5px no-repeat}
  .kb-title{font:800 28px/1.1 "Space Grotesk",system-ui,sans-serif;text-align:center;margin:6px 0 2px;text-shadow:0 3px 0 #0005;text-wrap:balance}
  .kb-sub{text-align:center;font-size:14px;opacity:.85;margin:0 0 14px}
  .kb-sub b{color:#ffd54a}
  .kb-rows{display:flex;flex-direction:column;gap:9px}
  .kb-row{display:grid;grid-template-columns:30px 44px minmax(0,1fr) auto;align-items:center;gap:8px;
    opacity:0;transform:translateY(26px) scale(.96);animation:kbIn .55s cubic-bezier(.2,1.2,.4,1) forwards;animation-delay:calc(var(--d,0) * 1ms)}
  @keyframes kbIn{to{opacity:1;transform:none}}
  .kb-pos{font:800 20px "Space Grotesk",system-ui,sans-serif;text-align:center;color:#ffd54a;text-shadow:0 2px 0 #0006}
  .kb-av{width:44px;height:44px;border-radius:50%;background:#fff2;display:grid;place-items:center;overflow:hidden;line-height:0;box-shadow:0 0 0 2px #fff4}
  .kb-bar{position:relative;height:44px;border-radius:12px;background:#ffffff18;overflow:hidden;min-width:0}
  .kb-bar i{position:absolute;left:0;top:0;bottom:0;border-radius:12px;background:var(--c);width:0;transition:width 1.1s cubic-bezier(.2,.9,.2,1);transition-delay:calc(var(--d,0) * 1ms + 250ms);box-shadow:inset 0 -4px 0 #0003}
  .kb-bar b{position:absolute;left:12px;right:8px;top:50%;transform:translateY(-50%);font:700 16px/1.1 "Inter",system-ui,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:0 1px 3px #0009}
  .kb-end{display:flex;flex-direction:column;align-items:flex-end;min-width:64px;line-height:1.05}
  .kb-sc{font:800 20px "Space Grotesk",system-ui,sans-serif;font-variant-numeric:tabular-nums}
  .kb-meta{display:flex;gap:6px;align-items:center;font-size:12px;font-weight:800;min-height:16px}
  .kb-gain{color:#7dffa8}.kb-mv.up{color:#7dffa8}.kb-mv.down{color:#ff8a98}.kb-mv.same{opacity:.5}
  .kb-row.me .kb-bar{outline:3px solid #ffd54a}
  .kb-row.me .kb-pos{color:#fff}
  .kb-gap{text-align:center;letter-spacing:.4em;opacity:.6;margin:-2px 0}
  .kb-note{text-align:center;font-size:13px;opacity:.8;margin:14px 0 0}

  /* podio */
  .pd-wrap{margin:14px 12px;border-radius:22px;padding:18px 12px 22px;color:#fff;overflow:hidden;position:relative;min-height:440px;
    background:radial-gradient(120% 90% at 50% 0%,#7a2fc4 0%,#3b1d8a 45%,#150f3b 100%);box-shadow:0 10px 30px #1a124b66}
  .pd-title{font:800 30px/1.1 "Space Grotesk",system-ui,sans-serif;text-align:center;margin:6px 0 4px;text-shadow:0 3px 0 #0005}
  .pd-sub{text-align:center;opacity:.85;font-size:14px;margin:0 0 6px}
  .pd-stage{display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:8px;align-items:end;margin-top:12px;min-height:290px}
  .pd-col{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:0;opacity:0;transform:translateY(40px)}
  .pd-col.show{opacity:1;transform:none;transition:all .7s cubic-bezier(.2,1.3,.4,1)}
  .pd-col .medal{font-size:30px;line-height:1;margin-bottom:2px}
  .pd-col .av{width:76px;height:76px;border-radius:50%;background:#fff2;display:grid;place-items:center;overflow:hidden;line-height:0;box-shadow:0 0 0 3px #fff6}
  .pd-col.p1 .av{width:96px;height:96px;box-shadow:0 0 0 4px #ffd54a,0 0 30px #ffd54a99}
  .pd-col .nm{font:700 15px/1.15 "Inter",system-ui,sans-serif;text-align:center;margin:6px 2px 0;max-width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word}
  .pd-col .pts{font:800 16px "Space Grotesk",system-ui,sans-serif;color:#ffd54a;margin:2px 0 6px;font-variant-numeric:tabular-nums}
  .pd-col .blk{width:100%;border-radius:12px 12px 0 0;display:grid;place-items:start center;padding-top:8px;font:800 34px "Space Grotesk",system-ui,sans-serif;box-shadow:inset 0 5px 0 #fff4}
  .pd-col.p1 .blk{height:130px;background:linear-gradient(#ffd54a,#e8a917);color:#6b4a00}
  .pd-col.p2 .blk{height:92px;background:linear-gradient(#e3e8f2,#aeb8cc);color:#4a5568}
  .pd-col.p3 .blk{height:64px;background:linear-gradient(#e6a56b,#b8743a);color:#5e3412}
  .pd-col.empty{visibility:hidden}
  .pd-rest{margin-top:18px;display:flex;flex-direction:column;gap:6px;opacity:0;transition:opacity .8s}
  .pd-rest.show{opacity:1}
  .pd-rest div{display:grid;grid-template-columns:28px 34px minmax(0,1fr) auto;gap:8px;align-items:center;background:#ffffff15;border-radius:10px;padding:5px 10px;font-weight:600}
  .pd-rest .me{outline:2px solid #ffd54a}
  .pd-rest span.n{opacity:.8;font-weight:800}
  .pd-rest .t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .pd-rest .s{font-variant-numeric:tabular-nums;font-weight:800}
  .pd-mine{text-align:center;margin:14px 0 0;font-weight:700;opacity:0;transition:opacity .8s}
  .pd-mine.show{opacity:1}
  .cf{position:absolute;top:-14px;width:9px;height:15px;border-radius:2px;opacity:0;animation:cfFall linear forwards;pointer-events:none;z-index:3}
  @keyframes cfFall{0%{opacity:1;transform:translateY(0) rotate(0)}100%{opacity:.9;transform:translateY(520px) rotate(720deg)}}
  @media (prefers-reduced-motion:reduce){.kb-row{animation-duration:.01s;animation-delay:0s}.pd-col.show{transition:none}.cf{display:none}}
  `;
  document.head.appendChild(st);

  /* ---------- música ---------- */
  const SILENT = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
  const TR = { espera:["audio/musica-espera.mp3",true,.55], podium:["audio/musica-podium.mp3",false,.9] };
  const MUS = new Audio(); MUS.preload = "auto"; MUS.setAttribute("playsinline","");
  let want = null, cur = null, doneTrack = null, muted = false, enabled = true, fadeT = null;
  try{ muted = localStorage.getItem("caac_mute")==="1"; }catch(e){}
  MUS.onended = () => { if(cur && !TR[cur][1]) doneTrack = cur; };
  function fadeOut(){
    clearInterval(fadeT); if(MUS.paused) return;
    fadeT = setInterval(()=>{ try{ MUS.volume = Math.max(0, MUS.volume-.08); }catch(e){ MUS.pause(); clearInterval(fadeT); return; }
      if(MUS.volume<=.01){ MUS.pause(); clearInterval(fadeT); } },60);
  }
  function apply(){
    if(!want || muted || !enabled){ cur = null; fadeOut(); return; }
    if(cur===want && !MUS.paused) return;
    if(doneTrack===want) return;
    clearInterval(fadeT);
    cur = want; const t = TR[want];
    MUS.src = t[0]; MUS.loop = t[1]; try{ MUS.volume = t[2]; }catch(e){} MUS.currentTime = 0;
    const p = MUS.play(); if(p && p.catch) p.catch(()=>{ cur = null; });
  }
  window.Music = {
    set(name){ name = name||null; if(name!==want){ want = name; doneTrack = null; } apply(); },
    enabled(v){ enabled = v!==false; apply(); },
    mute(v){ muted = !!v; try{ localStorage.setItem("caac_mute", muted?"1":"0"); }catch(e){} apply(); },
    get muted(){ return muted; },
    // se llama en cada toque del usuario: si algo debería sonar, arranca; si no, solo desbloquea el elemento
    gesture(){
      if(want && !muted && enabled && (MUS.paused) && doneTrack!==want){ apply(); return; }
      if(MUS.paused && !cur){ try{ MUS.src = SILENT; MUS.loop = false; const p = MUS.play(); if(p&&p.then) p.then(()=>MUS.pause()).catch(()=>{}); }catch(e){} }
    }
  };
  ["touchend","pointerdown","click","keydown"].forEach(ev=>document.addEventListener(ev, ()=>Music.gesture(), {passive:true}));

  /* ---------- marcador tipo Kahoot ---------- */
  function ordered(list, key){
    return list.slice().sort((a,b)=> (key(b)-key(a)) || String(a.name).localeCompare(String(b.name)));
  }
  // list: jugadores con {id,name,av,score,by}. opt: {stop, meId, max, title, sub}
  window.rankBoard = function(list, opt){
    opt = opt||{};
    const stop = opt.stop, max = opt.max||5;
    const gain = p => (p.by && p.by[stop]) || 0;
    const cur = ordered(list, p=>p.score||0);
    const prev = ordered(list, p=>(p.score||0)-gain(p));
    const prevPos = {}; prev.forEach((p,i)=>prevPos[p.id]=i+1);
    const top = cur.slice(0,max);
    const meIdx = cur.findIndex(p=>p.id===opt.meId);
    const showMe = meIdx>=max;
    const maxScore = Math.max(1, ...cur.map(p=>p.score||0));
    const row = (p,i,delay)=>{
      const g = gain(p), pos = i+1, d = prevPos[p.id]-pos;
      const mv = stop==null?"":(d>0?`<span class="kb-mv up">▲${d}</span>`:d<0?`<span class="kb-mv down">▼${-d}</span>`:`<span class="kb-mv same">＝</span>`);
      const w = Math.max(16, Math.round((p.score||0)/maxScore*100));
      return `<div class="kb-row ${p.id===opt.meId?"me":""}" style="--d:${delay};--c:${OC[i%OC.length]}">
        <span class="kb-pos">${pos}</span><span class="kb-av">${avSVG(p.av,44)}</span>
        <span class="kb-bar"><i data-w="${w}"></i><b>${esc(p.name)}</b></span>
        <span class="kb-end"><span class="kb-sc" data-to="${p.score||0}" data-from="${(p.score||0)-g}">${(p.score||0)-g}</span>
        <span class="kb-meta">${g?`<span class="kb-gain">+${g}</span>`:""}${mv}</span></span></div>`;
    };
    const n = top.length + (showMe?1:0);
    let html = top.map((p,i)=>row(p,i,(n-1-i)*140)).join("");
    if(showMe) html += `<div class="kb-gap">· · ·</div>` + row(cur[meIdx], meIdx, 0);
    return `<div class="kb-wrap" data-kb="1">
      <div class="kb-title">${opt.title||"🏆 Marcador"}</div>
      <p class="kb-sub">${opt.sub||""}</p>
      <div class="kb-rows">${html||'<p class="kb-note">Todavía no hay puntuaciones.</p>'}</div>
      ${opt.note?`<p class="kb-note">${opt.note}</p>`:""}</div>`;
  };
  // Pone en marcha las barras y los contadores de un marcador ya insertado en el DOM.
  window.rankAnimate = function(root){
    if(!root) return;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      root.querySelectorAll(".kb-bar i").forEach(i=>i.style.width = i.dataset.w+"%");
    }));
    root.querySelectorAll(".kb-sc").forEach(el=>{
      const from = +el.dataset.from, to = +el.dataset.to; if(from===to) return;
      const row = el.closest(".kb-row"), d = (parseFloat(getComputedStyle(row).getPropertyValue("--d"))||0) + 450, t0 = performance.now(), dur = 1100;
      const tick = now=>{ const k = Math.min(1, Math.max(0,(now-t0-d)/dur)); el.textContent = Math.round(from+(to-from)*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
  };

  /* ---------- podio ---------- */
  let podTimers = [];
  window.podiumView = function(list, meId, opt){
    opt = opt||{};
    const cur = ordered(list, p=>p.score||0);
    const col = (i,medal)=>{
      const p = cur[i];
      if(!p) return `<div class="pd-col p${i+1} empty"><div class="blk">${i+1}</div></div>`;
      return `<div class="pd-col p${i+1}" data-i="${i}"><div class="medal">${medal}</div><div class="av">${avSVG(p.av,i===0?96:76)}</div>
        <div class="nm">${esc(p.name)}</div><div class="pts">${p.score||0}</div><div class="blk">${i+1}</div></div>`;
    };
    const rest = cur.slice(3,10).map((p,i)=>`<div class="${p.id===meId?"me":""}"><span class="n">${i+4}</span>${avSVG(p.av,30)}<span class="t">${esc(p.name)}</span><span class="s">${p.score||0}</span></div>`).join("");
    const mePos = cur.findIndex(p=>p.id===meId)+1;
    return `<div class="pd-wrap" data-pd="1">
      <div class="pd-title">${opt.title||"🏁 ¡Podio final!"}</div>
      <p class="pd-sub">${opt.sub||"Gracias por la visita al monasterio"}</p>
      <div class="pd-stage">${col(1,"🥈")}${col(0,"🥇")}${col(2,"🥉")}</div>
      ${rest?`<div class="pd-rest">${rest}</div>`:""}
      ${meId&&mePos?`<p class="pd-mine">${mePos<=3?"¡Estás en el podio! ":""}Tu posición: <b>${mePos}º</b> de ${cur.length}</p>`:""}
    </div>`;
  };
  // Revela 3.º → 2.º → 1.º con suspense y confeti.
  window.podiumReveal = function(root){
    podTimers.forEach(clearTimeout); podTimers = [];
    if(!root) return;
    const by = i => root.querySelector(`.pd-col[data-i="${i}"]`);
    const show = (el,ms)=>{ if(!el) return; podTimers.push(setTimeout(()=>el.classList.add("show"),ms)); };
    const present = [2,1,0].filter(i=>by(i));
    let t = 700;
    present.forEach(i=>{ show(by(i), t); if(i===0) podTimers.push(setTimeout(()=>confetti(root.querySelector(".pd-wrap")||root), t+200)); t += (i===2?2200:2800); });
    podTimers.push(setTimeout(()=>{ root.querySelectorAll(".pd-rest,.pd-mine").forEach(e=>e.classList.add("show")); }, t));
  };
  function confetti(box){
    const cols = ["#ffd54a","#e14b5e","#2b6fe0","#39c27a","#8a4fd8","#f0742e","#fff"];
    for(let k=0;k<70;k++){
      const s = document.createElement("i"); s.className = "cf";
      s.style.left = Math.random()*100+"%"; s.style.background = cols[k%cols.length];
      s.style.animationDuration = (2.2+Math.random()*2.2)+"s"; s.style.animationDelay = (Math.random()*1.2)+"s";
      s.style.transform = "rotate("+Math.random()*360+"deg)";
      box.appendChild(s); setTimeout(()=>s.remove(), 6500);
    }
  }
})();
