
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => { 
  nav.classList.toggle('scrolled', window.scrollY > 60); 
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { 
      e.target.style.opacity = '1'; 
      e.target.style.transform = 'translateY(0)'; 
    }
  });
}, { threshold: 0.12 });


document.querySelectorAll('.dest-card, .offer-card, .why-item, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});s