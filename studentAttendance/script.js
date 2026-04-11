let data = JSON.parse(localStorage.getItem("data")) || [];

// Add student
function addStudent() {
  let name = document.getElementById("name").value.trim();
  if (!name) return alert("Enter name");

  data.push({ name: name, record: [] });
  saveData();

  document.getElementById("name").value = "";
  render();
}

// Delete student
function deleteStudent(index) {
  data.splice(index, 1);
  saveData();
  render();
}

// Show list
function render() {
  let list = document.getElementById("list");
  let select = document.getElementById("student");

  list.innerHTML = "";
  select.innerHTML = "";

  data.forEach((s, i) => {
    list.innerHTML += `
      <div class="student">
        <span>${s.name}</span>
        <div>
          <input type="checkbox" id="c${i}">
          <span class="delete" onclick="deleteStudent(${i})">❌</span>
        </div>
      </div>
    `;

    select.innerHTML += `<option value="${i}">${s.name}</option>`;
  });
}

// Save attendance
function saveAttendance() {
  let date = new Date().toLocaleDateString();

  data.forEach((s, i) => {
    let checked = document.getElementById(`c${i}`).checked;
    s.record.push({
      date: date,
      status: checked ? "P" : "A"
    });
  });

  saveData();
  alert("✅ Attendance Saved!");
}

// Show attendance
function showAttendance() {
  let i = document.getElementById("student").value;
  let s = data[i];

  let total = s.record.length;
  let present = s.record.filter(r => r.status === "P").length;
  let percent = total ? (present / total) * 100 : 0;

  document.getElementById("output").innerHTML = `
    <h3>${s.name}</h3>
    <p>📅 Total Days: ${total}</p>
    <p>✅ Present: ${present}</p>
    <p>📊 Percentage: ${percent.toFixed(2)}%</p>
  `;
}

// Save to localStorage
function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

// Initial load
render();