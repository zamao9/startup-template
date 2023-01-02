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
});
