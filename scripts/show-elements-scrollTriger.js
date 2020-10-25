//JS
var desktop = checkDesktop();
function checkDesktop() {
    return (window.innerWidth > 1023);
}
setInterval(() => {
    desktop = checkDesktop();
}, 100)
var sections = document.querySelectorAll("main section.trigger");
var section_children, show_timing = 10, window_scroll, child;

window.addEventListener('scroll', () => {
    if (desktop) {
        window_scroll = window.scrollY;
        sections.forEach((section) => {
            section_children = section.children;
            for (var i = 0; i < parseInt(section_children.length); i++) {
                child = section_children[i];
                section_children_pos = child.offsetTop - window_scroll;
                if (section_children_pos <= window.innerHeight - (window.innerHeight / show_timing)) {
                    child.classList.add("show");
                }
                // else if (section_children_pos > window.innerHeight) {
                //     child.classList.remove("show");
                // }
            }
        })
    } else {
        sections.forEach((section) => {
            section_children = section.children;
            for (var i = 0; i < parseInt(section_children.length); i++) {
                child = section_children[i];
                child.classList.add('show');
            }
        })
    }
})


