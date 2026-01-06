function validateRegistration() {
    // 1. Inputs ki values get karna
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const pname = document.getElementById("pname").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value;
    const branch = document.getElementById("branch").value;
    const address = document.getElementById("address").value.trim();
    const studentPhoto = document.getElementById("studentPhoto").value;
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

    if (pname === "") {
        msg.innerText = "Please fill father's name.";
        return;
    }

    if (mname === "") {
        msg.innerText = "Please fill mother's name.";
        return;
    }

    ///check email
    if (email === "") {
        msg.innerText = "Please enter your email.";
        return;
    } else if (!email.includes('@gmail.com') ) {
        msg.innerText = "Please enter a valid email address.";
        return;
    }

    // Mobile number check

    if (mobile === "") {
        msg.innerText = "Please enter your mobile number.";
        return;
    } else if (isNaN(mobile) || mobile.length !==10) {
        msg.innerText = "Please enter a valid 10-digit phone number.";
        return;
    }

    // Roll Check
    if (roll === "") {
        msg.innerText = "Please enter your roll number.";
        return;
    } else if (isNaN(roll) || (roll.length > 10)) {
        msg.innerText = "Roll number should be numeric. Max 10 digits.";
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

    // Course Check
    if (course === "") {
        msg.innerText = "Please select your course.";
        return;
    }

    // Branch Check
    if (branch === "") {
        msg.innerText = "Please select your branch.";
        return;
    }

    // Address Check
    if (address === "") {
        msg.innerText = "Please enter your address.";
        return;
    }

    // Student Photo Check
    if (studentPhoto === "") {
        msg.innerText = "Please upload your photo.";
        return;
    }

   // 3. Final Success
    msg.style.color = "green";
    msg.innerText = "Registration successfully!";
    alert("Form submitted!.");
}