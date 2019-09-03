$(document).ready(function(){

    $('.call-menu').on('click', function () {
        $('.header-bottom').addClass('nav-show');
    });

    $('.close-menu').on('click', function () {
        $('.header-bottom').removeClass('nav-show');
    });


    $('.call-question').on('click', function () {
        $('.blog-question').addClass('showed');
        $('.overlay').addClass('showed');
    });

    $('.overlay,.btn-cancel').on('click', function () {
        $('.question-popup').removeClass('showed');
        $('.overlay').removeClass('showed');
    });

    $('.call-application').on('click', function () {
        $('.control-question').addClass('showed');
        $('.overlay').addClass('showed');
        $('.header-bottom').removeClass('nav-show');
    });
    $('.call-app').on('click', function () {
        $('.control-app').addClass('showed');
        $('.overlay').addClass('showed');
    });
    $('.callback').on('click', function () {
        $('.callback-cover').addClass('showed');
        $('.overlay').addClass('showed');
    });

});







