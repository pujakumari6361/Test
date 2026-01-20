let total = 0;

function addExpense() {
    const nameInput = document.getElementById("expense");
    const amountInput = document.getElementById("Amount");
    const dateInput = document.getElementById("Date");
    const tableBody = document.getElementById("tableBody");
    const totalSpan = document.getElementById("total");

    const name = nameInput.value.trim(); //trim - space hata deta hai 
    const amount = amountInput.value.trim();
    const date = dateInput.value.trim();

    if (name === "" || amount === "" || date === "") {
        alert("Please enter Expense Name, Amount, and Date!");
        return;
    }

    const tr = document.createElement("tr");

    tr.innerHTML = 
       `<td>${name}</td>
        <td>₹${amount}</td>
        <td>${date}</td>
        <td><button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button></td> `;

    tableBody.appendChild(tr);
    
    // Update total
    total += Number(amount);
    totalSpan.textContent = total;

    // Clear inputs
    nameInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
}

function deleteExpense(button, amount) {
    const row = button.parentElement.parentElement;
    row.remove();

    total -= Number(amount);
    document.getElementById("total").textContent = total;
}