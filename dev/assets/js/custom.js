$(document).ready(function () {

    $('.your-class').slick({
        dots: true,
    })



const burger = document.querySelector('.hamburger');

    burger.addEventListener('click', function () {
        // burger.classList.replace("test-delete", "bar");
        burger.classList.toggle('is-active')
    })