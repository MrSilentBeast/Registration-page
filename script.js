let emailInput = document.querySelector(".email_input");
let passwordInput = document.querySelector(".password_input");
let errorPassword = document.querySelector(".error_password");
let errorEmail = document.querySelector(".error_email");
let yesCheck = document.querySelector("#yes_check");

emailInput.addEventListener("blur", function() {
    if(emailInput.value.includes("@mail.ru") || emailInput.value.includes("@gmail.com") || emailInput.value.includes("@yandex.ru")) {
        errorEmail.classList.add('complete');
        errorEmail.textContent = "ваш email свободен";

    } else {
        errorEmail.classList.add('error');
        errorEmail.textContent = "Введен некорректный email";
    }
});

passwordInput.addEventListener("blur", function() {
    if(passwordInput.value.length > 12 || passwordInput.value.length < 5) {
        errorPassword.classList.add('error');
        errorPassword.textContent = "Пароль должен быть не меньше 5 и не больше 12 символов";
    } else {
        errorPassword.classList.add('complete');
        errorPassword.textContent = "Все отлично";
    }
});





