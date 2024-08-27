"use strict";

// Selecting elements--two different ways of getting elements with ID attribute. 2nd may be faster
//    and is easier to gauge intent
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

// Roling Dice Functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        //generate random dice roll 1 to 6
        const dice = Math.trunc(Math.random() * 6) + 1;
        //display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        //check for rolling a 1--if true, switch to next player
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            //switch to other player
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // currentScore = 0;
            // player0El.classList.toggle("player--active");
            // player1El.classList.toggle("player--active");
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        //add current score to total score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        // check if score >= 100 -- if true, finish game
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add("hidden");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            // switch to next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", function () {
    playing = true;
    currentScore = 0;
    diceEl.classList.add("hidden");
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    for (let i = 0; i < scores.length; i++) {
        scores[i] = 0;
        document.getElementById(`score--${i}`).textContent = 0;
        document.getElementById(`current--${i}`).textContent = 0;
        document
            .querySelector(`.player--${i}`)
            .classList.remove("player--winner");
    }
});
