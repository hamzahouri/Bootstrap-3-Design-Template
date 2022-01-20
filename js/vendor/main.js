$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar =$('.navbar');
        if($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
});
