document.addEventListener("DOMContentLoaded", () => {
  /* Burger */
  const activeBurger = () => {
    const burger = document.querySelector(".header__burger"),
      defaultItems = document.querySelector(".header__items-default"),
      activeItems = document.querySelector(".header__items-active");

    burger.addEventListener("click", () => {
      defaultItems.classList.toggle("active");
      activeItems.classList.toggle("active");
    });
  };
  activeBurger();

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
