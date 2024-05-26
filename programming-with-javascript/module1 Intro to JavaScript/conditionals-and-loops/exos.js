// Exercise: Practice conditional statements
/*
Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.
*/
var age = 10;
if(age >= 65) {
    console.log('You get your income from your pension');
} else if(age < 65 && age >= 18) {
    console.log('Each month you get a salary');
} else if(age < 18) {
    console.log('You get an allowance');
} else {
    console.log('The value of the age variable is not numerical');
}

/*
Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.
*/
var day = 'Sunday';
switch(day) {
    case 'Monday':
        console.log('Go to work');
        break;
    case 'Tuesday':
        console.log('Go to the gym');
        break;
    case 'Wednesday':
        console.log('Go to the movies');
        break;
    case 'Thursday':
        console.log('Go to the park');
        break;
    case 'Friday':
        console.log('Go to the beach');
        break;
    case 'Saturday':
        console.log('Go to the mall');
        break;
    case 'Sunday':
        console.log('Stay at home');
        break;
    default:
        console.log('There is no such day');
        break;
}


// Exercise: Repetitive tasks with loops
/*
Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
*/
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('Counting completed!');

/*
Task 2 
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
*/
for (var i = 5; i >= 1; i--) {
    console.log(i);
}
console.log('Countdown finished!');

/*
Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
*/
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log('Counting completed!');

/*
Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
*/
var i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}
console.log('Countdown finished!');

/*
Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
*/
var i = 2018;
while (i <= 2022) {
    console.log(i);
    i++;
}


// Exercise: Working with conditionals and loops
/*
Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.
 */
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log('Gold medal');
    } else if (i == 2) {
        console.log('Silver medal');
    } else if (i == 3) {
        console.log('Bronze medal');
    } else {
        console.log(i);
    }
}

/*
Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.
*/
for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log('Gold medal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i);
            break;
    }
}