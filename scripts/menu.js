// ### open menu - On Mobile ### 
const menu_btn = document.querySelector("header .hamburger-btn");
const bg_menu_forBody = document.querySelector("body .menu-body-bg");

menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("active");
    document.querySelector("body").classList.toggle("open-menu");
    document.querySelector(".side-social").classList.toggle("open-menu");
})

window.addEventListener("scroll", closeMenu);
bg_menu_forBody.addEventListener("click", closeMenu);

function closeMenu() {
    menu_btn.classList.remove("active");
    document.querySelector("body").classList.remove("open-menu");
    document.querySelector(".side-social").classList.remove("open-menu");
}