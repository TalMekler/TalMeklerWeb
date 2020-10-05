$(document).ready(function () {
        var sec = 5;
        var sec_text = $(".mail-send-page .text .back span");
        var back_click = $(".mail-send-page .text .back-click");
        setInterval(function(){
            if (sec < 0){
                sec = 0;
                window.location.href = "/";
                back_click.show();
            }
            sec_text.text(sec);
            sec -= 1;
        }, 1000);
});