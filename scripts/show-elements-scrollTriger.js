const trigger_blocks = document.querySelectorAll('.trigger');
var trigger_distance = 150; // px in page
if (window.innerWidth <= 1023){
    trigger_distance = 125;
} 
if (window.innerWidth <= 767) {
    trigger_distance = 100;
}

window.addEventListener('scroll', toggleTrigger);
setInterval(() => {
    toggleTrigger();
}, 100);

function toggleTrigger() {
    var scroll = window.scrollY;
    trigger_blocks.forEach((block) => {
        var block_translateY = 0;
        if (hasClass(block, 'hty')){
            block_translateY = block.offsetHeight * (block.getAttribute('data-translateY-deg') / 100);
        }
        var offset_top = block.offsetTop - block_translateY;
        if (offset_top <= scroll + window.innerHeight - trigger_distance) {
            block.classList.add('trigger-on');
        } else {
            block.classList.remove('trigger-on');
        }
    })
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}