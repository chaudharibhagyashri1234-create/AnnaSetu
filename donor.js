// Get donations from localStorage

let donations =
    JSON.parse(localStorage.getItem("annaSetuDonations")) || [];


// Total donations

document.getElementById("totalDonations").textContent =
    donations.length;


// Active donations

let activeDonations = donations.filter(function(donation) {

    return donation.status !== "Claimed";

});

document.getElementById("activeDonations").textContent =
    activeDonations.length;


// Calculate meals saved

let mealsSaved = 0;

donations.forEach(function(donation) {

    mealsSaved += Number(donation.quantity) || 0;

});

document.getElementById("mealsSaved").textContent =
    mealsSaved;