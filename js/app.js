let email = document.querySelector(".email"),
    submit = document.querySelector(".submit"),
    errorMessage = document.querySelector(".error");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        errorMessage.classList.add("active");
    } else {
        errorMessage.classList.remove("active");
    }
});
