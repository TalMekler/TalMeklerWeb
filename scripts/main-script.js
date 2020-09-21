$(document).ready(function () {
    // Header on SCROLL
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
    // Show Elements when page LOAD
    $(function () {
        setTimeout(function(){
            $("header").fadeIn(1000);
            $(".first-page, .second-page").addClass("active");
            setTimeout(function(){
                $(".first-page .main-text").addClass("active");
            }, 700);
        }, 500);
    })

});