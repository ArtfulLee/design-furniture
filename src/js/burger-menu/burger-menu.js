const burger = document.querySelector('.site-nav__button')
const navBurger = document.querySelector('.site-nav')

function burgerMenu() {
  if (burger.classList.contains('site-nav__button-burger')) {
    burger.classList.remove('site-nav__button-burger')
    burger.classList.add('site-nav__button-cross')
    navBurger.classList.replace('site-nav--closed', 'site-nav--opened')
    document.body.style.setProperty('overflow-y', 'hidden')
  } else {
    burger.classList.remove('site-nav__button-cross')
    burger.classList.add('site-nav__button-burger')
    navBurger.classList.replace('site-nav--opened', 'site-nav--closed')
    document.body.style.removeProperty('overflow-y')
  }
}

burger.addEventListener('click', burgerMenu)
