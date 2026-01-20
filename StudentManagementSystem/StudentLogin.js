function login() {

  const fname = document.getElementById("fname").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const course = document.getElementById("course").value.trim();

  //Message reset
  message.style.color = "red";
   
    // Full Name Check
   if (fname === "") {
        message.innerText = "Enter full name.";
        return ;
    }

    // Roll Number Check
    if (roll.length < 6) {
        message.innerText = "Roll number should be at least 6 characters.";
        return ;
    }

    // Course Check
    if (course === "") {
        message.innerText = "Enter course.";
        return ;
    }

    else {
    message.innerText = "Login successful!";
    message.style.color = "green";
  }

}