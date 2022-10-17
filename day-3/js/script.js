// document.title = "Testing..."

let firstName = "Jacque";
let age = 29;

let lastName; // undefined
lastName = "Solano"; // assigned value

// = assigned value

// += will assign and add to value
age += 2;
firstName += " 2";

// -= will assign a deducted value
// age -= 2;
// *= will assign a multiplied value
// age *= 2;
// /= will assign a divided value
// age /= 3;

// Arithmetic
// + 
let newAge = age + 8;
// let newAge = (age + 8);
// -
newAge = 62 - 5;
// console.log(newAge);
// *
newAge = age * 20;
// console.log(newAge);
// /
newAge = 8 / 4;
// console.log(newAge);
// age = age + 8;

// % (Remainder) - the remaining value after the set two are divided

// newAge = 2 % 4;
// newAge = 2 % 2;

// console.log(age);
// console.log(newAge);
// console.log(firstName);

// DAY 3

let word = "Smeagol";
let sentence = `Welcome home, ${word}!`;
console.log("characters in word: " + word.length);
console.log(sentence);

// startsWith()
// console.log(sentence.startsWith("Welcome")) // true
// console.log(sentence.startsWith("home")) // false
// console.log(sentence.startsWith("home", 8));

// repeat()
console.log("Chicago".repeat(4));

//endsWith()
let sentence2 = "Hello World!";
// console.log(sentence2.endsWith(" World!", 6));

// includes()
// console.log(sentence2.includes("World")); // true
// console.log(sentence2.includes(" ")); // true
console.log(sentence2.includes("He"));
console.log(sentence2.includes("H", 5));  // false
console.log(sentence2.includes("!", 5)); // true

// toUpperCase()
console.log(word.toUpperCase());

// toLowerCase()
console.log(sentence.toLowerCase());

// charAt()
console.log(sentence.charAt(3))

// Alert
// alert("You have 20 unread messages!");

// Confirm
// let question = confirm("Would you like sign up for your car extended warranty?");

// console.log(question);

// Prompt
// let promptRandomNum = prompt("Pick a number from 1 to 10");
// alert(`You chose # ${promptRandomNum}`);
// alert(prompt);

// const promptWhatsYourSign = prompt("What's your zodiac sign?");
let promptRandomNum = prompt("Pick a number from 1 to 8", 1);
const zodiacSigns = ["Cancer", "Aquarius", "Aries", "Capircorn", "Pisces", "Taurus", "Scorpio", "Sagitarius"]; // 8

alert("Your future crush zodiac sign will be: " + zodiacSigns[promptRandomNum]);

