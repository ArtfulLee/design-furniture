'use strict'

function lastChance() {
  var swiper = new Swiper('.last-chance__slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.last-chance__slider-pagination',
      clickable: true,
    },
    breakpoints: {
      639: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1439: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
    },
  })
}

lastChance()
