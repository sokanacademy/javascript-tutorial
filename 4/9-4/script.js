// I grab this function from w3schools

function getRndInteger(min, max) {
  /**
   * Return a random integer between min and max
   * @param {number}  min start number
   * @param {number}  max end number
   * @returns {number}
   */
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(5, 15));
