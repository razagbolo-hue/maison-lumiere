// =============================================
//  MAISON LUMIÈRE — script.js
// =============================================

// ---- Sticky Nav ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Mobile Menu ----
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenuBtn.addEventListener('click', closeMobileMenu);
function closeMobileMenu() { mobileMenu.classList.remove('open'); }

// ---- Scroll Reveal ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('[data-aos]')];
      const index    = siblings.indexOf(entry.target);
      entry.target.style.animationDelay = (index * 0.12) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// ---- Contact Form ----
function handleForm(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  e.target.reset();
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// ---- Add to Cart feedback ----
function addToCart(btn) {
  const original = btn.textContent;
  btn.textContent = '✓ Added';
  btn.style.background = '#4a8c6a';
  btn.style.borderColor = '#4a8c6a';
  btn.style.color = 'white';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 1800);
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
