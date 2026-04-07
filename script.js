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

// ---- Contact Form — Web3Forms ----
const contactForm = document.getElementById('contactForm');
const submitBtn   = contactForm.querySelector('button[type="submit"]');
const toast       = document.getElementById('toast');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  formData.append('access_key', '4684b606-cf04-4334-86c9-2e3313075ff6');

  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();

    if (response.ok) {
      toast.textContent = '✓ Enquiry received. We will be in touch shortly.';
      toast.style.background = 'rgba(74,124,90,0.08)';
      toast.style.borderColor = 'rgba(74,124,90,0.25)';
      toast.style.color = '#3a6b4a';
      contactForm.reset();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    toast.textContent = '✗ Something went wrong. Please try again or email us directly.';
    toast.style.background = 'rgba(180,60,60,0.08)';
    toast.style.borderColor = 'rgba(180,60,60,0.25)';
    toast.style.color = '#8b3a3a';
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 7000);
  }
});

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
