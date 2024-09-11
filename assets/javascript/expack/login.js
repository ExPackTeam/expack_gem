function loginOption() {
    var emailClass = document.getElementsByClassName("login-email");
    var passwordClass = document.getElementsByClassName("login-password");
    var usernameClass = document.getElementsByClassName("login-username");

    function hasRequiredClass(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains('required')) {
                return true;
            }
        }
        return false;
    }

    var registerBtn = document.getElementsByClassName("register-btn");
    if (registerBtn.length > 0) {
        for (var i = 0; i < registerBtn.length; i++) {
            registerBtn[i].onclick = function() { 
                var emailRequired = hasRequiredClass(emailClass);
                var passwordRequired = hasRequiredClass(passwordClass);
                var usernameRequired = hasRequiredClass(usernameClass);

                if (emailRequired && emailClass.length > 0) {
                    const emailValue = emailClass[0].value;
                    localStorage.setItem("email saved", emailValue);
                    document.cookie = `userEmail=${emailValue}`;
                }
                if (passwordRequired && passwordClass.length > 0) {
                    const passwordValue = passwordClass[0].value;
                    localStorage.setItem("password saved", passwordValue);
                    document.cookie = `userPassword=${passwordValue}`;
                }
                if (usernameRequired && usernameClass.length > 0) {
                    const usernameValue = usernameClass[0].value;
                    localStorage.setItem("username saved", usernameValue);
                    document.cookie = `userUsername=${usernameValue}`;
                }
            }
        }
    } else {
        console.log("no register");
    }
}
