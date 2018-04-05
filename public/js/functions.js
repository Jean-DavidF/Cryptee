$(document).on('click', '.menu-toggle', function(event) {
    event.preventDefault();

    $('.menu-navbar-top').toggleClass('slide-menu');
});

$(document).on('click', '.menu-dashboard', function(event) {
    event.preventDefault();

    $('.sidebar').toggleClass('toSlideShow');
});
