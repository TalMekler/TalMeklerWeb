const smooth_links = document.querySelectorAll('.scroll');
var interval_time = 10;
smooth_links.forEach((link) => {
    link.addEventListener('click', (link) => {
        link.preventDefault();
        var href = link.target.getAttribute('href');
        var destination = document.querySelector(href);
        var end = destination.offsetTop;
        var current = 0;
        var add_to_current;
        var interval = setInterval(() => {
            if (current > 50 && current < end-50){
                add_to_current = 50;
            }else{
                add_to_current = 10;
            }
            current += add_to_current;
            if (current > end) {
                current = end;
            }
            window.scrollTo(0, current)
            if (current >= end) {
                clearInterval(interval);
            }
        }, interval_time);
    })
})