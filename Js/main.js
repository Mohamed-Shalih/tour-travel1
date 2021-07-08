// Js for defining variables
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

// Js for scroll effect
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Js for search button
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Js for menu bar
menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

// Js for changing video
videoBtn.forEach(btn =>{
    btn.addEventListener('click',() =>{
        document.querySelector('.control .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// Js for review-slider
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Js for brand-slider
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});