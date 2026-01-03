function validateSignup() {
    // 1. Inputs ki values get karna
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;
    const msg = document.getElementById("msg");

    // Message reset
    msg.style.color = "red";

    // 2. Step-by-Step Validation Logic
    if (fname === "") {
        msg.innerText = "What's your name?";
        return;
    }
    if (lname === "") {
        msg.innerText = "Please fill the last name.";
        return;
    }

   
    
    if (email === "") {
        msg.innerText = "Enter mobile number or email.";
        return;
    } else if (!email.includes('@gmail.com') && (isNaN(email) || email.length !==10)) {
        msg.innerText = "Please enter a valid email or 10-digit phone number.";
        return;
    }

    // Password Check
    if (password.length < 6) {
        msg.innerText = "Password should be at least 6 characters.";
        return;
    }

    // Birthday Check
    if (day === "0" || month === "0" || year === "0") {
        msg.innerText = "Please select your birthday.";
        return;
    }

    // Gender Check
    if (gender === "") {
        msg.innerText = "Please choose a gender.";
        return;
    }

    // 3. Final Success
    msg.style.color = "green";
    msg.innerText = "Account created successfully!";
    alert("Form submitted! Welcome to Facebook Clone.");
}