function grabNames() {
  /**
   * This function grabs bunch of names and store last names of each one that matches first name to preselected name.
   */
  // Get names and split them into an array
  let names = document.getElementById("text-box").value;
  let nameArray = names.split(",");
  let lnameArray = [];
  // Find names includes theFname and store them in an array.
  for (let name of nameArray) {
    if (name.includes(theFname)) {
      name = name.trim(); // Remove any white space that may exist.
      name = name.split(" ")[1]; // Grab last name that is second part of name.
      lnameArray.push(name);
    }
  }
  console.log(lnameArray);
}

let theFname = "Ali";
// Add event listener
const grabBtn = document.getElementById("grab-btn");
grabBtn.addEventListener("click", grabNames);
