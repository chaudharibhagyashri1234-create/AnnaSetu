// Get donations

let donations =
    JSON.parse(
        localStorage.getItem("annaSetuDonations")
    ) || [];


// Available donations

let availableDonations = donations.filter(function(donation) {

    return donation.status === "Available";

});


// Display available donations

document.getElementById("availableFood").textContent =
    availableDonations.length;


// Claimed donations

let claimedDonations = donations.filter(function(donation) {

    return donation.status === "Claimed";

});


// Display claimed donations

document.getElementById("claimedFood").textContent =
    claimedDonations.length;


// Calculate meals received

let mealsReceived = 0;

claimedDonations.forEach(function(donation) {

    mealsReceived += Number(donation.quantity) || 0;

});


document.getElementById("mealsReceived").textContent =
    mealsReceived;