// Get the members of the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, ...)

function getFibMem(...indexes) {
  /**
   * Return an array contains member(s) of Fibonacci sequence in respect to index array
   * @param {array}  indexes index(es) of member(s) of Fibonacci
   * @returns {array}
   */

   function fibSeq(index){
    if(index<=2){
      return 1;
    }
    return fibSeq(index-1) + fibSeq(index-2);
  }

  const members = []
  for (const index of indexes) {
    members.push(fibSeq(index));
  }
  return members;
}