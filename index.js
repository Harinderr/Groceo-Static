let searchform = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
let cartBtn = document.querySelector(".shopping-cart");
const shoppingBtn = document.querySelector("#shopping-btn");
let loginbtn = document.querySelector(".login-form");
const userBtn = document.querySelector("#user-btn");
let menuBtn = document.querySelector(".navbar");
const menu = document.querySelector("#menu-btn");
searchBtn.onclick = (event) => {
  event.stopPropagation();
  searchform.classList.toggle("active");
  cartBtn.classList.remove("active");
  loginbtn.classList.remove("active");
  menuBtn.classList.remove("active");
};

document.addEventListener("click", function clickEvent(e) {
  if (!searchform.contains(e.target) && !searchBtn.contains(e.target)) {
    searchform.classList.remove("active");
  }  if (!cartBtn.contains(e.target) && !shoppingBtn.contains(e.target)) {
    cartBtn.classList.remove("active");
  }  if (!loginbtn.contains(e.target) && !userBtn.contains(e.target)) {
    loginbtn.classList.remove("active");
  }  if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
    menuBtn.classList.remove("active");
  }
});

shoppingBtn.onclick = (e) => {
  e.stopPropagation()
  cartBtn.classList.toggle("active");
  searchform.classList.remove("active");

  loginbtn.classList.remove("active");
  menuBtn.classList.remove("active");
};

userBtn.onclick = (e) => {
  e.stopPropagation()
  loginbtn.classList.toggle("active");
  searchform.classList.remove("active");
  cartBtn.classList.remove("active");

  menuBtn.classList.remove("active");
};

menu.onclick = (e) => {
  e.stopPropagation()
  menuBtn.classList.toggle("active");
  searchform.classList.remove("active");
  cartBtn.classList.remove("active");
  loginbtn.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
