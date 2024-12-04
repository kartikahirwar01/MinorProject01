// JavaScript for handling form submission and saving data to localStorage

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const pickupLocation = document.getElementById("pickup-location").value;
    const deliveryLocation = document.getElementById("delivery-location").value;
    const deliveryDate = document.getElementById("delivery-date").value;
    const paymentMode = document.getElementById("payment-mode").value;

    // Save the data to localStorage
    const bookingData = {
        pickupLocation: pickupLocation,
        deliveryLocation: deliveryLocation,
        deliveryDate: deliveryDate,
        paymentMode: paymentMode
    };

    // Check if there's existing data in localStorage, if so, get it and append new booking data
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show the success message
    const successMsg = document.getElementById("success-msg");
    successMsg.classList.remove("hidden");
    
    // Clear the form after submission
    document.getElementById("booking-form").reset();

    // Hide the success message after 3 seconds
    setTimeout(function() {
        successMsg.classList.add("hidden");
    }, 3000);
});
