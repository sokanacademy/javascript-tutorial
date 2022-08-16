// The sum of several numbers (reduce and arrow function)

function sum(...numbers) {
  /**
   * Returns the sum of several numbers
   * @param {number}  numbers numbers
   * @returns {number}
   */

  return numbers.reduce((total, number)=>{return total + number});
}