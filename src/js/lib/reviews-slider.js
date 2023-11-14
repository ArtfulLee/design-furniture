'use strict'

function reviewsSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.reviews__slider', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.reviews__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.reviews__slider-scrollbar',
        },
        clickable: true,
        mousewheel: true,
        keyboard: true,
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.reviews__slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.reviews__slider-pagination',
          type: 'bullets',
          clickable: true,
          mousewheel: true,
          keyboard: true,
          /* renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
          }, */
        },
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

reviewsSlider()
