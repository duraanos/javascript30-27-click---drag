'use strict';

const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  if (!isDown) return;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', e => {
  isDown = true;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const drag = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - drag;
});
