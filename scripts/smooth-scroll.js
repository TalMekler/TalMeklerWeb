function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    var startPosition = window.scrollY;
    var res = 0;
    if (target.getAttribute('id') == 'my-work') {
        var deg = 30 / 100;
        var targetHeight = target.offsetHeight;
        res = targetHeight * deg;
    }
    var distance = targetPosition - startPosition - res;
    var start_time = null;

    function animation(currentTime) {
        if (start_time === null) start_time = currentTime;
        var timeElapsed = currentTime - start_time;
        var run = ease(timeElapsed, startPosition, distance, duration);
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

const smooth_links = document.querySelectorAll('header nav .scroll');
smooth_links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        var href = e.target.parentElement.getAttribute('href');
        smoothScroll(href, 750)
    })
})

var back_to_top = document.querySelectorAll('.scroll-to-top');
back_to_top.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        var startPosition = window.scrollY;
        var target_pos = 0;
        var distance = startPosition;
        var start_time = null;
        function animation(currentTime) {
            if (start_time === null) start_time = currentTime;
            var timeElapsed = currentTime - start_time;
            var run = ease(timeElapsed, startPosition, -distance, 250);
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
})