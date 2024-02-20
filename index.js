let isLoggedIn = false; // Initialize the state

function checkUser() {
    var authDataString = localStorage.getItem("authData");

    if (authDataString) {
        var authData = JSON.parse(authDataString);
        var user = authData[0];

        var name = user.userName;
        var pass = user.userPass;

        var newUser = document.getElementById("Uname");
        var newPass = document.getElementById("Upass");

        if (newUser.value === name && newPass.value === pass) {
            sessionStorage.setItem("isLoggedIn", "true");
            isLoggedIn = true; // Update the state
            alert("You are logged in");
            location.href = "./Invoice_Gen/user.html";
        } else {
            sessionStorage.setItem("isLoggedIn", "false");
            alert("User doesn't exist or invalid credentials");
        }
    } else {
        alert("No user data found!");
    }
}

const checkAuthentication = () => {
    const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!storedIsLoggedIn || storedIsLoggedIn !== "true") {
        window.location.href = 'index.html';
        isLoggedIn = false;
        return false;
    }
    isLoggedIn = true;
    return true;
}

const protectRoute = () => {
    if (!checkAuthentication()) {
        alert("Unauthorized access");
    }
};

const toggle_pass = document.querySelector("#toggle-pass");
const u_pass = document.querySelector("#Upass");

toggle_pass.addEventListener('click', function (e) {
    const type = u_pass.getAttribute('type') === 'password' ? 'text' : 'password';
    u_pass.setAttribute('type', type);
    this.classList.toggle('bx bx-lock-open-alt');
});

const handleSubmit = (e) => {
    e.preventDefault();
    checkUser();
    checkAuthentication();
    protectRoute();
    console.log("Is logged in:", isLoggedIn);
}

const user_log = document.getElementById("user_log");
user_log.addEventListener("click", handleSubmit);
