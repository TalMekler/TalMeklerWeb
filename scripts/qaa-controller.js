// js
const qaa_divs = document.querySelectorAll("section.questions-and-answers .qaa-wrapper .qaa");
var qaa_quest, qaa_answer, parent, open_check;

function setHeightAttr() {
    qaa_divs.forEach((e) =>{
        qaa_answer = e.children[1];
        qaa_answer.setAttribute('height', qaa_answer.offsetHeight);
        qaa_answer.style.height = '0px';

    })
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
function closeAll() {
    qaa_divs.forEach((e) => {
        e.classList.remove('open');
        var answer = e.children[1];
        answer.style.height = '0px';
    })
}
function toggleSlide(div){
    var final_height = div.getAttribute('height');
    div.style.height = final_height + 'px';
}
setHeightAttr();
qaa_divs.forEach((e) => {
    qaa_quest = e.children[0];
    qaa_quest.addEventListener('click', (q) => {
        parent = q.target.parentElement;
        var answer = parent.children[1];
        open_check = false;
        if (!hasClass(parent, 'open')) {
            open_check = true;
        }
        if (open_check) {
            closeAll();
            parent.classList.add('open');
            toggleSlide(answer);
        } else {
            closeAll();
        }

    })
})