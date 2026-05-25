/* OPF — main.js */

(function () {
  'use strict';

  /* --- Header scroll --- */
  const header = document.getElementById('header');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('header--solid', y > 60);
    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile nav --- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  // Create overlay to close nav on outside click
  const navOverlay = document.createElement('div');
  navOverlay.className = 'nav-overlay';
  document.body.appendChild(navOverlay);

  function closeNav() {
    nav.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
      navOverlay.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navOverlay.addEventListener('click', closeNav);

    nav.querySelectorAll('.header__nav-link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* --- Scroll Reveal --- */
  var reveals = document.querySelectorAll('[data-reveal]');

  if (reveals.length && 'IntersectionObserver' in window) {
    var staggerMap = new Map();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        var parent = el.parentElement;

        if (!staggerMap.has(parent)) {
          staggerMap.set(parent, 0);
        }
        var index = staggerMap.get(parent);
        staggerMap.set(parent, index + 1);

        setTimeout(function () {
          el.classList.add('revealed');
        }, index * 100);

        observer.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('revealed'); });
  }

  /* --- Count-up animation --- */
  var counters = document.querySelectorAll('[data-count]');

  if (counters.length && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var isRaw = el.hasAttribute('data-raw');

        if (isRaw) {
          el.textContent = target + suffix;
          countObserver.unobserve(el);
          return;
        }

        var duration = 1800;
        var start = performance.now();

        function tick(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(eased * target);

          el.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { countObserver.observe(el); });
  }

  /* --- CTA pulse --- */
  var primaryCta = document.querySelector('.hero__actions .btn--primary');
  if (primaryCta) {
    setInterval(function () {
      primaryCta.style.transform = 'scale(1.03)';
      setTimeout(function () {
        primaryCta.style.transform = '';
      }, 300);
    }, 5000);
  }

  /* --- Lightning SVG bolts --- */
  var bolts = document.querySelectorAll('.hero__bolt');
  var flashEl = document.getElementById('hero-flash');

  if (bolts.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    function setOp(el, v) { el.style.opacity = String(v); }

    function flash(times, delay) {
      if (!flashEl) return;
      setOp(flashEl, 1);
      setTimeout(function () {
        setOp(flashEl, 0);
        if (times > 1) {
          setTimeout(function () { flash(times - 1, delay * 0.7); }, delay);
        }
      }, 55 + Math.random() * 40);
    }

    function strikeSequence() {
      var bolt = bolts[Math.floor(Math.random() * bolts.length)];
      var dbl = Math.random() > 0.4;

      flash(dbl ? 2 : 1, 88);

      // Bright → dim → bright → off (realistic double-flash)
      setOp(bolt, 1);
      setTimeout(function () { setOp(bolt, 0.28); }, 80);
      setTimeout(function () { setOp(bolt, 0.92); }, 160);
      setTimeout(function () { setOp(bolt, 0); }, 265);
      if (dbl) {
        setTimeout(function () { setOp(bolt, 0.55); }, 390);
        setTimeout(function () { setOp(bolt, 0); }, 490);
      }

      setTimeout(strikeSequence, 4000 + Math.random() * 8000);
    }

    setTimeout(strikeSequence, 1500);
  }

})();
