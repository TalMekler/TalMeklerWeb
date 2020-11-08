const parallax_divs = document.querySelectorAll('.parallax-div');

parallax_divs.forEach((div)=>{
    console.log(div);
})

window.addEventListener('scroll', () => {
    parallax_divs.forEach(div => {
        var div_top = div.offsetTop;
        if (window.scrollY >= div_top) {
            var start_translateY = div.getAttribute('start-translateY');
            if (start_translateY == 'none'){
                start_translateY = 0;
            }else{
                parseInt(start_translateY);
            }
            var div_translate_y = (-((window.scrollY - div_top) * 0.5) + start_translateY);
            div.style.transform = `translateY(${div_translate_y}px)`;
        }
    })
})

function isMobile() {
    return window.innerWidth < 767;
}

// function setDataStartTranslateY(div) {
//     const style = window.getComputedStyle(div);
//     var matrix = style.transform || style.webkitTransform || style.mozTransform;
//     matrix = matrix.split(',');
//     var matrix_length = matrix.length;
//     matrix = matrix[matrix_length - 1];
//     const start_translateY_position = matrix.split(')')[0];
//     div.setAttribute('start-translateY', start_translateY_position);
// }