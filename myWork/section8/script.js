"use strict";

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}. Born in ${birthYear}.`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // creating new var with same name as outer scope's var
//             const firstName = "Steven"; // Will supercede previous firstName in var lookup
//             // Reassigning outer scope's var
//             console.log(output);
//             const str = `Oh, you are a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             output = "NEW OUPUT";
//         }
//         // console.log(add(2, 3)); Only works with strict mode off;
//         console.log(millenial); // Valid--- var is function scoped
//         // console.log(str); Invalid---block scoped
//     }
//     printAge();

//     return age;
// }
// const firstName = "Jeff";
// calcAge(1991);

// ********* //
// HOISTING and TDZ

// variables
// console.log(me); // undefined
// console.log(job); // ReferenceError: cannot access before initialization---in TDZ until init
// console.log(year); // ReferenceError: cannot access before initialization---in TDZ until init

// var me = "Jeff";
// let job = "Cool dude";
// const year = 1991;

// functions

// console.log(addDecl(2, 3));
// console.log(addExpression(2, 3)); // In TDZ---const/let variable---using var would make it 'undefined'
// console.log(addArrow(2, 3)); // In TDZ---const/let variable---using var would make it 'undefined'

// function addDecl(a, b) {
//     return a + b;
// }

// var addExpression = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => {
//     a + b;
// };

// Example

// numProducts would be undefined at this point, due to hoisting, triggering this code
// if (!numProducts) {
//     deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log("All products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// function calcAge(birthYear) {
//     const age = 2024 - birthYear;
//     console.log(age);
//     console.log(this);
// }

// calcAge(1983);

// const calcAgeArrow = (birthYear) => {
//     const age = 2024 - birthYear;
//     console.log(age);
//     console.log(this);
// };

// calcAgeArrow(1980);

// const jeff = {
//     year: 1983,
//     calcAge: function () {
//         console.log(this);
//         console.log(2024 - this.year);
//     },
// };

// jeff.calcAge(1950);

// const otherPerson = {
//     year: 2017,
// };

// otherPerson.calcAge = jeff.calcAge;
// otherPerson.calcAge();

// ********* //
// ARROW FUNCTIONS V REGULAR FUNCTIONS

// const jeff = {
//     firstName: "Jeff",
//     year: 1983,
//     calcAge: function () {
//         console.log(this);
//         console.log(2024 - this.year);

// SOLUTION 1
// const self = this;
// function isMillenial() {
//     console.log(self.year >= 1981 && self.year <= 1996);
// }
// isMillenial();

// SOLUTION 2
//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },
//     // greetArrow: () => console.log(`Hey this is ${this.firstName}`),
//     greet: function () {
//         console.log(`Hey this is ${this.firstName}`);
//     },
// };
// jeff.greet();
// jeff.calcAge();

// ARGUMENTS KEYWORD

// const addExpression = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// addExpression(2, 5);

// ********* //
// PRIMITIVES V. OBJECTS(PRIMITIVES V. REFERENCE TYPES)

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: "Jeff",
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log("Friend: ", friend);
// console.log("Me: ", me);

// ********* //
// PRIMITIVES V. OBJECTS IN PRACTICE

//primitive types
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// reference types
// const jessica = {
//     firstName: "Jessica",
//     lastName: "Williams",
//     age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage: ", jessica);
// console.log("Before marriage: ", marriedJessica);

// copying objects -- shallow copy

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Angela", "Robert", "Jan"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("Steve");
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
