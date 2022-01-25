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
    //Deal with tabs
    $('.tab-switch li').click(function () {
        //Add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide all divs
        $('.tabs-section .tabs-content > div').hide();
        //show div connected to link
        $('.' +$(this).data('class')).show(); 
    })
});
