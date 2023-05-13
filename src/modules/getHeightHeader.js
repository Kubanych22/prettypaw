import {gsap} from 'gsap';

export const getHeightHeader = () => {
  const heightHeader = document.querySelector('.header').clientHeight;

  const setPaddingTopToPage = document.querySelector('.page-main');

  const tl = gsap.timeline({paused: true});
  tl.to(setPaddingTopToPage, {
    paddingTop: heightHeader,
  })
  tl.play();
}
