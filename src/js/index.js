// Scroll to blocks
$(document).ready(function () {
  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });
});

// Slider
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {

    990: {
      slidesPerView: 2,
      spaceBetween: 30
    },

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// Burger menu
const burgerBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const html = document.querySelector("html");

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('open');
  html.classList.toggle("noscroll")
})

document.addEventListener("click", (e) => {
  if (!burgerBtn.contains(e.target) && (!menu.contains(e.target))) {
    burgerBtn.classList.remove("active");
    menu.classList.remove("open");
    html.classList.remove("noscroll");
  }
});

// Fixed header
var header = $('.js-header'),
  cloneHeader = header.clone();

cloneHeader.addClass('header--fixed');
header.before(cloneHeader);

$(window).scroll(function () {

  console.log($(window).scrollTop());

  if ($(window).scrollTop() > 150) {
    cloneHeader.addClass('header--is-show');
  } else {
    cloneHeader.removeClass('header--is-show');
  }

});

// Animation
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    disable: 'mobile',
    once: true,
  });
})