// Footer year
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Mark active nav links based on current path
const path = window.location.pathname.replace(/index\.html$/, '') || '/';
document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach((link) => {
  const linkPath = link.getAttribute('href');
  if (linkPath === path || (linkPath === '/' && path === '/')) {
    link.classList.add('active');
  }
});

// Duplicate marquee content for seamless loop
document.querySelectorAll('.discipline-track').forEach((track) => {
  track.innerHTML += track.innerHTML;
});

// Scroll reveal
const revealTargets = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => observer.observe(el));
