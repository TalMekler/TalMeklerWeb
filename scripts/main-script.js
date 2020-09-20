$(document).ready(function () {
    $(function () {
        setTimeout(function(){
            $("header .logo .logo-text").fadeIn(1000);
            $(".first-page").addClass("active");
            setTimeout(function(){
                $(".first-page .main-text").addClass("active");
            }, 900);
        }, 500);
    })
});