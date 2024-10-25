document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        displayMessage("Please fill in all fields.", "error");
        return;
    }

    // Simulate form submission success
    displayMessage("Thank you for your message, " + name + "! We will get back to you soon.", "success");

    // Clear the form
    document.getElementById("contactForm").reset();
});

function displayMessage(message, type) {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = message;
    responseMessage.className = type === "success" ? "success-message" : "error-message";
}