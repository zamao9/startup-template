document.addEventListener("DOMContentLoaded", () => {
  /* Burger */
  const activeBurger = () => {
    const burger = document.querySelector(".header__burger"),
      defaultItems = document.querySelector(".header__items-default"),
      activeItems = document.querySelector(".header__items-active"),
      nav = document.querySelector(".nav"),
      background = document.querySelector(".header__background"),
      body = document.getElementsByTagName("body");

    burger.addEventListener("click", () => {
      defaultItems.classList.toggle("active");
      activeItems.classList.toggle("active");
      nav.classList.toggle("active");
      background.classList.toggle("active");
      body[0].classList.toggle("active");
    });

    background.addEventListener("click", (e) => {
      e.currentTarget.classList.remove("active");
      defaultItems.classList.remove("active");
      activeItems.classList.remove("active");
      nav.classList.remove("active");
      body[0].classList.remove("active");
    });
  };
  activeBurger();

  /* Header Active */
  window.onscroll = () => {
    const header = document.querySelector(".header__head"),
      scrollY = window.scrollY;

    if (scrollY > 10) {
      header.classList.add("active");
    }
    if (scrollY < 10) {
      header.classList.remove("active");
    }
  };

  /* Clients Swiper */
  const clientsSwiper = new Swiper(".clients__swiper", {
    loop: true,

    pagination: {
      el: ".clients__pagination",
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".clients__btn-next",
      prevEl: ".clients__btn-prev",
    },
  });
});
