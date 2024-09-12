const addTaskBox = document.getElementById("addTaskBox");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

function addTask() {
  if (addTaskBox.value === "") {
    alert("Can't add empty task! Please write something!");
  } else {
    let li = document.createElement("li");
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Add task text and timestamp to the list item
    li.innerHTML = `${addTaskBox.value} <br><small><i>Added on: ${date} at ${time}</i></small>`;
    // li.innerHTML = addTaskBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "Delete";
    li.appendChild(span);
  }
  addTaskBox.value = "";
  dataStorage();
}

addTaskBtn.addEventListener("click", addTask);

addTaskBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

//Event listeners for tasklist interaction (toggle class and delete)
taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      dataStorage();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      dataStorage();
    }
  },
  false
);

// storing in LOCAL Storage on the browser
function dataStorage() {
  localStorage.setItem("data", taskList.innerHTML);
}

//displaying the stored task from local storage
function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();
