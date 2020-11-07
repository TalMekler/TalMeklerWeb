const parallax_divs = document.querySelectorAll('.parallax-div');

window.addEventListener('scroll', ()=>{
    parallax_divs.forEach(div=>{
        var div_top = div.offsetTop;
        if (window.scrollY >= div_top && !isMobile()){
            var div_translate_y = -(window.scrollY - div_top) * 0.5;
            div.style.transform = `translateY(${div_translate_y}px)`;
        }
    })
})

function isMobile(){
    return window.innerWidth < 767;
}