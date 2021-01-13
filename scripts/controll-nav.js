const open_bar = document.querySelector('i.fa-bars');
const close_bar = document.querySelector('.close-btn i.fa-times');
const nav_bar = document.querySelector('nav');
const nav_items = document.querySelectorAll('nav .nav-item');

document.body.style.overflowX = 'hidden';

open_bar.addEventListener('click', ()=>{
    nav_bar.style.transition = 'all .3s ease-in-out';
    nav_bar.classList.add('open');
    document.body.style.overflow = 'hidden';
})
close_bar.addEventListener('click', ()=>{
    nav_bar.style.transition = 'all .3s ease-in-out';
    nav_bar.classList.remove('open');
    document.body.style.overflow = 'visible';
})
nav_items.forEach((e)=>{
    e.addEventListener('click', ()=>{
        nav_bar.style.transition = 'none';
        nav_bar.classList.remove('open');
        document.body.style.overflow = 'visible';
    })
})