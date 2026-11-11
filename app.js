
const D = [
  { n: 'Margherita Pizza', r: 'Espano', e: '🍕', p: 249, c: 'Pizza', t: 'Bestseller', k: '#ffe0b8', m: 22, s: 4.8 },
  { n: 'Smash Burger', r: 'Grand Oka', e: '🍔', p: 199, c: 'Burgers', t: 'Hot', k: '#ffd1cc', m: 18, s: 4.6 },
  { n: 'Chicken Biryani', r: 'Hotel Sattva', e: '🍛', p: 289, c: 'Indian', t: 'Chef’s pick', k: '#ffe9a8', m: 30, s: 4.9 },
  { n: 'Sushi Platter', r: 'Olastra', e: '🍣', p: 449, c: 'Asian', t: 'New', k: '#ffd6e0', m: 28, s: 4.7 },
  { n: 'Paneer Wrap', r: 'Hotel Sattva', e: '🌯', p: 179, c: 'Indian', t: '', k: '#d9f2c4', m: 15, s: 4.4 },
  { n: 'Creamy Pasta', r: 'Espano', e: '🍝', p: 269, c: 'Pizza', t: '', k: '#fff0b8', m: 25, s: 4.5 },
  { n: 'Street Tacos', r: 'Grand Oka', e: '🌮', p: 229, c: 'Burgers', t: 'Spicy', k: '#ffdcb5', m: 20, s: 4.6 },
  { n: 'Tonkotsu Ramen', r: 'Olastra', e: '🍜', p: 319, c: 'Asian', t: '', k: '#ffe4c2', m: 26, s: 4.8 },
  { n: 'Garden Salad', r: 'Olastra', e: '🥗', p: 159, c: 'Healthy', t: 'Light', k: '#cdf0d4', m: 12, s: 4.3 },
  { n: 'Berry Ice Cream', r: 'Espano', e: '🍨', p: 129, c: 'Desserts', t: '', k: '#f3d6ff', m: 10, s: 4.7 },
  { n: 'Loaded Fries', r: 'Grand Oka', e: '🍟', p: 99, c: 'Burgers', t: 'Value', k: '#fff0a8', m: 14, s: 4.2 },
  { n: 'Fruit Bowl', r: 'Hotel Sattva', e: '🍓', p: 139, c: 'Healthy', t: '', k: '#ffd0dc', m: 10, s: 4.5 }];
const X = [
  { v: 1, sp: 0, kc: 780, pr: 32, cb: 96, ft: 28, d: 'Stone-baked thin crust with slow-cooked tomato sauce, fresh mozzarella and basil.', ing: 'Mozzarella,Tomato sauce,Fresh basil,Olive oil' },
  { v: 0, sp: 1, kc: 650, pr: 34, cb: 48, ft: 36, d: 'Two smashed beef patties with melted cheddar, crisp lettuce and tomato on a toasted bun.', ing: 'Beef patty,Cheddar,Lettuce,Tomato,Brioche bun' },
  { v: 0, sp: 2, kc: 720, pr: 38, cb: 82, ft: 24, d: 'Long-grain basmati layered with marinated chicken, saffron and fried onions, cooked dum style.', ing: 'Basmati rice,Chicken,Saffron,Fried onion,Mint' },
  { v: 0, sp: 1, kc: 480, pr: 28, cb: 62, ft: 12, d: 'Salmon nigiri and maki rolls served with wasabi, pickled ginger and soy sauce.', ing: 'Salmon,Sushi rice,Nori,Wasabi,Ginger' },
  { v: 1, sp: 2, kc: 520, pr: 22, cb: 58, ft: 22, d: 'Grilled paneer tikka with crunchy salad and mint chutney, rolled in a soft tortilla.', ing: 'Paneer,Tortilla,Onion,Capsicum,Mint chutney' },
  { v: 1, sp: 0, kc: 610, pr: 20, cb: 78, ft: 24, d: 'Al dente pasta in a silky white sauce with parmesan, cherry tomato and basil.', ing: 'Pasta,Cream,Parmesan,Cherry tomato,Basil' },
  { v: 0, sp: 3, kc: 540, pr: 26, cb: 52, ft: 24, d: 'Crisp shells filled with spiced chicken, fresh salsa, lettuce and melted cheese.', ing: 'Corn shell,Chicken,Salsa,Lettuce,Cheese' },
  { v: 0, sp: 2, kc: 590, pr: 30, cb: 70, ft: 20, d: 'Rich pork broth simmered for hours, with noodles, chashu, a soft egg and scallions.', ing: 'Ramen noodles,Chashu pork,Soft egg,Nori,Scallion' },
  { v: 1, sp: 0, kc: 210, pr: 8, cb: 18, ft: 12, d: 'Crisp greens, cherry tomatoes, cucumber, olives and feta with a lemon dressing.', ing: 'Mixed greens,Tomato,Cucumber,Olives,Feta' },
  { v: 1, sp: 0, kc: 340, pr: 6, cb: 44, ft: 15, d: 'Creamy strawberry, blueberry and vanilla scoops in a crunchy waffle cone.', ing: 'Milk,Strawberry,Blueberry,Vanilla,Waffle cone' },
  { v: 1, sp: 1, kc: 450, pr: 6, cb: 58, ft: 21, d: 'Crispy golden fries with sea salt, a warm cheese dip and tangy ketchup.', ing: 'Potato,Sea salt,Cheese dip,Ketchup' },
  { v: 1, sp: 0, kc: 180, pr: 3, cb: 42, ft: 1, d: 'Fresh strawberries, kiwi, blueberries and orange segments, served chilled.', ing: 'Strawberry,Kiwi,Blueberry,Orange' }];
