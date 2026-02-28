(function ($) {
    "use strict";

    /*------------------------------------------
        1. Sticky Header
    -------------------------------------------*/
    const $window = $(window);
    const $header = $(".header-sticky");

    $window.on('scroll', function () {
        let scroll = $window.scrollTop();
        if (scroll < 245) {
            $header.removeClass("sticky");
        } else {
            $header.addClass("sticky");
        }
    });


    //*------------------------------------------
    // 2. header dropdown active
    //-------------------------------------------*/
    $(document).ready(function () {
        $('.dropdown-item').on('click', function (e) {
            e.preventDefault();

            var selectedImg = $(this).find('img').attr('src');
            var selectedText = $(this).text().trim();

            var htmlContent = '<img src="' + selectedImg + '" class="me-1" alt="' + selectedText + '"> ' + selectedText;
            $('#languageDropdown').html(htmlContent);
        });
    });


    /*------------------------------------------
        2. Owl Carousel Active
    -------------------------------------------*/
    $('.feature-category-grid').owlCarousel({
        loop: true,
        margin: 0,
        items: 6,
        navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    /*------------------------------------------
   product increment decrement
   -------------------------------------------*/
    $(document).ready(function () {
        $(".quantity__minus").on("click", function (e) {
            e.preventDefault();

            var input = $(this).siblings(".quantity__input");
            var value = parseInt(input.val());

            if (!isNaN(value) && value > 1) {
                value--;
                input.val(value);
            }
        });

        $(".quantity__plus").on("click", function (e) {
            e.preventDefault();

            var input = $(this).siblings(".quantity__input");
            var value = parseInt(input.val());

            if (!isNaN(value)) {
                value++;
                input.val(value);
            }
        });
    });


    /*------------------------------------------
        3. Scroll To Top
    -------------------------------------------*/
    $.scrollUp({
        scrollName: "scrollUp",
        topDistance: "300",
        topSpeed: 300,
        animation: "fade",
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>',
        activeOverlay: false,
    });

    /*------------------------------------------
        4. WOW Active (Check if exists)
    -------------------------------------------*/
    if (typeof WOW === 'function') {
        new WOW().init();
    }

})(jQuery);