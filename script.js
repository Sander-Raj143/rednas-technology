/* ═══════════════════════════════════════
   Rednas Technologies — script.js
   ════════════════════════════════════════ */

// ─── Intersection Observer — reveal on scroll ───
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), 60);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ─── Active nav link on scroll ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObs.observe(s));

// ─── Back to top button ───
window.addEventListener('scroll', () => {
  const btt = document.getElementById('btt');
  btt.classList.toggle('show', window.scrollY > 500);
});

// ─── Stagger card animations ───
document.querySelectorAll('.svc-card, .industry-card, .partner-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 0.1}s`;
});

// ─── Contact form submit ───
function handleFormSubmit(btn) {
  btn.textContent = "✓ Message Sent! We'll be in touch shortly.";
  btn.style.background = '#1a7a1a';
}
