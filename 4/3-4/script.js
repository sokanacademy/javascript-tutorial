function grabTasks() {
  /**
   * This function grabs bunch of tasks and makes a to do list.
   */
  // Get tasks and split them into an array
  let tasks = document.getElementById("text-box").value;
  let taskArray = tasks.split(",");
  const taskList = document.getElementById("task-list");
  let newTasks = taskList.innerHTML;
  // Add each task in li tags with template literals and append to html.
  for (let task of taskArray) {
    task = task.trim();
    newTasks += `<li>${task}</li>`;
  }
  taskList.innerHTML = newTasks;
  addEventToTasks();
}

function removeTasks() {
  document.getElementById("task-list").innerHTML = "";
}

function addEventToTasks() {
  const taskElements = document.querySelectorAll("li");
  for (const task of taskElements) {
    task.addEventListener("dblclick", doneTask);
  }
}

function doneTask() {
  // In this case, 'this' refers to each li tag that been clicked.
  this.style.textDecoration = "line-through";
}

// Add event listener to buttons
const grabBtn = document.getElementById("grab-btn");
grabBtn.addEventListener("click", grabTasks);
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", removeTasks);
