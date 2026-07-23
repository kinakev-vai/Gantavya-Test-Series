document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    if(loginBtn){
        loginBtn.addEventListener("click", () => {
            alert("Firebase Login will be added in next step.");
        });
    }

    const registerBtn = document.getElementById("registerBtn");

    if(registerBtn){
        registerBtn.addEventListener("click", () => {
            alert("Firebase Registration will be added in next step.");
        });
    }

});
