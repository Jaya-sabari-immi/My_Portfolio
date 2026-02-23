/* ═══════════════════════════════════
   JAYA SABARI R  |  script.js
   ═══════════════════════════════════ */

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 85);
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => ro.observe(el));

// ── Skill Bars ──
const bars = document.querySelectorAll('.bar-fill');
const bo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const b = e.target;
      setTimeout(() => { b.style.width = b.dataset.pct + '%'; }, 250);
      bo.unobserve(b);
    }
  });
}, { threshold: 0.3 });
bars.forEach(b => bo.observe(b));

// ── Active Nav ──
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 150) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Resume Button Feedback ──
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    const orig = resumeBtn.innerHTML;
    resumeBtn.innerHTML = '<i class="fas fa-check"></i> Downloading...';
    resumeBtn.style.opacity = '.75';
    setTimeout(() => { resumeBtn.innerHTML = orig; resumeBtn.style.opacity = ''; }, 2500);
  });
}
