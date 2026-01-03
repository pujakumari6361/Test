function login() {

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  //Message reset
  message.style.color = "red";

  
   if (email === "") {
        message.innerText = "Enter mobile number or email.";
        return;
    } else if (!email.includes('@gmail.com') && (isNaN(email) || email.length !==10)) {
        message.innerText = "Please enter a valid email or 10-digit phone number.";
        return;
    }

    // Password Check
    if (password.length < 6) {
        message.innerText = "Password should be at least 6 characters.";
        return;
    }

    else {
    message.innerText = "Login successful!";
    message.style.color = "green";
  }


}