// ### Theme changer by click ###
const toggle_theme_btn = document.querySelector("header nav ul .toggle-theme-wrapper .toggle-theme");
toggle_theme_btn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("light-theme");
})