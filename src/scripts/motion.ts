/**
 * Subtle scroll reveal. Re-runs on Astro view transitions.
 */

const REVEAL_SELECTOR = [
  'main > section',
  'article > header',
  'article > section',
  'article > nav',
  'article .case-study-prose > :is(h2, h3)',
  '[data-media-root]',
  'footer',
].join(', ');

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function bindReveals() {
  const nodes = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  if (!nodes.length) return;

  if (prefersReducedMotion()) {
    nodes.forEach((el) => {
      el.setAttribute('data-reveal', '');
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  nodes.forEach((el, index) => {
    if (el.hasAttribute('data-reveal-bound')) return;
    el.setAttribute('data-reveal-bound', '1');
    el.setAttribute('data-reveal', '');
    const delay = Math.min(index % 4, 3) * 40;
    el.style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(el);
  });
}

bindReveals();
document.addEventListener('astro:page-load', bindReveals);
