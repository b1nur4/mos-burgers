function checkLogin(){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorLbl = document.getElementById("error");
    let errorMsg;

    if( username == "admin" && password =="admin"){
        window.location.href = "admMenu.html";
    }else {
        errorMsg = "Please enter valid username and password.";
        errorLbl.innerHTML = errorMsg;
    }
}