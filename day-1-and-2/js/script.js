// console.log("Hello World!");

// /* STRINGS
//  " " = double quotes
//  ' ' = single quotes
//  ` ` = backticks
// */

// // VARIABLE ASSIGNMENTS
// // const - constant variable value; it will not change, and get's upset when you do!
// // const ssn = '1111'; 
// // ssn = '000'; // Don't do - it won't work!
// // console.log(`Your SSN # is: ${ssn}`);

// // let - is the new var
// // var firstName = "Jacque";
// // firstName = "Jacqueline";

// // firstName = 'Marc';
// // function greeting() {
// //     let firstName = "Bob";
// //     console.log(firstName);
// // }
// // console.log(firstName);
// // greeting();
// // let firstName = "Marnee";
// // const greetingHeading = `Welcome, ${firstName}`;

// // document.getElementById("greeting").innerHTML = greetingHeading;

// // const h1 = `<h1>Welcome, ${firstName}<h1`;
// // let sectionHeading = "Hello World!";
// // const section = `

// // <section>
// //     <h2>${sectionHeading}</h2>
// //     <p>lorem</p>
// // </section>
// // `;
// // document.body.innerHTML = section;

// let firstName = "Jacque";
// let lastName = "Solano";
// // let fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// // 

// // Numbers can range from this -9007199254740991 to 9007199254740991, NaN, Infinity
// let score = 10;
// let finalScore = 10 + 10;
// let finalScore2 = "10" + "10"; // This will not add since it isn't a number, it will concat as string

// console.log(finalScore, finalScore2);


// // BOOLEAN - True and false, stop go, (1, 0)

// // let power = false;

// // console.log( power ? "On" : "Off");

// // undefined - value is not set; placeholder for value
// // let mystery;
// // console.log(mystery);

// // null - nothing

// // let nothing = null;

// // console.log(nothing);

// // Big Int - very huge number, and you add an "n" to the value;

// // let randomNumber = 22;
// // let randomBigIntNumber = 22n;

// //typeof - checks value to see if its a primitive or complex type

// // string, number, undefined, boolean

// // console.log(typeof(power))

// // Symbol - unique value;

// // Symbol("hello there");
// // Symbol("hello world");
// // Symbol(3);

// // Complex
// // arrays
// // objects

// ARRAY - a list primitives
// cars - "honda", "jeep", "mozarati", "bmw"
// hobbies - "sewing", "crochet", "gaming", "baking", "cooking"
// randomArray - "sewing", 23, true, 

let hobbies = ["sewing", "crochet", "gaming", "baking", "cooking"];

console.log(typeof(hobbies), hobbies[4]);

// object - allows you to structure an "object" to describe items

const movie = {
    title: "Pacific Rim",
    yearReleased: 2014,
    imdbRating: 4,
    castMembers: ["", ""]
}



