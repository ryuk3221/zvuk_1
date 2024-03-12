$('.banner__slider').slick({
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"><img src="images/icons/banner-arrow-right.svg" alt=""> </button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/banner-arrow-left.svg" alt=""></button>'
});

$('.event-equipment__filter-btns').slick({
  variableWidth: true,
  swipeToSlide: true,
  touchThreshold: 30,
  arrows: false,
  infinite: false
});

const mixer = mixitup('.event-equipment__inner', {
  animation: {
      duration: 300
  }
});

const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-portfolio',
    prevEl: '.swiper-button-prev-portfolio',
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
});

const partnersSlider = new Swiper('.partners__inner', {
  spaceBetween: 20,
  slidesPerView: "auto",
  freeMode: true,
});