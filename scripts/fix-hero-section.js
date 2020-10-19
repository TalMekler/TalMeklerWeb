const hero_section = document.querySelector('section.hero');
function fixHeroSection() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var platform_img_height = document.querySelector('section.hero img.all-platforms').offsetHeight;
    var calc = window.innerHeight - (headerHeight + (platform_img_height * 0.2));
    if (checkMobile()) {
        hero_section.style.minHeight = calc + 'px';
    } else {
        hero_section.style.minHeight = "100vh";
        
    }
}

fixHeroSection()
setInterval(() => {
    fixHeroSection();
    
}, 100);


function checkMobile() {
    // true is MOBILE, false is DESKTOP
    return (window.innerWidth < 767)
}