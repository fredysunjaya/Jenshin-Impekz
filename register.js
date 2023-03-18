const username = document.querySelector("#username");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const password = document.querySelector("#password");
const registration = document.querySelector(".register-button");
const agreement = document.querySelector(".checkbox input");
const validation = document.querySelector(".validation");
let flag = 0;

function checkForm(target) {
    flag = 0;
    if(username.value.length <= 5)  {
        username.value = "";
        username.classList.add("form-input-wrong");
        username.placeholder = "Username must be 5 or more characters";
        flag = 1;
    }
    if(email.value.length <= 0 || !email.value.includes("@gmail.com")) {
        email.value = "";
        email.classList.add("form-input-wrong");
        email.placeholder = "Email must include @gmail.com";
        flag = 1;
    }
    if(age.value < -1 || age.value < 14) {
        age.value = "";
        age.classList.add("form-input-wrong");
        age.placeholder = "At least you must be 14 years old";
        flag = 1;
    }
    if(password.value.length < 8) {
        password.value = "";
        password.classList.add("form-input-wrong");
        password.placeholder = "Password must be 8 or more characters";
        flag = 1;
    }
    if(!agreement.checked) {
        flag = 1;
        validation.classList.add("validation-show");
    }
    if(flag == 0) {
        location.href = "index.html";
    }
}


function resetInput(name) {
    let tmp = document.querySelector("#" + name);
    name = name.charAt(0).toUpperCase() + name.slice(1);
    tmp.placeholder = name;
    tmp.classList.remove("form-input-wrong");
}

function isChecked() {
    if(agreement.checked) {
        validation.classList.remove("validation-show");
    }
}


