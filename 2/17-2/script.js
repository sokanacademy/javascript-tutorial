function addPlan() {
  /**
   * This function adds new task.
   */

  // element node creation section
  const planBox = document.getElementById("plan-box");
  const thePlan = document.getElementById("text-input").value;
  const planContainer = document.createElement("div");
  const doneButton = document.createElement("button");
  const delButton = document.createElement("button");
  const textBox = document.createElement("p");

  // add class name to new element nodes
  doneButton.className = "done-btn";
  delButton.className = "del-btn";
  textBox.className = "text-box";

  // change text of new nodes
  doneButton.innerHTML = "Done";
  delButton.innerHTML = "Delete";
  textBox.innerHTML = thePlan;

  // add event listener to new nodes
  doneButton.addEventListener("click", jobIsDone);
  delButton.addEventListener("click", deleteJob);

  // add new nodes to DOM
  planContainer.append(textBox, doneButton, delButton);
  planBox.appendChild(planContainer);
}

function delPlan() {
  /**
   * This function removes all tasks.
   */
  document.getElementById("plan-box").innerHTML = "";
  alert("All jobs are removed!");
}

function jobIsDone() {
  /**
   * This function changes the appearance of the done tasks.
   */
  this.previousSibling.style.textDecoration = "line-through";
  this.previousSibling.style.color = "gray";
}

function deleteJob() {
  /**
   * This function removes its corresponding task.
   */
  this.parentNode.remove();
}

// add event listener to predetermined elements in html document
document.getElementById("add-btn").addEventListener("click", addPlan);
document.getElementById("del-btn").addEventListener("click", delPlan);
