$(document).ready(function () {
    // open nav bar
    $("i.fa-bars.open-btn").click(function () {
        $("html").css("overflow", "hidden");
        $("header nav").addClass("open");
    });
    //close nav bar
    $("header nav i.fa-times.close-btn").click(function () {
        $("html").css("overflow", "visible");
        $("html").css("overflow-x", "hidden");
        $("header nav").removeClass("open");
    })
    // navigation click
    $("header nav .nav-item").click(function () {
        $("html").css("overflow", "visible");
        $("html").css("overflow-x", "hidden");
        $("header nav").removeClass("open");
    });
});