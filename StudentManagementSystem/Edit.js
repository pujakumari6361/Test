function Submit() {

  const fname = document.getElementById("fname").value.trim();
  const reg = document.getElementById("reg").value.trim();
  const course = document.getElementById("course").value.trim();

  //Message reset
  message.style.color = "red";

    // Full Name Check
   if (fname === "") {
        message.innerText = "Enter full name.";
        return;
    }

    // Registration Number Check
    if (reg.length < 10) {
        message.innerText = "Registration number should be at least 10 characters.";
        return;
    }

    // Course Check
    if (course === "") {
        message.innerText = "Enter course.";
        return;
    }

    else {
    message.innerText = "Submit successful!";
    message.style.color = "green";
  }


}