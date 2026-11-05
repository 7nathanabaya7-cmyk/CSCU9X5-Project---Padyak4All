const dots = document.querySelectorAll('.time-dot');
const panels = document.querySelectorAll('.time-card article');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.toggle('active', d === dot));
    panels.forEach(p => p.hidden = p.id !== dot.dataset.target);
  });
});

const slider = document.querySelector(".comparison-slider");
const input = slider.querySelector(".slider-input");
const beforeImage = slider.querySelector(".before-image");
const divider = slider.querySelector(".slider-divider");
const handle = slider.querySelector(".slider-handle");

function updateSlider(value) {
  const position = value + "%";

  beforeImage.style.clipPath =
      `inset(0 ${100 - value}% 0 0)`;

  divider.style.left = position;
  handle.style.left = position;
}

input.addEventListener("input", function () {
  updateSlider(this.value);
});

updateSlider(input.value);