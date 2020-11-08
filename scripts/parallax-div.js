const parallax_divs = document.querySelectorAll('.parallax-div');

parallax_divs.forEach((div)=>{
    setDataStartTranslateY(div);
})

window.addEventListener('scroll', () => {
    parallax_divs.forEach(div => {
        var div_top = div.offsetTop;
        if (window.scrollY >= div_top) {
            var start_translateY = getStartingTranslateY(div);
            var div_translate_y = (-((window.scrollY - div_top) * 0.5) + start_translateY);
            // var div_translate_y = (-((window.scrollY - div_top) * 0.5));
            console.log("div_translate_y", div_translate_y)
            div.style.transform = `translateY(${div_translate_y}px)`;
        }
    })
})

function isMobile() {
    return window.innerWidth < 767;
}

function setDataStartTranslateY(div) {
    var style = window.getComputedStyle(div);
    var matrix = style.transform || style.webkitTransform || style.mozTransform;
    matrix = matrix.split(',');
    var matrix_length = matrix.length;
    matrix = matrix[matrix_length - 1];
    var starting_translateY_position = matrix.split(')')[0];
    div.setAttribute('start-translateY', starting_translateY_position);
}

function getStartingTranslateY(div){
    var res = div.getAttribute('start-translateY');
    if (div == 'none'){
        res = 0;
    }else{
        res = parseInt(res);
    }
    return (res);
}