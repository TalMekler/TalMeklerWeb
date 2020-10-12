$(document).ready(function () {
    var show_sec_span = $("main.mail-sent .mail-sent-text .timer-wrapper span.timer");
    var sec_left = 3;
    var if_error = $("main.mail-sent .mail-sent-text .timer-wrapper span.if-error");
    function update(){
        show_sec_span.text(sec_left);
    }
    function goToHome(){
        window.location.href = "https://tal-mekler.com";
        if_error.show();
    }

    update();
    setInterval(function(){
        if (sec_left == 0){
            goToHome();
        }
        sec_left -= 1;
        if(sec_left >= 0){
            update();
        }
    }, 1000)
});