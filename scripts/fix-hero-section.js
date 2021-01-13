const hero_section = document.querySelector('section.hero-section');
function fixHeroSection() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var calc = window.innerHeight - headerHeight;
    hero_section.style.minHeight = calc + 'px';
}

fixHeroSection()
setInterval(() => {
    fixHeroSection();

}, 100);
