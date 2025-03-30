
(function($) {
    'use strict';


    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


})(window.jQuery);