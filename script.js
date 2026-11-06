document.addEventListener('DOMContentLoaded',()=>{requestAnimationFrame(()=>document.body.classList.add('page-ready'));});
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));const yr=document.querySelector('#year');if(yr)yr.textContent=new Date().getFullYear();const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelector('.telegram-placeholder')?.addEventListener('click',e=>e.preventDefault());
// Expand/collapse the work history after the first 15 entries.
const experienceSection=document.querySelector('#experience');
const experienceMore=document.querySelector('.experience-more-button');
experienceMore?.addEventListener('click',()=>{
  const expanded=experienceSection.classList.toggle('experience-expanded');
  experienceMore.setAttribute('aria-expanded',String(expanded));
  const lang=document.documentElement.lang||'en';
  const labels={en:expanded?'Show fewer projects':'Continue to full work history',fa:expanded?'نمایش سوابق کمتر':'ادامه سوابق کاری',ar:expanded?'عرض مشاريع أقل':'متابعة سجل الخبرات'};
  const arrow=experienceMore.querySelector('.button-arrow');
  experienceMore.textContent=labels[lang]||labels.en;
  if(arrow) { arrow.textContent='↓'; arrow.setAttribute('aria-hidden','true'); experienceMore.append(arrow); }
});
