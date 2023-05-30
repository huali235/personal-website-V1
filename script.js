// Slider Functionality
const slides = document.querySelectorAll('.slider');
const btnUp = document.querySelector('.btn-slider-up');
const btnDown = document.querySelector('.btn-slider-down');

let currSlide = 0;
const maxSlides = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateY(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (currSlide === maxSlides - 1) currSlide = 0;
  else currSlide++;

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) currSlide = maxSlides - 1;
  else currSlide--;

  goToSlide(currSlide);
};

const init = function () {
  goToSlide(0);
};
init();
btnDown.addEventListener('click', nextSlide);
btnUp.addEventListener('click', prevSlide);

// Toggle theme

const bodyEl = document.body;
const toggle = document.getElementById('switch');

toggle.addEventListener('input', function (e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    bodyEl.classList.add('night');
  } else bodyEl.classList.remove('night');
});

// Smooth Scrolling

window.sr = ScrollReveal({
  reset: false,
  duration: 600,
  easing: 'cubic-bezier(.694,0,.335,1)',
  scale: 1,
  viewFactor: 0.3,
});

sr.reveal('.background-section');
sr.reveal('.skills-section');
sr.reveal('.projects-section');
