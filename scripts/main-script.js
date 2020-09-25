$(document).ready(function () {
    // Parallax Effect Background Img
    $(function () {
        function parallaxEffect(section){
            var header_height = 100;
            var smallPage = false;
            bgXvalue = 0;
            if ($(window).width() < 999){
                header_height = 92
                smallPage = true;
                bgXvalue = 20;
            }
            var windowHeight = $(this).height();
            var scrollValue = ($(this).scrollTop() - windowHeight) * 0.15;
            console.log("parallaxEffect -> scrollValue", scrollValue)
            if(scrollValue < 0 && smallPage){
                scrollValue = 0;
            }
            bgValue = bgXvalue + "% " + scrollValue + "px"
            $(section).css("background-position", bgValue)
        }
        $(window).scroll(function () {
            parallaxEffect(".second-page")

        });
    })
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
            var dividedBy = 1.15;
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
                }, 500)
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