let error = document.querySelector(".error");
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".userForm");
    let email = document.querySelector(".userEmail");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        fetch("http://localhost:9090/votingsystem/users")
            .then((res) => res.json())
            .then((users) => {
                let userExists = users.some(user => user.userEmail === email.value);

                if (userExists) {
                    console.log("User Already Exists..");
                    error.style.display = "block";
                    error.innerHTML = "User Already Exits..";

                } else {
                    console.log("Your Account Has Been Created..");
                    error.style.display = "none";
                    form.submit();
                    // window.location.href = "home.html"; 
                }
            })
            .catch((err) => console.error("Error fetching users:", err));
    });
});

let loginForm = document.querySelector(".loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let emailInput = document.querySelector(".userEmail");
    let passInput = document.querySelector(".passwordInput");
    fetch("http://localhost:9090/votingsystem/users")
        .then((res) => res.json())
        .then((users) => {
            let userExists = users.some(user => user.userEmail === emailInput.value && user.userPassword === passInput.value);

            if (userExists) {
                console.log("User Already Exists.. Redirecting...");
                window.location.href = "home.html";
            } else {
                error.style.display = "block";
                console.log("UserName Or Password Is Incorrect..");
            }
        })
        .catch((err) => console.error("Error fetching users:", err));
});
