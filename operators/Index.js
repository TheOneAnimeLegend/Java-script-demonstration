function simpleOperators (numberA, numberB){
 let adding = numberA  + numberB;
 let subtract = numberA - numberB;
 let multiply = numberA * numberB;
 let divide = numberA / numberB;
 console. log (adding);
 console. log (subtract);
 console. log (multiply);
 console. log (divide);
}
//skip count by 3 for 5 times starting at 5
function skipcounting (skipcount, times, startingnumber){
 let number = startingnumber, skipCount;
 for (let i=1; i<=5; i++){
   number += skipCount;
   console.log(number);
  }
}
let number = [4, 7, 20, 35];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipcounting (3, 6, 113);
