function reverseStr() {
  // Get element nodes
  const myStr = document.getElementById("myStr").value;
  const result = document.getElementById("result");
  // Initialize counter and blank string
  let newStr = "";
  let i = myStr.length - 1;
  while (i >= 0) {
    newStr += myStr[i];
    // loop backward!
    i--;
  }
  result.textContent = newStr;
}
