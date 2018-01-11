$(document).on('click', '.menu-toggle', function(event) {
    event.preventDefault();

    $('.menu-navbar-top').toggleClass('slide-menu');
});