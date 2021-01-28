// ### Page Scrolling ### 
const nav_trigger = document.querySelectorAll('.nav-trigger');
var last_section = 0;
window.addEventListener("scroll", () => {
    // Header Controller
    if (this.scrollY >= 120) {
        document.querySelector("body").classList.add("scroll");
    } else {
        document.querySelector("body").classList.remove("scroll");
    }
    // Nav Controller
    last_section = 0;
    nav_trigger.forEach(sect => {
        if (window.scrollY + (window.innerHeight * .2) >= sect.offsetTop) {
            if (sect.getAttribute("data-sect-number") > last_section) {
                last_section = sect.getAttribute("data-sect-number");
            }
        }
        changeActiveNavItem();
        makeActiveNavItem();
    })
})