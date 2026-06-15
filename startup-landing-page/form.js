const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");
form.addEventListener("submit", function(event) {event.preventDefault(); successMessage.classList.add("is-visible"); form.reset();});