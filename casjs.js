function checkLogin(){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorLbl = document.getElementById("error");
    let errorMsg;

    if( username == "cashier" || password =="cashier"){
        // window.location.href = "menu.html";
    }else {
        errorMsg = "Please enter valid username and password.";
        errorLbl.innerHTML = errorMsg;
    }
}