/* Stackly food art: shaded, textured SVG dishes (index matches the D array in app.js).
   Real photos placed in /images/<dish-name>.jpg automatically replace these. */
const ART = (() => {
   let s = 1; const R = () => (s = s * 16807 % 2147483647) / 2147483647;
   const sc = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');
   const f1 = n => n.toFixed(1);
   const E = (x, y, rx, ry, f, r = 0, o = 1) => `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="${rx}" ry="${ry}" fill="${f}" opacity="${o}" transform="rotate(${r.toFixed(0)} ${f1(x)} ${f1(y)})"/>`;
   const C = (x, y, r, f, o = 1) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${f}" opacity="${o}"/>`;
   const ring = (n, a, b, f) => sc(n, () => { const t = R() * 6.283, r = a + R() * (b - a); return f(100 + Math.cos(t) * r, 98 + Math.sin(t) * r, t * 57.3) });
   const P = (a, b) => `${(100 + Math.cos(a) * b).toFixed(0)} ${(98 + Math.sin(a) * b).toFixed(0)}`;
   const nd = (n, c, w, m) => sc(n, () => { const t = R() * 6.283, r = 8 + R() * m, t2 = t + 1 + R() * 1.6, r2 = 8 + R() * m, q = R() * m * 1.8; return `<path d="M${P(t, r)}Q${P(t + .8, q)} ${P(t2, r2)}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>` });
   const sh = `<ellipse cx="100" cy="176" rx="78" ry="9" fill="#000" opacity=".22" filter="url(#blur)"/>`;
   const pl = sh + `<circle cx="100" cy="98" r="92" fill="url(#plate)"/><circle cx="100" cy="98" r="72" fill="none" stroke="#0002" stroke-width="1.5"/>`;
   const gloss = (x, y, r) => C(x, y, r, '#fff', .35);
   const nig = (x, y, r, c) => E(x, y + 4, 24, 11, '#f6f4ef', r) + E(x, y - 2, 26, 10, c, r) + E(x, y - 5, 16, 2, '#fff', r, .45) + E(x, y - 1, 22, 1.5, '#fff', r, .35);
   const mk = (x, y) => C(x, y, 17, '#1b2a1e') + C(x, y, 13.5, '#f8f6f0') + C(x, y, 7, '#ff7f50') + C(x, y, 2.5, '#7cb342');
   const taco = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 100Q0 20 66 20Q132 20 132 100Z" fill="url(#tort)"/>` + sc(9, i => C(20 + i * 11, 40 + R() * 10, 9, i % 2 ? '#4caf3a' : '#6dbf4a')) + sc(7, () => C(25 + R() * 80, 40 + R() * 14, 6, '#7a3a1a')) + sc(5, () => `<rect x="${f1(25 + R() * 80)}" y="${f1(34 + R() * 16)}" width="7" height="7" fill="#d6392b"/>`) + sc(6, () => E(25 + R() * 80, 38 + R() * 16, 5, 2, '#ffc01f', R() * 180)) + `<path d="M3 98Q3 60 22 46M129 98Q129 60 110 46" stroke="#fff" stroke-opacity=".3" stroke-width="3" fill="none"/></g>`;
   const berry = (x, y) => E(x, y, 13, 15, '#e53935') + E(x - 4, y - 5, 4, 6, '#fff', 20, .3) + E(x, y - 14, 8, 3, '#2e8b3e') + sc(7, () => E(x + (R() - .5) * 16, y + (R() - .5) * 18, .9, 1.4, '#ffe082'));
   const kiwi = (x, y) => C(x, y, 13, '#6aa84f') + C(x, y, 9.5, '#b5d97a') + C(x, y, 3, '#f1f8e9') + sc(10, i => C(x + Math.cos(i * .63) * 6, y + Math.sin(i * .63) * 6, .9, '#222'));
   const D = [
/*0 pizza*/() => pl + `<circle cx="100" cy="98" r="82" fill="url(#crust)"/><circle cx="100" cy="98" r="72" fill="url(#cheese)" filter="url(#grain)"/>`
         + ring(7, 8, 54, (x, y) => C(x, y, 11, '#b9281a') + C(x - 1, y - 1, 8, '#e24a33') + C(x - 3, y - 3, 2.5, '#fff', .5))
         + ring(9, 6, 60, (x, y, a) => E(x, y, 7, 3.5, '#2e8b3e', a))
         + ring(8, 10, 62, (x, y) => C(x, y, 2.4, '#fff6c9', .9))
         + `<path d="M100 26V170M28 98H172M49 47L151 149M151 47L49 149" stroke="#7a4a1a" stroke-opacity=".3" stroke-width="1.5"/>`,
/*1 burger*/() => `<ellipse cx="100" cy="172" rx="72" ry="8" fill="#000" opacity=".22" filter="url(#blur)"/>`
         + `<path d="M30 140Q30 164 58 164H142Q170 164 170 140Z" fill="url(#bun)"/>`
         + `<rect x="26" y="116" width="148" height="28" rx="14" fill="url(#patty)"/>` + sc(14, () => E(34 + R() * 132, 122 + R() * 18, 3, 1.2, '#a2603a', R() * 90, .6))
         + `<path d="M26 114H174L160 134L140 116L120 136L100 116L80 136L60 116L42 134Z" fill="#ffc01f"/>`
         + `<path d="M22 104Q38 92 52 104T80 104T108 104T136 104T164 104T178 102V116H22Z" fill="#4caf3a"/>`
         + `<rect x="34" y="94" width="132" height="12" rx="6" fill="#d6392b"/><rect x="40" y="94" width="40" height="4" rx="2" fill="#fff" opacity=".25"/>`
         + `<path d="M30 96Q30 32 100 32Q170 32 170 96Z" fill="url(#bun)"/>`
         + `<path d="M48 72Q58 44 100 40" stroke="#fff" stroke-opacity=".4" stroke-width="6" fill="none" stroke-linecap="round"/>`
         + sc(18, () => E(52 + R() * 96, 44 + R() * 36, 3.8, 1.9, '#fff1c2', R() * 180)),
/*2 biryani*/() => sh + `<circle cx="100" cy="98" r="90" fill="#8a3f12"/><circle cx="100" cy="98" r="86" fill="#c8742c"/><circle cx="100" cy="98" r="76" fill="url(#rice)"/>`
         + ring(190, 0, 72, (x, y, a) => E(x, y, 5.5, 1.7, R() > .55 ? '#fff7d8' : R() > .5 ? '#f0b43c' : '#e8963a', a))
         + ring(6, 12, 46, (x, y, a) => E(x, y, 15, 10, '#8e3a15', a) + E(x - 2, y - 3, 11, 6, '#c2652a', a) + E(x - 4, y - 5, 4, 2, '#fff', a, .3))
         + ring(20, 0, 66, (x, y, a) => E(x, y, 5, 2, '#6b3f12', a, .85))
         + ring(9, 18, 64, (x, y, a) => E(x, y, 6, 3, '#2e8b3e', a))
         + `<path d="M146 142q20-8 26 8q-16 12-26-8z" fill="#fdd835"/><path d="M150 144q12-4 16 4" stroke="#fff59d" fill="none"/>`,
/*3 sushi*/() => pl + nig(70, 62, -18, '#ff7a45') + nig(132, 60, 16, '#ff946a') + nig(62, 130, 12, '#ff7a45') + mk(112, 106) + mk(140, 136)
         + E(150, 92, 9, 7, '#9ccc3c') + E(46, 92, 9, 6, '#f4a6b8') + E(52, 98, 8, 5, '#f7b8c6') + E(98, 160, 18, 3, '#3a2a1a', 0, .5),
/*4 wrap*/() => sh + `<g transform="rotate(-24 100 100)"><rect x="26" y="66" width="150" height="66" rx="33" fill="url(#tort)"/>`
         + sc(7, i => `<path d="M${58 + i * 16} 70l-6 58" stroke="#8a5412" stroke-opacity=".35" stroke-width="3.5"/>`)
         + `<ellipse cx="44" cy="99" rx="26" ry="31" fill="#f3d594"/><ellipse cx="44" cy="99" rx="20" ry="25" fill="#7cb342"/><ellipse cx="46" cy="100" rx="14" ry="18" fill="#fff3d0"/>`
         + C(40, 90, 5, '#e53935') + C(50, 108, 5, '#e53935') + C(44, 100, 4, '#fbc02d') + `<rect x="36" y="98" width="8" height="8" fill="#ffe9a8"/><rect x="48" y="90" width="8" height="8" fill="#ffe9a8"/>`
         + `<path d="M40 70Q100 60 160 74" stroke="#fff" stroke-opacity=".35" stroke-width="4" fill="none" stroke-linecap="round"/></g>`,
/*5 pasta*/() => pl + nd(32, '#f4cf72', 5, 42) + `<circle cx="100" cy="98" r="38" fill="#fff4d6" opacity=".55"/>` + nd(10, '#e8b950', 5, 34)
         + ring(6, 10, 40, (x, y, a) => E(x, y, 10, 4, '#f5f0e1', a)) + C(78, 80, 7, '#d63a2a') + gloss(76, 77, 2.5) + C(122, 112, 7, '#d63a2a') + C(104, 70, 6, '#e24a33') + ring(6, 5, 44, (x, y, a) => E(x, y, 8, 4, '#2e8b3e', a)),
/*6 tacos*/() => sh + taco(68, 52, .75) + taco(22, 84, .95),
/*7 ramen*/() => sh + `<circle cx="100" cy="98" r="92" fill="#1e2a4a"/><circle cx="100" cy="98" r="86" fill="#f4f1ea"/><circle cx="100" cy="98" r="76" fill="url(#broth)"/>`
         + nd(26, '#f6dd92', 4, 50) + `<ellipse cx="70" cy="68" rx="14" ry="18" fill="#fff"/><circle cx="70" cy="70" r="8" fill="#ffa000"/>`
         + `<ellipse cx="124" cy="66" rx="14" ry="18" fill="#fff"/><circle cx="124" cy="68" r="8" fill="#ffa000"/>`
         + C(70, 122, 15, '#c58a63') + C(70, 122, 10, '#e1b08a') + C(126, 126, 15, '#c58a63') + C(126, 126, 10, '#e1b08a')
         + `<rect x="140" y="72" width="18" height="34" rx="2" fill="#16301f" transform="rotate(15 149 89)"/>`
         + ring(26, 8, 60, (x, y) => C(x, y, 2.6, '#7cc443')) + ring(9, 10, 60, (x, y) => C(x, y, 2.6, '#fdd835')) + ring(12, 10, 64, (x, y) => C(x, y, 1.8, '#d32f2f', .8)),
/*8 salad*/() => pl + `<circle cx="100" cy="98" r="76" fill="#3d7d34"/>`
         + ring(75, 0, 66, (x, y, a) => E(x, y, 13, 6.5, R() > .5 ? '#4caf50' : R() > .5 ? '#7cb342' : '#2e7d32', a))
         + ring(7, 10, 52, (x, y) => C(x, y, 9, '#d32f2f') + C(x - 2, y - 2, 3, '#ff8a80', .7))
         + ring(6, 8, 56, (x, y) => C(x, y, 10, '#8bc34a') + C(x, y, 7, '#dcedc8') + C(x, y, 3, '#c5e1a5'))
         + ring(5, 12, 54, (x, y) => C(x, y, 6, '#33261c') + C(x, y, 2.5, '#9a8a5a'))
         + ring(7, 10, 58, (x, y, a) => E(x, y, 6, 5, '#fffdf0', a)),
/*9 ice cream*/() => sh + `<path d="M62 112L138 112L100 184Z" fill="#d99b4a"/><path d="M70 124L124 124M78 140L118 140M86 156L112 156M80 112L112 170M100 112L124 150M120 112L100 150" stroke="#9a5f1a" stroke-opacity=".5" stroke-width="2"/>`
         + C(76, 98, 28, '#f48fb1') + C(124, 98, 28, '#9575cd') + C(100, 70, 30, '#fff3e0') + `<path d="M48 104q0 24 9 24t9-22z" fill="#f48fb1"/><path d="M134 108q0 20 8 20t8-18z" fill="#9575cd"/>`
         + gloss(66, 88, 8) + gloss(112, 60, 8) + C(100, 38, 8, '#c62828') + C(91, 44, 6, '#c62828') + C(110, 44, 6, '#3f51b5')
         + sc(20, () => E(60 + R() * 80, 58 + R() * 52, 3, 1, ['#ffeb3b', '#4caf50', '#ff5722', '#2196f3'][R() * 4 | 0], R() * 180)),
/*10 fries*/() => sh + sc(28, () => { const x = 58 + R() * 84, y = 34 + R() * 52, r = -18 + R() * 36; return `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="9" height="${60 + R() * 30 | 0}" rx="2" fill="${R() > .5 ? '#f7c548' : '#eab33a'}" stroke="#d99a1f" stroke-width=".8" transform="rotate(${r.toFixed(0)} ${x.toFixed(0)} ${(y + 40).toFixed(0)})"/>` })
         + `<path d="M50 104H150L140 178Q100 184 60 178Z" fill="#e53935"/><path d="M50 104H150L148 120H52Z" fill="#c62828"/><path d="M92 128h16l-3 44h-10z" fill="#fff" opacity=".85"/>`,
/*11 fruit bowl*/() => sh + `<path d="M28 108Q28 176 100 176Q172 176 172 108Z" fill="url(#plate)"/><ellipse cx="100" cy="108" rx="72" ry="12" fill="#e8e2ee"/>`
         + sc(9, () => C(52 + R() * 96, 76 + R() * 26, 6.5, '#3f51b5') + gloss(0, 0, 0))
         + kiwi(82, 92) + kiwi(126, 94) + berry(58, 88) + berry(100, 70) + berry(142, 86) + C(104, 98, 14, '#fb8c00') + C(104, 98, 10, '#ffb74d')
         + sc(5, i => `<path d="M${104 + Math.cos(i * 1.26) * 9} ${98 + Math.sin(i * 1.26) * 9}L104 98" stroke="#fb8c00" stroke-width="1.2"/>`)
         + `<path d="M30 112Q100 128 170 112Q168 172 100 176Q32 172 30 112Z" fill="url(#plate)"/>`
   ];
   return D.map((f, i) => () => { s = i * 977 + 13; return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${f()}</svg>` });
})();
