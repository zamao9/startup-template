document.addEventListener("DOMContentLoaded", () => {
  /* Burger */
  const activeBurger = () => {
    const burger = document.querySelector(".header__burger"),
      defaultItems = document.querySelector(".header__items-default"),
      activeItems = document.querySelector(".header__items-active"),
      nav = document.querySelector(".nav"),
      links = document.querySelectorAll(".nav__items"),
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

    for (let i = 0; links.length > i; ++i) {
      links[i].addEventListener("click", (e) => {
        for (let i = 0; links.length > i; ++i) {
          links[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
        background.classList.remove("active");
        defaultItems.classList.remove("active");
        activeItems.classList.remove("active");
        nav.classList.remove("active");
        body[0].classList.remove("active");
      });
    }
  };
  activeBurger();

  /* Nav Links Active On Scroll */
  const links = document.querySelectorAll(".nav__items"),
    section = document.querySelectorAll(".section"),
    header = document.querySelector(".header__head"),
    home = document.querySelector(".header");
  const navInit = (link, section, header) => {
    section.forEach((section) => {
      if (window.pageYOffset + header.offsetHeight >= section.offsetTop) {
        link.forEach((li) => {
          li.classList.remove("active");
          if (li.dataset.section === section.dataset.section) {
            li.classList.add("active");
          }
          if (window.pageYOffset + header.offsetHeight < home.offsetHeight) {
            li.classList.remove("active");
          }
        });
      }
    });
  };
  navInit(links, section, header);
  window.addEventListener("scroll", () => {
    navInit(links, section, header);
  });
  window.addEventListener("resize", () => {
    navInit(links, section, header);
  });

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

  /* Work Filter */
  const filterLinks = document.querySelectorAll(".work__items"),
    filterContent = document.querySelectorAll(".work__img");
  const filter = (category, items) => {
    items.forEach((el) => {
      let elFiltered = !el.classList.contains(category),
        showAll = category.toLowerCase() === "all";

      if (elFiltered && !showAll) {
        el.classList.add("hide");
      } else {
        el.classList.remove("hide");
      }
    });
  };
  filterLinks.forEach((el) => {
    el.addEventListener("click", () => {
      let currentCategory = el.dataset.filter;
      filter(currentCategory, filterContent);
    });
  });

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

/* Nav Scroll */
$(function () {
  $("[data-scroll").click(function (event) {
    event.preventDefault();

    let blockId = $(this).data("scroll"),
      header = document.querySelector(".header__head");

    let blockOffset = $(blockId).offset().top - header.offsetHeight;

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      900
    );
  });
});
