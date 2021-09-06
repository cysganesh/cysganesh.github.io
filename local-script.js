$(function($) {
    let url = window.location.href;
    $('.navbar-nav li a').each(function() {
        if (this.href === url) {
            $(this).addClass('active');
        }
    });
});