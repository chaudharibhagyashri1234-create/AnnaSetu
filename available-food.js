// Get donations from localStorage

let donations =
    JSON.parse(
        localStorage.getItem("annaSetuDonations")
    ) || [];


// Get container

const container =
    document.getElementById("availableFoodContainer");


// Find available donations

let availableDonations = donations.filter(function(donation) {

    return donation.status === "Available";

});


// No food available

if (availableDonations.length === 0) {

    container.innerHTML = `
        <div class="empty-message">

            <h2>No Food Available Currently 🍽️</h2>

            <p>
                Please check again later for new food donations.
            </p>

        </div>
    `;

}


// Display available food

else {

    container.className = "food-grid";

    availableDonations.forEach(function(donation) {

        const card =
            document.createElement("div");

        card.className = "food-card";


        const expiryDate =
            new Date(donation.expiry);

        const formattedExpiry =
            expiryDate.toLocaleString();


        card.innerHTML = `

            <h2>🍛 ${donation.foodName}</h2>

            <p>
                <strong>🍽️ Meals:</strong>
                ${donation.quantity}
            </p>

            <p>
                <strong>📍 Pickup Location:</strong>
                ${donation.location}
            </p>

            <p>
                <strong>⏰ Available Until:</strong>
                ${formattedExpiry}
            </p>

            <p>
                <strong>📝 Description:</strong>
                ${donation.description}
            </p>

            <button
                class="btn claim-btn"
                onclick="claimFood(${donation.id})"
            >
                🤝 Claim Food
            </button>

        `;


        container.appendChild(card);

    });

}


// Claim food function

function claimFood(id) {

    let donations =
        JSON.parse(
            localStorage.getItem("annaSetuDonations")
        ) || [];


    // Find donation

    const donation =
        donations.find(function(item) {

            return item.id === id;

        });


    if (!donation) {

        alert("Donation not found.");

        return;

    }


    // Change status

    donation.status = "Claimed";


    // Save updated donations

    localStorage.setItem(
        "annaSetuDonations",
        JSON.stringify(donations)
    );


    alert(
        "Food successfully claimed! 🤝🍲"
    );


    // Refresh page

    location.reload();

}