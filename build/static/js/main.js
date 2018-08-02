$(document).ready(function () {
    $("#JumpArrow").on("click", function () {
        var id = $('#about_us-scroll'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        return false;
    });
    AOS.init();
});