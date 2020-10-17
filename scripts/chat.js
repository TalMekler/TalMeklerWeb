const chat_div = document.querySelector('.chat');
const top_div_chat = document.querySelector('.chat .top-div-chat');
const bottom_div_chat = document.querySelector('.chat .bottom-div-chat');
const open_chat_btn = document.querySelector('.chat .top-div-chat .btn.top-div-chat-child i.fa-angle-up');
const open_chat_btn_mobile = document.querySelector('i.chat-btn-for-mobile');

const close_chat_btn = document.querySelector('.chat .top-div-chat .btn.top-div-chat-child i.fa-angle-down');



open_chat_btn.addEventListener('mouseover', () => { showOpenBeforeElement() });
open_chat_btn.addEventListener('click', () => { openFullChat() });
open_chat_btn_mobile.addEventListener('click', () => {
    openFullChat();
})
close_chat_btn.addEventListener('click', () => {
    closeChat();
})


saveBottomDivHeight();
chatOnMobile();

function saveBottomDivHeight() {
    var height = bottom_div_chat.offsetHeight;
    bottom_div_chat.setAttribute('height', height);
    bottom_div_chat.style.display = 'none';
}
function chatOnMobile() {
    checkMobile()
    if (checkMobile()) {
        bottom_div_chat.style.height = bottom_div_chat.offsetHeight + 'px';
        chat_div.style.display = 'none';
    }
}
function showOpenBeforeElement() {
    top_div_chat.classList.add('hover');
}
function openFullChat() {
    if (checkMobile()){
        chat_div.style.display = 'block';
        bottom_div_chat.style.height = bottom_div_chat.getAttribute('height') + 'px';
        chat_div.classList.add('open');
        bottom_div_chat.style.display = 'block';
        open_chat_btn_mobile.style.display = 'none';
        open_chat_btn.style.display = 'none';
        close_chat_btn.style.display = 'inline-block';
    }else{
        var bottom_div_height = bottom_div_chat.getAttribute('height');
        bottom_div_chat.style.height = bottom_div_height + 'px';
        open_chat_btn.style.display = 'none';
        close_chat_btn.style.display = 'inline-block';
    }
}
function closeChat() {
    if (chatOnMobile()){
        chat_div.style.display = 'block'
    }else{
        bottom_div_chat.style.height = '0px';
        close_chat_btn.style.display = 'none';
        open_chat_btn.style.display = 'inline-block';
        chat_div.classList.remove('open');
        open_chat_btn_mobile.style.display = 'block'
    }
}
function checkMobile() {
    return (window.innerWidth < 767);
}