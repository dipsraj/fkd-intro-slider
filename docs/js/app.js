$(function () {
    checkCookie();
    $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: false,
        nav: true,
        items: 1,
        touchDrag: true,
        mouseDrag: false,
        pullDrag: false,
        navText: ["<button class='md-button md-button--fab'><i class=\"material-icons\">chevron_left</i></button>", "<button class='md-button md-button--fab'><i class=\"material-icons\">chevron_right</i></button>"]
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function (event) {
        if ($('.owl-next').hasClass('disabled')) {
            $('.md-introduction__nav').css('display', 'none');
            $('#ok-button').css('display', 'block');
            $('.owl-dots').css('display','none');
            $('#ok-button').find('.md-button').prop('disabled', false);
        }
        else {
            $('.md-introduction__nav').css('display', 'flex');
            $('#ok-button').css('display', 'none');
            $('.owl-dots').css('display','');
            $('#ok-button').find('.md-button').prop('disabled', true);
        }
    });
    $('#nav-prev').click(function () {
        $('.owl-prev').click();
    });
    $('#nav-next').click(function () {
        $('.owl-next').click();
    });
    $('#ok-button').click(function () {
        $('.md-introduction').css('display', 'none')
        $('.tempScript').remove();
    });
});
