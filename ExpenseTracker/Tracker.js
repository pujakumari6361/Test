let total = 0;

function addExpense() {
    const nameInput = document.getElementById("expense");   // Expense Name
    const amountInput = document.getElementById("Amount");  // Amount
    const list = document.getElementById("expanseList");    // Expense List
    const totalSpan = document.getElementById("total");     // Total Amount

    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();

    // Validation
    if (name === "" || amount === "") {
        alert("Please enter both Expense Name and Amount!");
        return;
    }

    // List li create
    const li = document.createElement("li");
    li.textContent = `${name} - ₹${amount}`;

    // List me add
    list.appendChild(li);

    // Total update
    total += Number(amount);
    totalSpan.textContent = total;

    // Inputs clear
    nameInput.value = "";
    amountInput.value = "";
}