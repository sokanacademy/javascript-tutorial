function dayLog() {
  /**
   * This function changes p tag's text when range-bar changes.
   */
  // Get element nodes
  const screen = document.getElementById("screen");
  const day = document.getElementById("day-bar").value;
  // Compare input with each case
  switch (day) {
    case "0":
      screen.textContent = "شنبه";
      break;
    case "1":
      screen.textContent = "یکشنبه";
      break;
    case "2":
      screen.textContent = "دوشنبه";
      break;
    case "3":
      screen.textContent = "سه شنبه";
      break;
    case "4":
      screen.textContent = "چهارشنبه";
      break;
    case "5":
      screen.textContent = "پنجشنبه";
      break;
    case "6":
      screen.textContent = "جمعه";
      break;
  }
}

// Add event listener to range bar
const dayInput = document.getElementById("day-bar");
dayInput.addEventListener("change", dayLog);
