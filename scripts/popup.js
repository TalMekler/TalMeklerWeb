var popup_wrapper = document.querySelector('#popup-wrapper');
var close_bg = document.querySelector('#popup-wrapper .close-bg');
var close_popup_btn = document.querySelector('#popup-wrapper .popup-box .close-popup');

window.addEventListener('load', ()=>{
    setTimeout(() => {
        popup_wrapper.style.display = 'flex';
        document.querySelector('body').classList.add('popup-open');
    }, 2500);

    close_popup_btn.addEventListener('click', ()=>{
        popup_wrapper.style.display = 'none';
        document.querySelector('body').classList.remove('popup-open');
    })
    close_bg.addEventListener('click', ()=>{
        popup_wrapper.style.display = 'none';
        document.querySelector('body').classList.remove('popup-open');
    })
})