"use strict";

const books = [
    {
        title: "Algorithms",
        author: ["Robert Sedgewick", "Kevin Wayne"],
        publisher: "Addison-Wesley Professional",
        publicationDate: "2011-03-24",
        edition: 4,
        keywords: [
            "computer science",
            "programming",
            "algorithms",
            "data structures",
            "java",
            "math",
            "software",
            "engineering",
        ],
        pages: 976,
        format: "hardcover",
        ISBN: "9780321573513",
        language: "English",
        programmingLanguage: "Java",
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13,
            },
        },
        highlighted: true,
    },
    {
        title: "Structure and Interpretation of Computer Programs",
        author: [
            "Harold Abelson",
            "Gerald Jay Sussman",
            "Julie Sussman (Contributor)",
        ],
        publisher: "The MIT Press",
        publicationDate: "2022-04-12",
        edition: 2,
        keywords: [
            "computer science",
            "programming",
            "javascript",
            "software",
            "engineering",
        ],
        pages: 640,
        format: "paperback",
        ISBN: "9780262543231",
        language: "English",
        programmingLanguage: "JavaScript",
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0,
            },
        },
        highlighted: true,
    },
    {
        title: "Computer Systems: A Programmer's Perspective",
        author: ["Randal E. Bryant", "David Richard O'Hallaron"],
        publisher: "Prentice Hall",
        publicationDate: "2002-01-01",
        edition: 1,
        keywords: [
            "computer science",
            "computer systems",
            "programming",
            "software",
            "C",
            "engineering",
        ],
        pages: 978,
        format: "hardcover",
        ISBN: "9780130340740",
        language: "English",
        programmingLanguage: "C",
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16,
            },
        },
        highlighted: true,
    },
    {
        title: "Operating System Concepts",
        author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
        publisher: "John Wiley & Sons",
        publicationDate: "2004-12-14",
        edition: 10,
        keywords: [
            "computer science",
            "operating systems",
            "programming",
            "software",
            "C",
            "Java",
            "engineering",
        ],
        pages: 921,
        format: "hardcover",
        ISBN: "9780471694663",
        language: "English",
        programmingLanguage: "C, Java",
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65,
            },
        },
    },
    {
        title: "Engineering Mathematics",
        author: ["K.A. Stroud", "Dexter J. Booth"],
        publisher: "Palgrave",
        publicationDate: "2007-01-01",
        edition: 14,
        keywords: ["mathematics", "engineering"],
        pages: 1288,
        format: "paperback",
        ISBN: "9781403942463",
        language: "English",
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6,
            },
        },
        highlighted: true,
    },
    {
        title: "The Personal MBA: Master the Art of Business",
        author: "Josh Kaufman",
        publisher: "Portfolio",
        publicationDate: "2010-12-30",
        keywords: ["business"],
        pages: 416,
        format: "hardcover",
        ISBN: "9781591843528",
        language: "English",
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090,
            },
        },
    },
    {
        title: "Crafting Interpreters",
        author: "Robert Nystrom",
        publisher: "Genever Benning",
        publicationDate: "2021-07-28",
        keywords: [
            "computer science",
            "compilers",
            "engineering",
            "interpreters",
            "software",
            "engineering",
        ],
        pages: 865,
        format: "paperback",
        ISBN: "9780990582939",
        language: "English",
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0,
            },
        },
    },
    {
        title: "Deep Work: Rules for Focused Success in a Distracted World",
        author: "Cal Newport",
        publisher: "Grand Central Publishing",
        publicationDate: "2016-01-05",
        edition: 1,
        keywords: ["work", "focus", "personal development", "business"],
        pages: 296,
        format: "hardcover",
        ISBN: "9781455586691",
        language: "English",
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808,
            },
        },
        highlighted: true,
    },
];
// *************************
// CODING CHALLENGE 4

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀 */

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//     const text = document.querySelector("textarea").value;
//     const rows = text.split("\n");

//     for (const row of rows) {
//         const [first, second] = row.toLowerCase().trim().split("_");
//         const ouptut = `${first}${second.replace(
//             second[0],
//             second[0].toUpperCase()
//         )}`;
//         console.log(ouptut);
//     }
// });

