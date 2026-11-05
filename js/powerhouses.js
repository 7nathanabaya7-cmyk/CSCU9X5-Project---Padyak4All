const tabs = document.querySelectorAll('.teamTab');
const panels = document.querySelectorAll('.teamPanel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.toggle('active', t === tab));
    panels.forEach(p => p.hidden = p.dataset.panel !== tab.dataset.target);
  });
});