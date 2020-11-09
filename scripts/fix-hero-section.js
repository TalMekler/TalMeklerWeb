const hero_section = document.querySelector('section.hero-section');
function fixHeroSection() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var calc = window.innerHeight - headerHeight;
    hero_section.style.minHeight = calc + 'px';
    fixHeight();
}

function fixHeight(){
    const hero_text_height = document.querySelector('main section.hero-section .hero__text').offsetHeight;
    const platforms_wrapper_height = document.querySelector('main section.hero-section .platforms-wrapper').offsetHeight;
    const header_height = document.querySelector('header').offsetHeight;
    var sum_height = hero_text_height + platforms_wrapper_height + 50;
    var window_height = window.innerHeight - header_height;
    hero_section.style.minHeight = `${Math.max(sum_height, window_height)}px`;
}

fixHeroSection()
setInterval(() => {
    fixHeroSection();

}, 100);
