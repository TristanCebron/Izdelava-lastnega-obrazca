const form = document.getElementById("registration");
const password = document.getElementById("password");

function showError(id, message) {
    document.getElementById(id).classList.toggle("red", message !== "");
    document.getElementById(id + "-error").textContent = message;
    return message === "";
}

function validateForm() {
    const nickname = document.getElementById("nickname").value.trim();
    const email = document.getElementById("email").value.trim();
    const email2 = document.getElementById("email2").value.trim();
    const pass = password.value;
    const pass2 = document.getElementById("password2").value;
    const terms = document.getElementById("terms").checked;

    let ok = true;

    if (!showError("nickname", nickname ? "" : "The nickname field is required.")) ok = false;

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!showError("email", !email ? "The e-mail field is required." : !validEmail ? "Enter a valid e-mail address." : "")) ok = false;

    if (!showError("email2", !email2 ? "Please confirm your e-mail." : email2 !== email ? "E-mail addresses do not match." : "")) ok = false;

    if (!showError("password", !pass ? "The password field is required." : pass.length < 8 ? "Password must have at least 8 characters." : "")) ok = false;

    if (!showError("password2", !pass2 ? "Please confirm your password." : pass2 !== pass ? "Passwords do not match." : "")) ok = false;

    document.getElementById("terms-error").textContent = terms ? "" : "You must accept the terms and conditions.";
    if (!terms) ok = false;

    return ok;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("message");
    message.textContent = validateForm()
        ? "All fields are valid!"
        : "";
});


password.addEventListener("input", function() {
    const text = password.value;
    let score = 0;
    if (text.length >= 8) score++;
    if (/[a-z]/.test(text)) score++;
    if (/[A-Z]/.test(text)) score++;
    if (/[0-9]/.test(text)) score++;
    if (/[^a-zA-Z0-9]/.test(text)) score++;

    document.querySelectorAll(".strength span").forEach(function(bar, index) {
        bar.classList.toggle("active", index < score);
    });
});
