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


/* 2.12 Functions & If / Else */

var sleepCheck = function(numHours) {
    if (numHours >= 8)
        return "You're getting plenty of sleep! Maybe even too much!";
    
    else (numHours < 8)
        return "Get some more shut eye!";
}
sleepCheck(10)
sleepCheck(5)
sleepCheck(8)




/* Build Rock Paper Scissors */
//Good old rock. Nothing beats rock.
// ohh, typical bart. Always picks rock.

var userChoice = prompt("Do you choose rock, paper, or scissors?")
var computerChoice = Math.random();

	if (computerChoice < .34) {
		computerChoice = "rock"
	} else if (computerChoice <= .67) {
		computerChoice = "paper"
	} else {
		computerChoice = "scissors";
	}
console.log ("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "The result is a tie!"
	} if (choice2 == "scissors") {
		return "rock wins"
	} else if (choice1 == "paper") {
		return "paper wins"
	}
}


/* 3.1 Why use for loops? */
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


/* 3.2 First for Loop */
for(var counter = 1; counter < 11; counter++) {
	console.log(counter)
}


/* 3.3 Starting the foor loop */
for (var i = 5; i < 11; i++) {
	console.log(i)
}

/* 3.4 Ending the for loop */
for (var i = 4; i <=23; i++) {
	console.log(i)
}

/* 3.5 Controlling the for loop */
for (var i = 5; i <=50; i+=5) {
	console.log(i);
}

/* 3.6 How does it work? */
for (var i = 8; i <=120; i+=12) {
	console.log(i)
}

/* 3.7 PRactice counting down */ {
	for (var i = 10; i >= 10; i--)
		console.log(i)
}

/* 3.8 Last pratice for loop */
for (i = 100; i > 0; i -= 5) {
	console.log(i)
}

/* 3.9 Meet arrays */
var junk = ["garbage", "trash", 1, 3];
console.log(junk)

/* 3.10 Array Positions */
var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3])

/* 3.11 Loops and Arrays I */
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Amsterdam"]
for (var i = 0; i < cities.length; i++){
	console.log("I would like to viist " + cities[i])
}


/* 3.12 Loops and Arrays II */
var names = ["steven", "jacob", "brent", "jack", "john"];

for (var i = 0; i < names.length; i++) {
	console.log("I know someone called " + names[i])
}


/* Search Text for your name */

var text = "Kyle, I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate, Kyle. All those moments will be lost in time, like tears in rain. Time to die Kyle"

var myName = "Kyle"

var hits = []

for (var i = 0; i < text.length; i++) {
	if (text[i] === "K") {
		for (var j = i; j < (myName.length + i); j++)
			hits.push(text[j])
	}
}



/* 4.2 While Syntax */

var understand = true;

while (understand === true) {
	console.log("I'm learing while loops!")
	understand = false;
}


/* 4.3 A Fellow of Inifinite Loops */

understand = true;

while(understand){
	console.log("I'm learning while loops!");
    understand = false;	
}

/* 4.4 Brevity is the soul of programming */

var bool = true;

while (bool) {
	console.log("Less is more!")
	bool = false;
}

/* 4.5 Pratice makes perfect */

var loop = function() {
	var i = 0;
	while (i < 3) {
		console.log("I'm looping!");
		i++
	}
}
loop();

/* 4.6 Solo Flight */

var i = true;
var soloLoop = function() {
	while (i === true) {
		console.log("Looped Once!")
		i = false;
	}
}
soloLoop();

/* 4.8 When to 'while' and when to 'for' */

for (var count = 0; count < 10; count++) {
	console.log(count)
}

var count = 0;
while (count < 10) {
	console.log(count)
	count++
}


/* 4.9 The 'do' / 'while' loop */

var loopCondition = false;
do {
	console.log("I'm gonna stop looping cause my condition is " + loopCondition + "!")
	} while (loopCondition)
}


/* To learn it, you gotta do it */

var count = 1;

var getToDaChoppa = function() {
	do {
		console.log("GET DOWN")
		count ++
	} while (count < 20)
}

getToDaChoppa();

/* 4.11 Review */
for (var count = 1; count < 2; count ++) {
	console.log("Hello World")
}

do {
	console.log("Hello World")
	count++
} while (count < 2);


