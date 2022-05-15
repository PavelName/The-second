'use strict';
let location1 = 3; 
let location2 = 4;
let location3 = 5;

let quess;
//console.log(quess);
let hits = 0;
let quesses = 0;
let isSink = false;


while (isSink == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
    } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
    alert("HIT!");
    hits = hits + 1;
    if (hits == 3) {
    isSink = true;
    alert("You sank my battleship!");
    }
    } else {
    alert("MISS");
    }
    }
    }
    let stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);
    alert(stats);