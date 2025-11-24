document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('nav ul');
  const yearEl = document.querySelector('#year');

  if (burger && navList) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('open');
      burger.setAttribute('aria-expanded', navList.classList.contains('open'));
    });

    burger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        burger.click();
      }
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navList.classList.remove('open'));
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const header = document.querySelector('header');
  if (header) {
    const observer = new IntersectionObserver(([entry]) => {
      header.classList.toggle('shadow', !entry.isIntersecting);
    });
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    header.before(sentinel);
    observer.observe(sentinel);
  }
});
