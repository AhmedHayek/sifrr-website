/* ============================================
   SIFRR (صفر) - Animations
   Hero entrance + scroll-triggered reveals
   ============================================ */

(function () {
  'use strict';

  // ---- Hero Entrance Animation ----
  function initHeroAnimation() {
    const heroElements = document.querySelectorAll(
      '.anim-hero-right, .anim-hero-left, .anim-hero-bottom, .anim-hero-top'
    );

    requestAnimationFrame(() => {
      heroElements.forEach((el) => el.classList.add('animate-in'));
    });
  }

  // ---- Scroll Reveal (generic .reveal elements) ----
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  // ---- Basics Rows (staggered reveal) ----
  function initRowReveal() {
    const rows = document.querySelectorAll('.reveal-row');

    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const row = entry.target;
            const siblings = Array.from(row.parentElement.children);
            const index = siblings.indexOf(row);

            setTimeout(() => {
              row.classList.add('visible');
            }, index * 100);

            observer.unobserve(row);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    rows.forEach((el) => observer.observe(el));
  }

  // ---- Mission Rows (staggered reveal) ----
  function initMissionReveal() {
    const missionRows = document.querySelectorAll('.mission__row');

    if (!missionRows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const row = entry.target;
            const siblings = Array.from(
              row.closest('.mission__rows').children
            );
            const index = siblings.indexOf(row);

            setTimeout(() => {
              row.classList.add('visible');
            }, index * 100);

            observer.unobserve(row);
          }
        });
      },
      { threshold: 0.15 }
    );

    missionRows.forEach((el) => observer.observe(el));
  }

  // ---- Writing Points (staggered reveal) ----
  function initWritingPointsReveal() {
    const points = document.querySelectorAll('.writing__point');

    if (!points.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const point = entry.target;
            const siblings = Array.from(point.parentElement.children);
            const index = siblings.indexOf(point);

            setTimeout(() => {
              point.classList.add('visible');
            }, index * 100);

            observer.unobserve(point);
          }
        });
      },
      { threshold: 0.15 }
    );

    points.forEach((el) => observer.observe(el));
  }

  // ---- Initialize Everything ----
  document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initScrollReveal();
    initRowReveal();
    initMissionReveal();
    initWritingPointsReveal();
  });
})();
