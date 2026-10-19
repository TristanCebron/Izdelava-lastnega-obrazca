
document.getElementById("registration").addEventListener("submit", function(event) {
    event.preventDefault();

    let nickname = document.getElementById("nickname").value.trim();
    let email = document.getElementById("email").value.trim();
    let email2 = document.getElementById("email2").value.trim();
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let terms = document.getElementById("terms").checked;

    if (nickname === "" || email === "" || email2 === "" || password === "" || password2 === "") {
        Swal.fire({
            title: "Registration Failed!",
            text: "Please fill in all fields!",
            icon: "error"
        });
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2)) {
        Swal.fire({
            title: "Registration Failed!",
            text: "Please enter a valid e-mail address!",
            icon: "error"
        });
    }
    else if (email !== email2) {
        Swal.fire({
            title: "Registration Failed!",
            text: "E-mail addresses do not match!",
            icon: "error"
        });
    }
    else if (password.length < 8) {
        Swal.fire({
            title: "Registration Failed!",
            text: "Password must contain at least 8 characters!",
            icon: "error"
        });
    }
    else if (password !== password2) {
        Swal.fire({
            title: "Registration Failed!",
            text: "Passwords do not match!",
            icon: "error"
        });
    }
    else if (!terms) {
        Swal.fire({
            title: "Registration Failed!",
            text: "You must accept the Terms & Conditions!",
            icon: "error"
        });
    }
    else {
        Swal.fire({
            title: "Registration Successful!",
            text: "Welcome, " + nickname + "!",
            icon: "success",
            confirmButtonText: "OK",
            draggable: true
        });

        document.getElementById("registration").reset();
    }
});
