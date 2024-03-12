$(function() {
  $('.projects-gallary__inner').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/projects/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/projects/slider-arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        }
      }
    ]
  });

  $('.projects-video__inner').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/projects/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/projects/slider-arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        }
      }
    ]
  });

  const partnersSlider = new Swiper('.team__inner', {
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
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

});


