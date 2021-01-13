// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
if (isSafari){
    document.querySelector("body").classList.add("safari");
}

// Controll open nav bar
var open_bar_btn = document.querySelector("#open-bar-btn");
var close_bar_btn = document.querySelector("#close-bar-btn");
var nav_items = document.querySelectorAll("header nav a");

open_bar_btn.addEventListener("click", () => {
    open_bar_btn.classList.add("hide");
    document.querySelector("header nav").classList.add("open");
    setTimeout(() => {
        document.querySelector("header .logo").classList.add("open");
        document.querySelector("header .logo").classList.add("over");
    }, 500);
})
close_bar_btn.addEventListener("click", () => {
    open_bar_btn.classList.remove("hide");
    document.querySelector("header .logo").classList.remove("over");
    document.querySelector("header .logo").classList.remove("open");
    document.querySelector("header nav").classList.remove("open");
})
nav_items.forEach((e) => {
    e.addEventListener("click", () => {
        open_bar_btn.classList.remove("hide");
        document.querySelector("header .logo").classList.remove("over");
        document.querySelector("header .logo").classList.remove("open");
        document.querySelector("header nav").classList.remove("open");
    })
})

// Header change by page scrolling
window.addEventListener("scroll", () => {
    if (this.scrollY >= 125) {
        document.querySelector("body").classList.add("scroll")
    } else {
        document.querySelector("body").classList.remove("scroll")
    }
})

// Controll Side Social Bar
var social_icons = document.querySelectorAll(".side-social a i");

social_icons.forEach((e) => {
    e.addEventListener("mouseover", () => {
        var parent = e.parentElement;
        var p_child = parent.children[1];
        p_child.classList.add("show");
    })
    e.addEventListener("mouseout", () => {
        var parent = e.parentElement;
        var p_child = parent.children[1];
        p_child.classList.remove("show");
    })
})
var footer_social = document.querySelector("footer .social");
var side_social = document.querySelector(".side-social");
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= footer_social.offsetTop) {
        side_social.classList.add('hide');
    } else {
        side_social.classList.remove('hide');
    }
})

// Testimonals
const points = document.querySelectorAll("main section.testimonials .testimonials-view .points .point");
var testomonial_num, slide_to, width, data_bg;
const testimonials = document.querySelectorAll("main section.testimonials .testimonials-view .testimonials-wrapper .testimonial");
const testimonials_wrapper = document.querySelector("main section.testimonials .testimonials-view .testimonials-wrapper");


setBgToTestimonials();
function setBgToTestimonials() {
    testimonials.forEach((testimonial) => {
        data_bg = testimonial.getAttribute('data-bg');
        var bgUrl = "url('" + data_bg + "')";
        testimonial.style.backgroundImage = bgUrl;
    })
}

function clearActivePoints() {
    points.forEach((point) => {
        point.classList.remove("active");
    })
}
function slideTestimonials() {
    slide_to = -((testomonial_num - 1) * width);
    testimonials_wrapper.style.right = slide_to + 'px';

}
function calcTestimonialsWidth() {
    width = testimonials[0].offsetWidth;
}

points.forEach((point) => {
    // console.log(point)
    point.addEventListener('click', (e) => {
        clearActivePoints();
        // console.log(e.target);
        e.target.classList.add("active");
        testomonial_num = parseInt(e.target.getAttribute('data-testimonial'));
        calcTestimonialsWidth();
        slideTestimonials();
    })
})

function fixSizeOfTestimonials() {
    var view_width = document.querySelector('section.testimonials .testimonials-view').offsetWidth;
    var num_of_testimonial = document.querySelectorAll('section.testimonials .testimonials-view .testimonials-wrapper .testimonial').length;
    testimonials_wrapper.style.width = (view_width * num_of_testimonial) + 'px';
}

fixSizeOfTestimonials();
setInterval(() => {
    fixSizeOfTestimonials();
}, 100)

// Questions And Answers Controller
var qaa = document.querySelectorAll("section.questions-and-answers .qaa-wrapper .qaa");
var questions = document.querySelectorAll("section.questions-and-answers .qaa-wrapper .qaa .qaa__question");
var answers = document.querySelectorAll("section.questions-and-answers .qaa-wrapper .qaa .qaa__answer");

function closeAllAnswers() {
    qaa.forEach((e) => {
        e.classList.remove("open");
    })
    answers.forEach((e) => {
        e.style.height = "0px";
    })

}

questions.forEach((q) => {
    q.addEventListener("click", () => {
        var p = q.parentElement
        if (hasClass(p, "open")) {
            closeAllAnswers();
        } else {
            closeAllAnswers();
            p.classList.add("open");
            p.children[1].style.height = `${p.children[1].scrollHeight}px`;
        }
    })
})

// Smooth Scroll
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    var startPosition = window.scrollY;
    var res = 0;
    if (target.getAttribute('id') == 'my-work') {
        var deg = 20 / 100;
        var targetHeight = target.offsetHeight;
        res = targetHeight * deg;
    }
    var distance = targetPosition - startPosition - res - 55;
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

// Scroll Reveal
const sr = ScrollReveal({
    distance: '30px',
    duration: 1500,
    reset: true
});
sr.reveal(`.trigger-left`, {
    origin: 'left'
})
sr.reveal(`.trigger-right`, {
    origin: 'right'
})
sr.reveal(`.trigger-bottom`, {
    origin: 'bottom'
})
sr.reveal(`.trigger-top`, {
    origin: 'top'
})
sr.reveal(`.reveal-interval-on`, {
    interval: 200
})
sr.reveal(`.reveal-interval-on-fast`, {
    interval: 100
})


// Has Class Function
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}