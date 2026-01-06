
function DeleteStudent(){
    let fname = document.getElementById("fname").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();
    let message = document.getElementById("message");

    // Full Name Check
   if (fname === "") {
        message.innerText = "Enter full name.";
        return;
    }

    // Roll Number Check
    if (roll.length < 6) {
        message.innerText = "Roll number should be at least 6 characters.";
        return;
    }

    // Course Check
    if (course === "") {
        message.innerText = "Enter course.";
        return;
    }

    else {
    message.innerText = "Delete successful!";
    message.style.color = "green";
     alert("Deleted successful!.");
  }


}