// Arithmetic operators: +, -, *, /, %, **, ++, --, +=, -=, *=, /=, %=
// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Logical operators: &&, ||, !

// console.log(1 + 1);
// console.log(2 - 1);
// console.log(2 * 2);
// console.log(4 / 2);
// console.log(5 % 2);
// console.log(2 ** 3);
// console.log(1 == 1);
// console.log(1 === 1);
// console.log(1 != 2); 
// console.log(1 !== 2); 
// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 >= 2);
// console.log(1 <= 2);
// console.log(true && true);
// console.log(true || false);
// console.log(!true);

// The logical && operator
/* is for example, used to confirm if multiple conditions are true. */
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

// The logical || operator
/* is used to confirm if at least one condition is true. */
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

// The logical ! (not) operator
/* is used to negate a condition. */
var petHungry = true;
console.log("Pet is hungry:", !petHungry);
console.log(petHungry);
petHungry = !petHungry;
console.log(petHungry);

// The modulus operator %
/* is used to find the remainder of a division. */
console.log(5 % 2);

// The equality operator ==
/* is used to checks if two values are equal. */
console.log(1 == 1);

// The strict equality operator ===
/* is used to check if two values are equal and of the same type. */
console.log(1 === "1");

// The inequality operator !=
/* is used to check if two values are not equal. */
console.log(1 != 2);

// The strict inequality operator !==
/* is used to check if two values are not equal and of the same type. */
console.log(1 !== "1");

// Using the + operator on strings and numbers
console.log("inter" + "net");
console.log("note" + "book");
console.log(365 + " days");
console.log(12 + " months");
console.log(1 + "2");

// Addition assignment operator +=
/* is used to add a value to a variable. */
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri);
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);

// The concatenation assignment operator +=
/* is used to concatenate a string to a variable. */
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString);

// operator precedence and associativity
/* is a set of rules that determine the order in which operators are evaluated. */
console.log(1 + 2 * 3);