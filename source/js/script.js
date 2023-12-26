const navToggle = document.querySelector('.toggle');
const navList = document.querySelector('.main-nav__list');
const mainNav = document.querySelector('.main-nav');

const sliderButton = document.querySelector('.slider__button');

const slider = document.querySelector('.slider');

navList.classList.remove('main-nav__list--no-js');
mainNav.classList.remove('main-nav--no-js');
navToggle.classList.remove('toggle--no-js');

if (navToggle) {
  navToggle.addEventListener('click', function (importantEvent) {
    if(navList.classList.contains('main-nav__list--closed')) {
      importantEvent.preventDefault();
      navList.classList.remove('main-nav__list--closed');
      navList.classList.add('main-nav__list--opened');
      navToggle.classList.remove('toggle--closed');
      navToggle.classList.add('toggle--opened');
    } else {
      navList.classList.add('main-nav__list--closed');
      navList.classList.remove('main-nav__list--opened');
      navToggle.classList.add('toggle--closed');
      navToggle.classList.remove('toggle--opened');
    }
  });
}

if(sliderButton){
  sliderButton.addEventListener('click', () => {
    const stateBefore = document.querySelector('.slider--state-before');
    const stateAfter = document.querySelector('.slider--state-after');
    if (stateBefore || stateAfter) {
      slider.classList.toggle('slider--state-before');
      slider.classList.toggle('slider--state-after');
    } else {
      slider.classList.add('slider--state-after');
    }
  });
}
