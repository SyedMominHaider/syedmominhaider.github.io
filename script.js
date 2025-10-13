// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Custom white circle cursor (with blend so it stays visible)
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// (Optional) enlarge cursor on interactive elements
const enlargeOn = 'a, button, .icon-btn, .btn';
document.querySelectorAll(enlargeOn).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '26px';
    cursor.style.height = '26px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '18px';
    cursor.style.height = '18px';
  });
});
