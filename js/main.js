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
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
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
        3. Scroll To Top
    -------------------------------------------*/
    if ($.hasOwnProperty('scrollUp')) {
        $.scrollUp({
            scrollName: 'scrollUp',
            topDistance: '300',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="icofont icofont-long-arrow-up"></i>',
            activeOverlay: false,
        });
    }

    /*------------------------------------------
        4. WOW Active (Check if exists)
    -------------------------------------------*/
    if (typeof WOW === 'function') {
        new WOW().init();
    }

})(jQuery);