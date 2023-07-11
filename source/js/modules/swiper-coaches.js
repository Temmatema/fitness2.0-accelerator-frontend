import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  speed: 400,
  direction: 'horizontal',
  spaceBetween: 30,
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1360: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
    1728: {
      slidesPerView: 5,
    },
  },
});
