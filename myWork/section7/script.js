"use strict";

/*************** */
//  SELECTING AND MANIPULATING ELEMENTS

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

/*************** */
//  HANDLING CLICK EVENTS

// document.querySelector(".check").addEventListener("click", function () {
//     const guess = Number(document.querySelector(".guess").value);
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector(".message").textContent = "No Number!";
//     }
// });

/*************** */
//  IMPLEMENTING THE GAME LOGIC

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// REFACTOR---setting message function to replace all other instances
function setMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {
        setMessage("No Number!");
    } else if (guess === randomNumber) {
        // document.querySelector(".message").textContent = "Correct Number!";
        setMessage("Correct Number!");
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        // REFACTOR--If guess is wrong
    } else if (guess !== randomNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            //     guess > randomNumber ? "Too High!" : "Too Low!";
            setMessage(guess > randomNumber ? "Too High!" : "Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent =
            //     "You Lost The Game!";
            setMessage("You Lost The Game!");
            document.querySelector(".score").textContent = 0;
        }
    }
    // } else if (guess > randomNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too high!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent =
    //             "You Lost The Game!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // } else if (guess < randomNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too low!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent =
    //             "You Lost The Game!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document
    .querySelector(".again")
    .addEventListener("click", function resetGame() {
        // Start guessing...
        // 20
        randomNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;

        document.querySelector(".number").textContent = "?";
        // document.querySelector(".message").textContent = "Start guessing...";
        setMessage("Start Guessing!");
        document.querySelector(".score").textContent = score;
        document.querySelector(".guess").value = "";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    });
