function checkUser(){
    var name = localStorage.getItem("authData.userName");
    var pass = localStorage.getItem("authData.userPass");

    console.log("x",name);
    console.log("y",pass);

    var newUser = document.getElementById("Uname");
    var newPass = document.getElementById("Upass");

    if(newUser.value === name && newPass.value === pass){
        alert("You are logged in");
        location.href="./Invoice_Gen/user.html"
    }else{
        alert("User doesn't exists");
    }

}

const toggle_pass =document.querySelector("#toggle-pass");
const u_pass = document.querySelector("#Upass");

toggle_pass.addEventListener('click',function(e){
    const type = u_pass.getAttribute('type')==='password'? 'text' :'password';
    u_pass.setAttribute('type',type);
    this.classList.taggle('bx bx-lock-open-alt');
})
 
const handleSubmit =(e)=>{
    e.preventDefault();
    checkUser();
}
const user_log = document.getElementById("user_log");
user_log.addEventListener("click", handleSubmit);