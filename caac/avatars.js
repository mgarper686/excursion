(function(){
const SK={light:['#f3d3b6','#d9a888','#c98d72'],fair:['#f6dcc6','#e0b49a','#cf977d'],olive:['#e6bf98','#c99a73','#b07e5b'],dark:['#8a5a3c','#6d4329','#5a3520'],ruddy:['#eec3a4','#d39a7c','#bf8064'],pale:['#f8e4d4','#e6c2aa','#d4a68c']};
const OUT={
 oval:'M35,46 C35,29 65,29 65,46 C65,60 58,71 50,71 C42,71 35,60 35,46Z',
 round:'M35,46 C35,29 65,29 65,46 C65,62 60,72 50,72 C40,72 35,62 35,46Z',
 square:'M35,46 C35,29 65,29 65,46 C65,59 63,67 57.5,70 Q50,72.6 42.5,70 C37,67 35,59 35,46Z',
 heavy:'M34.5,46 C34.5,29 65.5,29 65.5,46 C66,60 64,69 57,72.5 Q50,75 43,72.5 C36,69 34,60 34.5,46Z',
 narrow:'M36,46 C36,29 64,29 64,46 C64,61 57,72 50,72 C43,72 36,61 36,46Z'};
function face(o){const[s,sh,sd]=SK[o.skin||'light'];const ey=o.eyeY||49;const iris=o.iris||'#4a3526';
  const brow=o.brow||'#5a4330';const bw=o.browW||1.6;const er=o.er||1;const my=o.my||0;
  const sx=o.w||1,sy=o.h||1;const T=(sx!==1||sy!==1)?` transform="translate(50 46) scale(${sx} ${sy}) translate(-50 -46)"`:'';
  const chinY=46+25*sy;
  const browL=o.frown?`M39,${ey-6} Q43,${ey-8.2} 47,${ey-5.6}`:`M39,${ey-5.6} Q43,${ey-8} 47,${ey-6.4}`;
  const browR=o.frown?`M53,${ey-5.6} Q57,${ey-8.2} 61,${ey-6}`:`M53,${ey-6.4} Q57,${ey-8} 61,${ey-5.6}`;
  const mouth=o.mouth||`M45.5,64 Q50,${o.smile?67:65.6} 54.5,64`;
  const lips=o.lips?`<path d="M45.6,63.8 Q48,62.6 50,63.4 Q52,62.6 54.4,63.8 Q50,67 45.6,63.8Z" fill="${o.lips}" opacity=".85"/>`:'';
  const outline=o.shape?OUT[o.shape]:`M35,46 C35,29 65,29 65,46 C65,${o.round?62:60} ${o.round?60:58},${o.round?72:71} 50,${o.round?72:71} C${o.round?40:42},${o.round?72:71} 35,${o.round?62:60} 35,46Z`;
  const ex=15.4*sx;
  let nose;
  switch(o.nose){
   case 'long':nose=`<path d="M50.6,${ey+1} Q49.6,${ey+9} 47.8,${ey+11.4} Q50,${ey+13} 53,${ey+11.4}" stroke="${sd}" stroke-width="1.15" fill="none" stroke-linecap="round"/><path d="M46.6,${ey+10.4} Q46.2,${ey+12} 47.6,${ey+12.2} M53.6,${ey+10.6} Q54,${ey+12} 52.8,${ey+12.2}" stroke="${sd}" stroke-width=".8" fill="none" opacity=".7"/>`;break;
   case 'hook':nose=`<path d="M50.4,${ey} Q53.4,${ey+5} 51.2,${ey+9.6} Q49.6,${ey+12.2} 47.4,${ey+11.6} M47.4,${ey+11.6} Q49.6,${ey+13.4} 53.2,${ey+12}" stroke="${sd}" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M46,${ey+10.2} Q45.4,${ey+12} 47.2,${ey+12.4} M54.2,${ey+10.4} Q54.8,${ey+12} 53.2,${ey+12.3}" stroke="${sd}" stroke-width=".85" fill="none" opacity=".75"/><path d="M51.2,${ey+2} Q53.2,${ey+5.6} 51.6,${ey+9.4}" stroke="#fff" stroke-width=".9" opacity=".25" fill="none"/>`;break;
   case 'big':nose=`<path d="M50.6,${ey+1} Q49.4,${ey+8} 48,${ey+10.2}" stroke="${sd}" stroke-width="1.15" fill="none" stroke-linecap="round"/><ellipse cx="50.2" cy="${ey+10.6}" rx="3.4" ry="2.3" fill="${sd}" opacity=".28"/><path d="M45.4,${ey+9.6} Q44.6,${ey+12} 47.4,${ey+12.2} Q50,${ey+13.4} 52.8,${ey+12.2} Q55.6,${ey+12} 54.8,${ey+9.6}" stroke="${sd}" stroke-width="1" fill="none" stroke-linecap="round"/>`;break;
   case 'small':nose=`<path d="M50.4,${ey+3} Q49.4,${ey+7.6} 48.8,${ey+8.8} Q50,${ey+9.8} 51.8,${ey+9}" stroke="${sd}" stroke-width="1" fill="none" stroke-linecap="round"/>`;break;
   default:nose=`<path d="M50.5,${ey+1} Q49,${ey+8} 48.2,${ey+9.6} Q50,${ey+11} 52.6,${ey+9.8}" stroke="${sd}" stroke-width="1.1" fill="none" stroke-linecap="round"/>`;
  }
  const lid=o.lids?`<path d="M${43-3.6*er},${ey-.2} Q43,${ey-2.6*er-.6} ${43+3.6*er},${ey-.2} L${43+3.6*er},${ey-1.2*er} Q43,${ey-3*er-1} ${43-3.6*er},${ey-1.2*er}Z M${57-3.6*er},${ey-.2} Q57,${ey-2.6*er-.6} ${57+3.6*er},${ey-.2} L${57+3.6*er},${ey-1.2*er} Q57,${ey-3*er-1} ${57-3.6*er},${ey-1.2*er}Z" fill="${s}"/><path d="M${43-3.6*er},${ey-.4} Q43,${ey-2.2*er} ${43+3.6*er},${ey-.4} M${57-3.6*er},${ey-.4} Q57,${ey-2.2*er} ${57+3.6*er},${ey-.4}" stroke="${sd}" stroke-width=".8" fill="none" opacity=".8"/>`:'';
  const bags=o.bags?`<path d="M40,${ey+2.6} Q43,${ey+4.2} 46,${ey+2.6} M54,${ey+2.6} Q57,${ey+4.2} 60,${ey+2.6}" stroke="${sd}" stroke-width=".7" fill="none" opacity=".6"/>`:'';
  const folds=o.folds?`<path d="M44.4,${ey+10} Q41.6,${ey+14} 43.4,${ey+18} M55.6,${ey+10} Q58.4,${ey+14} 56.6,${ey+18}" stroke="${sd}" stroke-width=".9" fill="none" opacity=".55" stroke-linecap="round"/>`:'';
  const dchin=o.dchin?`<path d="M41,${chinY-.5} Q50,${chinY+5.5} 59,${chinY-.5} Q57,${chinY+3.4} 50,${chinY+4} Q43,${chinY+3.4} 41,${chinY-.5}Z" fill="${s}"/><path d="M42,${chinY+.6} Q50,${chinY+5.4} 58,${chinY+.6}" stroke="${sd}" stroke-width=".9" fill="none" opacity=".6"/>`:'';
  const cleft=o.cleft?`<path d="M50,${chinY-3.6} L50,${chinY-1.6}" stroke="${sd}" stroke-width=".9" stroke-linecap="round" opacity=".7"/>`:'';
  const pox=o.pox?[[40,57],[41.6,59.6],[58.6,57.4],[60,60],[39.4,60.8],[57.4,61.4],[44,55.6],[56,55]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r=".45" fill="${sd}" opacity=".35"/>`).join(''):'';
  const blush=o.blush===false?'':`<ellipse cx="42" cy="${ey+8}" rx="3.6" ry="2.2" fill="#e08a7a" opacity="${o.blush||.22}"/><ellipse cx="58" cy="${ey+8}" rx="3.6" ry="2.2" fill="#e08a7a" opacity="${o.blush||.22}"/>`;
  return `${o.scalp?`<ellipse cx="50" cy="38" rx="16" ry="12.5" fill="${o.scalp}"/>`:''}
  <path d="M${o.neckW?50-o.neckW:43},66 L${o.neckW?50-o.neckW:43},80 Q50,84 ${o.neckW?50+o.neckW:57},80 L${o.neckW?50+o.neckW:57},66Z" fill="${sh}"/>
  <ellipse cx="${50-ex+.8}" cy="${ey+3}" rx="2.6" ry="4.2" fill="${sh}"/><ellipse cx="${50+ex-.8}" cy="${ey+3}" rx="2.6" ry="4.2" fill="${sh}"/>
  <g${T}><path d="${outline}" fill="${s}"/>
  <path d="M58,33 C64,37 66,46 64,56 C62,64 57,70 50,71 C56,66 60,58 60,48 C60,41 59,36 58,33Z" fill="${sd}" opacity=".35"/></g>${dchin}
  ${blush}${pox}
  <ellipse cx="43" cy="${ey}" rx="${3.3*er}" ry="${2*er}" fill="#fff"/><ellipse cx="57" cy="${ey}" rx="${3.3*er}" ry="${2*er}" fill="#fff"/>
  <circle cx="43.3" cy="${ey}" r="${1.6*er}" fill="${iris}"/><circle cx="57.3" cy="${ey}" r="${1.6*er}" fill="${iris}"/>
  <circle cx="43.3" cy="${ey}" r="${.7*er}" fill="#1a1412"/><circle cx="57.3" cy="${ey}" r="${.7*er}" fill="#1a1412"/>
  <circle cx="43.8" cy="${ey-.5}" r=".45" fill="#fff"/><circle cx="57.8" cy="${ey-.5}" r=".45" fill="#fff"/>
  <path d="M${43-3.4*er},${ey-.6} Q43,${ey-2.9*er} ${43+3.4*er},${ey-.4}" stroke="#3b2a20" stroke-width=".9" fill="none"/><path d="M${57-3.4*er},${ey-.4} Q57,${ey-2.9*er} ${57+3.4*er},${ey-.6}" stroke="#3b2a20" stroke-width=".9" fill="none"/>
  ${lid}${bags}
  <path d="${browL}" stroke="${brow}" stroke-width="${bw}" fill="none" stroke-linecap="round"/><path d="${browR}" stroke="${brow}" stroke-width="${bw}" fill="none" stroke-linecap="round"/>
  ${o.frown?`<path d="M49,${ey-6.4} L49.6,${ey-4} M51,${ey-6.4} L50.4,${ey-4}" stroke="${sd}" stroke-width=".7" opacity=".6"/>`:''}
  ${nose}${folds}${cleft}
  <g${my?` transform="translate(0 ${my})"`:''}>${lips}<path d="${mouth}" stroke="#8c4a3c" stroke-width="1.3" fill="none" stroke-linecap="round"/></g>
  ${o.extra||''}`}
const body=(coat,extra='')=>`<path d="M6,100 C8,84 26,76 50,76 C74,76 92,84 94,100Z" fill="${coat}"/><path d="M6,100 C8,84 26,76 50,76 C40,80 30,88 26,100Z" fill="#000" opacity=".12"/>${extra}`;
const cravat=(c='#f5f2ea')=>`<path d="M41,77 Q50,84 59,77 L56,92 Q50,96 44,92Z" fill="${c}"/><path d="M44,80 Q50,86 56,80" stroke="#d9d4c7" stroke-width="1" fill="none"/>`;
const jabot=`<path d="M42,77 Q50,82 58,77 L60,86 Q55,84 54,90 Q50,87 46,90 Q45,84 40,86Z" fill="#fbf8f0"/><path d="M44,86 Q50,90 56,86 M45,90 Q50,94 55,90" stroke="#ddd6c6" stroke-width="1" fill="none"/>`;
const curls=(pts,c,r=5.2)=>pts.map(([x,y,rr])=>`<circle cx="${x}" cy="${y}" r="${rr||r}" fill="${c}"/><circle cx="${x-1}" cy="${y-1.2}" r="${(rr||r)*.55}" fill="#fff" opacity=".18"/>`).join('');
// rollos horizontales de peluca (siglo XVIII)
const roll=(x,y,w,c,dark)=>`<rect x="${x-w/2}" y="${y-2.6}" width="${w}" height="5.2" rx="2.6" fill="${c}"/><path d="M${x-w/2+1.4},${y} h${w-2.8}" stroke="${dark}" stroke-width=".8" opacity=".6"/>`;
const pearls=(x0,x1,y,sag,n,r=1.2)=>Array.from({length:n},(_,i)=>{const t=i/(n-1);const x=x0+(x1-x0)*t;const yy=y+Math.sin(t*Math.PI)*sag;return `<circle cx="${x.toFixed(1)}" cy="${yy.toFixed(1)}" r="${r}" fill="#f7f3ea"/><circle cx="${(x-.35).toFixed(1)}" cy="${(yy-.35).toFixed(1)}" r="${r*.35}" fill="#fff"/>`}).join('');
const P={
 beethoven:{n:'Beethoven',bg:'#3d4a36',d:
  `<path d="M31,68 Q20,66 21,57 Q13,52 18,44 Q11,35 20,29 Q17,19 28,17 Q30,9 41,11 Q47,5 55,9 Q63,5 69,12 Q80,11 81,22 Q89,28 83,36 Q91,44 83,51 Q88,59 79,61 Q78,68 69,68 L66,50 L34,50Z" fill="#86847f"/>
   <path d="M22,56 Q18,48 23,42 Q19,34 26,28 M27,62 Q24,54 29,48 M78,56 Q82,48 77,42 Q81,34 74,28 M73,62 Q76,54 71,48 M30,20 Q36,14 44,16 M56,13 Q64,12 70,18" stroke="#5f5d59" stroke-width="1.6" fill="none" stroke-linecap="round"/>
   <path d="M20,46 Q22,40 27,38 M24,34 Q28,28 34,27 M80,46 Q78,40 73,38 M76,34 Q72,28 66,27 M36,16 Q44,12 50,14 M54,12 Q60,10 66,14" stroke="#bdbbb5" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".85"/>`+
  body('#22252c')+
  face({scalp:'#86847f',skin:'ruddy',shape:'square',w:1.08,h:1.02,frown:true,brow:'#4a4440',browW:2.7,iris:'#3a3230',er:1.05,nose:'big',lips:'#c97a6a',mouth:'M44.8,65.4 Q47.4,64.2 50,64.6 Q52.6,64.2 55.2,65.4',my:.8,cleft:true,folds:true,bags:true,blush:.42,neckW:8,
    extra:`<path d="M36,77 Q50,70 64,77 L66,88 Q50,94 34,88Z" fill="#c3262c"/><path d="M39,80 Q50,75 61,80 M41,84.6 Q50,80.6 59,84.6" stroke="#8f1a20" stroke-width="1.2" fill="none"/><path d="M44,78 Q50,82 56,78" stroke="#e45a5e" stroke-width="1" fill="none" opacity=".7"/>
     <path d="M34,79 L38,63.5 L47.6,74.6 L41,79Z" fill="#f6f4ee" stroke="#cfcac0" stroke-width=".6"/><path d="M66,79 L62,63.5 L52.4,74.6 L59,79Z" fill="#f6f4ee" stroke="#cfcac0" stroke-width=".6"/>
     <path d="M10,100 C14,88 24,80 35,79 L42,100Z M90,100 C86,88 76,80 65,79 L58,100Z" fill="#1b1d23"/>`})+
  `<path d="M33,46 C31,36 33,28 40,24 Q50,19 60,23 C67,27 69,36 67,46 C66,40 64,36 61,34 Q56,30 52,32.4 Q49.6,29.6 46,31.4 Q41,31 38,35 C35,38 34,42 33,46Z" fill="#86847f"/>
   <path d="M33,45 Q27,46 24.6,53 Q28.6,50.6 31,52.6 Q30,48 34,47.6Z M67,45 Q73,46 75.4,53 Q71.4,50.6 69,52.6 Q70,48 66,47.6Z" fill="#86847f"/>
   <path d="M38,34 Q40,27 47,25 M46,31 Q48,25 55,23.6 M52,32 Q57,27 63,28 M61,34 Q65,31 66,38" stroke="#bdbbb5" stroke-width="1" fill="none" stroke-linecap="round"/>
   <path d="M35,40 Q36,33 41,29 M65,40 Q64,33 59,29 M24,50 Q20,44 24,38 Q22,32 28,30 M76,50 Q80,44 76,38 Q78,32 72,30 M40,22 Q46,18 52,20 Q58,17 63,21" stroke="#66645f" stroke-width="1" fill="none" stroke-linecap="round"/>`},
 mozart:{n:'Mozart',bg:'#3b342c',d:
  `<path d="M31,40 C29,48 31,54 35,56 L37,46 L63,46 L65,56 C69,54 71,48 69,40Z" fill="#c9c5bd"/>`+
  `<path d="M2,100 C4,80 22,71 50,71 C78,71 96,80 98,100Z" fill="#c22a22"/><path d="M2,100 C4,80 22,71 50,71 C38,76 26,86 22,100Z" fill="#000" opacity=".12"/>`+
  `<path d="M14,100 C17,88 26,80 38,77 M86,100 C83,88 74,80 62,77" stroke="#e2b450" stroke-width="2.4" fill="none"/><path d="M17,94 C20,86 27,81 35,79 M83,94 C80,86 73,81 65,79" stroke="#e2b450" stroke-width="1" fill="none" stroke-dasharray="1.4 1.2"/>`+
  face({scalp:'#d9d6cf',skin:'fair',shape:'oval',w:1.05,h:.98,er:1.1,iris:'#6b7f96',brow:'#8f7a62',browW:1.7,mouth:'M46,64.2 Q50,66.6 54,64.2',nose:'long',my:.6,blush:.36,neckW:7,
    extra:`<path d="M42.6,69 Q50,72.6 57.4,69 L57.6,75.6 Q50,79 42.4,75.6Z" fill="#f7f5ef"/><path d="M43,72 Q50,75.4 57,72" stroke="#dcd8ce" stroke-width=".7" fill="none"/>
     <path d="M36,79 Q50,85 64,79 L64,74 Q50,80 36,74Z" fill="#b8241e"/><path d="M37,76.4 Q50,82.4 63,76.4" stroke="#e2b450" stroke-width="1.6" fill="none" stroke-dasharray="1.6 1"/>
     <path d="M51,79 Q58,77.6 61,83 Q56,82 54,85 Q52.6,82 49,83Z" fill="#f4f1e8"/><path d="M52.4,81 Q56,80.2 58.6,82.4" stroke="#d8d2c4" stroke-width=".6" fill="none"/>`})+
  `<path d="M32,48 C29,26 40,18 50.6,18 C61,18 71,26 68,48 C66,38 61,31 51,30 C42,30.6 35,37 32,48Z" fill="#d9d6cf"/>
   <path d="M38,27 Q48,22 60,24 M36,33 Q46,26 58,27 M40,30.6 Q50,27 62,30" stroke="#b9b5ad" stroke-width=".9" fill="none"/><path d="M42,22.4 Q50,20 58,21.6" stroke="#f1efea" stroke-width="1.2" fill="none"/>
   <rect x="27" y="40" width="11" height="8.4" rx="4.2" fill="#d2cec6"/><rect x="62" y="40" width="11" height="8.4" rx="4.2" fill="#d2cec6"/>
   <path d="M28.6,44.2 h7.8 M63.6,44.2 h7.8" stroke="#a9a59d" stroke-width="1"/><path d="M29,41.6 Q32.6,40.6 36,41.6 M64,41.6 Q67.6,40.6 71,41.6" stroke="#eeece6" stroke-width=".9" fill="none"/>`},
 bach:{n:'Bach',bg:'#23384d',d:
  curls([[26,44,7.4],[25,56,7.4],[26,68,7.4],[29,80,7],[74,44,7.4],[75,56,7.4],[74,68,7.4],[71,80,7],[31,32,7.2],[69,32,7.2]],'#e6e2d8')+
  body('#2b2f36',cravat('#f4f1ea')+`<circle cx="62" cy="90" r="1.3" fill="#8a7a5a"/><circle cx="64" cy="96" r="1.3" fill="#8a7a5a"/>`)+
  face({scalp:'#eeeae1',skin:'light',shape:'heavy',w:1.08,h:1.02,frown:true,lids:true,bags:true,folds:true,dchin:true,iris:'#3d3028',brow:'#4a3a2e',browW:2.6,nose:'big',mouth:'M46,65.4 Q50,64.4 54,65.4',my:.6,blush:.3,neckW:9})+
  `<path d="M33,42 C31,23 43,16 50,16 C58,16 69,23 67,42 C63,32 58,27.5 50,27.5 C42,27.5 37,32 33,42Z" fill="#eeeae1"/>`+curls([[38,21,5.2],[46,17.6,5.4],[54,17.6,5.4],[62,21,5.2]],'#eeeae1')+curls([[32,38,4.6],[68,38,4.6]],'#e6e2d8')},
 vivaldi:{n:'Vivaldi',bg:'#127a66',d:
  `<path d="M29,44 C24,62 26,78 34,82 L42,80 L40,60Z M71,44 C76,62 74,78 66,82 L58,80 L60,60Z" fill="#b5432a"/>
   <path d="M30,56 Q28,66 32,76 M70,56 Q72,66 68,76" stroke="#8e3220" stroke-width="1.2" fill="none"/>`+
  body('#1d1d22',`<path d="M44,77 L56,77 L55,81 L45,81Z" fill="#fff"/><path d="M46.4,81 L45.8,90 L49.4,90 L49.6,81Z M50.4,81 L50.6,90 L54.2,90 L53.6,81Z" fill="#fff"/>`)+
  face({scalp:'#c24e2f',skin:'fair',shape:'narrow',h:1.06,iris:'#5a4a30',brow:'#a2442a',browW:1.8,lips:'#cf7f73',nose:'hook',my:1.4,smile:true})+
  `<path d="M33,48 C29,26 41,17 52,18 C63,18 71,28 67,48 C64,36 60,30 54,29 C50,32 44,33 40,31 C36,36 34,42 33,48Z" fill="#c24e2f"/><path d="M40,31 C44,27 50,24 58,23 M54,29 C58,26 62,24 64,25" stroke="#9c3b22" stroke-width="1.2" fill="none"/><path d="M33,48 Q31,56 34,62 M67,48 Q69,56 66,62" stroke="#c24e2f" stroke-width="3.4" fill="none" stroke-linecap="round"/>`},
 scarlatti:{n:'Scarlatti',bg:'#5a3d7a',d:
  `<path d="M31,42 C27,62 30,74 37,78 L63,78 C70,74 73,62 69,42Z" fill="#cfc9bd"/>`+
  curls([[31,58,4.6],[32,66,4.6],[69,58,4.6],[68,66,4.6]],'#d6d0c4')+
  body('#2c2420',jabot+`<path d="M30,84 Q34,92 33,100 M70,84 Q66,92 67,100" stroke="#b8923e" stroke-width="1.4" fill="none"/><circle cx="62" cy="92" r="4.4" fill="#e9d48a"/><path d="M62,88.6 L62,96 M59,90.6 Q62,92.6 65,90.6 M60.2,94.6 L62,96 L63.8,94.6" stroke="#c0202a" stroke-width="1.5" fill="none" stroke-linecap="round"/>`)+
  face({scalp:'#dcd6ca',skin:'light',shape:'round',w:1.06,h:1.02,dchin:true,iris:'#3b2a20',brow:'#6d5a45',browW:1.8,lips:'#cf8679',mouth:'M45.5,64.2 Q50,66.6 54.5,64.2',nose:'long',my:.6,blush:.28,neckW:8.5})+
  `<path d="M33,45 C32,24 44,18 50,18 C57,18 68,24 67,45 C65,34 58,27.5 50,27.5 C42,27.5 35,34 33,45Z" fill="#dcd6ca"/>`+curls([[32.6,46,4.4],[32,53,4.4],[67.4,46,4.4],[68,53,4.4]],'#d6d0c4')},
 haydn:{n:'Haydn',bg:'#8a5a20',d:
  
  body('#5b3a26',cravat('#f2eee6')+`<path d="M30,84 Q36,80 42,79 M70,84 Q64,80 58,79" stroke="#3f2618" stroke-width="1.4" fill="none"/>`)+
  face({scalp:'#d9d4ca',skin:'olive',shape:'narrow',h:1.08,iris:'#2e2218',brow:'#3a2c22',browW:2,mouth:'M46,65.4 Q50,67 54,65.4',nose:'hook',my:1.6,pox:true,folds:true,blush:.18})+
  `<path d="M34,44 C32,26 44,20 50,20 C58,20 68,26 66,44 C63,34 58,29 50,29 C42,29 37,34 34,44Z" fill="#d9d4ca"/><path d="M40,25 Q50,21 60,25" stroke="#bdb6aa" stroke-width="1" fill="none"/>`+
  roll(34.4,45,6.6,'#d9d4ca','#b2ab9f')+roll(65.6,45,6.6,'#d9d4ca','#b2ab9f')},
 chopin:{n:'Chopin',bg:'#2d4f7c',d:
  
  body('#1b1e26',`<path d="M42,76 L46,76 L44,82Z M58,76 L54,76 L56,82Z" fill="#f4f1ea"/><path d="M42,79 L50,82 L58,79 L56,85 L50,83 L44,85Z" fill="#111318"/><path d="M47,81 h6 v3 h-6Z" fill="#111318"/>`)+
  face({scalp:'#7a4e2c',skin:'pale',shape:'narrow',w:.94,h:1.08,iris:'#7b8a72',brow:'#6a4628',browW:1.5,lips:'#cf8a80',mouth:'M46,65.4 Q50,66 54,65.4',nose:'hook',my:1.8,blush:.14,neckW:6})+
  `<path d="M33,52 C29,30 39,18 54,19 C66,20 72,32 67,52 C66,42 63,35 58,32 C52,32 44,30 40,26 C38,32 35,40 33,52Z" fill="#7a4e2c"/>
   <path d="M40,26 C46,28 54,30 60,30 C64,32 66,38 67,46 M44,22 C52,22 60,24 64,30" stroke="#5e3a1e" stroke-width="1.1" fill="none"/>
   <path d="M33,50 C32,56 33,60 36,62 C37,58 37,54 36.4,50Z M67,50 C68,56 67,60 64,62 C63,58 63,54 63.6,50Z" fill="#7a4e2c"/>`},
 chaikovski:{n:'Chaikovski',bg:'#4a5568',d:
  body('#2a2d33',`<path d="M42,77 L58,77 L55,83 L45,83Z" fill="#f4f1ea"/>`)+
  face({scalp:'#dcd7cf',skin:'light',w:1.02,iris:'#4f6f96',brow:'#a9a49c',browW:2,frown:true,mouth:'M46,62.5 Q50,63.5 54,62.5',bags:true})+
  `<path d="M35,52 C35,72 43,82 50,82 C57,82 65,72 65,52 C63,56 61,59 58,60 C54,58.4 46,58.4 42,60 C39,59 37,56 35,52Z" fill="#cfcac2"/>
   <path d="M38,64 Q41,72 44,76 M62,64 Q59,72 56,76 M46,66 Q47,74 48,79 M54,66 Q53,74 52,79" stroke="#aaa59c" stroke-width=".9" fill="none" opacity=".8"/>
   <path d="M41.5,61.6 Q46,57.4 50,59.4 Q54,57.4 58.5,61.6 Q54,61 50,61.2 Q46,61 41.5,61.6Z" fill="#bab4ab"/><path d="M47.4,63.4 Q50,64.6 52.6,63.4" stroke="#8c4a3c" stroke-width="1" fill="none"/>`+
  `<path d="M34,46 C32,30 40,20 52,20 C63,21 68,30 66,46 C65,38 62,33 58,31 C54,29 46,29 42,31 C38,33 35,38 34,46Z" fill="#dcd7cf"/><path d="M40,28 C46,24 54,24 62,28 M42,31 C47,27 54,27 60,30" stroke="#c0bab1" stroke-width="1" fill="none"/>`},
 verdi:{n:'Verdi',bg:'#1f6f43',d:
  body('#1e2026',`<path d="M30,82 C38,76 46,78 50,84 C54,78 62,76 70,82 L66,92 C58,86 54,88 50,96 C46,88 42,86 34,92Z" fill="#f4f2ec"/><path d="M36,86 Q42,84 48,90 M64,86 Q58,84 52,90" stroke="#d8d4ca" stroke-width="1" fill="none"/>`)+
  face({scalp:'#6a645e',skin:'olive',iris:'#2e2620',brow:'#3a342e',browW:2.2,mouth:'M46,62.5 Q50,63.5 54,62.5',frown:true,bags:true})+
  `<path d="M35,52 C35,72 43,82 50,82 C57,82 65,72 65,52 C63,56 61,59 58,60 C54,58.4 46,58.4 42,60 C39,59 37,56 35,52Z" fill="#5c5650"/>
   <path d="M38,64 Q41,72 44,77 M62,64 Q59,72 56,77 M47,67 Q47.6,74 48.6,80 M53,67 Q52.4,74 51.4,80" stroke="#8d8781" stroke-width="1" fill="none" opacity=".9"/>
   <path d="M41,61.6 Q46,57 50,59.2 Q54,57 59,61.6 Q54,61 50,61.2 Q46,61 41,61.6Z" fill="#4a4540"/><path d="M47.4,63.4 Q50,64.4 52.6,63.4" stroke="#8c4a3c" stroke-width="1" fill="none"/>
   <path d="M34,46 C33,40 34,36 36,34 L64,34 C66,36 67,40 66,46 C64,40 62,38 60,37 L40,37 C38,38 36,40 34,46Z" fill="#6a645e"/>
   <path d="M24,37 Q50,31 76,37 Q74,41 66,39.6 Q50,37.4 34,39.6 Q26,41 24,37Z" fill="#141518"/>
   <path d="M34,38 L36,12 Q50,9 64,12 L66,38 Q50,35 34,38Z" fill="#141518"/><path d="M35,33 Q50,30 65,33 L65.4,36.6 Q50,33.6 34.6,36.6Z" fill="#2c2e33"/><path d="M38,14 Q40,24 39,34" stroke="#3a3c42" stroke-width="1.4" fill="none"/>`},
 clara:{n:'Clara Schumann',bg:'#7a2e5a',d:
  `<ellipse cx="50" cy="27" rx="10" ry="6.4" fill="#2e2019"/>`+
  body('#22222e',`<path d="M38,78 Q50,90 62,78 L60,82 Q50,92 40,82Z" fill="#f1ece0"/><path d="M41,80.4 Q50,89 59,80.4" stroke="#d6cfbf" stroke-width=".8" fill="none" stroke-dasharray="1.4 1"/><circle cx="50" cy="90" r="2.2" fill="#e6c36a"/><circle cx="50" cy="90" r="1" fill="#b23a3a"/>`)+
  face({scalp:'#2e2019',skin:'fair',shape:'oval',h:1.04,er:1.12,iris:'#3a2a20',brow:'#2e2019',lips:'#c76f6b',browW:1.4,nose:'long',my:1,mouth:'M46,64.2 Q50,65.2 54,64.2'})+
  `<path d="M34,52 C30,32 40,24 50,24 C60,24 70,32 66,52 C65,44 62,37 50,34.5 C38,37 35,44 34,52Z" fill="#2e2019"/><path d="M50,24 L50,34.5" stroke="#5a4232" stroke-width=".9"/>
   <path d="M34,44 C33,50 34,55 37,57 C38.6,54 38.4,49 37,45Z M66,44 C67,50 66,55 63,57 C61.4,54 61.6,49 63,45Z" fill="#2e2019"/><path d="M35,48 Q36,52 37,55 M65,48 Q64,52 63,55" stroke="#4a362a" stroke-width=".7" fill="none"/>
   <path d="M38,30 Q44,28 49,30 M62,30 Q56,28 51,30" stroke="#4a362a" stroke-width=".8" fill="none"/>`},
 fanny:{n:'Fanny Mendelssohn',bg:'#b05a2a',d:
  `<ellipse cx="50" cy="22" rx="7" ry="5" fill="#2e211a"/>`+
  body('#3c4a6b',`<path d="M32,82 Q50,90 68,82" stroke="#f1ece2" stroke-width="3" fill="none"/>`+pearls(42,58,82,3.4,7,1))+
  face({scalp:'#2e211a',skin:'fair',shape:'oval',er:1.12,iris:'#2e221a',brow:'#2e211a',lips:'#c9726c',browW:1.5,smile:true})+
  `<path d="M35,48 C31,30 41,23 50,23 C59,23 69,30 65,48 C62,38 58,32 50,31.4 C42,32 38,38 35,48Z" fill="#2e211a"/><path d="M50,23 L50,31.4" stroke="#5a4232" stroke-width=".9"/>`+
  curls([[32.6,47,3.6],[31.8,53,3.6],[32.6,59,3.4],[67.4,47,3.6],[68.2,53,3.6],[67.4,59,3.4]],'#2e211a',3.6)+
  `<circle cx="35.6" cy="56" r="1.2" fill="#e6c36a"/><circle cx="64.4" cy="56" r="1.2" fill="#e6c36a"/>`},
 hildegarda:{n:'Hildegarda de Bingen',bg:'#6b5a2e',d:
  `<circle cx="50" cy="40" r="27" fill="#e9c45a"/><circle cx="50" cy="40" r="23.5" fill="none" stroke="#f6dc8a" stroke-width="1.4"/>`+
  `<path d="M24,100 C22,60 30,24 50,22 C70,24 78,60 76,100Z" fill="#1f1f24"/>`+
  body('#26262b')+
  `<path d="M33,46 C33,30 42,26 50,26 C58,26 67,30 67,46 L67,74 Q50,80 33,74Z" fill="#f4f2ec"/>`+
  face({scalp:'#f4f2ec',skin:'light',shape:'oval',iris:'#4a5a4a',brow:'#7a6a5a',lips:'#c98078',browW:1.2,lids:true,mouth:'M46,64.4 Q50,65.6 54,64.4'})+
  `<path d="M35,40 C38,32 44,30 50,30 C56,30 62,32 65,40" stroke="#e2ded4" stroke-width="2.4" fill="none"/><path d="M35,72 Q50,80 65,72" stroke="#e2ded4" stroke-width="1.6" fill="none"/>`},
 strozzi:{n:'Barbara Strozzi',bg:'#8c2f39',d:
  `<path d="M30,48 C25,66 28,80 36,86 L44,74Z M70,48 C75,66 72,80 64,86 L56,74Z" fill="#8b4a26"/>`+
  `<path d="M6,100 C8,86 26,78 50,78 C74,78 92,86 94,100Z" fill="#f2cfb2"/><path d="M14,100 C18,94 30,90 50,92 C70,90 82,94 86,100Z" fill="#f4efe4"/><path d="M10,100 Q16,96 24,97 L28,100Z M90,100 Q84,96 76,97 L72,100Z" fill="#6d2a36"/>`+
  pearls(40,60,84,3.6,9,1.1)+
  face({scalp:'#9a5528',skin:'fair',shape:'round',er:1.08,iris:'#3a2a1e',brow:'#7a3f20',lips:'#c9625e',browW:1.3,smile:true,blush:.3})+
  `<path d="M34,50 C30,30 40,22 50,22 C60,22 70,30 66,50 C64,38 58,31 50,30.6 C42,31 36,38 34,50Z" fill="#9a5528"/><path d="M38,30 Q44,26 50,27 Q56,26 62,30" stroke="#7a3f1c" stroke-width="1" fill="none"/>`+
  `<circle cx="36" cy="28" r="3" fill="#f2f0ea"/><circle cx="41" cy="24" r="2.6" fill="#e9b4c0"/><circle cx="47" cy="22" r="2.6" fill="#f2f0ea"/><circle cx="53" cy="22" r="2.6" fill="#e9b4c0"/><circle cx="59" cy="24" r="2.6" fill="#f2f0ea"/><circle cx="64" cy="28" r="3" fill="#e9b4c0"/><circle cx="35" cy="56" r="1.3" fill="#f7f3ea"/><circle cx="65" cy="56" r="1.3" fill="#f7f3ea"/>`},
 jacquet:{n:'Élisabeth Jacquet de La Guerre',bg:'#2f6b8a',d:
  body('#3b5a9a',`<path d="M34,82 Q50,90 66,82" stroke="#f3eee2" stroke-width="2.6" fill="none"/><path d="M26,90 Q36,84 44,86 M74,90 Q64,84 56,86" stroke="#e6c36a" stroke-width="1.6" fill="none"/>`+pearls(41,59,83,3.4,8,1.2))+
  `<path d="M40,22 L42,6 Q50,3 58,6 L60,22Z" fill="#f6f2e8"/><path d="M43,8 L44,21 M47,6 L47.6,21 M53,6 L52.4,21 M57,8 L56,21" stroke="#d8d0be" stroke-width=".8"/>`+
  face({scalp:'#3b2a20',skin:'fair',shape:'oval',er:1.08,iris:'#3f2f26',brow:'#3b2a20',lips:'#c76b68',browW:1.3,mouth:'M45.6,64.2 Q50,66.2 54.4,64.2'})+
  curls([[36,32,5],[43,26.4,5],[50,24.6,5.2],[57,26.4,5],[64,32,5],[34,40,4.4],[66,40,4.4],[32.6,48,4],[67.4,48,4],[33,55,3.6],[67,55,3.6]],'#3b2a20')+
  `<circle cx="35.6" cy="58.6" r="1.4" fill="#f7f3ea"/><circle cx="64.4" cy="58.6" r="1.4" fill="#f7f3ea"/>`},
 martines:{n:'Marianna Martines',bg:'#4a6b3a',d:
  body('#c8a0c8',`<path d="M34,80 Q50,90 66,80" stroke="#f7f2e6" stroke-width="3" fill="none"/><path d="M36,82 Q50,92 64,82" stroke="#fff" stroke-width="1" fill="none" stroke-dasharray="1.6 1.2"/><path d="M46,84 Q50,80 54,84 Q50,88 46,84Z" fill="#e48aa8"/>`)+
  face({scalp:'#e5e0d7',skin:'fair',shape:'round',iris:'#3f2f26',brow:'#8a7a66',lips:'#cf7a74',browW:1.2,smile:true,blush:.32})+
  `<path d="M35,46 C32,22 40,10 50,10 C60,10 68,22 65,46 C62,34 58,30 50,30 C42,30 38,34 35,46Z" fill="#e5e0d7"/>`+curls([[40,16,5],[50,11,5.6],[60,16,5],[35,28,4.6],[65,28,4.6],[34,38,4],[66,38,4]],'#ebe7df')+
  `<circle cx="57" cy="12" r="3" fill="#e48aa8"/><circle cx="61" cy="15" r="2.2" fill="#f2b6c8"/><path d="M42,13 Q46,9 50,14" stroke="#7aa0c8" stroke-width="1.6" fill="none"/>`},
 lili:{n:'Lili Boulanger',bg:'#3b4a7a',d:
  `<ellipse cx="62" cy="40" rx="7" ry="6" fill="#241a14"/>`+
  body('#1f2a44',`<path d="M40,77 Q50,84 60,77 L58,80 Q50,87 42,80Z" fill="#efeae0"/>`)+
  face({scalp:'#241a14',skin:'pale',shape:'narrow',w:.96,h:1.04,er:1.22,iris:'#2e231b',brow:'#241a14',lips:'#c46a68',browW:1.4,mouth:'M46,64.6 Q50,65.4 54,64.6',my:.6,blush:.16})+
  `<path d="M33,56 C28,34 38,22 50,22 C62,22 72,34 67,56 C66,46 64,40 60,36 C56,34 50,34 46,31 C42,33 38,36 36,40 C34,45 33,50 33,56Z" fill="#241a14"/>
   <path d="M46,31 C42,28 40,27 37,30 M48,27 C54,24 62,26 66,32" stroke="#3a2c22" stroke-width="1" fill="none"/>`},
 price:{n:'Florence Price',bg:'#8a3a6b',d:
  body('#3a4a6a',pearls(40,60,81,3.6,9,1.3))+
  face({scalp:'#1f1612',skin:'dark',shape:'round',iris:'#2b1d14',brow:'#1f1612',lips:'#7c3f3a',browW:1.4,smile:true,mouth:'M45,64 Q50,67.4 55,64',blush:.12})+
  `<path d="M34,50 C30,30 40,22 50,22 C60,22 70,30 66,50 C64,40 60,32 50,31 C42,31 37,38 34,50Z" fill="#1f1612"/>`+
  `<path d="M36,30 Q40,24 46,27 Q50,22 55,26 Q60,22 64,29 Q66,32 66,36 Q62,30 57,31 Q53,28 50,31 Q46,28 42,31 Q38,30 34,36 Q34,32 36,30Z" fill="#2c211b"/><path d="M38,28 Q42,26 45,29 M51,26 Q54,25 56,28 M58,27 Q62,27 63,31" stroke="#4a3a30" stroke-width=".8" fill="none"/>`+
  `<circle cx="43" cy="49" r="4.4" fill="#fff" fill-opacity=".12" stroke="#c9b27a" stroke-width="1.1"/><circle cx="57" cy="49" r="4.4" fill="#fff" fill-opacity=".12" stroke="#c9b27a" stroke-width="1.1"/><path d="M47.4,48.6 Q50,47.4 52.6,48.6 M38.6,48.4 L35.4,47.4 M61.4,48.4 L64.6,47.4" stroke="#c9b27a" stroke-width="1" fill="none"/>`+
  `<circle cx="35.6" cy="56" r="1.4" fill="#f7f3ea"/><circle cx="64.4" cy="56" r="1.4" fill="#f7f3ea"/>`},
 rodrigo:{n:'María Rodrigo',bg:'#a0522d',d:
  body('#2e2a36',`<path d="M42,77 L50,88 L58,77" stroke="#f0ebe0" stroke-width="2.2" fill="none"/><circle cx="50" cy="88" r="1.8" fill="#c9a24a"/>`)+
  face({scalp:'#241a14',skin:'olive',shape:'round',iris:'#2f241c',brow:'#241a14',lips:'#b9645d',browW:1.5,mouth:'M46,64.4 Q50,65.8 54,64.4'})+
  `<path d="M33,56 C29,32 38,22 50,22 C62,22 71,32 67,56 C66,48 64,42 62,38 C60,34 54,33 44,34 C40,34 37,36 36,40 C34,44 33,50 33,56Z" fill="#241a14"/>
   <path d="M44,34 Q38,30 42,26 M46,25 Q52,28 58,26 M60,30 Q64,34 64,40 M35,44 Q37,48 35,52 M65,44 Q63,48 65,52" stroke="#3e3026" stroke-width="1.1" fill="none"/>`},
 falla:{n:'Manuel de Falla',bg:'#3f5f8f',d:
  `<path d="M2,100 C4,81 22,72 50,72 C78,72 96,81 98,100Z" fill="#23252b"/><path d="M2,100 C4,81 22,72 50,72 C38,77 26,86 22,100Z" fill="#000" opacity=".14"/><path d="M30,100 L40,74 L46,80Z M70,100 L60,74 L54,80Z" fill="#30333a"/>`+
  `<ellipse cx="33.8" cy="51.6" rx="3.6" ry="6" fill="#dcae92"/><ellipse cx="66.2" cy="51.6" rx="3.6" ry="6" fill="#dcae92"/><path d="M33,48 Q31.6,51.6 33.4,55 M67,48 Q68.4,51.6 66.6,55" stroke="#b9876c" stroke-width=".9" fill="none"/>`+
  `<ellipse cx="50" cy="36" rx="16.6" ry="17" fill="#f8e4d4"/>`+
  face({scalp:'#f8e4d4',skin:'pale',shape:'narrow',w:.97,h:1.06,iris:'#2c2118',brow:'#6d625a',browW:1.6,frown:true,nose:'long',my:1.4,mouth:'M46.6,64.8 Q50,64 53.4,64.8',bags:true,blush:.26,neckW:6.5,
    extra:`<path d="M38.6,56 Q40.6,62 43.6,64 M61.4,56 Q59.4,62 56.4,64" stroke="#d9b4a0" stroke-width="1.2" fill="none" opacity=".35" stroke-linecap="round"/>
     <path d="M45.6,63.4 Q48,62 50,62.8 Q52,62 54.4,63.4 Q50,64.2 45.6,63.4Z" fill="#9a928a"/>
     <circle cx="43" cy="49" r="4.7" fill="#fff" fill-opacity=".1" stroke="#141414" stroke-width="1.5"/><circle cx="57" cy="49" r="4.7" fill="#fff" fill-opacity=".1" stroke="#141414" stroke-width="1.5"/>
     <path d="M47.7,48.6 Q50,47.4 52.3,48.6 M38.3,48.4 L34,47.6 M61.7,48.4 L66,47.6" stroke="#141414" stroke-width="1.2" fill="none"/><circle cx="60.6" cy="47.2" r=".6" fill="#e6c36a"/>
     <path d="M42.6,72 Q50,76 57.4,72 L57.6,75 L50,80.4 L42.4,75Z" fill="#f4f1ea"/><path d="M38,76 L44,72.6 L50,80.4 L56,72.6 L62,76 L58,84 L42,84Z" fill="#23252b"/><path d="M42.4,75 L50,80.4 L57.6,75 L57,71.6 L50,77 L43,71.6Z" fill="#f4f1ea"/><path d="M48.6,78.6 L51.4,78.6 L52.4,86 L50,88 L47.6,86Z" fill="#3a3d46"/>`})+
  `<path d="M38,26 Q46,20.6 56,21.6" stroke="#fff" stroke-width="2.6" opacity=".35" fill="none" stroke-linecap="round"/><path d="M60,28 Q63,31 64,35" stroke="#d4ab95" stroke-width="2" opacity=".5" fill="none" stroke-linecap="round"/>
   <path d="M34.4,46 C34,43 34.4,40.6 35.4,39 L36.6,41 Q36.2,43.6 36.4,46Z M65.6,46 C66,43 65.6,40.6 64.6,39 L63.4,41 Q63.8,43.6 63.6,46Z" fill="#b0a9a2" opacity=".9"/>`},
 carreno:{n:'Teresa Carreño',bg:'#2f6f6a',d:
  `<ellipse cx="50" cy="22" rx="11" ry="7.4" fill="#1e1612"/><ellipse cx="50" cy="20.4" rx="7" ry="4" fill="#2e231c"/>`+
  `<path d="M2,100 C4,81 22,72 50,72 C78,72 96,81 98,100Z" fill="#3a1f3a"/><path d="M2,100 C4,81 22,72 50,72 C38,77 26,86 22,100Z" fill="#000" opacity=".14"/>`+
  face({scalp:'#1e1612',skin:'olive',shape:'oval',er:1.14,iris:'#2a1c14',brow:'#1e1612',browW:1.8,lips:'#b9625a',nose:'long',my:.8,mouth:'M46,64.2 Q50,65.6 54,64.2',blush:.2,extra:`<path d="M38,73 Q50,82 62,73 L61,78.6 Q50,87 39,78.6Z" fill="#efe8da"/><path d="M40,76 Q50,84.4 60,76" stroke="#d3c9b4" stroke-width=".8" fill="none" stroke-dasharray="1.2 1"/><circle cx="50" cy="82" r="2.4" fill="#e6c36a"/><circle cx="50" cy="82" r="1.1" fill="#2f6f6a"/>`})+
  `<path d="M33,50 C29,30 39,22 50,22 C61,22 71,30 67,50 C66,41 62,34 50,31.6 C38,34 34,41 33,50Z" fill="#1e1612"/><path d="M50,22 L50,31.6" stroke="#4a3a30" stroke-width=".9"/>
   <path d="M38,29 Q44,26 49,28 M62,29 Q56,26 51,28" stroke="#3e3028" stroke-width=".8" fill="none"/>
   <circle cx="35.4" cy="56" r="1.5" fill="#e6c36a"/><path d="M35.4,57.4 L35.4,60" stroke="#e6c36a" stroke-width="1"/><circle cx="35.4" cy="60.6" r="1" fill="#c0303a"/>
   <circle cx="64.6" cy="56" r="1.5" fill="#e6c36a"/><path d="M64.6,57.4 L64.6,60" stroke="#e6c36a" stroke-width="1"/><circle cx="64.6" cy="60.6" r="1" fill="#c0303a"/>`}
};
P.profe={n:'Profe',bg:'#1d5bd8',d:
  body('#1e2125',`<path d="M40,77 L50,86 L60,77 L58,74 L50,80 L42,74Z" fill="#c9d4df"/><path d="M50,86 L50,100" stroke="#8a9099" stroke-width="1.4"/><path d="M36,78 Q33,90 34,100 M64,78 Q67,90 66,100" stroke="#2e3238" stroke-width="2" fill="none"/>`)+
  face({skin:'olive',scalp:'#352a23',iris:'#4a3626',brow:'#2e241e',browW:2,
    mouth:'M45.6,63.8 Q50,66.2 54.4,63.8',
    extra:`<path d="M37,52 C37,64 43,71 50,71 C57,71 63,64 63,52 C61,62 56,67 50,67 C44,67 39,62 37,52Z" fill="#4a3a30" opacity=".13"/><path d="M45,61.8 Q50,60.8 55,61.8" stroke="#4a3a30" stroke-width="2" opacity=".1" fill="none" stroke-linecap="round"/><path d="M46.8,66.6 Q50,67.6 53.2,66.6" stroke="#b07e5b" stroke-width=".8" fill="none" opacity=".5" stroke-linecap="round"/><path d="M45.4,63 Q45.2,63.8 45.8,64.3 M54.6,63 Q54.8,63.8 54.2,64.3" stroke="#8c4a3c" stroke-width=".7" fill="none" stroke-linecap="round" opacity=".8"/><path d="M38.6,49.4 L37.2,48.8 M38.6,50.4 L37.2,50.8 M61.4,49.4 L62.8,48.8 M61.4,50.4 L62.8,50.8" stroke="#a87358" stroke-width=".55" opacity=".5" stroke-linecap="round"/>`})+
  `<path d="M34,47 C31,31 38,23 45,21.5 C47,19 52,18.5 55,20 C61,20 69,26 67,46 C65,38 62,33 58,31.5 C55,33.5 50,33 46,31 C42,33 38,37 36,42Z" fill="#352a23"/>
   <path d="M40,25 Q42,20 46,21 Q48,17.5 52,19 Q56,17 58,20.5 Q63,20 63.5,24.5 Q61,23 58,24 Q55,22 52,23.5 Q48,22 45,24.5 Q42,23.5 40,25Z" fill="#3f332b"/>
   <path d="M44,24 Q47,27 46,30 M50,22.5 Q52,26 51,30 M56,23.5 Q58,27 57,30.5" stroke="#5a4c42" stroke-width=".9" fill="none" opacity=".75"/>
   <path d="M34.2,44 C33.8,40 34.6,37 36,35 L37.6,37.5 C36.4,40 36,42 36.2,44.5Z" fill="#8f8a84" opacity=".85"/>
   <path d="M65.8,43 C66.2,39 65.4,36 64,34 L62.4,36.5 C63.6,39 64,41 63.8,43.5Z" fill="#8f8a84" opacity=".85"/>
   <path d="M38,33 Q37,36 36.8,39 M62,32 Q63,35 63.2,38" stroke="#b0aaa4" stroke-width=".9" fill="none" opacity=".7"/>`};

// ---------- compositores añadidos para la visita al CAAC (mismo sistema de piezas) ----------
const hairShort=(c)=>`<path d="M33,46 C31,30 38,23 50,22.5 C62,23 69,30 67,46 C65,38 60,33 50,33 C40,33 35,38 33,46Z" fill="${c}"/>`;
const hairLong=(c)=>`<path d="M30,72 C27,48 29,27 50,24 C71,27 73,48 70,72 L64,72 C66,54 62,38 50,36 C38,38 34,54 36,72Z" fill="${c}"/>`;
const hairWavy=(c)=>`<path d="M31,52 C28,34 36,22 50,22 C64,22 72,34 69,52 C70,44 66,36 61,34 C57,38 52,35 50,34 C46,36 42,37 39,35 C34,37 31,44 31,52Z" fill="${c}"/><path d="M31,52 Q28,58 32,64 Q31,58 35,54Z M69,52 Q72,58 68,64 Q69,58 65,54Z" fill="${c}"/>`;
const bald=(c,s)=>`<path d="M34,48 C32,38 36,30 42,28 C40,33 38,40 36,48Z M66,48 C68,38 64,30 58,28 C60,33 62,40 64,48Z" fill="${c}"/>`;
const beard=(c)=>`<path d="M36.5,54 C36,68 42,75 50,75 C58,75 64,68 63.5,54 C62,64 57,69.5 50,69.5 C43,69.5 38,64 36.5,54Z" fill="${c}"/>`;
const bigBeard=(c)=>`<path d="M35,52 C33,72 40,82 50,82 C60,82 67,72 65,52 C63,64 58,70 50,70 C42,70 37,64 35,52Z" fill="${c}"/><path d="M42,70 Q46,74 50,72 Q54,74 58,70" stroke="#fff" stroke-width=".8" fill="none" opacity=".25"/>`;
const stache=(c)=>`<path d="M43.5,60.6 Q47,58.2 50,60.8 Q53,58.2 56.5,60.6 Q53.5,63.6 50,61.9 Q46.5,63.6 43.5,60.6Z" fill="${c}"/>`;
const glasses=(c='#3a3a3a')=>`<circle cx="43" cy="49.2" r="4.6" fill="none" stroke="${c}" stroke-width="1.1"/><circle cx="57" cy="49.2" r="4.6" fill="none" stroke="${c}" stroke-width="1.1"/><path d="M47.6,49 L52.4,49 M38.4,48.6 L34,47 M61.6,48.6 L66,47" stroke="${c}" stroke-width="1"/>`;
const bow=(c)=>`<path d="M42,78 L50,82 L58,78 L58,86 L50,82 L42,86Z" fill="${c}"/><circle cx="50" cy="82" r="1.8" fill="${c}"/>`;
const wig=(c,dark)=>`<path d="M31,52 C28,30 38,20 50,20 C62,20 72,30 69,52 C67,42 62,34 50,33 C38,34 33,42 31,52Z" fill="${c}"/>`+roll(30,50,9,c,dark)+roll(30,56,9,c,dark)+roll(70,50,9,c,dark)+roll(70,56,9,c,dark);
const bun=(c)=>`<circle cx="50" cy="24" r="7" fill="${c}"/><path d="M33,46 C31,32 38,25 50,25 C62,25 69,32 67,46 C65,38 60,33 50,33 C40,33 35,38 33,46Z" fill="${c}"/>`;
Object.assign(P,{
 handel:{n:'Händel',bg:'#4a3b2a',d:wig('#e9e4da','#bdb6a8')+body('#5a2a2e')+jabot+face({skin:'ruddy',shape:'heavy',w:1.08,nose:'big',dchin:true,blush:.3,brow:'#6a5a4a',browW:2.2})+`<path d="M34,48 C32,36 38,28 50,27 C62,28 68,36 66,48 C64,40 58,35 50,35 C42,35 36,40 34,48Z" fill="#e9e4da"/>`+curls([[32,40,4],[68,40,4],[33,47,3.6],[67,47,3.6]],'#e9e4da')},
 schubert:{n:'Schubert',bg:'#2f3a4a',d:hairWavy('#3e2a1e')+body('#2b2b33')+cravat()+face({skin:'fair',shape:'round',nose:'small',smile:true,blush:.3})+glasses()+`<path d="M31,52 C28,34 36,22 50,22 C64,22 72,34 69,52 C70,44 66,36 61,34 C57,38 52,35 50,34 C46,36 42,37 39,35 C34,37 31,44 31,52Z" fill="#3e2a1e"/>`},
 mendelssohn:{n:'Felix Mendelssohn',bg:'#3a2f4a',d:hairWavy('#2c2420')+body('#1f2a3a')+cravat('#f1ead8')+face({skin:'fair',shape:'oval',nose:'long',lids:true,blush:.2})+`<path d="M31,52 C28,34 36,22 50,22 C64,22 72,34 69,52 C70,44 66,36 61,34 C57,38 52,35 50,34 C46,36 42,37 39,35 C34,37 31,44 31,52Z" fill="#2c2420"/><path d="M31,50 C30,58 33,62 35,64 M69,50 C70,58 67,62 65,64" stroke="#2c2420" stroke-width="4" fill="none" stroke-linecap="round"/>`},
 schumann:{n:'Robert Schumann',bg:'#2d3f3a',d:hairWavy('#3b2b22')+body('#262a2e')+cravat('#e6dfd0')+face({skin:'light',shape:'oval',nose:'long',lids:true,brow:'#4b3a2c',blush:.2})+`<path d="M31,52 C28,34 36,22 50,22 C64,22 72,34 69,52 C70,44 66,36 61,34 C57,38 52,35 50,34 C46,36 42,37 39,35 C34,37 31,44 31,52Z" fill="#3b2b22"/>`},
 liszt:{n:'Liszt',bg:'#3b2f2f',d:hairLong('#d8d3c8')+body('#1c1c1c')+`<path d="M44,77 L50,80 L56,77 L56,90 L50,94 L44,90Z" fill="#f4f0e6"/>`+face({skin:'pale',shape:'narrow',nose:'long',lids:true,folds:true,brow:'#8d8578',blush:.15})+`<path d="M32,50 C30,32 38,23 50,23 C62,23 70,32 68,50 C66,40 60,34 50,34 C40,34 34,40 32,50Z" fill="#d8d3c8"/>`},
 wagner:{n:'Wagner',bg:'#4a2a2a',d:body('#3a2f2a')+`<path d="M40,76 L50,84 L60,76 L60,88 L50,92 L40,88Z" fill="#dcd3c0"/>`+face({skin:'pale',shape:'square',nose:'hook',frown:true,folds:true,lids:true,brow:'#6a5a4a',browW:2.2})+`<path d="M34,48 C31,32 38,24 50,24 C62,24 69,32 66,48 C64,40 58,35 50,35 C42,35 36,40 34,48Z" fill="#a69a86"/><path d="M34,46 C33,52 35,60 37,66 L40,66 C38,60 37,52 37,46Z M66,46 C67,52 65,60 63,66 L60,66 C62,60 63,52 63,46Z" fill="#a69a86"/><path d="M27,38 C27,16 73,16 73,38 Q50,30 27,38Z" fill="#2a2a2a"/><path d="M30,37 Q50,31 70,37" stroke="#4a4a4a" stroke-width="1.4" fill="none"/>`},
 brahms:{n:'Brahms',bg:'#2e3b2e',d:hairWavy('#cfc8bb')+body('#2b2b2b')+face({skin:'ruddy',shape:'heavy',nose:'big',lids:true,brow:'#9d968a',browW:2.4,blush:.3})+bigBeard('#cfc8bb')+stache('#cfc8bb')+`<path d="M31,52 C28,34 36,22 50,22 C64,22 72,34 69,52 C70,44 66,36 61,34 C57,38 52,35 50,34 C46,36 42,37 39,35 C34,37 31,44 31,52Z" fill="#cfc8bb"/>`},
 dvorak:{n:'Dvořák',bg:'#3a3a2a',d:hairShort('#3d3028')+body('#2f2f2f')+face({skin:'light',shape:'square',nose:'big',lids:true,brow:'#3d3028',browW:2.4})+bigBeard('#3d3028')+stache('#3d3028')+hairShort('#3d3028')},
 debussy:{n:'Debussy',bg:'#2a3a4a',d:hairShort('#2a211c')+body('#1e2430')+bow('#111')+face({skin:'light',shape:'oval',nose:'long',lids:true,brow:'#2a211c',browW:2})+beard('#2a211c')+stache('#2a211c')+hairShort('#2a211c')},
 ravel:{n:'Ravel',bg:'#3a3f4a',d:hairShort('#d9d9d9')+body('#2a2a2a')+`<path d="M44,77 L50,80 L56,77 L56,88 L50,91 L44,88Z" fill="#f4f4f4"/>`+face({skin:'pale',shape:'narrow',nose:'long',lids:true,brow:'#8d8d8d',blush:.15})+hairShort('#d9d9d9')},
 albeniz:{n:'Albéniz',bg:'#4a3a2a',d:hairShort('#2e2420')+body('#3a3035')+face({skin:'olive',shape:'round',nose:'big',smile:true,blush:.3,brow:'#2e2420',browW:2.2})+beard('#2e2420')+stache('#2e2420')+hairShort('#2e2420')},
 granados:{n:'Granados',bg:'#3a2a3a',d:hairShort('#2a211c')+body('#2a2a33')+cravat('#e8e2d2')+face({skin:'olive',shape:'oval',nose:'long',lids:true,brow:'#2a211c',browW:2})+stache('#2a211c')+hairShort('#2a211c')},
 turina:{n:'Turina',bg:'#2a3a3a',d:bald('#5a4a40')+body('#2b2f36')+face({skin:'olive',shape:'round',nose:'big',smile:true,blush:.25,brow:'#5a4a40',browW:2})+glasses('#333')+stache('#5a4a40')},
 joaquinrodrigo:{n:'Joaquín Rodrigo',bg:'#2a2a4a',d:hairShort('#8d8d8d')+body('#2a2a2a')+face({skin:'light',shape:'oval',nose:'long',lids:true,smile:true,brow:'#6a6a6a',blush:.2})+glasses('#222')+hairShort('#8d8d8d')},
 falla2:null,
 stravinsky:{n:'Stravinski',bg:'#3a3a3a',d:body('#2b2b2b')+bow('#222')+face({skin:'pale',shape:'narrow',nose:'big',lids:true,brow:'#4a4a4a',browW:2})+glasses('#333')+`<path d="M34,48 C32,38 36,30 42,28 C40,33 38,40 36,48Z M66,48 C68,38 64,30 58,28 C60,33 62,40 64,48Z" fill="#5a5a5a"/>`},
 gershwin:{n:'Gershwin',bg:'#2a3a5a',d:hairShort('#2a211c')+body('#2a2f3a')+cravat('#e9e4da')+face({skin:'light',shape:'oval',nose:'long',smile:true,brow:'#2a211c',browW:2,blush:.25})+`<path d="M33,46 C31,30 38,23 50,22.5 C62,23 69,30 67,46 C65,38 60,33 50,33 C40,33 35,38 33,46Z M38,27 Q44,22 50,24" fill="#2a211c"/>`},
 piazzolla:{n:'Piazzolla',bg:'#4a2a3a',d:hairWavy('#8a8a8a')+body('#2b2b2b')+face({skin:'olive',shape:'square',nose:'big',lids:true,folds:true,brow:'#6a6a6a',browW:2.2})+`<path d="M31,52 C28,34 36,22 50,22 C64,22 72,34 69,52 C70,44 66,36 61,34 C57,38 52,35 50,34 C46,36 42,37 39,35 C34,37 31,44 31,52Z" fill="#8a8a8a"/>`},
 morricone:{n:'Morricone',bg:'#3a3a2a',d:hairShort('#dcdcdc')+body('#2b2b2b')+face({skin:'light',shape:'oval',nose:'long',lids:true,brow:'#8a8a8a',blush:.15})+glasses('#111')+hairShort('#dcdcdc')},
 chaminade:{n:'Chaminade',bg:'#4a2a4a',d:bun('#3b2b22')+body('#4a2a3a')+pearls(40,60,80,4,9)+face({skin:'fair',shape:'oval',nose:'small',smile:true,blush:.3})+bun('#3b2b22')},
 smyth:{n:'Ethel Smyth',bg:'#2a4a3a',d:bun('#9a948a')+body('#3a3a2a')+`<path d="M42,77 L50,82 L58,77 L58,84 L50,88 L42,84Z" fill="#e9e4da"/>`+face({skin:'light',shape:'square',nose:'long',lids:true,brow:'#7a7368',browW:2})+glasses('#333')+bun('#9a948a')+`<path d="M24,36 Q50,30 76,36 L74,33 Q50,27 26,33Z" fill="#2a3a2a"/><path d="M34,33 C34,18 66,18 66,33 Q50,29 34,33Z" fill="#2a3a2a"/>`},
 beach:{n:'Amy Beach',bg:'#3a2a4a',d:bun('#4a3a2a')+body('#3a2a4a')+pearls(40,60,80,5,11)+face({skin:'fair',shape:'round',nose:'small',smile:true,blush:.3})+bun('#4a3a2a')},
 boulanger:{n:'Nadia Boulanger',bg:'#2a2a3a',d:bun('#6a6a6a')+body('#2a2a2a')+face({skin:'pale',shape:'narrow',nose:'long',lids:true,brow:'#5a5a5a'})+glasses('#333')+bun('#6a6a6a')},
 paradis:{n:'Maria Theresia von Paradis',bg:'#4a3a4a',d:wig('#efe9dd','#c9c2b2')+body('#6a3a4a')+pearls(40,60,80,4,9)+face({skin:'pale',shape:'oval',nose:'small',lids:true,blush:.25})+`<path d="M34,48 C32,36 38,28 50,27 C62,28 68,36 66,48 C64,40 58,35 50,35 C42,35 36,40 34,48Z" fill="#efe9dd"/>`},
 farrenc:{n:'Louise Farrenc',bg:'#3a4a4a',d:hairLong('#2a211c')+body('#2a3a4a')+pearls(40,60,80,4,9)+face({skin:'fair',shape:'oval',nose:'small',smile:true,blush:.25})+`<path d="M32,50 C30,32 38,23 50,23 C62,23 70,32 68,50 C66,40 60,34 50,34 C40,34 34,40 32,50Z" fill="#2a211c"/>`+curls([[33,44,4],[67,44,4],[34,52,3.5],[66,52,3.5]],'#2a211c')},
 viardot:{n:'Pauline Viardot',bg:'#4a3a2a',d:hairLong('#2a211c')+body('#4a2a2a')+pearls(40,60,80,4,9)+face({skin:'olive',shape:'oval',nose:'long',lids:true,brow:'#2a211c',browW:2,blush:.2})+`<path d="M32,50 C30,32 38,23 50,23 C62,23 70,32 68,50 C66,40 60,34 50,34 C40,34 34,40 32,50Z" fill="#2a211c"/>`},
 hensel2:null
});
delete P.falla2; delete P.hensel2;

window.AV2=P;
})();

// ---------- avatares para la página (viewBox 0 0 40 40) e instrumento opcional ----------
(function(){
const INS={vln:['🎻','Violín'],pno:['🎹','Piano'],gtr:['🎸','Guitarra'],tpt:['🎺','Trompeta'],sax:['🎷','Saxofón'],drm:['🥁','Tambor'],acc:['🪗','Acordeón'],ban:['🪕','Banjo'],mic:['🎤','Micrófono']};
window.INSTR=INS;
const A={};Object.entries(window.AV2).forEach(([k,v])=>A[k]={n:v.n,bg:v.bg,d:`<g transform="scale(.4) translate(50 54) scale(1.32) translate(-50 -50)">${v.d}</g>`});
const parse=key=>{const[k,i]=String(key||'').split('|');return{a:A[k]||A.scarlatti,i:INS[i]}};
const badge=i=>i?`<circle cx="32.6" cy="32.6" r="7.6" fill="#fff" stroke="#c9cfdb" stroke-width=".8"/><text x="32.6" y="35.8" text-anchor="middle" font-size="9.4">${i[0]}</text>`:'';
const CL='<clipPath id="avc"><circle cx="20" cy="20" r="19"/></clipPath>';
window.AVATARS=A;
window.avSVG=(key,size)=>{const{a,i}=parse(key);return `<svg viewBox="0 0 40 40" width="${size||32}" height="${size||32}" aria-hidden="true" style="overflow:visible">${CL}<circle cx="20" cy="20" r="19" fill="${a.bg}"/><g clip-path="url(#avc)">${a.d}</g>${badge(i)}</svg>`};
window.avInner=key=>{const{a,i}=parse(key);return `${CL}<circle cx="20" cy="20" r="19" fill="${a.bg}"/><g clip-path="url(#avc)">${a.d}</g><circle cx="20" cy="20" r="19" fill="none" stroke="#fff" stroke-width="2"/>${badge(i)}`};
})();

// SVG listo para usar: avSVG(clave, tamaño). Mismo encuadre que en periodos-clasicos.
(function(){
  let n=0;
  window.avSVG=function(key,size){const a=window.AV2[key]||window.AV2.scarlatti;const id='avc'+(n++);
    return `<svg viewBox="0 0 40 40" width="${size||40}" height="${size||40}" aria-hidden="true" style="overflow:visible;display:block"><clipPath id="${id}"><circle cx="20" cy="20" r="19"/></clipPath><circle cx="20" cy="20" r="19" fill="${a.bg}"/><g clip-path="url(#${id})"><g transform="scale(.4) translate(50 54) scale(1.32) translate(-50 -50)">${a.d}</g></g></svg>`};
  window.avName=key=>(window.AV2[key]||{}).n||key;
})();
