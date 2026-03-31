
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});



const swiper = new Swiper('.slider-wrapper', {
    loop: false,
    rewind: true,
    grabCursor: true,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});