/* Dragon Slayer */

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
	slaying = false;

	if(youHit === true) {
		console.log("You hit the dragon!")
		totalDamage += damageThisRound;

		if(totalDamage >= 4) {
			console.log("The Dragon died")
			slaying = false;
		} else {
			youHit;
		}

	} else {
		console.log("You dead")
		slaying = false;
	}
}




/* 5.1 If/Else */

var isEven = function(number) {
	if (number % 2 === 0){
		return true;
	} else {
		return false;
	}
}
isEven(2)


/* 5.2 If / Else If / Else */
var isEven = function(number) {
	if (number % 2 === 0){
		return true;
	} else if (isNaN(number)){
		return "Number Please"
	} else {
		return false;
	}
};
isEven(2)


/* 5.3 For a While */
var studying = true;
var prettyGirl = 8

while(studying) {
	console.log("Pay Attention")
	if (prettyGirl > 8) {
	studying = false
	}
}

/* 5.5 Adding to an existing switch */ {
var color = prompt("What's your favourite primary color?", "Type your favourite color here");

switch(color) {
	case 'red':
		console.log("Red's a good color!");
		break;
	case 'blue':
		console.log("That's my favourite color");
		break;
	case 'yellow':
		console.log("That's a shitty color");
		break;
	default:
		console.log("That's not a primary color dibshit")
}

/* 5.7 More practice with switch */

var answer = prompt("What's your political party?")

switch(answer){
	case 'Liberals':
		console.log("Red - Justin Trudeau")
		break;
	case 'Conservatives':
		console.log("Blue - Maxime Bernier")
		break;
	case 'NDP':
		console.log("Orange - TBD")
		break;
	case 'Green':
		console.log("Green - Theresa May")
		break;
	default:
		console.log("Nah.")
}


/* 5.11 AND */
var hungry = true;
var foodHere = true;

var eat = function() {
	if ( (hungry == true) && (foodHere == true) ) {
		return true;
	} else {
		return false;
	}
};

/* 5.12 OR */
var tired = true;
var bored = false;

var nap = function() {
	if ( (tired == true) || (bored == true) ) {
		return true;
	} else {
		return false;
	}
}


/* 5.13 NOT */
var programming = false;

var happy = function() {
	if (programming == false) {
		return true;
	} else {
		return false;
	}
}


/* Code Your Own Adventure - Trolls */
var dollars = 0;
var cents = 0;
var fat = true;
var outOfShape = true;
var user = prompt("You are walking along a white cobble-stone bridge, a stream trickles underneath. A troll jumps out. Do you: Fight? Pay? Run?").toUpperCase();

switch(user) {
    case 'Fight':
        break;
    case 'Pay':
            if ( (dollars < 1) && (cents < 1) ) {
                console.log("You're broke.")
            } else {
                console.log("You pay the troll")
            }
        break;
    case 'Run':
            if ( (fat === true) || (outOfShape === true) ){
            console.log("fatBoy")
        } else {
            console.log("Look at that stride")
        }
        break;
    default:
}

/* 6.2 Access by offset */
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2])


/* 6.3 Array Properties */
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages.length)


/* 6.4 Iterating Over an Array */
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i = 0; i < languages.length; i++) {
    console.log(languages[i])
    }

/* 6.5 Heterogeneous Arrays */
var myArray = [42, true, 'book']


/* 6.6 Array of Arrays */
var newArray = [[11,12,13],[21,22,23],[31,32,33]]


/* 6.7 Jagged Arrays */
var jagged = [[11,12,13],[21,22],[31]]


/* 6.10 Objects */
var me = {
    name: 'Kyle',
    age: 27,
}

/* 6.11 Creating a new object */
var myObj = new Object();
myObj.name = 'Kyle'
myObj.age = 27

/* 6.12 Practice makes perfect */
var object1 = new Object();
var object2 = new Object();
var object3 = {};

object1.name = "kyle"
object2.name = "steve"
object3.name = "mike"

/* 6.14 Heterogeneous Arrays */
var myArray = [12, false, 'book', {}];


/* 6.15 Multidemnsional Arrays */
var newArray = [ [1,2],['shoe'],[{}] ];


/* Contact List */
var friends = {
	bill: {
		firstName: "bill",
		lastName: "gates",
		number: 2156888144,
		address: ["USA"]
	},
	steve: {
		firstName: "steve",
		lastName: "jobs",
		number: 2156444596,
		address: ["USA"],
	},
};

