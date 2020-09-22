$(document).ready(function () {
    // Header on SCROLL
    $(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("header").addClass("page-down");
        } else {
            $("header").removeClass("page-down")
        }
        $(window).scroll(function () {

            var scroll = $(this).scrollTop();
            if (scroll > 100) {
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
            if (top < (window_height / 1.5)) {
                $(section).addClass("active");
                $(section).children(".main-content").children().each(function(){
                    if(!$(this).hasClass("active")){
                        $(this).addClass("active");
                    }
                });
            }
        }
        show_section(".second-page");
        $(window).scroll(function () { 
            show_section(".second-page");
        });

    })

});