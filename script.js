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
