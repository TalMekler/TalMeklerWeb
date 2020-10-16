const back_to_top_btn = document.querySelector('.back-to-top-btn');
const header_height = document.querySelector('header').offsetHeight;

window.addEventListener('scroll', ()=>{
    if (window.scrollY > header_height){
        back_to_top_btn.style.opacity = '1';
        back_to_top_btn.style.pointerEvent = 'all';
    }else{
        back_to_top_btn.style.opacity = '0';
        back_to_top_btn.style.pointerEvent = 'none';
    }
})