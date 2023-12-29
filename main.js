import { createCarousel } from './carosuel.js';

  const carousel = createCarousel('image-carousel', '.carousel-image', 'indicators');

  document.getElementById('prev-btn').addEventListener('click', carousel.prevImage);
  document.getElementById('next-btn').addEventListener('click', carousel.nextImage);