D.forEach((d, i) => Object.assign(d, X[i]));
const slug = n => n.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '');
const ph = i => `<span class="ph"><span class="art">${ART[i]()}</span><img src="images/${slug(D[i].n)}.jpg" alt="${D[i].n}" loading="lazy" onerror="this.remove()"></span>`;
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
const watch = () => document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
function fly(i) { try { const ev = window.event, src = ev && ev.target && ev.target.closest && ev.target.closest('button'); if (!src) return; const a = src.getBoundingClientRect(), b = $('cartBtn').getBoundingClientRect(), f = document.createElement('div'); f.className = 'fly'; f.innerHTML = ph(i); f.style.cssText = `left:${a.left + a.width / 2 - 28}px;top:${a.top + a.height / 2 - 28}px`; document.body.appendChild(f); f.animate([{ transform: 'translate(0,0) scale(1) rotate(0)', opacity: 1 }, { transform: `translate(${b.left - a.left}px,${b.top - a.top}px) scale(.2) rotate(360deg)`, opacity: .3 }], { duration: 750, easing: 'cubic-bezier(.5,-.3,.7,.3)' }).onfinish = () => f.remove() } catch (e) { } }
function showDish(i) { const d = D[i]; $('dish').innerHTML = `<button class="ic x" onclick="closeAll()" aria-label="Close">✕</button><div class="mpic" style="background:radial-gradient(circle at 50% 50%,#fff 0 30%,${d.k} 31%)">${ph(i)}</div><div class="mbody"><div class="mt"><h2>${d.n}</h2><span class="vd ${d.v ? 'v' : 'n'}" title="${d.v ? 'Vegetarian' : 'Non-vegetarian'}"></span></div><small style="color:var(--mut)">${d.r} · ⭐ ${d.s} · ${d.m} min · ${d.sp ? '🌶'.repeat(d.sp) + ' Spicy' : 'Mild'}</small><p>${d.d}</p><div class="chips">${d.ing.split(',').map(x => `<span>${x}</span>`).join('')}</div><div class="nut"><div><b>${d.kc}</b>kcal</div><div><b>${d.pr}g</b>protein</div><div><b>${d.cb}g</b>carbs</div><div><b>${d.ft}g</b>fat</div></div><div class="row"><span class="price">${inr(d.p)}</span><button class="add" style="padding:12px 26px" onclick="chg(${i},1)">Add to cart</button></div></div>`; open('dish') }
function quick(c) { cat = c; rest = ''; $('q').value = ''; drawCats(); drawGrid(); const h = location.hash && location.hash != '#home'; if (h) location.hash = 'home'; setTimeout(() => $('menu').scrollIntoView({ behavior: 'smooth' }), h ? 150 : 0) }
const C = ['All', 'Favourites', 'Pizza', 'Burgers', 'Indian', 'Asian', 'Desserts', 'Healthy'];
const $ = id => document.getElementById(id);
const ls = (k, d) => { try { return JSON.parse(localStorage.getItem('st_' + k)) || d } catch (e) { return d } };
const sv = (k, v) => { try { localStorage.setItem('st_' + k, JSON.stringify(v)) } catch (e) { } };
let cart = {}, cat = 'All', pm = 'card', tmr, rest = '', coupon = null, fav = ls('fav', []), orders = ls('orders', []);
orders.forEach(o => { if (o.s < 4) o.s = 4 });
const CP = {
  STACKLY50: { min: 199, off: s => Math.min(100, Math.round(s / 2)), txt: '50% off, up to ₹100', d: 'Our welcome treat. Works on any restaurant.', big: '50%', sm: 'OFF' },
  FREEDEL: { min: 149, free: 1, txt: 'Free delivery', d: 'Skip the delivery fee on orders above ₹149.', big: '🛵', sm: 'FREE' },
  BIGEAT: { min: 599, off: () => 75, txt: '₹75 off big orders', d: 'Feeding a group? Take ₹75 off the bill.', big: '₹75', sm: 'OFF' },
  FIRST100: { min: 399, off: () => 100, txt: '₹100 off your meal', d: 'Flat ₹100 off on orders above ₹399.', big: '₹100', sm: 'OFF' },
  WEEKEND15: { min: 299, off: s => Math.min(150, Math.round(s * .15)), txt: '15% off, up to ₹150', d: 'Make the weekend a little tastier.', big: '15%', sm: 'OFF' },
  PARTY25: { min: 999, off: s => Math.min(250, Math.round(s / 4)), txt: '25% off, up to ₹250', d: 'For big parties and bigger appetites.', big: '25%', sm: 'OFF' },
  STACK10: { min: 299, off: s => Math.min(120, Math.round(s / 10)), txt: '10% off your Stack, up to ₹120', d: 'Build a Stack of dishes and save 10%.', big: '10%', sm: 'STACK' }
};
const R = [
  { n: 'Hotel Sattva', cu: 'South Indian, North Indian', tags: ['Indian'], a: 2, k: '#ffe9a8', s: 4.9, rv: '2.4k', m: 30, two: 1000, area: 'MG Road', hrs: '11 am to 11 pm', off: '15% off on pre-booking', d: 'Home-style thalis, dum biryani and fresh wraps, cooked the traditional way every day.', g: 'linear-gradient(120deg,#8a3f12,#e8963a)' },
  { n: 'Espano', cu: 'Chinese, Italian, Thai', tags: ['Italian'], a: 0, k: '#ffe0b8', s: 4.8, rv: '1.9k', m: 22, two: 1000, area: 'Station Road', hrs: '12 pm to 11:30 pm', off: '10% off on pre-booking', d: 'Stone-baked pizzas, creamy pastas and sweet treats in a cosy dining room.', g: 'linear-gradient(120deg,#b9281a,#ff7a45)' },
  { n: 'Grand Oka', cu: 'Burgers, Tacos, Fries', tags: ['Burgers'], a: 1, k: '#ffd1cc', s: 4.6, rv: '1.2k', m: 18, two: 900, area: 'Market Street', hrs: '11 am to 12 am', off: 'Free fries over ₹500', d: 'Smashed burgers, spicy street tacos and loaded fries made for sharing.', g: 'linear-gradient(120deg,#1f2a44,#ff3d54)' },
  { n: 'Olastra', cu: 'Asian, Healthy, Sushi', tags: ['Asian', 'Healthy'], a: 3, k: '#ffd6e0', s: 4.7, rv: '980', m: 28, two: 1100, area: 'Lake View', hrs: '12 pm to 11 pm', off: '10% off on pre-booking', d: 'Fresh sushi, steaming ramen and crisp salads with clean, balanced flavours.', g: 'linear-gradient(120deg,#0b6e6e,#18b98a)' }];
