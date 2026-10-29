const dots = document.querySelectorAll('.time-dot');
  const panels = document.querySelectorAll('.time-card article');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.toggle('active', d === dot));
      panels.forEach(p => p.hidden = p.id !== dot.dataset.target);
    });
  });