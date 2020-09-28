$(document).ready(function () {

    // Header on SCROLL
    $(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 50) {
            $("header").addClass("page-down");
        } else {
            $("header").removeClass("page-down")
        }
        $(window).scroll(function () {

            var scroll = $(this).scrollTop();
            if (scroll > 50) {
                $("header").addClass("page-down");
            } else {
                $("header").removeClass("page-down")
            }
        })

    })
    // Smooth Scroll
    $(function () {
        var header_height = 100;
        if ($(window).width() < 999) {
            header_height = 92;
        }
        $(".scroll-link").click(function (e) {
            e.preventDefault();
            console.log(e);
            var header_height = 100;
            if ($(window).width() < 999) {
                header_height = 92;
            }
            if (window.location.href.indexOf("#") > -1 && $(this).hasClass("go-to-top")) {
                window.location.href = 'index.html';
                return true
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
    // Show Elements when page LOAD
    $(function () {
        setTimeout(function () {
            $("header").fadeIn(1000);
            $(".first-page").addClass("active");
            setTimeout(function () {
                $(".first-page .main-content").addClass("active");
            }, 700);
        }, 500);

        function show_section(section) {
            var scroll = $(window).scrollTop();
            var top = $(section).position().top - scroll - 100;
            var window_height = $(window).height();
            var dividedBy = 1.25;
            if (top < (window_height / dividedBy)) {
                if (!$(section).hasClass()) {
                    $(section).addClass("active");
                }
                setTimeout(function () {
                    $(section).children(".main-content").children().each(function () {
                        if (!$(this).hasClass("active")) {
                            $(this).addClass("active");
                        }
                    });
                }, 100)
            } else {
                $(section).removeClass("active");
                $(section).children(".main-content").children().each(function () {
                    $(this).removeClass("active");
                });
            }
        }

        show_section(".second-page");
        show_section(".third-page");
        show_section(".contact-page");
        $(window).scroll(function () {
            show_section(".second-page");
            show_section(".third-page");
            show_section(".contact-page");
        });

    })
    // Contact From
    $(function () {
        $(".contact-page .form-wrapper form .input-div input, .contact-page .form-wrapper form .input-div textarea").focus(function () {
            $(this).parent().addClass("active");
        })
        $(".contact-page .form-wrapper form .input-div input, .contact-page .form-wrapper form .input-div textarea").focusout(function () {
            $(this).parent().removeClass("active");
        })
    })
});