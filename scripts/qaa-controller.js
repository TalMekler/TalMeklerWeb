$(document).ready(function () {
    function closeAll() {
        $("section.questions-and-answers .qaa-wrapper .qaa .qaa__question").each(function () {
            var parent = $(this).parent();
            var answer = parent.children(".qaa__answer");
            parent.removeClass("open");
            answer.slideUp();
        })
    }
    $("section.questions-and-answers .qaa-wrapper .qaa .qaa__question").click(function () {
        var parent = $(this).parent();
        var openCheck = false;
        if (!parent.hasClass("open")) {
            openCheck = true;
        }
        if (openCheck) {
            closeAll();
            parent.addClass("open");
            var answer = parent.children(".qaa__answer");
            answer.slideToggle();
        } else {
            closeAll();
        }
    })
});
