function changeColor() {
  const rangeBars = document.getElementsByClassName("range-bar");
  const circle = document.getElementById("box");
  let red = rangeBars[0].value;
  let green = rangeBars[1].value;
  let blue = rangeBars[2].value;
  circle.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

// Add changeColor to DOM
const myForm = document.getElementById("range-bars");
myForm.addEventListener("change", changeColor);
