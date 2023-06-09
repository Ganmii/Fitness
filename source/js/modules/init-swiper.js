import Swiper, {Navigation, Pagination} from '../../../node_modules/swiper/swiper-bundle';
Swiper.use([Navigation, Pagination]);

const initStaffSwiper = () => {
  const staffSlider = new Swiper('.swiper--staff', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.staff__button--next',
      prevEl: '.staff__button--prev',
    },
    maxBackfaceHiddenSlides: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      // when window width is >= 1200px
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });
};

const initFeedbackSwiper = () => {
  const feedbackSlider = new Swiper('.swiper--feedback', { // eslint-disable-line
    direction: 'horizontal',

    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },

    slidesPerView: 1,
  });
};

initStaffSwiper();
initFeedbackSwiper();
