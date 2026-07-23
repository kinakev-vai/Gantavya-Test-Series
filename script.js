import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "./firebase.js";

// ----------------------
// Registration
// ----------------------

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", () => {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                alert("Registration Successful");

                window.location.href = "dashboard.html";

            })
            .catch((error) => {

                alert(error.message);

            });

    });

}

// ----------------------
// Login
// ----------------------

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter Email and Password");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                alert("Login Successful");

                window.location.href = "dashboard.html";

            })
            .catch((error) => {

                alert(error.message);

            });

    });

}
