const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registration = document.querySelector(".register-button");
let flag = 0;

function checkForm(target) {
    flag = 0;
    if(email.value.length <= 0 || !email.value.includes("@gmail.com")) {
        email.value = "";
        email.classList.add("form-input-wrong");
        email.placeholder = "Email must include @gmail.com";
        flag = 1;
    }
    if(password.value.length < 8) {
        password.value = "";
        password.classList.add("form-input-wrong");
        password.placeholder = "Password must be 8 or more characters";
        flag = 1;
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


