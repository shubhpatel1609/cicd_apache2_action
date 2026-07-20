// Tab navigation: click to jump, scroll to highlight the active section.
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const sections = tabs
    .map(tab => document.getElementById(tab.dataset.target))
    .filter(Boolean);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const setActive = (id) => {
    tabs.forEach(tab => {
      const isActive = tab.dataset.target === id;
      tab.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  // Footer "last updated" — set once at build/edit time.
  const lastUpdated = document.getElementById('lastUpdated');
  if (lastUpdated) {
    lastUpdated.textContent = 'Last updated ' + new Date().toLocaleDateString('en-US', {
      month: 'long', year: 'numeric'
    });
  }
});
