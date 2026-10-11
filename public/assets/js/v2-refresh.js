// Route homepage classification tiles through the existing directory filter state.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-v2-classification]').forEach(tile => {
    tile.addEventListener('click', () => {
      const target = tile.dataset.v2Classification;
      const filters = document.getElementById('classificationFilters');
      const match = [...(filters?.querySelectorAll('button') || [])].find(b => {
        const text = (b.textContent || '').trim().toLowerCase();
        return text.includes(target.toLowerCase()) || (target === 'Security-Native AI' && text.includes('security-native')) || (target === 'General-Purpose AI' && text.includes('general-purpose'));
      });
      if (match) match.click();
      document.getElementById('tools')?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'});
    });
  });
});
