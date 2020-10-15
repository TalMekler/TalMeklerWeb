const show_sec_span = document.querySelector("main.mail-sent .mail-sent-text .timer-wrapper span.timer");
var sec_left = 3;
const if_error = document.querySelector("main.mail-sent .mail-sent-text .timer-wrapper span.if-error");

function update() {
    show_sec_span.innerHTML = sec_left;
}
function goToHome() {
    window.location.href = "/";
    if_error.show();
}

update();
setInterval(function () {
    if (sec_left == 0) {
        goToHome();
    }
    sec_left--;
    if (sec_left >= 0) {
        update();
    }
}, 1000)