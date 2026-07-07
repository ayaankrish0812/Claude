const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// ---- Mobile menu ----
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
}

// ---- Split-headline rise-in (hero titles) ----
if (!prefersReducedMotion) {
  document.querySelectorAll('.hero h1, .page-hero h1').forEach((h1) => {
    const nodes = Array.from(h1.childNodes);
    h1.setAttribute('aria-label', h1.textContent.trim());
    h1.textContent = '';
    let charIndex = 0;

    const buildWord = (word) => {
      const w = document.createElement('span');
      w.className = 'w';
      for (const ch of word) {
        const c = document.createElement('span');
        c.className = 'c';
        c.textContent = ch;
        c.style.setProperty('--cd', `${0.05 + charIndex * 0.028}s`);
        charIndex += 1;
        w.appendChild(c);
      }
      return w;
    };

    const appendText = (text, target) => {
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) target.appendChild(document.createTextNode(' '));
        else target.appendChild(buildWord(part));
      });
    };

    nodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        appendText(node.textContent, h1);
      } else if (node.nodeName === 'BR') {
        h1.appendChild(document.createElement('br'));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Keep styled spans (e.g. gradient .text-flame) intact: rise as one word
        const w = document.createElement('span');
        w.className = 'w';
        const clone = node.cloneNode(true);
        clone.classList.add('c');
        clone.style.setProperty('--cd', `${0.05 + charIndex * 0.028}s`);
        charIndex += clone.textContent.length;
        w.appendChild(clone);
        h1.appendChild(w);
      }
    });

    h1.setAttribute('aria-hidden', 'false');
    h1.querySelectorAll('.w, .c').forEach((el) => el.setAttribute('aria-hidden', 'true'));
    h1.classList.add('split-ready');
  });
}

// ---- Magnetic pull on primary CTAs ----
if (finePointer && !prefersReducedMotion) {
  document.querySelectorAll('.hero-actions .btn-flame, .cta-actions .btn-flame').forEach((btn) => {
    btn.classList.add('magnetic');
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.25;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ---- 3D tilt on cards ----
if (finePointer && !prefersReducedMotion) {
  document.querySelectorAll('.program-card, .story-card, .way-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ---- Scroll effects: progress bar + parallax court lines ----
const progressBar = document.querySelector('.scroll-progress');
const parallaxLayers = prefersReducedMotion ? [] : Array.from(document.querySelectorAll('.hero-court'));
let ticking = false;

const onScroll = () => {
  if (progressBar) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%';
  }
  parallaxLayers.forEach((layer) => {
    const section = layer.parentElement;
    const rect = section.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    layer.style.transform = `translate3d(0, ${(progress - 0.5) * rect.height * 0.16}px, 0)`;
  });
  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
onScroll();

// ---- Scroll reveals ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revealObserver.observe(el));
}

// ---- Count-up stats ----
const counters = document.querySelectorAll('.count');
if (counters.length) {
  const formatValue = (value) => value.toLocaleString('en-US');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (prefersReducedMotion) {
      el.textContent = formatValue(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = formatValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach((el) => countObserver.observe(el));
}

// ---- Transparency bars ----
const bars = document.querySelectorAll('.bar-fill');
if (bars.length) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width || '0%';
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach((el) => barObserver.observe(el));
}

// ---- Contact form ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
    contactForm.reset();
    setTimeout(() => success.classList.remove('show'), 6000);
  });
}
