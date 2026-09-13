// Mobiles Menü auf- und zuklappen
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const offen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(offen));
});

// Nach dem Antippen eines Menüpunkts wieder schließen
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Jahreszahl im Fußbereich aktuell halten
document.getElementById('jahr').textContent = new Date().getFullYear();
