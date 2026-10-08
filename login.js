document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;


    // Get registered users

    let users =
        JSON.parse(
            localStorage.getItem("annaSetuUsers")
        ) || [];


    // Find matching user

    const user = users.find(function(account) {

        return (
            account.email === email &&
            account.password === password &&
            account.userType === userType
        );

    });


    // User not found

    if (!user) {

        alert(
            "Invalid email, password, or user type."
        );

        return;

    }


    // Save logged-in user

    localStorage.setItem(
        "annaSetuCurrentUser",
        JSON.stringify(user)
    );


    alert("Login successful! 🎉");


    // Redirect based on user type

    if (userType === "donor") {

        window.location.href =
            "donor-dashboard.html";

    }

    else if (userType === "ngo") {

        window.location.href =
            "ngo-dashboard.html";

    }

});