$(function() {
  $('.big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.small-slider',
    draggable: false,
    infinite: true,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/big-slider-arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/big-slider-arrow-left.svg" alt=""></button>'
  });
  $('.small-slider').slick({
    slidesToShow: 5,
    vertical: true,
    infinite: true,
    asNavFor: '.big-slider',
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          vertical: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          vertical: false,
          variableWidth: true,
          slidesToShow: 'auto',
        }
      },
    ]
  });

  const hoverGalleries = document.querySelectorAll('.hover-gallary');

  hoverGalleries.forEach(el => {
    el.onmouseover = function(event) {
      const galleryParent = this.closest('.dop__slider-item');
      const galleryitems = galleryParent.querySelectorAll('.hover-gallary__item');
      if (event.target.classList.contains('hover-gallary__item')) {
        galleryitems.forEach(el => {
          el.classList.remove('hover-gallary__item--active');
        });
        event.target.classList.add('hover-gallary__item--active');
        const imgId = event.target.dataset.img;
        galleryParent.querySelectorAll('img').forEach(img => {
          img.style.display = 'none';
        });
        galleryParent.querySelector(`#${imgId}`).style.display = "block";
      }
    }
  });

  const partnersSlider = new Swiper('.dop__items', {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    breakpoints: {
      1024: {
        spaceBetween: 20,
      },
    },
  });

  const recommendSlider = new Swiper('.recommend__inner', {
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

  const mixer = mixitup('.dop__slider-inner', {
    animation: {
        duration: 300
    }
  });

});