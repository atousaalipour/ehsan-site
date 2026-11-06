/* Renders project cards, project gallery and the lightbox.
   Images are discovered automatically from each project's folder:
     cover.(jpg|jpeg|png|webp)   -> card image (optional; falls back to 1.*)
     1.jpg, 2.jpg, 3.jpg ...     -> gallery images, numbered without gaps          */
(() => {
  const D = window.SITE_DATA;
  const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  const lang = () => document.documentElement.lang || 'en';
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const dat = o => `data-en="${esc(o.en)}" data-fa="${esc(o.fa)}" data-ar="${esc(o.ar)}"`;
  const pick = o => o[lang()] || o.en;

  const UI = {
    noProjects: { en: 'Projects will be added here soon.', fa: 'پروژه‌ها به‌زودی در این بخش اضافه می‌شوند.', ar: 'ستتم إضافة المشاريع هنا قريباً.' },
    noPhotos: { en: 'Photos will be added here soon.', fa: 'تصاویر به‌زودی در این بخش قرار می‌گیرد.', ar: 'ستتم إضافة الصور هنا قريباً.' },
    soon: { en: 'Photo coming soon', fa: 'تصویر به‌زودی', ar: 'الصورة قريباً' },
    notFound: { en: 'Project not found.', fa: 'پروژه پیدا نشد.', ar: 'المشروع غير موجود.' }
  };
  const LB = {
    en: { close: 'Close', prev: 'Previous', next: 'Next', zin: 'Zoom in', zout: 'Zoom out', reset: 'Reset zoom', img: 'Photo' },
    fa: { close: 'بستن', prev: 'قبلی', next: 'بعدی', zin: 'بزرگ‌نمایی', zout: 'کوچک‌نمایی', reset: 'اندازهٔ اصلی', img: 'تصویر' },
    ar: { close: 'إغلاق', prev: 'السابق', next: 'التالي', zin: 'تكبير', zout: 'تصغير', reset: 'الحجم الأصلي', img: 'صورة' }
  };

  /* ---------- image discovery ---------- */
  const probe = url => new Promise(res => { const i = new Image(); i.onload = () => res(url); i.onerror = () => res(null); i.src = url; });
  const findFile = async (folder, name) => (await Promise.all(EXTS.map(e => probe(`${folder}/${name}.${e}`)))).find(Boolean) || null;
  async function discover(folder, onBatch) {
    const all = [], STEP = 6;
    for (let start = 1; start < 400; start += STEP) {
      const idx = Array.from({ length: STEP }, (_, k) => start + k);
      const found = await Promise.all(idx.map(n => findFile(folder, n)));
      const ok = [];
      for (const f of found) { if (!f) break; ok.push(f); }
      if (ok.length) { all.push(...ok); onBatch && onBatch(ok, all.length - ok.length); }
      if (ok.length < STEP) break;
    }
    return all;
  }
  const emptyBox = msg => `<div class="empty-box reveal visible"><span class="empty-icon" aria-hidden="true">◫</span><p ${dat(msg)}>${esc(msg.en)}</p></div>`;

  /* ---------- category page: project cards ---------- */
  const grid = document.querySelector('[data-category-grid]');
  if (grid) {
    const list = D.projects.filter(p => p.category === grid.dataset.categoryGrid);
    if (!list.length) grid.outerHTML = emptyBox(UI.noProjects);
    else {
      grid.innerHTML = list.map((p, i) => `
        <a class="service-card project-card reveal" href="project.html?p=${p.slug}" data-slug="${p.slug}">
          <span class="card-number">${String(i + 1).padStart(2, '0')}</span>
          <div class="service-photo"></div>
          <div class="cover-empty"><span ${dat(UI.soon)}>${UI.soon.en}</span></div>
          <div class="glass-panel">
            <h3 ${dat(p.title)}>${esc(p.title.en)}</h3>
            <p ${dat(p.place)}>${esc(p.place.en)}</p>
            <span class="card-arrow">↗</span>
          </div>
        </a>`).join('');
      list.forEach(async p => {
        const card = grid.querySelector(`[data-slug="${p.slug}"]`);
        const url = (await findFile(p.folder, 'cover')) || (await findFile(p.folder, 1));
        if (url) { card.querySelector('.service-photo').style.backgroundImage = `url("${url}")`; card.classList.add('has-cover'); }
      });
    }
  }

  /* ---------- project page: gallery ---------- */
  const holder = document.querySelector('[data-project-page]');
  if (holder) {
    const slug = new URLSearchParams(location.search).get('p');
    const p = D.projects.find(x => x.slug === slug);
    const hero = document.querySelector('.page-head-copy');
    if (!p) {
      hero.querySelector('h1').outerHTML = `<h1 ${dat(UI.notFound)}>${UI.notFound.en}</h1>`;
      document.querySelector('#gallery').innerHTML = '';
    } else {
      const cat = D.categories[p.category];
      document.title = `${p.title.en} — ${p.place.en} | Ehsan Alipour`;
      const eb = hero.querySelector('.eyebrow'); eb.setAttribute('data-en', cat.title.en); eb.setAttribute('data-fa', cat.title.fa); eb.setAttribute('data-ar', cat.title.ar); eb.textContent = cat.title.en;
      const h1 = hero.querySelector('h1'); h1.setAttribute('data-en', p.title.en); h1.setAttribute('data-fa', p.title.fa); h1.setAttribute('data-ar', p.title.ar); h1.textContent = p.title.en;
      const d = hero.querySelector('.page-head-desc'); d.setAttribute('data-en', p.place.en); d.setAttribute('data-fa', p.place.fa); d.setAttribute('data-ar', p.place.ar); d.textContent = p.place.en;
      const back = hero.querySelector('.back-link'); back.href = cat.page;
      const box = document.querySelector('#gallery-grid');
      const urls = [];
      const addItems = (batch, offset) => {
        box.querySelector('.gallery-loading')?.remove();
        batch.forEach((u, k) => {
          const i = offset + k;
          const b = document.createElement('button');
          b.type = 'button'; b.className = 'g-item'; b.style.setProperty('--i', k % 6);
          b.innerHTML = `<img src="${u}" alt="" loading="lazy" decoding="async"><span class="g-zoom" aria-hidden="true">+</span>`;
          b.addEventListener('click', () => openLightbox(urls, i, b));
          box.append(b); io.observe(b);
        });
        urls.push(...batch);
      };
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .05 });
      box.innerHTML = '<div class="gallery-loading" aria-hidden="true"><span></span><span></span><span></span></div>';
      discover(p.folder, addItems).then(all => {
        box.querySelector('.gallery-loading')?.remove();
        if (!all.length) {
          box.outerHTML = emptyBox(UI.noPhotos);
          console.info(`[gallery] No photos yet. Put 1.jpg, 2.jpg, 3.jpg ... in "${p.folder}/"`);
        }
      });
    }
  }

  /* ---------- lightbox ---------- */
  let lb, opener;
  const ico = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  function openLightbox(urls, start, from) {
    opener = from;
    if (!lb) lb = build();
    lb.open(urls, start);
  }
  function build() {
    const el = document.createElement('div');
    el.className = 'lightbox'; el.hidden = true; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    el.innerHTML = `
      <div class="lb-top">
        <span class="lb-count"></span>
        <div class="lb-tools">
          <button type="button" class="lb-btn" data-a="prev">${ico('M15 5l-7 7 7 7')}</button>
          <button type="button" class="lb-btn" data-a="next">${ico('M9 5l7 7-7 7')}</button>
          <span class="lb-sep"></span>
          <button type="button" class="lb-btn" data-a="zout">${ico('M5 12h14')}</button>
          <button type="button" class="lb-zoomlabel" data-a="reset">100%</button>
          <button type="button" class="lb-btn" data-a="zin">${ico('M12 5v14M5 12h14')}</button>
          <span class="lb-sep"></span>
          <button type="button" class="lb-btn lb-close" data-a="close">${ico('M6 6l12 12M18 6L6 18')}</button>
        </div>
      </div>
      <div class="lb-stage"><img class="lb-img" alt="" draggable="false"></div>`;
    document.body.append(el);
    const stage = el.querySelector('.lb-stage'), img = el.querySelector('.lb-img'), count = el.querySelector('.lb-count'), zl = el.querySelector('.lb-zoomlabel');
    let urls = [], idx = 0, s = 1, tx = 0, ty = 0;
    const ptr = new Map(); let moved = 0, startX = 0, startY = 0, pinch0 = 0, pinchS = 1;

    const labels = () => { const t = LB[lang()] || LB.en; el.querySelectorAll('[data-a]').forEach(b => { const k = { prev: 'prev', next: 'next', zin: 'zin', zout: 'zout', reset: 'reset', close: 'close' }[b.dataset.a]; b.title = t[k]; b.setAttribute('aria-label', t[k]); }); };
    const clamp = () => {
      if (s <= 1) { tx = ty = 0; return; }
      const mx = Math.max(0, (img.offsetWidth * s - stage.clientWidth) / 2), my = Math.max(0, (img.offsetHeight * s - stage.clientHeight) / 2);
      tx = Math.min(mx, Math.max(-mx, tx)); ty = Math.min(my, Math.max(-my, ty));
    };
    const apply = () => { clamp(); img.style.transform = `translate(${tx}px,${ty}px) scale(${s})`; el.classList.toggle('zoomed', s > 1); zl.textContent = Math.round(s * 100) + '%'; };
    const zoomTo = (ns, cx = 0, cy = 0) => { ns = Math.min(5, Math.max(1, ns)); const r = ns / s; tx = cx - (cx - tx) * r; ty = cy - (cy - ty) * r; s = ns; apply(); };
    const rel = e => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2]; };
    const show = i => {
      idx = (i + urls.length) % urls.length; s = 1; tx = ty = 0; apply();
      img.classList.add('loading'); img.onload = () => img.classList.remove('loading'); img.src = urls[idx];
      count.textContent = `${idx + 1} / ${urls.length}`;
      el.classList.toggle('single', urls.length < 2);
      [1, -1].forEach(d => { const n = new Image(); n.src = urls[(idx + d + urls.length) % urls.length]; });
    };
    const close = () => { el.classList.remove('open'); document.body.classList.remove('lb-lock'); document.removeEventListener('keydown', onKey); setTimeout(() => { el.hidden = true; img.removeAttribute('src'); }, 220); opener && opener.focus && opener.focus({ preventScroll: true }); };
    const act = a => ({ prev: () => show(idx - 1), next: () => show(idx + 1), zin: () => zoomTo(s * 1.4), zout: () => zoomTo(s / 1.4), reset: () => zoomTo(1), close }[a] || (() => { }))();
    function onKey(e) {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === '+' || e.key === '=') zoomTo(s * 1.4);
      else if (e.key === '-') zoomTo(s / 1.4);
      else if (e.key === '0') zoomTo(1);
      else if (e.key === 'Tab') { const f = [...el.querySelectorAll('button:not([hidden])')].filter(b => b.offsetParent); if (!f.length) return; const i = f.indexOf(document.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
    }
    el.querySelector('.lb-tools').addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (b) act(b.dataset.a); });
    stage.addEventListener('wheel', e => { e.preventDefault(); const [cx, cy] = rel(e); zoomTo(s * (e.deltaY < 0 ? 1.15 : 1 / 1.15), cx, cy); }, { passive: false });
    img.addEventListener('dblclick', e => { const [cx, cy] = rel(e); zoomTo(s > 1 ? 1 : 2.5, cx, cy); });
    stage.addEventListener('pointerdown', e => {
      stage.setPointerCapture(e.pointerId); ptr.set(e.pointerId, [e.clientX, e.clientY]); moved = 0; startX = e.clientX; startY = e.clientY;
      if (ptr.size === 2) { const [a, b] = [...ptr.values()]; pinch0 = Math.hypot(a[0] - b[0], a[1] - b[1]); pinchS = s; }
    });
    stage.addEventListener('pointermove', e => {
      if (!ptr.has(e.pointerId)) return;
      const prev = ptr.get(e.pointerId); ptr.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptr.size === 2) { const [a, b] = [...ptr.values()]; zoomTo(pinchS * Math.hypot(a[0] - b[0], a[1] - b[1]) / pinch0); moved = 99; return; }
      const dx = e.clientX - prev[0], dy = e.clientY - prev[1]; moved += Math.abs(dx) + Math.abs(dy);
      if (s > 1) { tx += dx; ty += dy; apply(); stage.classList.add('panning'); }
    });
    const end = e => {
      if (!ptr.has(e.pointerId)) return; ptr.delete(e.pointerId); stage.classList.remove('panning');
      if (ptr.size) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      if (s === 1 && moved > 40 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) show(idx + (dx < 0 ? 1 : -1));
      else if (moved < 6 && e.target === stage) close();
    };
    stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end);
    el.addEventListener('click', e => { if (e.target === el) close(); });
    return {
      open(list, i) { urls = list; labels(); el.hidden = false; document.body.classList.add('lb-lock'); show(i); requestAnimationFrame(() => el.classList.add('open')); document.addEventListener('keydown', onKey); el.querySelector('.lb-close').focus({ preventScroll: true }); }
    };
  }
})();
