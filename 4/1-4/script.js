function grabNumbers() {
  // Get numbers and split them into an array
  let numbers = document.getElementById("text-box").value;
  let numArray = numbers.split(",");
  // Add 'xxx' in middle of numbers
  for (let index = 0; index < numArray.length; index++) {
    numArray[index] =
      numArray[index].slice(0, 4) + "xxx" + numArray[index].slice(7);
  }
  console.log(numArray);
}

// Add event listener
const grabBtn = document.getElementById("grab-btn");
grabBtn.addEventListener("click", grabNumbers);
