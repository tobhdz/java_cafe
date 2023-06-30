/* Slider */

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Mostrar 3 slides a la vez
    spaceBetween: 0, // Espacio entre slides
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* Menú "NAV" */
  $(document).ready(function() {
    $(".nav-btn").click(function() {
      $("nav").toggleClass("nav-active");
    });
  });