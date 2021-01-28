// Nav Controller - functions
const nav_items = document.querySelectorAll("header nav ul .nav-item");
function changeActiveNavItem() {
    nav_items.forEach(e => {
        e.classList.remove("active")
    })
}
function makeActiveNavItem() {
    nav_items.forEach(e => {
        if (e.getAttribute("data-sect-number") == last_section) {
            e.classList.add("active")
        }
    })
}

// ### Questions And Answers Section - Controller ###
const questions = document.querySelectorAll(".questionsAndAnswers .content-container .question-and-answer-block .question");

questions.forEach(q_t => {
    q_t.addEventListener("click", () => {
        var qaa_block = q_t.parentElement;
        if (qaa_block.classList.contains("active")) {
            closeAll();
        }
        else {
            closeAll();
            qaa_block.classList.add("active");
            qaa_block.children[1].style.height = `${qaa_block.children[1].scrollHeight}px`;
        }
    })
})

function closeAll() {
    // close all answers
    const questions_and_answers_blocks = document.querySelectorAll(".questionsAndAnswers .content-container .question-and-answer-block");
    questions_and_answers_blocks.forEach(e => {
        e.classList.remove("active");
        e.children[1].style.height = '0px';
    })
}

// ### Smooth Scroll ###
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop - 52;
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

const smooth_links = document.querySelectorAll('.scroll-btn');
smooth_links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        var href = link.getAttribute('href');
        smoothScroll(href, 750)
    })
})