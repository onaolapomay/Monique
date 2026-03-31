
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});



const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 4,
    }
}
  });




  