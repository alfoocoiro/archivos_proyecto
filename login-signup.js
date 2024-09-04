function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username == "" || password == "") {
        message.innerHTML = "Please complete both fields.";
        return false;
    } else {
        message.innerHTML = "Welcome, " + username + "! Your password is: " + password;
        return false;
    }
}