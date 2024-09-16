"use strict";
// reverse chronological order to keep restaurant object easily visible
// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours,
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // order of args does not have to match their order in object
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is the delicious pasta you ordered with ${ing1}, ${ing2}, and ${ing3}`
        );
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// *************
// OPTIONAL CHAINING
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
for (const day of days) {
    // console.log(day);
    const opening = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${opening}`);
}
// methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");
//arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User empty");
// *************
// ENHANCED OBJECT LITERALS

// *************
// LOOPING ARRAYS: THE FOR-OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // item + index
// for (const item of menu.entries()) {
//     console.log(item);
// }
// // Better presentation of above
// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// // BEST--Using destructuring i=index el=element
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// *************
// LOGICAL ASSIGNMENT OPERATORS

// const rest1 = {
//     name: "Capri",
//     // numGuests: 20,
//     numGuests: 0,
// };

// const rest2 = {
//     name: "La Piazza",
//     owner: "Giovanni Rossi",
// };

// setting default numGuests-if numGuests exists use that property and value.
// If Not, add it to object and set to 10
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// !!!! more concise way using assignment operator (OR assignment operator) !!!!
// Assigns vale to var if var is currently falsy--like rest2.numGuests is
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

// !!!! NULLISH assignment operator !!!!
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// !!!! AND assignment operator !!!!
// rest1.owner = rest1.owner && "anonymous";
// rest2.owner = rest2.owner && "anonymous";
// nothing will happen below since rest1.ownder is falsy
// rest1.owner &&= "anonymous";
// will change to anonymous below since rest2.ownder is truthy
// rest2.owner &&= "anonymous";
// console.log(rest1);
// console.log(rest2);

// *************
// THE NULLISH COALESCING OPERATOR (??)

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// *************
// SHORT CIRCUITING (&& and ||)

// Use ANY value type, return ANY value type, short-circuiting
// console.log("-------OR------");
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // AND--short circuiting
// console.log("-------AND------");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas");
// console.log("Hello" && 23 && null && "Jonas");

// // practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza("mushrooms", "spinach");
// }
// // doing above with short-circuiting
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// *************
// REST PATTERNS & PARAMETERS
// destructuring
// // spread --- right side of assignment operator
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // rest --- left side of assignment operator
// const [a, b, ...others] = [1, 2, 4, 7, 9];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// functions
// function add(...numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// }

// add(2, 3); // 5
// add(5, 3, 7, 2); // 17
// add(8, 2, 5, 3, 2, 1, 4); // 25

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

// restaurant.numGuests = 10;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// *************
// DESTRUCTURING OBJECTS

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// // ASSIGNING NEW NAMES
// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, categories);
// DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// MUTATING VARS
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// NESTED OBJECTS
// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);
// FUNCTIONS
// restaurant.orderDelivery({
//     time: "23:38",
//     address: "Via del Sole, 23",
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: "Via del Sole, 23",
//     starterIndex: 1,
// });
// *************
// DESTRUCTURING ARRAYS

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first2, , second2] = restaurant.categories;
// console.log(first2, second2);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// receive 2 return values from function
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(1, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// setting default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// *************
// THE SPREAD OPERATOR

// let arr = [7, 8, 9];
// let newArr = [1, 2, 3, ...arr];
// console.log(arr, newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);
// shallow copy of array
// const mainMenuCopy = [...restaurant.mainMenu];
// merging arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);

// real world example
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// objects
// const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedIn: 2011 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "New name";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);
