// "use strict";

// let hasDriversLicense = false;
// const passedTest = true;

// if (passedTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!");

// // const interface = "audio";
// // const private = 548;

// // ************* //
// // FUNCTIONS
// function fruitProcessor(apples, oranges) {
//     const juice = `Juices with ${applePieces} with pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// fruitProcessor(5, 0);
// // storing return in const then printing
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// //simply printing return value
// console.log(fruitProcessor(5, 0));
// // different juice
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // ******** //
// // FUNCTION DECLARATIONS vs. EXPRESSIONS
// // declaration
// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// console.log(calcAge1(1991));

// // expression
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// };

// calcAge2(23);

// // ******** //
// // ARROW FUNCTIONS
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
// // example 2
// const yearsUntilRetirement = (birthYear) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// };

// console.log(yearsUntilRetirement(1991));

// // example 3
// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement2(1991, "Jonas"));
// console.log(yearsUntilRetirement2(1980, "Bob"));

// // ******** //
// // Functions Calling Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juices with ${applePieces} with pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// ************ //
// Reviewing FUNCTIONS

// const calcAge = function (year) {
//     return 2024 - year;
// };

// const yearsUntilRetirement3 = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years.`;
// };

// yearsUntilRetirement3(1991, "Jonas");
// yearsUntilRetirement3(1950, "Mike");

// **************** //
// CHALLENGE 1
/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas > avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// **************** //
// INTRO TO ARRAYS

// const friends = ["Michael", "Steven", "Peter"];
// const years1 = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[friends.length - 1]);

// // can alter arrays like this--not primitive data type therefor they are not immutable
// friends[2] = "Jay";
// console.log(friends);
// // cannot alter array like below
// // friends = ['Bob', 'Alice'];
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2024 - 1991, "teacher", friends];
// console.log(jonas);
// // exercise
// const calcAge = function (year) {
//     return 2024 - year;
// };

// const years2 = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//     calcAge(years2[0]),
//     calcAge(years2[1]),
//     calcAge(years2[years2.length - 1]),
// ];
// console.log(ages);

// **************** //
// ARRAY METHODS
// adding to array
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay");
// // below will return 4 since that is length of array store in newLength
// // const newLength = friends.push("Jay");
// // console.log(newLength);
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// // removing from array
// friends.pop();
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift();
// console.log(friends);

// // finding
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// friends.push(23);
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//     console.log("You have a friend name Steven.");
// }

// CHALENGE 2
/* Write your code below. Good luck! 🙂 */
// let tip = 0;
// const bills = [125, 555, 44];
// let tips = [];
// let totals = [];

// function calcTip(bills) {
//     tip = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
//     return tip;
// }

// const tip1 = calcTip(bills[0]);
// tips.push(tip1);
// totals.push(bills[0] + tips[0]);
// const tip2 = calcTip(bills[1]);
// tips.push(tip2);
// totals.push(bills[1] + tips[1]);
// const tip3 = calcTip(bills[2]);
// tips.push(tip3);
// totals.push(bills[2] + tips[2]);
// console.log(totals);
/* BETTER WAY
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// **************** //
// Intro TO OBJECTS

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2024 - 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// **************** //
// DOT VS. BRACKET NOTATION

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2024 - 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//     "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );
// console.log(interestedIn);
// console.log(jonas[interestedIn]);
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request. Try Again.");
// }

// jonas.location = "Portugal";
// jonas["Twitter"] = "@jonasschmedtman";
// console.log(jonas);

// challenge
// print this: Jonas has 3 friends and his friend is called Michael.
// console.log(
//     `${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`
// );

// **************** //
// OBJECT METHODS

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2024 - birthYear;
//     // },
//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2024 - this.birthYear;
//     // },
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },
//     jonasInfo: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year-old ${
//             this.job
//         }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//     },
// };
// // console.log(jonas.calcAge());

// // console.log(jonas.age);
// console.log(jonas.jonasInfo());

// **************** //
// CHALLENGE 3

/* Write your code below. Good luck! 🙂 */

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// };

// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})')`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
// }
// REPLACES IF LOOP
// console.log(
//     john.bmi > mark.bmi
//         ? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//               mark.fullName
//           }'s (${mark.calcBMI()})')`
//         : `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//               john.fullName
//           }'s (${john.calcBMI()})`
// );

// **************** //
// ITERATION---THE FOR LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights - repetion ${rep}!`);
// }

// **************** //
// LOOPING ARRAYS, BREAKING, AND CONTINUING

// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "Teacher",
//     ["Michael", "Peter", "Steven"],
//     true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     // reading from jonasArray
//     console.log(jonasArray[i], typeof jonasArray[i]);
//     // adding to types array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//     age.push(2024 - years[i]);
// }

// console.log(age);

// // continue
// console.log("!!! STRINGS ONLY !!!");
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== "string") continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// // break
// console.log("!!! END AT FIRST NUMBER !!!");
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === "number") break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// **************** //
// LOOPING BACKWARDS AND NESTED LOOPS

// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "Teacher",
//     ["Michael", "Peter", "Steven"],
//     true,
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`---Starting Exercise ${exercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Lifting repetitions = ${rep}`);
//     }
// }

// **************** //
// THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting repetition ${rep}.`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Weightlifting rep ${rep}.`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log("Loop is about to end.");
//     }
// }

// **************** //
// CHALLENGE #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let x = 0; x < bills.length; x++) {
    tips.push(calcTip(bills[x]));
    totals.push(bills[x] + tips[x]);
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    // console.log(avg);
    return avg;
}

calcAverage(totals);
