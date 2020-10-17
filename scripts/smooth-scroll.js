function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    var startPosition = window.scrollY;
    var distance = targetPosition - startPosition;
    var start_time = null;

    function animation(currentTime) {
        if (start_time === null) start_time = currentTime;
        var timeElapsed = currentTime - start_time;
        var run = ease(timeElapsed, startPosition, distance, duration);
        console.log("animation -> run", run)
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);

    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return (c / 2 * t * t + b)
        }
        t--;
        return (-c / 2 * (t * (t - 2) - 1) + b)
    }
    requestAnimationFrame(animation)
}

const smooth_links = document.querySelectorAll('a.scroll');
smooth_links.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        var href = e.target.getAttribute('href');
        smoothScroll(href, 500)
    })
})

var back_to_top = document.querySelector('.back-to-top-btn');
back_to_top.addEventListener('click', (e)=>{
    e.preventDefault();
    var startPosition = window.scrollY;
    var target_pos = 0;
    var distance = startPosition;
    var start_time = null;
    function animation(currentTime) {
        if (start_time === null) start_time = currentTime;
        var timeElapsed = currentTime - start_time;
        var run = ease(timeElapsed, startPosition, -distance, 250);
        console.log("animation -> run", run)
        window.scrollTo(0, run);
        if (timeElapsed < 250) requestAnimationFrame(animation);

    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return (c / 2 * t * t + b)
        }
        t--;
        return (-c / 2 * (t * (t - 2) - 1) + b)
    }
    requestAnimationFrame(animation)
})