var search = function(name) {
	for (var firstName in friends) {
		if (friends.steve.firstName === "steve") {
			console.log(friends.steve);
			return friends.steve;
			} else {
			console.log("didnt find a name");
			}
		}
};


/* 7.1 We've come a long, long */

var answer = true;


/* 7.2 Through the hard times... */
var answer = multiplesOfEight[5] % 8 !== 0;



/* 7.3 ...And the good! */
for (var i = 1; i < 21; i++) {
    if (( i % 3 === 0 ) && ( i % 5 === 0)) {
        console.log("FizzBuzz")
    } else if ( i % 5 === 0 ) {
        console.log("Buzz")
    } else if ( i % 3 === 0 )  {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}



/* 7.4 I have to celebrate you baby */
var getReview = function(movie) {
	switch(movie){
		case 'Toy Story 2':
			return('Great Story. Mean prospector.')
			break;

		case 'Finding Nemo':
			return('Coll animation, and funny turtles')
			break;

		case 'The Lion King':
			return('Great songs.')
			break;

		default:
	}
}

getReview('Toy Story 2')


/* 7.6 Intro */
var bob = {};


/* 7.7 Properties */
var me = {
	age: 27.
	country: "Canada"
};

/* 7.8 Accessing Properties */
var name2 = susan.name;
var age2 = susan.age;

/* 7.9 Accessing Properties part 2 */
var weight = dog['weight'];
var age = dog['age'];

/* 7.10 Another Way to Create */
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;

/* 7.11 Putting it all together */
var snoopy = {
    species: 'beagle',
    age: 10
};

var buddy = new Object();
buddy.species = 'golden retriever';
buddy.age = 5

/* 7.12 More Practice Making Objects */
var bicycle = {
    speed: 0,
    gear: 1,
    frame_material: 'carbon fiber'
};


/* 7.13 Function Review */
var multiply = function(x, y) {
    return x * y;
}
multiply(7,3)


/* 7.14 So What's a method? */
bob.setAge(20);


/* 7.16 The 'this' keyword */
bob.setAge(50);


/* 7.17 'this' works for everyone */
var susan = new Object();
	susan.age = 25;
	susan.setAge = setAge;

susan.setAge(35);

/* 7.18 Make Your Own Method */
rectangle.setWidth = function (newWidth) {
	this.width = newWidth;
}

rectangle.setWidth(8);
rectangel.setHeight(6);

/* 7.19 More Kinds of Methods */
square.calcArea = function() {
	return this.sideLength * this.sideLength;
}
var a = sqaure.calcArea(5);


/* 7.12 Custom Constructors */
function Person(name,age) {
  this.name = name;
  this.age = age;
}

var george = new Person('George Washington', 275)


/* 7.22 Try It Out */
function Dog(age, color) {
    this.age = age;
    this.color = color;
}

/* 7.23 More Options */ 
var sally = new Person('Sally Bowles', 39);
var holden =  new Person('Holden Caulfield', 16);

/* 7.24 Constructors with Methods */
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
    return ( (this.height * 2) + ( this.width * 2) )  
    }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea(4, 3);
var perimeter = rex.calcPerimeter(4, 3);


/* 7.25 Constructors in Review */
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit('fluffy')
var rabbit2 = new Rabbit('happy')
var rabbit3 = new Rabbit('sleepy')


/* 7.26 Array of Objects */
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person('timmy', 6);

/* 7.27 Loop The Loop */

// Our Person constructor
function Person(name,age) {
this.name = name;
this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person('alice', 40);
family[1] = new Person('bob', 42);
family[2] = new Person('michelle', 8);
family[3] = new Person('timmy', 6);

// loop through our new array
for(var i = 0; i < family.length; i++) {
    console.log(family[i].name)
}



/* 7.28 Passing Objects into functions */
var diff = ageDifference(alice, billy)


/* 7.29 Try It Out */
var olderAge = function(person1, person2) {
 return (person1.age > person2.age) ? person1.age : person2.age;    }



 /* Building an Address Book */
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i])
            }
        }
}

function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
        }
    }

add('kyle', 'flemington', 'fake@email.com', '604-999-9999')

list()