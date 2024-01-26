/* scroll-navbar effect */
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})

/* quotes slider */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 3
        }
    },

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

  });