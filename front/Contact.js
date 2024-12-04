document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Collect Form Data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save to Local Storage
    const formData = { name, email, message };
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Show Success Message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('d-none');
    successMessage.classList.add('fade-in');

    // Reset Form Fields
    this.reset();

    // Hide Success Message after 3 seconds
    setTimeout(() => {
        successMessage.classList.add('d-none');
        successMessage.classList.remove('fade-in');
    }, 3000);
});
