$(function () {
  $('.project__images').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });

  const partnersSlider = new Swiper('.recommend__inner', {
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

  //Получаю все 'Ховерные галареи'
  const hoverGalleries = document.querySelectorAll('.hover-gallary');

  hoverGalleries.forEach(el => {
    el.onmouseover = function(event) {
      const galleryParent = this.closest('.products-item__img-box');
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

});