// *************************
// WORKING WITH STRINGS--PART 3

/* Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings). */
// const bookCategories =
//     "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

// function logBookCategories(bookInfo) {
//     const bookArr = bookInfo.split(";");
//     for (const cat in bookArr) {
//         console.log(bookArr[cat]);
//     }
// }

// logBookCategories(bookCategories);

/* Now, the opposite. Each book from the books array has the keywords property.

Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon. */

// function getKeywordsAsString(books) {
//     const keywords = [];
//     for (const book of books) {
//         keywords.push(...book.keywords);
//     }
//     const uniqueKeywords = [...new Set(keywords)];
//     console.log(uniqueKeywords.join(";"));
// }

// getKeywordsAsString(books);

/* Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

Use the padEnd method. */

// const bookChapters = [
//     ["The Basics", 14],
//     ["Sorting", 254],
//     ["Searching", 372],
//     ["Graphs", 526],
//     ["Strings", 706],
// ];

// function logBookChapters(chapters) {
//     for (const [chapter, pages] of chapters) {
//         console.log(chapter.padEnd(20, "_") + " " + pages);
//     }
// }

// logBookChapters(bookChapters);

// *************************
// WORKING WITH STRINGS--PART 2
/* Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).
You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces. */
// function normalizeAuthorName(name) {
//     const authorOnly = name.trim();
//     const lowerName = authorOnly.toLowerCase();
//     const nameOnly = lowerName.slice(0, lowerName.lastIndexOf(" "));
//     const spaceIndex = nameOnly.lastIndexOf(" ");
//     const firstNameCorrect =
//         nameOnly[0].toUpperCase() + nameOnly.slice(1, spaceIndex);
//     const lastNameCorrect =
//         nameOnly[spaceIndex + 1].toUpperCase() + nameOnly.slice(spaceIndex + 2);
//     console.log(firstNameCorrect + " " + lastNameCorrect);
// }

// normalizeAuthorName("  JuliE sussMan (Contributor)");

/* Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable. */

// console.log(books[1].title);
// const newBookTitle = books[1].title.replace("Programs", "Software");
// console.log(newBookTitle);

/* Write a function called logBookTheme that takes book's title (string), and logs to the console:
"This book is about computers" if the title starts with the word "computer",
"This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,
and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating". */

// function logBookTheme(titleString) {
//     function logBookTheme(title) {
//         title = title.toLowerCase();

//         if (title.startsWith("computer")) {
//             console.log("This book is about computers");
//         } else if (
//             title.includes("algorithms") &&
//             title.includes("structures")
//         ) {
//             console.log("This book is about algorithms and data structures");
//         } else if (
//             (title.endsWith("system") || title.endsWith("systems")) &&
//             !title.includes("operating")
//         ) {
//             console.log(
//                 "This book is about some systems, but definitely not about operating systems"
//             );
//         }
//     }
// }

// *************************
// WORKING WITH STRINGS--PART 1

/* Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters. */

// console.log(
//     books[0].ISBN["6"],
//     books[0].ISBN["4"],
//     books[0].ISBN["9"],
//     books[0].ISBN[8]
// );

/* Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console. */

// const quote =
//     "A computer once beat me at chess, but it was no match for me at kick boxing";
// console.log(quote.indexOf("chess"));

/* Extract the word "boxing" from the same quote string, and log it to the console. */

// const boxingSection = quote.slice(quote.lastIndexOf(" ") + 1);
// console.log(boxingSection);

/* Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string. */

// function isContributor(authorName) {
//     if (authorName.lastIndexOf("(Contributor") !== -1) console.log(true);
//     else console.log(false);
// }

// isContributor("Julie Sussman (Contributor)");
// isContributor("Julie Sussman (Contr)");

// *************************
// CODING CHALLENGE #3

