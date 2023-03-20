const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registration = document.querySelector(".register-button");
let flag = 0;

function checkPassword(password) {
    let flag = 0;

    for(let i = 0; i < password.length; i++) {
        if(password.charAt(i) >= 'a' && password.charAt(i) <= 'z') {
            flag++;
            break;
        }
    }
    for(let i = 0; i < password.length; i++) {
        if(password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
            flag++;
            break;
        }
    }
    for(let i = 0; i < password.length; i++) {
        if(password.charAt(i) >= '0' && password.charAt(i) <= '9') {
            flag++;
            break;
        }
    }
    if(flag == 3) {
        return false;
    }
    return true;
}

function checkForm(target) {
    flag = 0;
    if(email.value.length <= 0 || !email.value.includes("@gmail.com")) {
        email.value = "";
        email.classList.add("form-input-wrong");
        email.placeholder = "Email must include @gmail.com";
        flag = 1;
    }
    if(checkPassword(password.value)) {
        password.value = "";
        password.classList.add("form-input-wrong");
        password.placeholder = "Passwords must contain number, lowercase, uppercase";
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


// sidebar button
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("sidebar-show");
});

document.querySelector(".contents").addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
});

document.querySelector(".footer").addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
});