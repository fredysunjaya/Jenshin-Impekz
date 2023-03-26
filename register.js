const username = document.querySelector("#username");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const password = document.querySelector("#password");
const registration = document.querySelector(".register-button");
const agreement = document.querySelector(".checkbox input");
const validation = document.querySelector(".validation");
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

function checkUsername(username) {
    let flag = 0;
    let specialChar = ["!", "@", "#", "%", "^", "&", "*", "(", ")", 
    "-", "+", ".", ",", "?", "<", ">", "/", ";", ":", "[", "]", "{", "}", 
    "|", "\\", "\"", "\'", "`", "~", "_", "="];
    
    if(username.length < 8 || username.length > 32) {
        return true;
    }

    for(let i = 0; i < username.length; i++) {
        if(specialChar.includes(username.charAt(i))) {
            return true;
        }
    } 

    return false;
}

function checkForm(target) {
    flag = 0;

    if(checkUsername(username.value))  {
        username.value = "";
        username.classList.add("form-input-wrong");
        username.placeholder = "Username: 8-32 Chars,Special Chars Prohibited";
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
    if(checkPassword(password.value)) {
        password.value = "";
        password.classList.add("form-input-wrong");
        password.placeholder = "Passwords: number, lowercase, uppercase";
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