// const gameEvents = new Map([
//     [17, "⚽ GOAL"],
//     [36, "🔁 Substitution"],
//     [47, "⚽ GOAL"],
//     [61, "🔁 Substitution"],
//     [64, "🔶 Yellow card"],
//     [69, "🔴 Red card"],
//     [70, "🔁 Substitution"],
//     [72, "🔁 Substitution"],
//     [76, "⚽ GOAL"],
//     [80, "⚽ GOAL"],
//     [92, "🔶 Yellow card"],
// ]);

/* Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates) */

// const events = [...new Set(gameEvents.values())];
// console.log(events);

/* 2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log. */

// gameEvents.delete(64);
// console.log(gameEvents);

/* 3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes) */

// console.log(gameEvents.size);
// console.log(
//     `An event happened on average every ${Math.round(
//         90 / gameEvents.size
//     )} minutes.`
// );

/* 4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

// for (const [key, value] of gameEvents) {
//     key <= 45
//         ? console.log(`[FIRST HALF] ${key}: ${value}`)
//         : console.log(`[SECOND HALF] ${key}: ${value}`);
// }

// *************************
// MAPS ITERATION

/* Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable. */

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

/* Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values. */

// for (const [key, value] of firstBookMap) {
//     if (typeof value === "number") {
//         console.log(key);
//     } else continue;
// }

// *************************
// MAPS FUNDAMENTALS

/* Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data: */

// const bookMap = new Map([
//     ["title", "Clean Code"],
//     ["author", "Robert C. Martin"],
// ]);

// console.log(bookMap);

/* Set a new key in bookMap called pages, and assign it with a number 464. */

// bookMap.set("pages", 464);
// console.log(bookMap);

/* Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}". */

// console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

/* Get the size of bookMap, and log it to the console. */
// console.log(bookMap.size);

/* Check if bookMap has the author key. and if so, log "The author of the book is known" to the console. */

// bookMap.has("authors")
//     ? console.log("The author of the book is known")
//     : console.log(false);
// if (bookMap.has('author')) console.log('The author is known');

// *************************
/* https://github.com/joinpursuit/web-curriculum/blob/master/lessons/es6/spread-operator/spread-operator-practice-exercises.md */

/* Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array. */
/*   **************** */

/* Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares. */
/*  **************  */

/* Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument. */

// function sumEveryOther(...args) {
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         if (i % 2 === 0) {
//             sum += args[i];
//         } else continue;
//     }

//     console.log(sum);
// }

// sumEveryOther(5, 6, 3, 4, 1);
// sumEveryOther(10, 2, 11);

/* Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments. */

// function onlyUniques(...args) {
//     let uniqueSet = new Set([...args]);
//     let uniqueArr = [...uniqueSet];
//     console.log(uniqueArr);
//     return uniqueArr;
// }

// onlyUniques("cat", "cat", "dog", "pig");
// onlyUniques(1, 4, 7, 1, 2, 7, 4);

/* Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator). */

// function combineTwoArrays([...arr1], [...arr2]) {
//     const finalArray = [...arr1, ...arr2];
//     console.log(finalArray);
//     return finalArray;
// }

// combineTwoArrays([3, 4], [3, 4]);

/* Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers. */

// function addOnlyNums(...args) {
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] === "string") {
//             continue;
//         } else sum += args[i];
//     }
//     console.log(sum);
// }

// addOnlyNums(1, "cat", 3, 4);

//  *** Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
// function addArgs(...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     console.log(sum);
// }

// addArgs(5, 7, 9);

/* - Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in */

// function countTheArgs(...args) {
//     console.log(args.length);
//     return args.length;
// }

// countTheArgs("cat", "dog");
// countTheArgs("cat", "dog", "frog", "bear");

// ******************
// DESTRUCTURING ARRAYS

/* Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...]. */
// const allKeywords = [];
// for (const book of books) {
//     allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);
// /* The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable. */
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);
// /* Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'. */
// uniqueKeywords.add("coding");
// uniqueKeywords.add("science");
// console.log(uniqueKeywords);
// /* Delete 'business' from the uniqueKeywords set. */
// uniqueKeywords.delete("business");
// console.log(uniqueKeywords);
// /* Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable. */
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);
// /* Delete all items from the uniqueKeywords set. */
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// ******************
// DESTRUCTURING ARRAYS

// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussia Dortmund",
//     players: [
//         [
//             "Neuer",
//             "Pavard",
//             "Martinez",
//             "Alaba",
//             "Davies",
//             "Kimmich",
//             "Goretzka",
//             "Coman",
//             "Muller",
//             "Gnarby",
//             "Lewandowski",
//         ],
//         [
//             "Burki",
//             "Schulz",
//             "Hummels",
//             "Akanji",
//             "Hakimi",
//             "Weigl",
//             "Witsel",
//             "Hazard",
//             "Brandt",
//             "Sancho",
//             "Gotze",
//         ],
//     ],
//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 1.33,
//         draw: 3.25,
//         team2: 6.5,
//     },
// };

/* Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/
// // MY SOLUTION
// for (let [goalIndex, goalScorer] of Object.entries(game.scored)) {
//     goalIndex++;
//     console.log(`Goal ${goalIndex}: ${goalScorer}`);
// }
// // INSTRUCTOR SOLUTION
// for (const [index, player] of game.scored.entries()) {
//     console.log(`Goal ${index + 1}: ${player}`);
// }

/*
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
*/
// MY SOLUTION

// let sumOdds = 0;
// let numOfOdds = 0;

// for (const outcome of Object.values(game.odds)) {
//     sumOdds += outcome;
//     numOfOdds++;
// }
// const avgOfOdds = (sumOdds / numOfOdds).toFixed(2);
// console.log(avgOfOdds);

// INSTRUCTOR SOLUTION 1
// let average = 0;

// for (const odd of Object.values(game.odds)) {
//     average += odd;
// }
// average /= Object.values(game.odds).length;
// console.log(average);

// INSTRUCTOR SOLUTION 1 REFACTOR

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//     average += odd;
// }
// average /= odds.length;
// console.log(average);

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
*/
// MY SOLUTION **incomplete

// for (const [key, value] of Object.entries(game.odds)) {
//     console.log(`Odds of victory ${key}: ${value}`);
// }

// INSTRUCTOR SOLUTION 1

// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === "draw" ? "draw" : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr}: ${odd}`);
// }

/*
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

// ******************
// DESTRUCTURING ARRAYS

// Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);
// Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;
// console.log(thirdBook);
/*Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584. */
// const ratings = [
//     ["rating", 4.19],
//     ["ratingsCount", 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);
/* Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0. */
// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//     ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// ******************
// DESTRUCTURING OBJECTS

//Destructure first book object from the books array into variables called title, author and ISBN.
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);
/* Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property. */
// const { keywords: tags } = books[0];
// console.log(tags);
/* The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'. */
// const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language, programmingLanguage);
/* Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array. */
// let bookTitle = "unknown";
// let bookAuthor = "unknown";
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);
/* Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.
Please do most of the work on the left side of the assignment operator: const ... = books[0]; */
// const {
//     thirdParty: {
//         goodreads: { rating: bookRating },
//     },
// } = books[0];
// console.log(bookRating);
/* Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'. */
// function printBookInfo({
//     title = "unknown",
//     author = "unknown",
//     year = "year unknown",
// }) {
//     console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({
//     title: "Algorithms",
//     author: "Robert Sedgewick",
//     year: "2011",
// });

// printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });

// *************
// THE SPREAD OPERATOR

/* Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).*/

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

/* Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space. */

// function spellWord(str) {
//     console.log(...str);
// }

// spellWord("JavaScript");

// *************
// REST PATTERN & PARAMETERS

/* Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array). */
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);
/* Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable. */
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);
/* Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors". */
// function printBookAuthorsCount(title, ...authors) {
//     console.log(`The book "${title}" has ${authors.length} authors`);
// }
// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

// *************
// SHORT CIRCUITING (&& and ||)

/* Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

Use short-circuiting. */
// function hasExamplesInJava(book) {
//     console.log(book.programmingLanguage === "Java" || "no data available");
// }

// hasExamplesInJava(books[0]);

/* Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting. */
// for (let i = 0; i < books.length; i++) {
//     books[i].onlineContent &&
//         console.log(`"${books[i].title}" provides online content.`);
// }

// *************
// NULLISH COALESCING OPERATOR (??)

/* There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content. */

// for (let i = 0; i < books.length; i++) {
//     books[i].onlineContent ??
//         console.log(
//             `"${books[i].title}" provides no data about its online content.`
//         );
// }

// *************
// LOGICAL ASSIGNMENTS OPERATORS

/* Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators. */
// for (let i = 0; i < books.length; i++) {
//     books[i].edition ||= 1;
// }
// console.log(books[i].edition);

/* Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

Use the &&= operator (tip: you may also need the ! operator) */
// for (let i = 0; i < books.length; i++) {
//     books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books);

// *************
// CODING CHALLENGE #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussia Dortmund",
//     players: [
//         [
//             "Neuer",
//             "Pavard",
//             "Martinez",
//             "Alaba",
//             "Davies",
//             "Kimmich",
//             "Goretzka",
//             "Coman",
//             "Muller",
//             "Gnarby",
//             "Lewandowski",
//         ],
//         [
//             "Burki",
//             "Schulz",
//             "Hummels",
//             "Akanji",
//             "Hakimi",
//             "Weigl",
//             "Witsel",
//             "Hazard",
//             "Brandt",
//             "Sancho",
//             "Gotze",
//         ],
//     ],
//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 1.33,
//         draw: 3.25,
//         team2: 6.5,
//     },
// };

// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// // 5
// const {
//     odds: { team1, draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // 6
// function printGoals(...players) {
//     console.log(`${players.length} goals scored by ${players}`);
// }

// printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");
// printGoals("Lewandowski", "Gnarby");
// // 7
// team1 < team2 && console.log("Team 1 is likely to win");
// team1 > team2 && console.log("Team 2 is likely to win");

// *************
// LOOPING ARRAYS: THE FOR-OF LOOP

/* Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects. */
// let pageSum = 0;
// for (let book of books) {
//     pageSum += book.pages;
//     console.log(pageSum);
// }

/* Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays). */
// const allAuthors = [];
// for (const book of books) {
//     if (typeof book.author === "string") {
//         allAuthors.push(book.author);
//     } else {
//         for (const author of book.author) {
//             allAuthors.push(author);
//         }
//     }
// }
// console.log(allAuthors);
/* Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0. */
// for (const [index, element] of allAuthors.entries()) {
//     console.log(`${index + 1}. ${element}`);
//}

// *************
// ENHACED OBJECT LITERALS

/* Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already. */
// const bookData = [
//     ["title", "Computer Networking: A Top-Down Approach"],
//     ["author", ["James F. Kurose", "Keith W. Ross"]],
//     ["publisher", "Addison Wesley"],
// ];

// const newBook = {
//     [bookData[0][0]]: bookData[0][1],
//     [bookData[1][0]]: bookData[1][1],
//     [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);
/* Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way. */
// const pages = 880;

// const newBook2 = {
//     title: "The C Programming Language",
//     author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
//     pages,
// };
// console.log(newBook2);

// *************
// OPTIONAL CHAINING

/* Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that. */
// function getFirstKeyword(books) {
//     console.log(books.keywords?.[0]);
//     return books.keywords?.[0];
// }
// getFirstKeyword(newBook2); // from previous tasks
//getFirstKeyword(books[0]);

// *************
// OPTIONAL CHAINING

/* Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

In the end, the entries array should be filled with arrays containing keys: */

// const entries = [];
// for (const keyword of Object.keys(books[0].thirdParty.goodreads)) {
//     entries.push([keyword]);
// }
// console.log(entries);

/* The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

Push each value to the appropriate inner array in the entries array (use index from entries()). */

// for (const [index, value] of Object.values(
//     books[0].thirdParty.goodreads
// ).entries()) {
//     entries[index].push(value);
// }

/* Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2. */
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
/* Log the entries and entries2 variables to the console, and compare them. They should look the same. */
// console.log(entries);
// console.log(entries2);