const inr = n => '₹' + n.toLocaleString('en-IN');
const items = () => Object.keys(cart).map(i => ({ ...D[i], q: cart[i], i }));
const sub = () => items().reduce((a, x) => a + x.p * x.q, 0);
const fees = () => { const s = sub(); let d = s > 499 || !s ? 0 : 39, x = 0; const c = coupon && CP[coupon]; if (c && s >= c.min) { x = c.off ? c.off(s) : 0; if (c.free) d = 0 } return { s, d, x, t: Math.round((s - x) * .05) } };
const tot = () => { const f = fees(); return f.s + f.d + f.t - f.x };

function drawCats() { $('cats').innerHTML = C.map(c => `<button class="${c == cat ? 'on' : ''}" onclick="cat='${c}';drawCats();drawGrid()">${c}</button>`).join('') }
function drawGrid() {
  $('restTag').innerHTML = rest ? `<button class="chipx" onclick="rest='';drawGrid()">Showing ${rest} ✕</button>` : '';
  const q = $('q').value.toLowerCase().trim(), key = cat + '|' + rest + '|' + q, same = $('grid').dataset.k == key; $('grid').dataset.k = key;
  const l = D.map((d, i) => ({ ...d, i })).filter(d => (cat == 'All' || (cat == 'Favourites' ? fav.includes(d.i) : d.c == cat)) && (!rest || d.r == rest) && (!q || (d.n + d.r).toLowerCase().includes(q)));
  $('grid').innerHTML = l.length ? l.map((d, n) => `<article class="card tilt${same ? '' : ' rv'}" style="--d:${(n % 4) * .07}s"><div class="pic" onclick="showDish(${d.i})" style="background:radial-gradient(circle at 50% 55%,#fff 0 30%,${d.k} 31%)"><button class="heart ${fav.includes(d.i) ? 'on' : ''}" onclick="event.stopPropagation();tf(${d.i})" aria-label="Favourite">♥</button>${d.t ? `<span class="tag">${d.t}</span>` : ''}${ph(d.i)}</div>
 <div class="info"><h3>${d.n} <span class="vd ${d.v ? 'v' : 'n'}"></span></h3><small>${d.r} · ⭐ ${d.s} · ${d.m} min${d.sp ? ' · 🌶' + d.sp : ''}</small>
 <div class="row"><span class="price">${inr(d.p)}</span>${cart[d.i] ? `<div class="qty"><button onclick="chg(${d.i},-1)" aria-label="Remove one">−</button><b>${cart[d.i]}</b><button onclick="chg(${d.i},1)" aria-label="Add one">+</button></div>` : `<button class="add" onclick="chg(${d.i},1)">Add</button>`}</div></div></article>`).join('') : '<p class="empty">Nothing matches that search. Try a different dish or clear the filter.</p>';
  if (!same) watch()
}
function chg(i, n) { cart[i] = (cart[i] || 0) + n; if (cart[i] <= 0) delete cart[i]; if (n > 0) fly(i); refresh(); if (n > 0) { const b = $('cnt'); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop') } }
function summary() { const f = fees(); return `<p><span>Subtotal</span><span>${inr(f.s)}</span></p>${f.x ? `<p style="color:var(--mint)"><span>Coupon ${coupon}</span><span>−${inr(f.x)}</span></p>` : ''}<p><span>Delivery</span><span>${f.d ? inr(f.d) : 'Free'}</span></p><p><span>Taxes</span><span>${inr(f.t)}</span></p><p class="tot"><span>Total</span><span>${inr(tot())}</span></p>` }
function refresh() {
  const n = items().reduce((a, x) => a + x.q, 0); $('cnt').textContent = n; drawGrid();
  $('lines').innerHTML = n ? items().map(x => `<div class="line"><div class="t">${ph(x.i)}</div><div><b>${x.n}</b><br><small style="color:var(--mut)">${inr(x.p)} each</small></div><div class="qty"><button onclick="chg(${x.i},-1)" aria-label="Remove one">−</button><b>${x.q}</b><button onclick="chg(${x.i},1)" aria-label="Add one">+</button></div></div>`).join('') : '<p class="empty">Your cart is empty. Add a dish to get started.</p>';
  $('sum').innerHTML = $('sum2').innerHTML = summary(); $('go').disabled = !n; drawOffers();
}
function open(id) { closeAll(true); $(id).classList.add('on'); $('shade').classList.add('on') }
function closeAll(k) { ['cart', 'pay', 'live', 'dish', 'book'].forEach(i => $(i).classList.remove('on')); if (!k) $('shade').classList.remove('on') }
$('cartBtn').onclick = () => open('cart'); $('shade').onclick = () => closeAll(); $('go').onclick = () => open('pay');
$('q').oninput = drawGrid;
$('theme').onclick = () => { const r = document.documentElement, d = r.dataset.theme ? r.dataset.theme == 'dark' : matchMedia('(prefers-color-scheme:dark)').matches; r.dataset.theme = d ? 'light' : 'dark' };

document.querySelectorAll('#tabs button').forEach(b => b.onclick = () => { pm = b.dataset.t; document.querySelectorAll('#tabs button').forEach(x => x.classList.toggle('on', x == b));['card', 'upi', 'cod'].forEach(m => $('m-' + m).hidden = m != pm); $('err').textContent = '' });
$('cn').oninput = e => { const v = e.target.value.replace(/\D/g, '').slice(0, 16); e.target.value = v.replace(/(.{4})/g, '$1 ').trim(); $('pn').textContent = (v + '••••••••••••••••').slice(0, 16).replace(/(.{4})/g, '$1 ').trim() };
$('nm').oninput = e => $('pname').textContent = e.target.value.toUpperCase() || 'YOUR NAME';
$('ex').oninput = e => { let v = e.target.value.replace(/\D/g, '').slice(0, 4); if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2); e.target.value = v; $('pex').textContent = v || 'MM/YY' };

$('payBtn').onclick = () => {
  const e = $('err'); e.textContent = '';
  if ($('addr').value.trim().length < 5) return e.textContent = 'Enter your delivery address.';
  if (($('phone').value.replace(/\D/g, '')).length < 10) return e.textContent = 'Enter a 10-digit phone number.';
  if (pm == 'card') {
    if ($('cn').value.replace(/\D/g, '').length != 16) return e.textContent = 'Card number must have 16 digits.';
    if (!/^(0[1-9]|1[0-2])\/\d\d$/.test($('ex').value)) return e.textContent = 'Enter expiry as MM/YY.';
    if ($('cv').value.length != 3) return e.textContent = 'CVV must have 3 digits.';
  }
  if (pm == 'upi' && !/^[\w.\-]+@[\w]+$/.test($('upi').value)) return e.textContent = 'Enter a valid UPI ID, like name@upi.';
  const b = $('payBtn'); b.disabled = true; b.innerHTML = '<span class="spin"></span> Processing payment…';
  setTimeout(() => { b.disabled = false; b.textContent = 'Pay now'; success() }, 2200);
};

const ST = ['Order confirmed', 'Restaurant is preparing your food', 'Rider picked up your order', 'On the way to you', 'Delivered. Enjoy your meal!'];
function success() { const o = { id: 'ST' + Math.floor(10000 + Math.random() * 89999), l: items().map(x => ({ i: x.i, q: x.q })), total: tot(), f: fees(), cp: coupon, pm, s: 0, t: Date.now() }; orders.unshift(o); sv('orders', orders); cart = {}; coupon = null; $('cpi').value = ''; refresh(); drawOrders(); startTrack(o); confetti() }
function startTrack(o) {
  open('live'); $('oid').textContent = `Order ${o.id} · ${inr(o.total)} · ${o.pm == 'cod' ? 'Pay on delivery' : 'Paid'}`;
  const E = [24, 19, 13, 6, 0], paint = () => { $('ot').textContent = o.s == 4 ? 'Delivered' : 'Order confirmed'; $('steps').innerHTML = ST.map((t, i) => `<div class="${i < o.s ? 'fin' : i == o.s ? 'on' : ''}">${t}</div>`).join(''); const p = o.s / 4 * 100 + '%'; $('bar').style.width = p; $('bike').style.left = p; $('bike').textContent = o.s == 4 ? '🏠' : '🛵'; $('eta').textContent = o.s == 4 ? 'Delivered' : E[o.s] + ' min' };
  paint(); clearInterval(tmr);
  if (o.s < 4) tmr = setInterval(() => { o.s++; sv('orders', orders); paint(); drawOrders(); if (o.s == 4) { clearInterval(tmr); confetti() } }, 4500)
}
function confetti() { const c = ['#ff3d54', '#ffc93c', '#18b98a', '#ff2e7e']; for (let i = 0; i < 44; i++) { const d = document.createElement('i'); d.className = 'conf'; d.style.cssText = `left:${Math.random() * 100}vw;background:${c[i % 4]};animation-delay:${Math.random() * .6}s;animation-duration:${1.8 + Math.random() * 1.6}s`; document.body.appendChild(d); setTimeout(() => d.remove(), 4200) } }

const names = ['Rahul', 'Ananya', 'Arjun', 'Lisa', 'Priya', 'Kiran', 'Sana'];
function ping() { const d = D[Math.random() * D.length | 0]; const t = $('toast'); t.textContent = `${names[Math.random() * names.length | 0]} just ordered ${d.n} ${d.e}`; t.classList.add('on'); setTimeout(() => t.classList.remove('on'), 3500) }
setTimeout(() => { ping(); setInterval(ping, 9000) }, 3000);
let hi = 0; const hd = () => { $('heroDish').innerHTML = ART[hi](); $('hname').textContent = '🔥 ' + D[hi].n + ' · ' + inr(D[hi].p) }; hd();
setInterval(() => { hi = (hi + 1) % D.length; hd(); const e = $('heroDish'); e.classList.remove('sw'); void e.offsetWidth; e.classList.add('sw') }, 3500);
function count(id, to, suf) { let v = 0; const el = $(id), st = to / 40; const t = setInterval(() => { v += st; if (v >= to) { v = to; clearInterval(t) } el.textContent = Math.round(v) + suf }, 35) }
count('s1', 200, '+'); count('s2', 45, '+'); count('s3', 250, '+');

function tf(i) { fav = fav.includes(i) ? fav.filter(x => x != i) : [...fav, i]; sv('fav', fav); drawGrid() }
function say(t) { const e = $('toast'); e.textContent = t; e.classList.add('on'); setTimeout(() => e.classList.remove('on'), 3200) }
function applyCp(c) {
  c = (c || '').trim().toUpperCase(); const p = CP[c];
  if (!p) return say('That coupon code isn’t valid.');
  coupon = c; refresh();
  say(sub() < p.min ? `${c} saved. Add ${inr(p.min - sub())} more to use it.` : `${c} applied: ${p.txt}`)
}
function viewRest(n) { rest = n; cat = 'All'; drawCats(); drawGrid(); location.hash = 'home'; setTimeout(() => $('menu').scrollIntoView(), 80) }
function reorder(id) { orders.find(x => x.id == id).l.forEach(x => cart[x.i] = (cart[x.i] || 0) + x.q); refresh(); open('cart') }
const V = ['home', 'restaurants', 'offers', 'orders', 'about'];
function route() { let h = location.hash.slice(1); if (!V.includes(h)) h = 'home'; V.forEach(v => $('v-' + v).hidden = v != h); document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') == '#' + h)); closeAll(); scrollTo(0, 0); if (h == 'orders') drawOrders(); document.querySelectorAll('.sl').forEach(r => r._m && r._m()) }
addEventListener('hashchange', route);
$('cf').onsubmit = e => { e.preventDefault(); e.target.innerHTML = '<p>Thanks! We’ll reply within a day.</p>' };


/* ================= v3: sliders, restaurants, offers, orders, about ================= */
const DI = D.map((d, i) => ({ ...d, i }));
const bookings = ls('book', []);
const PMN = { card: 'Card', upi: 'UPI', cod: 'Cash on delivery' };
let rf = { t: 'All', s: 'rating' }, otab = 'all', bk = { g: 2, t: '8:30 pm' };
const mini = d => `<article class="mini"><div class="mp" onclick="showDish(${d.i})" style="background:radial-gradient(circle at 50% 55%,#fff 0 30%,${d.k} 31%)">${ph(d.i)}</div><div class="mi"><b>${d.n}</b><small>${d.r} · ⭐ ${d.s} · ${d.m} min</small><div class="row"><span class="price">${inr(d.p)}</span><button class="add" onclick="chg(${d.i},1)">Add</button></div></div></article>`;
const shell = i => `<button class="sl-p" aria-label="Previous">‹</button><div class="sl-t">${i}</div><button class="sl-n" aria-label="Next">›</button><div class="sl-d"></div>`;
const put = (id, inner, cls = '', auto = '') => { const e = $(id); e.className = 'sl ' + cls; if (auto) e.dataset.auto = auto; e.innerHTML = shell(inner) };
function slider(r) {
  const t = r.querySelector('.sl-t'), dots = r.querySelector('.sl-d');
  const w = () => (t.children[0] ? t.children[0].getBoundingClientRect().width : 0) + (parseFloat(getComputedStyle(t).columnGap) || 0);
  const idx = () => w() ? Math.round(t.scrollLeft / w()) : 0, go = i => t.scrollTo({ left: i * w(), behavior: 'smooth' });
  dots.innerHTML = [...t.children].map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join('');
  [...dots.children].forEach((b, i) => b.onclick = () => go(i));
  const mark = () => [...dots.children].forEach((b, i) => b.classList.toggle('on', i == idx())); r._m = mark;
  t.addEventListener('scroll', mark, { passive: true }); mark();
  r.querySelector('.sl-p').onclick = () => go(Math.max(0, idx() - 1));
  r.querySelector('.sl-n').onclick = () => { const max = w() ? Math.round((t.scrollWidth - t.clientWidth) / w()) : 0; go(idx() >= max ? 0 : idx() + 1) };
  if (r.dataset.auto) { let h = 0; r.onmouseenter = () => h = 1; r.onmouseleave = () => h = 0; const iv = setInterval(() => { if (!r.isConnected) return clearInterval(iv); if (!h && !document.hidden && r.offsetParent) r.querySelector('.sl-n').click() }, +r.dataset.auto) }
}
const initSliders = () => document.querySelectorAll('.sl:not([data-i])').forEach(r => { r.dataset.i = 1; slider(r) });

const BN = [
  { h: '50% off your first feast', p: 'Get 50% off up to ₹100 on orders above ₹199.', c: 'STACKLY50', b: 'Apply code', a: "applyCp('STACKLY50')", g: 'linear-gradient(120deg,#161b3d,#ff2e7e 60%,#ff3d54)', i: 0 },
  { h: 'Free delivery on every biryani', p: 'Order above ₹149 with FREEDEL and skip the delivery fee.', c: 'FREEDEL', b: 'Apply code', a: "applyCp('FREEDEL')", g: 'linear-gradient(120deg,#ff7a18,#ff3d54)', i: 2 },
  { h: 'Sweet tooth? Desserts from ₹129', p: 'Creamy scoops and fruity bowls, delivered cold.', b: 'See desserts', a: "quick('Desserts')", g: 'linear-gradient(120deg,#6c4bff,#ff2e7e)', i: 9 },
  { h: 'Fresh, light and healthy', p: 'Crisp salads and fruit bowls ready in about 12 minutes.', b: 'Order healthy', a: "quick('Healthy')", g: 'linear-gradient(120deg,#0f9d73,#6bd36b)', i: 8 }];
const bnHTML = BN.map(b => `<div class="bn" style="background:${b.g}"><div><h3>${b.h}</h3><p>${b.p}</p>${b.c ? `<span class="code2">${b.c}</span>` : ''}<button class="bt" onclick="${b.a}">${b.b}</button></div><div class="bi">${ph(b.i)}</div></div>`).join('');
const TM = [['Neha Rajput', 'The food is great, and the app keeps every step simple.', 'Margherita Pizza', '#ff2e7e'], ['Ananya Sharma', 'Loved how fast my biryani arrived and how easy the tracking was.', 'Chicken Biryani', '#ff3d54'], ['Arjun', 'The coupon codes saved me money on every single order.', 'Smash Burger', '#0f9d73'], ['Lisa Gideon', 'Smooth checkout and a very friendly rider. Will order again.', 'Sushi Platter', '#e8963a'], ['Rohan K.', 'Table booking took ten seconds, and the ramen was excellent.', 'Tonkotsu Ramen', '#161b3d'], ['Meera S.', 'Healthy options that actually taste good. The fruit bowl is my go-to.', 'Fruit Bowl', '#18b98a']];
const FQ = {
  A: [['How fast is delivery?', 'Most orders arrive in about 25 minutes, depending on distance and how busy the restaurant is. You can watch your rider live after paying.'], ['Which payment methods can I use?', 'Card, UPI and cash on delivery. Every payment step is validated before you confirm.'], ['Can I change my order?', 'You can edit your cart any time before paying. After payment, send us a message from the contact form as soon as possible.'], ['How do table bookings work?', 'Open Restaurants, choose Book a table, pick the date, time and guests. Find it later under My orders, then Table bookings.']],
  O: [['Can I use more than one coupon?', 'One coupon can be applied per order. The best one for you is the one that saves the most on your cart.'], ['Why is my coupon not working?', 'Each code has a minimum order value. Add more items to unlock it, or check the progress shown on the coupon.'], ['Do coupons apply to taxes and delivery?', 'Discounts apply to the food subtotal and taxes are worked out after the discount. FREEDEL removes the delivery fee.']]
};
const faq = a => a.map(([q, t]) => `<details><summary>${q}</summary><p>${t}</p></details>`).join('');

function drawRest() {
  const tags = ['All', ...new Set(R.flatMap(r => r.tags))];
  $('rcats').innerHTML = tags.map(t => `<button class="${t == rf.t ? 'on' : ''}" onclick="rf.t='${t}';drawRest()">${t}</button>`).join('');
  const l = R.filter(r => rf.t == 'All' || r.tags.includes(rf.t)).sort((a, b) => rf.s == 'rating' ? b.s - a.s : rf.s == 'time' ? a.m - b.m : a.two - b.two);
  $('rlist').innerHTML = l.map(r => `<article class="rc rv"><div class="rtop"><div class="rpic" style="background:radial-gradient(circle at 50% 55%,#fff 0 30%,${r.k} 31%)">${ph(r.a)}</div><div class="rinfo"><div class="rh"><h3>${r.n}</h3><span class="rate">⭐ ${r.s}</span></div><small>${r.cu} · ${r.area}</small><p>${r.d}</p><div class="meta"><span>⏱ ${r.m} min</span><span>${inr(r.two)} for two</span><span>${r.rv} reviews</span><span>🕒 ${r.hrs}</span></div><div class="offr">🏷 ${r.off}</div><div class="rb"><button class="add" onclick="viewRest('${r.n}')">View full menu</button><button class="ghost" onclick="book('${r.n}')">Book a table</button></div></div></div>
 <b>Popular at ${r.n}</b><div class="sl multi" style="margin-top:8px">${shell(DI.filter(d => d.r == r.n).map(mini).join(''))}</div></article>`).join('') || '<p class="empty">No restaurants match this filter.</p>';
  initSliders(); watch()
}
function drawOffers() {
  const s = sub();
  $('tix').innerHTML = Object.entries(CP).map(([k, c]) => { const ok = s >= c.min, ap = coupon == k; return `<div class="tk ${ap ? 'ap' : ''}"><div class="tl"><b>${c.big}</b><span>${c.sm}</span></div><div class="tr"><span class="code">${k}</span><h3>${c.txt}</h3><p>${c.d}</p><small>${ap && ok ? '✓ Applied to your cart' : ok ? '✓ Unlocked for your cart' : s ? `Add ${inr(c.min - s)} more to unlock` : `Valid on orders above ${inr(c.min)}`}</small><div class="rb"><button class="add" onclick="applyCp('${k}')">${ap ? 'Applied' : 'Apply'}</button><button class="ghost" onclick="copyCode('${k}')">Copy</button></div></div></div>` }).join('');
  $('rdeals').innerHTML = R.map(r => `<div class="of"><span class="big2">🏷</span><h3>${r.n}</h3><p class="offr">${r.off}</p><p>${r.cu}</p><button class="ghost" onclick="viewRest('${r.n}')">View menu</button></div>`).join('')
}
function copyCode(k) { const ok = () => say(`Code ${k} copied`), no = () => say(`Your code: ${k}`); try { navigator.clipboard.writeText(k).then(ok, no) } catch (e) { no() } }

function book(n) {
  const r = R.find(x => x.n == n), t = new Date().toISOString().slice(0, 10); bk = { g: 2, t: '8:30 pm' };
  $('book').innerHTML = `<button class="ic x" onclick="closeAll()" aria-label="Close">✕</button><h2>Book a table</h2><p class="sub">${n} · ${inr(r.two)} for two · ${r.hrs}</p><div class="f"><div class="two"><label>Date<input type="date" id="bd" min="${t}" value="${t}"></label><label>Guests<div class="qty" style="justify-content:space-between;padding:6px"><button onclick="bg(-1)" aria-label="Fewer">−</button><b id="bgn">2</b><button onclick="bg(1)" aria-label="More">+</button></div></label></div><label>Time</label><div class="slots">${['12:30 pm', '2:00 pm', '7:30 pm', '8:30 pm', '9:30 pm'].map(x => `<button class="${x == bk.t ? 'on' : ''}" onclick="bs(this,'${x}')">${x}</button>`).join('')}</div><input id="bnm" placeholder="Your name"><input id="bph" placeholder="Phone number" inputmode="tel"><div class="err" id="berr"></div><button class="btn" onclick="confirmBook('${n}')">Confirm booking</button></div>`; open('book')
}
const bg = d => { bk.g = Math.min(10, Math.max(1, bk.g + d)); $('bgn').textContent = bk.g };
const bs = (b, t) => { bk.t = t; b.parentNode.querySelectorAll('button').forEach(x => x.classList.toggle('on', x == b)) };
function confirmBook(n) {
  const e = $('berr'); if ($('bnm').value.trim().length < 2) return e.textContent = 'Please enter your name.'; if ($('bph').value.replace(/\D/g, '').length < 10) return e.textContent = 'Enter a 10-digit phone number.'; if (!$('bd').value) return e.textContent = 'Choose a date.';
  const b = { id: 'TB' + Math.floor(1000 + Math.random() * 8999), r: n, date: new Date($('bd').value).toLocaleDateString('en-IN', { dateStyle: 'medium' }), t: bk.t, g: bk.g }; bookings.unshift(b); sv('book', bookings); drawOrders();
  $('book').innerHTML = `<div class="done"><svg class="ok" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46"/><path d="M30 52l14 14 27-30"/></svg><h2 style="justify-content:center;display:flex">Table booked</h2><p class="sub" style="margin:8px auto">${n}<br>${b.date} at ${b.t} for ${b.g} guest${b.g > 1 ? 's' : ''}<br>Booking ${b.id}</p><button class="btn" onclick="closeAll();location.hash='orders';otab='book';drawOrders()">View my bookings</button></div>`; confetti()
}
function cancelBk(id) { const i = bookings.findIndex(b => b.id == id); if (i > -1) bookings.splice(i, 1); sv('book', bookings); drawOrders(); say('Booking cancelled.') }

function rate(id, n) { orders.find(o => o.id == id).r = n; sv('orders', orders); drawOrders(); say('Thanks for rating your order!') }
function receipt(id) {
  const o = orders.find(x => x.id == id), f = o.f, L = ['STACKLY RECEIPT', 'Order ' + o.id, new Date(o.t).toLocaleString('en-IN'), 'Payment: ' + PMN[o.pm], '------------------------------', ...o.l.map(x => `${x.q} x ${D[x.i].n}  ${inr(D[x.i].p * x.q)}`), '------------------------------'];
  if (f) { L.push('Subtotal  ' + inr(f.s)); if (f.x) L.push('Discount (' + o.cp + ')  -' + inr(f.x)); L.push('Delivery  ' + (f.d ? inr(f.d) : 'Free'), 'Taxes     ' + inr(f.t)) }
  L.push('TOTAL     ' + inr(o.total), '', 'Thank you for ordering with Stackly!');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([L.join('\n')], { type: 'text/plain' })); a.download = 'receipt-' + o.id + '.txt'; a.click(); say('Receipt downloaded')
}
function oCard(o) {
  return `<div class="ord2"><div class="oh"><div><b>${o.id}</b><small>${new Date(o.t).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })} · ${PMN[o.pm] || ''}</small></div><span class="st ${o.s == 4 ? 'd' : ''}">${ST[o.s]}</span></div>
 <div class="thr">${o.l.map(x => `<span class="th" title="${D[x.i].n}">${ph(x.i)}<em>${x.q}</em></span>`).join('')}</div>
 <p style="color:var(--mut)">${o.l.map(x => x.q + '× ' + D[x.i].n).join(', ')}</p>
 <div class="mst">${ST.map((_, k) => `<i class="${o.s == 4 || k < o.s ? 'fin' : k == o.s ? 'on' : ''}"></i>`).join('')}</div>
 ${o.s == 4 ? `<div class="stars">${[1, 2, 3, 4, 5].map(n => `<button class="${n <= (o.r || 0) ? 'on' : ''}" onclick="rate('${o.id}',${n})" aria-label="${n} stars">★</button>`).join('')}<small>${o.r ? 'Thanks for rating' : 'Rate this order'}</small></div>` : ''}
 <div class="of2"><b class="price">${inr(o.total)}${o.cp && o.f && o.f.x ? ` <small style="color:var(--mint);font:600 13px 'DM Sans',system-ui,sans-serif">saved ${inr(o.f.x)}</small>` : ''}</b><div class="rb"><button class="add" onclick="startTrack(orders.find(x=>x.id=='${o.id}'))">${o.s == 4 ? 'View status' : 'Track live'}</button><button class="ghost" onclick="reorder('${o.id}')">Reorder</button><button class="ghost" onclick="receipt('${o.id}')">Receipt</button></div></div></div>`
}
function drawOrders() {
  const sp = orders.reduce((a, o) => a + o.total, 0), ct = {}; orders.forEach(o => o.l.forEach(x => ct[x.i] = (ct[x.i] || 0) + x.q)); const fv = Object.entries(ct).sort((a, b) => b[1] - a[1])[0];
  $('ostats').innerHTML = `<div><b>${orders.length}</b>orders placed</div><div><b>${inr(sp)}</b>total spent</div><div><b>${fv ? D[fv[0]].n : 'None yet'}</b>your favourite</div><div><b>${bookings.length}</b>table bookings</div>`;
  $('otabs').innerHTML = [['all', 'All orders'], ['active', 'Active'], ['past', 'Past'], ['book', 'Table bookings']].map(([k, l]) => `<button class="${k == otab ? 'on' : ''}" onclick="otab='${k}';drawOrders()">${l}</button>`).join('');
  const empty = (t, p) => `<div class="empty2">${ph(0)}<h3>${t}</h3><p>${p}</p><a class="add" href="#${otab == 'book' ? 'restaurants' : 'home'}">${otab == 'book' ? 'Find a restaurant' : 'Browse the menu'}</a></div>`;
  if (otab == 'book') $('olist').innerHTML = bookings.length ? bookings.map(b => { const r = R.find(x => x.n == b.r); return `<div class="ord2"><div class="oh"><div><b>${b.r}</b><small>Booking ${b.id} · ${r.area}</small></div><span class="st d">Confirmed</span></div><div class="thr"><span class="th">${ph(r.a)}</span></div><p>📅 ${b.date} · 🕒 ${b.t} · 👥 ${b.g} guest${b.g > 1 ? 's' : ''}</p><div class="of2"><span style="color:var(--mut)">${r.hrs}</span><button class="ghost" onclick="cancelBk('${b.id}')">Cancel booking</button></div></div>` }).join('') : empty('No table bookings', 'Reserve a table at your favourite restaurant in a few taps.');
  else { const l = orders.filter(o => otab == 'all' || (otab == 'active') == (o.s < 4)); $('olist').innerHTML = l.length ? l.map(oCard).join('') : empty(otab == 'active' ? 'No active orders' : 'No orders yet', 'Your orders will show up here with live tracking, ratings and receipts.') }
}

drawCats(); refresh(); drawOrders(); route();
const mkw = ['Pizza', 'Burgers', 'Biryani', 'Sushi', 'Wraps', 'Pasta', 'Tacos', 'Ramen', 'Salads', 'Desserts'];
$('mqi').innerHTML = [...mkw, ...mkw, ...mkw, ...mkw].map(x => `<span>${x}</span>`).join('');
document.querySelectorAll('.why .of,.sec h2,.s4,.cta h2,.cta .nl,#v-about .of,#rlist .card,#offers .of').forEach((el, i) => { el.classList.add('rv'); el.style.setProperty('--d', (i % 4) * .08 + 's') });
watch();
const hero = $('hero'); hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); hero.style.setProperty('--px', (e.clientX - r.left) + 'px'); hero.style.setProperty('--py', (e.clientY - r.top) + 'px'); hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(2)); hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(2)) });
const g = $('grid');
g.addEventListener('pointermove', e => { const c = e.target.closest('.tilt'); if (!c || e.pointerType == 'touch') return; const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(800px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-4px)` });
g.addEventListener('pointerout', e => { const c = e.target.closest('.tilt'); if (c && !c.contains(e.relatedTarget)) c.style.transform = '' });
addEventListener('scroll', () => { $('prog').style.width = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight) * 100 + '%'; $('top').classList.toggle('on', scrollY > 600) }, { passive: true });
addEventListener('keydown', e => { if (e.key == 'Escape') closeAll() });
document.addEventListener('click', e => { if (e.target.closest('[data-soon]')) { e.preventDefault(); say('This page is coming soon.') } });
$('nl').onsubmit = e => { e.preventDefault(); say('Subscribed! Fresh offers are on the way.'); e.target.reset() };
window.addEventListener('load', () => setTimeout(() => { $('splash').classList.add('off'); document.documentElement.style.setProperty('--base', '0s') }, 900));
put('bnH', bnHTML, '', '5000'); put('bnO', bnHTML, '', '5000');
put('frs', R.map(r => `<div class="bn" style="background:${r.g}"><div><h3>${r.n}</h3><p>${r.cu} · ⭐ ${r.s} · ${r.m} min<br>${r.off}</p><button class="bt" onclick="viewRest('${r.n}')">View menu</button> <button class="bt ln" onclick="book('${r.n}')">Book a table</button></div><div class="bi">${ph(r.a)}</div></div>`).join(''), '', '5500');
put('pk', DI.slice().sort((a, b) => b.s - a.s).slice(0, 8).map(mini).join(''), 'multi');
put('tm', TM.map(t => `<div class="tmc"><div class="stars2">★★★★★</div><p>“${t[1]}”</p><div class="who"><span class="av" style="background:${t[3]}">${t[0][0]}</span><div><b>${t[0]}</b><small>Ordered ${t[2]}</small></div></div></div>`).join(''), 'multi t3', '4500');
$('fqA').innerHTML = faq(FQ.A); $('fqO').innerHTML = faq(FQ.O);
$('ab1').innerHTML = ART[0](); $('ab2').innerHTML = ART[3](); $('ab3').innerHTML = ART[2]();
$('rsort').onchange = e => { rf.s = e.target.value; drawRest() };
drawRest(); drawOffers(); initSliders();
document.querySelectorAll('.faq details,.tl2>div,.abstats div,.abhero .abart').forEach((el, i) => { el.classList.add('rv'); el.style.setProperty('--d', (i % 4) * .08 + 's') });
const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const el = e.target, to = +el.dataset.count; let v = 0; const t = setInterval(() => { v += to / 40; if (v >= to) { v = to; clearInterval(t) } el.textContent = Math.round(v) + (el.dataset.suf || '') }, 35); cio.unobserve(el) } }), { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
watch();
setInterval(() => { const n = new Date(), e = new Date(n); e.setHours(23, 59, 59, 999); const s = Math.floor((e - n) / 1000), p = x => String(x).padStart(2, '0'); $('cd').textContent = `${p(s / 3600 | 0)}:${p(s % 3600 / 60 | 0)}:${p(s % 60)}` }, 1000);

/* ===== Stack builder ===== */
let stk = [], fresh = 0;
function drawStack() {
  $('stpick').innerHTML = DI.map(d => `<button class="sp ${stk.includes(d.i) ? 'on' : ''}" onclick="tgS(${d.i})" aria-pressed="${stk.includes(d.i)}"><span class="spi">${ph(d.i)}</span><b>${d.n}</b><small>${inr(d.p)}</small></button>`).join('');
  $('tower').innerHTML = stk.length ? stk.map((i, k) => `<div class="lay${fresh && k == stk.length - 1 ? ' drop' : ''}" style="--k:${k}">${ph(i)}</div>`).join('') : '<p class="stempty">Tap dishes to start stacking your plate tower</p>'; fresh = 0;
  const s = stk.reduce((a, i) => a + D[i].p, 0), sv = Math.min(120, Math.round(s / 10)), m = CP.STACK10.min;
  $('stsum').innerHTML = `<div><small>${stk.length} of 4 dishes</small><b class="price">${inr(s)}</b><br>${s >= m ? `<span class="sv">You save ${inr(sv)} with STACK10</span>` : `<span class="sv2">${s ? `Add ${inr(m - s)} more to save 10%` : 'Stacks over ₹299 save 10%'}</span>`}</div><button class="btn" ${stk.length ? '' : 'disabled'} onclick="addStack()">Add stack to cart</button>`
}
function tgS(i) { if (stk.includes(i)) stk = stk.filter(x => x != i); else if (stk.length < 4) { stk = [...stk, i]; fresh = 1 } else say('Your stack is full. Remove a dish first.'); drawStack() }
function addStack() { stk.forEach(i => cart[i] = (cart[i] || 0) + 1); const s = sub(); stk = []; drawStack(); if (s >= CP.STACK10.min) coupon = 'STACK10'; refresh(); say(s >= CP.STACK10.min ? 'Stack added with STACK10 applied' : 'Stack added to your cart'); open('cart') }
drawStack();
