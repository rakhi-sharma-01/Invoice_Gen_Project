function checkUser(){
   
    var authDataString = localStorage.getItem("authData");

    if(authDataString){
        var authData = JSON.parse(authDataString);
        var user = authData[0];
        
        var name = user.userName;
        var pass = user.userPass;

        
    var newUser = document.getElementById("Uname");
    var newPass = document.getElementById("Upass");

    if(newUser.value === name && newPass.value === pass){
        alert("You are logged in");
        location.href="./Invoice_Gen/user.html"
    }else{
        alert("User doesn't exists");
    }
    }else{
        alert("No user Data Found!")
    }
}

const toggle_pass =document.querySelector("#toggle-pass");
const u_pass = document.querySelector("#Upass");

toggle_pass.addEventListener('click',function(e){
    const type = u_pass.getAttribute('type')==='password'? 'text' :'password';
    u_pass.setAttribute('type',type);
    this.classList.toggle('bx bx-lock-open-alt');
})
 
const handleSubmit =(e)=>{
    e.preventDefault();
    checkUser();
}
const user_log = document.getElementById("user_log");
user_log.addEventListener("click", handleSubmit);