jQuery(document).ready(function ($) {
    var getHeaderHeight = $('.headerContainer').outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() > getHeaderHeight) {
            $('body').addClass('activeScroll').css('padding-top', getHeaderHeight);
            $('headerContainer').css('top', 0);
        } else {
            $('body').removeClass('activeScroll').css('padding-top', 0);
            $('headerContainer').css('top', '-' + getHeaderHeight + 'px');
        }
    });
});