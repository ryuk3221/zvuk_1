$(function() {
  $('.projects__item-images').slick({
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

$('.catalog__select').styler({
});

const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.414376 0.531613C0.673133 0.208167 1.1451 0.155726 1.46855 0.414483L6.00003 4.03967L10.5315 0.414483C10.855 0.155726 11.3269 0.208167 11.5857 0.531613C11.8444 0.85506 11.792 1.32703 11.4685 1.58579L6.46855 5.58579C6.19464 5.80492 5.80542 5.80492 5.53151 5.58579L0.531506 1.58579C0.20806 1.32703 0.155619 0.85506 0.414376 0.531613Z" fill="url(#paint0_linear_420_5451)"/>
    <defs>
    <linearGradient id="paint0_linear_420_5451" x1="-0.297622" y1="1.85726" x2="11.6736" y2="4.24114" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B637F2"/>
    <stop offset="1" stop-color="#26C9ED"/>
    </linearGradient>
    </defs>
  </svg>
`;

document.querySelectorAll('.jq-selectbox__trigger').forEach(el => {
  el.innerHTML = svg;
});