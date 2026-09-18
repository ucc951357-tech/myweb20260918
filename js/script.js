document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const menu = document.querySelector('#mainNav');
  const collapse = new bootstrap.Collapse(menu, { toggle: false });

  const updateNavbar = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  navLinks.forEach((link) => link.addEventListener('click', () => {
    if (window.innerWidth < 992) collapse.hide();
  }));

  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
});
