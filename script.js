const carousel = document.querySelector('.carousel');
const listHTML = carousel.querySelector('.list');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const backButton = document.getElementById('back');
const seeMoreButtons = document.querySelectorAll('.seeMore');

let timeoutId;

const showSlider = (direction) => {
  nextButton.disabled = true;
  prevButton.disabled = true;

  carousel.classList.remove('next', 'prev');
  const items = listHTML.children;

  if (direction === 'next') {
    listHTML.appendChild(items[0]);
    carousel.classList.add('next');
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }, 2000);
};

nextButton.addEventListener('click', () => showSlider('next'));
prevButton.addEventListener('click', () => showSlider('prev'));

seeMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    carousel.classList.remove('next', 'prev');
    carousel.classList.add('showDetail');
  });
});

backButton.addEventListener('click', () => {
  carousel.classList.remove('showDetail');
});