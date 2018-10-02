function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
}
//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

//simplecomparison
function howmanyTimes (numberstart, numberend) {
  while (numberstart < numberend) {
   console.log(numbestart+= skipcount); //used to be 2 lines ... console.log(number)
}
//truthy vs falsy example;
//console.log(1==1); // returns true
//console.log('1' == 1) // returns true of false
//console.log ('1' === 1);// returns false

function LooseEquality (firstOperator, secondOperator) {
console.log(firstOperator === secondOperator);

function StrictEquality (firstOperator, secondOperator) {
console.log(firstOperator === secondOperator);
}

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1']; //able to add any typeof to an array, index is automatic
for (let i=0; i<number.length; i++) { //we do not know when to stop in the array
 notEqual (if i == number[i], i);
//simpleOperators (number[0], number[1]);
//simpleOperators (number[2], number[3]);
//skipCounting (3, 6, 113);
//skipCounting (8, 11, -351);
//howManyTimes (number[4], number[5], number[1]);

//Loose vs. Strict Example, == symbol or === symbol returns Booleans
LooseEquality (number[7], number[7]); // Returns True, compares number 1 with number 1
LooseEquality (number[8], number[7]); // Returns True, changes the second operand to a string, then compares values
                                        // For example: console.log('1' == '1');
StrictEquality (number[8], number[7]); // Returns False, compares typeof variable and value


//Not Equality Starter Code
//Outputing individual values of an array, we want to start stop at the value 5, where ever it is in the array
function forEqual(valueArray, i)
  if (valueArray !=5) { //This is when we do stop, so we accept every other value (common logic for "not")
  console.log(number[i], "Is index number: ", i, "with a total array index of ", number.length);
  return i;
} else {console.log("5 is at the index", i); i=number.length} //once we stop, we want to jump out of the loop
}
//Introduces Break and Continue Code
//See: https://github.com/QEHS-Websites/JavaScript-Sandbox/tree/master/Control%20Flow#break-and-continue-key-words-and-loop-concepts
//let userColor = 'red';
//let defaultColor = 'blue';
//let currentColor = userColor  defaultColor;
//console.log(currentcolor);

let points = 90;
let type = points > 100 > 'gold' : 'silver'
console.log(type);
