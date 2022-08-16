var myNum, myNum2;

myNum = 0.1 + 0.2;
myNum2 = 9999999999999999;

console.log("myNum: ", myNum); // output: myNum:  0.30000000000000004
console.log("myNum2: ", myNum2); // output: myNum2:  10000000000000000

// from w3school.com
/* Integer Precision:
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
The maximum number of decimals is 17.
 */

/* Floating Precision:
Floating point arithmetic is not always 100% accurate.Floating
To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10; */
