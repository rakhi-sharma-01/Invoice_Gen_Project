let userName = document.getElementById("User-Name");
let userEmail = document.getElementById("User-Email");
let userPass = document.getElementById("User-Pass");

const toggle_pass =document.querySelector("#toggle-pass");
const u_pass = document.querySelector("#User-Pass");

toggle_pass.addEventListener('click',function(e){
    const type = u_pass.getAttribute('type')==='password'? 'text' :'password';
    u_pass.setAttribute('type',type);
    this.classList.toggle('bx bx-lock-open-alt');
})


const submitUser = (e) => {
    e.preventDefault();
    let newForm = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPass: userPass.value
    };
    storeUser(newForm);
    // Redirect to login page or any other page after signup
    window.location.href = 'index.html';
}

const sign_up = document.getElementById("sign_up");
sign_up.addEventListener("click", submitUser);

function storeUser(e){
    
    let formData = [];
    let newForm = { 
        userName: userName.value, 
        userEmail: userEmail.value, 
        userPass: userPass.value 
    };
    console.log("new ", newForm);
    formData = [...formData, newForm];
    console.log(formData);
    localStorage.setItem("authData", JSON.stringify(formData));

}

