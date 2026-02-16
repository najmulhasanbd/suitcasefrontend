(function ($) {
    "use strict";

    //*------------------------------------------
    // 0. theme dark mode toggle
    //-------------------------------------------*/
    $(document).ready(function () {
        const htmlElement = document.documentElement;
        const darkModeToggle = $('#darkModeToggle');
        const icon = darkModeToggle.find('i');

        const currentTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-bs-theme', currentTheme);
        updateIcon(currentTheme);

        darkModeToggle.on('click', function () {
            let theme = htmlElement.getAttribute('data-bs-theme');
            let newTheme = (theme === 'light') ? 'dark' : 'light';

            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        function updateIcon(theme) {
            if (theme === 'dark') {
                icon.removeClass('fa-moon').addClass('fa-sun');
                darkModeToggle.removeClass('btn-outline-secondary').addClass('btn-outline-warning');
            } else {
                icon.removeClass('fa-sun').addClass('fa-moon');
                darkModeToggle.removeClass('btn-outline-warning').addClass('btn-outline-secondary');
            }
        }

        $('.dropdown-item').on('click', function (e) {
            e.preventDefault();
            var selectedImg = $(this).find('img').attr('src');
            var selectedText = $(this).text().trim();
            var htmlContent = '<img src="' + selectedImg + '" class="me-1" alt="' + selectedText + '"> ' + selectedText;
            $('#languageDropdown').html(htmlContent);
        });
    });


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