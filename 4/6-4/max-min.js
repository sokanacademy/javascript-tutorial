// تمرین درس ششم فصل ۴


function getMax(arr) {
  /**
   * Return max member of arr
   * @param {Array}  arr The array that contains some numbers
   * @returns {number}
   */
  
  let max = -Infinity;
  for (const element of arr) {
    if (element >= max){
      max = element;
    }
  }
  return max;
}

function getMin(arr) {
  /**
   * Return min member of arr
   * @param {Array}  arr The array that contains some numbers
   * @returns {number}
   */
  
  let min = Infinity;
  for (const element of arr) {
    if (element < min){
      min = element;
    }
  }
  return min;
}
