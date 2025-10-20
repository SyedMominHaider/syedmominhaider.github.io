// --- helpers ---
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const cursor = document.getElementById('cursor');
const isMobile = () => window.matchMedia('(max-width: 900px)').matches;

// --- menu toggle (body scroll lock only on mobile) ---
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('no-scroll', open && isMobile());
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.classList.toggle('open', open && isMobile()); // show X
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.classList.remove('no-scroll');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('open');
    });
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      nav.classList.remove('open');
      document.body.classList.remove('no-scroll');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    setupCursor();
  });
}

// --- custom cursor: desktop ON, mobile OFF ---
function setupCursor(){
  if (!cursor) return;
  if (isMobile()) {
    cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
    window.onmousemove = null;
  } else {
    cursor.style.display = 'block';
    document.body.style.cursor = 'none';
    window.onmousemove = e => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    const enlargeOn = 'a, button, .icon-btn, .btn';
    document.querySelectorAll(enlargeOn).forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.style.width='26px'; cursor.style.height='26px'; });
      el.addEventListener('mouseleave', () => { cursor.style.width='18px'; cursor.style.height='18px'; });
    });
  }
}
setupCursor();
