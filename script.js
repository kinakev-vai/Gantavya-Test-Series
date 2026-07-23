// Gantavya Test Series

// Home Page Start Test Button
function startTest() {
    window.location.href = "login.html";
}

// Login Button
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter Email and Password");
            return;
        }

        alert("Login feature will be connected with Firebase.");

    });
}

// Register Button
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", function () {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        alert("Registration feature will be connected with Firebase.");

    });

}
