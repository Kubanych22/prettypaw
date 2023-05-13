import './index.html';
import './page.html';

import 'swiper/scss';

import 'swiper/scss/pagination';

import './index.scss';

import {sliderInit} from './modules/sliders';

import {videoBackgroundInit} from './modules/videoBackground';

import {menuControl} from './modules/menuControl';
import {locationHover} from './modules/locationHover';
import {getHeightHeader} from './modules/getHeightHeader';

getHeightHeader();

videoBackgroundInit();

menuControl();

locationHover();

sliderInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination'
  }
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
  item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
})

sliderInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination'
  },
    breakpoints: {
      576: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: false
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 26,
        pagination: false
      },
      1240: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: false
      }
    }
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;