import './index.html';

import 'swiper/scss';

import 'swiper/scss/pagination';

import './index.scss';

import {sliderInit} from './modules/sliders';

sliderInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination'
  }
});

sliderInit('.career__slider', {
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 26
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;

const videoBGLoc = document.querySelector('.location__video-bg');

videoBGLoc.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;