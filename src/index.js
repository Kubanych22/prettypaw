import './index.html';
import './page.html';

import 'swiper/scss';

import 'swiper/scss/pagination';

import './index.scss';

import {sliderInit} from './modules/sliders';

import {videoBackgroundInit} from './modules/videoBackground';

import {menuControl} from './modules/menuControl';
import {locationHover} from './modules/locationHover';
import {initScrollTopButton} from './modules/scrollTopButton';
import {pageControlInit} from './modules/pageControl';

videoBackgroundInit();

menuControl();

locationHover();

initScrollTopButton('arrow-top', {
  hover: false,
});

pageControlInit();

sliderInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
    enabled: true,
  }
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
  item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
})

sliderInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination',
    enabled: true,
  },
    breakpoints: {
      576: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          enabled: false
        },
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 26,
        pagination: {
          enabled: false
        },
      },
      1240: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          enabled: false
        },
      }
    }
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;