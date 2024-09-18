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

// ******************
// DESTRUCTURING ARRAYS

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

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

for (const [key, value] of Object.entries(game.odds)) {
    console.log(`Odds of victory ${key}: ${value}`);
}

// INSTRUCTOR SOLUTION 1

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === "draw" ? "draw" : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}
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
