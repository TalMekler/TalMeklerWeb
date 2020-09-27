$(document).ready(function () {
    // Smooth scroll
    $(function () {
        var header_height = 100;
        if ($(window).width() < 999) {
            header_height = 92;
        }
        $(".scroll-link").click(function (e) {
            e.preventDefault();
            var header_height = 100;
            if ($(window).width() < 999) {
                header_height = 92;
            }
            var firstSecCheck = $(this.hash).attr("data-first");
            if (firstSecCheck) {
                header_height = 0;
            }
            $("body, html").animate({
                scrollTop: $(this.hash).offset().top - header_height
            }, 1250)
        })
    })
});