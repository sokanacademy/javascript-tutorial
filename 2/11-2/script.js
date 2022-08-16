// First exercise
const arrayOfAnswers = [];
function addToArray(question = "What's your name?") {
  let userAnswer = prompt(question, "Ali");
  arrayOfAnswers.push(userAnswer);
  alert(arrayOfAnswers);
}

/* Second exercise

With this method can no longer change the number of array ElementInternals.
Object.seal(arrayOfAnswers);

This method makes the array uneditable.
Object.freeze(arrayOfAnswers); */
