// Contact form Controll
var inputs = document.querySelectorAll(".inner-page main form .input-wrapper input, .inner-page main form .input-wrapper textarea");

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
