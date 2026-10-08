document.getElementById("foodForm").addEventListener("submit", function(event) {

    event.preventDefault();


    // Get form values

    const foodName =
        document.getElementById("foodName").value;

    const quantity =
        document.getElementById("quantity").value;

    const location =
        document.getElementById("location").value;

    const expiry =
        document.getElementById("expiry").value;

    const description =
        document.getElementById("description").value;


    // Create donation object

    const donation = {

        id: Date.now(),

        foodName: foodName,

        quantity: quantity,

        location: location,

        expiry: expiry,

        description: description,

        status: "Available"

    };


    // Get existing donations

    let donations =
        JSON.parse(
            localStorage.getItem("annaSetuDonations")
        ) || [];


    // Add new donation

    donations.push(donation);


    // Save donations

    localStorage.setItem(
        "annaSetuDonations",
        JSON.stringify(donations)
    );


    // Success message

    alert(
        "Food donation posted successfully! 🍲"
    );


    // Go to donor dashboard

    window.location.href =
        "donor-dashboard.html";

});