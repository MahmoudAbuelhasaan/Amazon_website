document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});


