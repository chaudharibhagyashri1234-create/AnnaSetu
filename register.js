document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const userType = document.getElementById("userType").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // Check password

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    // Create user object

    const user = {

        name: name,

        email: email,

        phone: phone,

        userType: userType,

        password: password

    };


    // Get existing users

    let users = JSON.parse(localStorage.getItem("annaSetuUsers")) || [];


    // Check whether email already exists

    const existingUser = users.find(function(existingUser) {

        return existingUser.email === email;

    });


    if (existingUser) {

        alert("This email is already registered.");

        return;
    }


    // Save user

    users.push(user);

    localStorage.setItem(
        "annaSetuUsers",
        JSON.stringify(users)
    );


    alert("Registration successful!");


    // Go to login page

    window.location.href = "login.html";

});