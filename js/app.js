jQuery(document).ready(function ($) {
    /*var getHeaderHeight = $('.headerContainer').outerHeight();

    var shadowAmount = 30;

    var lastScrollPosition = 0;

    $('headerContainer').css('top', '-' + getHeaderHeight + 'px');

    $(window).scroll(function () {
        var currentScrollPosition = $(window).scrollTop;

        if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount)) {
            $('body').addClass('activeScroll').css('padding-top', getHeaderHeight);
            $('headerContainer').css('top', 0);

            if (currentScrollPosition < lastScrollPosition) {
                $().css('top', '-' + getHeaderHeight + 'px');
            }
            lastScrollPosition = currentScrollPosition;
        } else {
            $('body').removeClass('activeScroll').css('padding-top', 0);
            $('headerContainer').css('top', '-' + (getHeaderHeight + shadowAmount) + 'px');
        }
    });*/

    // get header height (without border)
    var getHeaderHeight = $('.headerContainerWrapper').outerHeight();

    // border height value (make sure to be the same as in your css)
    var borderAmount = 2;

    // shadow radius number (make sure to be the same as in your css)
    var shadowAmount = 30;

    // init variable for last scroll position
    var lastScrollPosition = 0;

    // set negative top position to create the animated header effect
    $('.headerContainerWrapper').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');

    $(window).scroll(function () {
        var currentScrollPosition = $(window).scrollTop();

        if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount + borderAmount)) {

            $('body').addClass('scrollActive').css('padding-top', getHeaderHeight);
            $('.headerContainerWrapper').css('top', 0);

            if (currentScrollPosition < lastScrollPosition) {
                $('.headerContainerWrapper').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');
            }
            lastScrollPosition = currentScrollPosition;

        } else {
            $('body').removeClass('scrollActive').css('padding-top', 0);
        }
    });

});