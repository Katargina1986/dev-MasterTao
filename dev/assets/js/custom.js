$(document).ready(function() {
   
    $('.first-screen-slider').slick({
        dots: true,
        appendArrows: '.first-screen-nav',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
              }
            },
          ]
    });

const burger = document.querySelector('.hamburger');

    burger.addEventListener('click', function () {
        // burger.classList.replace("test-delete", "bar");
        burger.classList.toggle('is-active')
    })
    })