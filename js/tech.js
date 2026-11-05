const tabs = document.querySelectorAll('.techTab');
const panels = document.querySelectorAll('#tech [data-panel]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.toggle('active', t === tab));
    panels.forEach(p => p.hidden = p.dataset.panel !== tab.dataset.target);
  });
});