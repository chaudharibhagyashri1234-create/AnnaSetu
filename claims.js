// Get all donations

let donations =
    JSON.parse(
        localStorage.getItem("annaSetuDonations")
    ) || [];


// Get only claimed donations

let claims = donations.filter(function(donation) {

    return donation.status === "Claimed";

});


// Get container

const container =
    document.getElementById("claimsContainer");


// No claims

if (claims.length === 0) {

    container.innerHTML = `
        <div class="empty-message">

            <h2>No Claims Yet 📦</h2>

            <p>
                You have not claimed any food donations yet.
            </p>

            <a
                href="available-food.html"
                class="btn"
            >
                Find Available Food
            </a>

        </div>
    `;

}


// Display claims

else {

    container.className = "food-grid";

    claims.forEach(function(donation) {

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

            <span class="status">
                ✅ Claimed
            </span>

        `;


        container.appendChild(card);

    });

}