setFirstTheme();
// ### Theme changer by click ###
const toggle_theme_btn = document.querySelector("header nav ul .toggle-theme-wrapper .toggle-theme");
toggle_theme_btn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("light-theme");
    saveTheme();
})

function saveTheme(){
    if (document.querySelector("body").classList.contains("light-theme")){
        localStorage.setItem("theme", "light-theme");
    }else{
        localStorage.setItem("theme", "dark-theme");
    }
}

if (localStorage.getItem("theme") == "light-theme") {
    document.querySelector("body").classList.add("light-theme");
}else {
    document.querySelector("body").classList.remove("light-theme");
}

function setFirstTheme(){
    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "dark-theme");
    }
}