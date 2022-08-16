function reverseStr() {
  // Get element nodes
  const myStr = document.getElementById("myStr").value;
  const result = document.getElementById("result");
  // Initialize counter and blank string
  let newStr = "";
  for (let i = myStr.length - 1; i >= 0; i--) {
    newStr += myStr[i];
  }
  result.textContent = newStr;
}
