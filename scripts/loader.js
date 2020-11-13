const progress_bar_show = document.querySelector('.progress-bar-show');
const percent_text = document.querySelector('.percent');
const loader = document.querySelector('.loader');
var per = 0;

changePer();

window.addEventListener('load', () => {
    per = 100;
    percent_text.innerText = `${per}%`;
    progress_bar_show.style.width = `${per}%`;
    loader.style.transition = '.5s';
    loader.style.opacity = '0';
    document.querySelector('body').classList.remove('load');
})

function changePer() {
    var interval = setInterval(() => {
        if (per < 99) {
            per += 1;
        } else {
            clearInterval(interval)
        }
        percent_text.innerText = `${per}%`
        progress_bar_show.style.width = `${per}%`
    }, 10)
}