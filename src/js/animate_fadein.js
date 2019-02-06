$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Menu FadeIn animate
$("#left_menu a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

        window.location.hash = hash;
        });
    } 
});