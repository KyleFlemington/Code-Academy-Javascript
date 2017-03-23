/* https://www.codecademy.com/KyleFlemington */

/* 1.1 What is your name  */
"Kyle"

/* 1.2 Discover the length */
"kyle".length


/* 1.3 Basic Math */

5 + 7 

/* 1.4 Numbers and more */

6 * 6

/* 1.5  Error: does not compute! */
rumpelstiltskin

/* 1.6 Editor and comments */

//Using Git to illustrate JS Skills
"cake".length

/* 1.7 What am I Learning? */
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

/* 1.8 Interactive Javascript */
//Notation
confirm("I like cats")


/* 1.9 What is programming? */
prompt("Where are you from?")


/* 1.10 */
"This is Sparta".lenth;


/* 1.11 Data Type III: Booleans */
"I'm coding like a champ".length >= 10

/* 1.12 Using console.log */
console.log(2*5)
console.log("Hello")


/* 1.13 Comparisions */
// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length >  8);
console.log(8*2 == 16);


/* 1.14 Decisions, decisions */
if ("kyle".length <= 7) {
	console.log("True")
};


/* 1.15 Computers are smart */
if ("Steve".length > 100) {
	console.log("Steve! That's not right")
} else {
	console.log("Pretty sneaky Steve")
}

/* 1.16 More Practice with conditionals */
if ("kyle".length == 5) {
  console.log("The condition is true");
} else  {
  console.log("The condition is false");
}

/* 1.17 Computer aren't that smart */

if (10 == 10) {
  console.log("You got a true!");
} else {
  console.log("You got a false!");
}


/* 1.18 Mid-lesson breather */
if (12 / 4 === "Ari".length) {
  confirm("Will this run the first block?");
} else {
  confirm("Or the second block?");
}


/* 1.19 Math */

if ("jon".length * 2 / (2+1) === 2) {
	console.log("The answer makes sense!")
} else {
	console.log("Error Error Error")
}


/* 1.20 Math and the Modulo */
console.log( 14 % 3 );
console.log( 99 % 8 );
console.log( 11 % 3 );


/* 1.21 Modulo and if/else */
if( 4 % 4 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

/* 1.22 Substrings */
"wonderful day".substring(3,7);

/* 1.23 More substring practice */
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));


/* 1.24 Variables */
myAge = 27;
console.log(myAge)


/* 1.25 More Variable Practice */
// Declare a variable on line 3 called
// myCountry and give it a string value.
myCountry = "Canada";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));


/* 1.26 Change Variable Values */
// On line 2, declare a variable myName and give it your name.
var myName = "Kyle"
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = "Ky"
// On line 9, use console.log to print out the myName variable.
console.log(myName);

/* 1.27 Conclusion: Part 1 */
var myColor = "Green";
console.log(myColor.length);


/* 1.28 Conclusion: Part 2*/

if (5 == "kyle".length){
  console.log("false");
} else {
  console.log("I finished my first course!");
}


/* 2.1 Introduction */
var spped = 65;

if (speed > 80) {
	console.log("Slow Down");
} else {
	console.log("Drive Safe")
}


/* 2.2 Introducing Functions*/

var divideByThree = function(number) {
	var val = number / 3
	console.log(val)
};
divideByThree(12);


/* 2.3 Function Syntax */

var greeting = function(name) {
	console.log("Great to see you," + " " + name)
}
greeting("Kyle")


/* 2.4 How does a function work */
var foodDemand = function(food) {
	console.log("I want to eat" + " " + food)
}
foodDemand("steak");

/* 2.5 Tying it all together */

var calculate = function(number){
	var val = number * 10;
	console.log(val);
};

var greeting = function(name) {
	console.log((name));
}
greeting("Kyle");


/* 2.6 Don't Repeat Yourself */

var orangeCost = function(cost) {
	var costOrange = cost * 5;
	console.log(costOrange)
}
orangeCost(5)

/* 2.7 Return Keyword */
var timesTwo = function(number) {
	return number * 2;
}
var newNumber = timesTwo(50) {
	console.log(newNumber)
}


/* 2.8 Functions, return and if / else */

var quarter = function(number){
	return number / 4;
}

if (quarter(36) % 3 === 0) {
	console.log("This statement is true")
} else {
	console.log("This statement is false")
}

/* 2.9 Functions with two parameters */
var perimterBox = function(length, width) {
	return length + length + width + width;
}
perimterBox(3,3)


/* 2.10 Global vs Local Variables */

var my_number = 7 //Global Variable

var twoTimes = function(number) {
	var my_number = number * 2
	console.log("Inside the function my_number is: " +  my_number)
}
twoTimes(7)

console.log("Outside the function my_number is: " + my_number)


/* 2.11 Functions recap */

var nameString = function(Name) {
	return "Hi, I am" + " " + name;
}
console.log(nameString("Kyle"))