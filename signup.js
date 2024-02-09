const userName = document.getElementById("User-Name");
const userEmail = document.getElementById("User-Email");
const userPass = document.getElementById("User-Pass");

function storeUser(e){
    localStorage.setItem("userName",userName.value);
    localStorage.setItem("userEmail",userEmail.value);
    localStorage.setItem("userPass",userPass.value);
}

const toggle_pass =document.querySelector("#toggle-pass");
const u_pass = document.querySelector("#User-Pass");

toggle_pass.addEventListener('click',function(e){
    const type = u_pass.getAttribute('type')==='password'? 'text' :'password';
    u_pass.setAttribute('type',type);
    this.classList.taggle('bx bx-lock-open-alt');
})

const submitUser = (e) =>{
    e.preventDefault();
    storeUser();
}
const sign_up = document.getElementById("sign_up");
sign_up.addEventListener("click",submitUser);
