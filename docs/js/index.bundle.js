!function(){$(document).ready((function(){var e=$("html, body");$('a[href*="#"]').click((function(){return e.animate({scrollTop:$($.attr(this,"href")).offset().top},400),!1}))})),new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:30,breakpoints:{990:{slidesPerView:2,spaceBetween:30}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const e=document.querySelector(".burger-menu"),o=document.querySelector(".menu"),t=document.querySelector("html");e.addEventListener("click",(function(){e.classList.toggle("active"),o.classList.toggle("open"),t.classList.toggle("noscroll")})),document.addEventListener("click",(n=>{e.contains(n.target)||o.contains(n.target)||(e.classList.remove("active"),o.classList.remove("open"),t.classList.remove("noscroll"))}));var n=$(".js-header"),s=n.clone();s.addClass("header--fixed"),n.before(s),$(window).scroll((function(){console.log($(window).scrollTop()),$(window).scrollTop()>150?s.addClass("header--is-show"):s.removeClass("header--is-show")})),document.addEventListener("DOMContentLoaded",(()=>{AOS.init({disable:"mobile",once:!0})}))}();