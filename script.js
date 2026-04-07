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

// ---- Contact Form — sends to razagbolo@gmail.com ----
async function handleForm(e) {
  e.preventDefault();
  const form  = e.target;
  const btn   = document.getElementById('submitBtn');
  const toast = document.getElementById('toast');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/razagbolo@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });

    if (res.ok) {
      toast.textContent = '✓ Your enquiry has been received. We will respond within 24 hours.';
      toast.style.background = 'rgba(74,124,90,0.08)';
      toast.style.borderColor = 'rgba(74,124,90,0.25)';
      toast.style.color = '#3a6b4a';
      toast.classList.add('show');
      form.reset();
      setTimeout(() => toast.classList.remove('show'), 6000);
    } else {
      throw new Error('Send failed');
    }
  } catch {
    toast.textContent = '✗ Something went wrong. Please try again later.';
    toast.style.background = 'rgba(124,58,58,0.08)';
    toast.style.borderColor = 'rgba(124,58,58,0.25)';
    toast.style.color = '#7c3a3a';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 6000);
  } finally {
    btn.textContent = 'Send Enquiry';
    btn.disabled = false;
  }
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
