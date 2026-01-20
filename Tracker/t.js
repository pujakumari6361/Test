let total = 0;

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML =
        name + " : ₹" + amount +
        " <button onclick='deleteExpense(this," + amount + ")'>Delete</button>";

    document.getElementById("list").appendChild(li);

    total = total + parseInt(amount);
    document.getElementById("total").innerText = total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}

function deleteExpense(btn, amount) {
    btn.parentElement.remove();
    total = total - parseInt(amount);
    document.getElementById("total").innerText = total;
}