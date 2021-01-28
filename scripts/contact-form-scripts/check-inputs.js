// Check Phone Number
const phone_number_input = document.querySelector("#phone_number");
const full_name_input = document.querySelector("#full_name");
const email_input = document.querySelector("#email");

phone_number_input.addEventListener("focusout", checkPhoneNumber);
full_name_input.addEventListener("focusout", checkFullName);
email_input.addEventListener("focusout", checkEmail);

function checkPhoneNumber() {
    if ((isNaN(phone_number_input.value) || phone_number_input.value.length < 9 || phone_number_input.value.length > 10) && phone_number_input.value != "") {
        toggleClass(phone_number_input, true);
        return true;
    } else {
        toggleClass(phone_number_input);
        return false;
    }
}

function checkFullName() {
    var full_name_value = String(full_name_input.value);
    if (full_name_value.length < 2 && full_name_value.length > 0) {
        toggleClass(full_name_input, true);
        return true;
    } else {
        toggleClass(full_name_input);
        return false;
    }
}


function checkEmail() {
    if (!validateEmail(email_input.value) && email_input.value != "") {
        toggleClass(email_input, true);
        return true;
    } else {
        toggleClass(email_input);
        return false;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function toggleClass(input_div, bool = false) {
    if (bool) {
        input_div.parentElement.classList.add("invalid-input");
    } else {
        input_div.parentElement.classList.remove("invalid-input")
    }
}