const swiper = new Swiper('.reviews__swiper', {
  speed: 400,
  direction: 'horizontal',
  initialSlide: 0,
  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews__next-btn',
    prevEl: '.reviews__prev-btn',
  },
});
