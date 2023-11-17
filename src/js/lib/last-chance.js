'use strict'

function lastChance() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.last-chance__slider', {
        spaceBetween: 10,
        pagination: {
          el: '.last-chance__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.last-chance__slider-scrollbar',
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.last-chance__slider', {
        pagination: {
          el: '.last-chance__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
          },
        },
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

lastChance()
