$(document).ready(function () {
    $(function () {
        var scroll = $(window).scrollTop();
            if (scroll > 100){
                $("header").addClass("page-down");
            }else{
                $("header").removeClass("page-down")
            }
        $(window).scroll(function(){
            var scroll = $(this).scrollTop();
            if (scroll > 100){
                $("header").addClass("page-down");
            }else{
                $("header").removeClass("page-down")
            }
        })
        
    })
    $(function () {
        setTimeout(function(){
            // $("header .logo .logo-text").fadeIn(1000);
            $("header").fadeIn(1000);
            $(".first-page, .second-page").addClass("active");
            setTimeout(function(){
                $(".first-page .main-text").addClass("active");
            }, 700);
        }, 500);
    })
});