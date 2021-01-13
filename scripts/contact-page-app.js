// Contact form Controll
var inputs = document.querySelectorAll("body.contact-page-body main.contact-page .form-wrapper form .input-div input, body.contact-page-body main.contact-page .form-wrapper form .input-div textarea");

inputs.forEach((input)=>{
    input.addEventListener("focusin", ()=>{
        input.parentElement.classList.add("active");
    })
    input.addEventListener("focusout", ()=>{
        input.parentElement.classList.remove("active");
        if (input.value == ""){
            input.parentElement.classList.remove("type-in");
        }else{
            input.parentElement.classList.add("type-in");
        }
    })
})
