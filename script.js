// Variables
let wins = 0, ties = 0, losses = 0;
// Number of RPS rounds
let rounds = parseInt(prompt("How many rounds of Rock Paper Scissors would you like to play?"), 10);

// Rock Paper Scissors game loop
for (i = 0; i < rounds; i++) {
    let userChoice = prompt("Rock (r), paper (p), or scissors (s)? Please input either r, p, or s.");
    let computerChoice = Math.floor(Math.random() * 3);

    // Assigns r, p, or s to computerChoice depending on the randomized number
    if (computerChoice === 1) {
        computerChoice = "r";
    } else if (computerChoice === 2) {
        computerChoice = "p";
    } else  {
        computerChoice = "s";
    }

    // Compares userChoice and computerChoice
    if (computerChoice === "r" && userChoice === "p") {
        wins += 1;
        alert("You have won! you picked p which beats r");
    } else if (computerChoice === "r" && userChoice === "s") {
        losses += 1;
        alert("You have lost. you picked s which loses to r");
    } else if (computerChoice === "p" && userChoice === "r") {
        losses += 1;
        alert("You have lost. you picked r which loses to p");
    } else if (computerChoice === "p" && userChoice === "s") {
        wins += 1;
        alert("You have won! you picked s which beats p");
    } else if (computerChoice === "s" && userChoice === "r") {
        wins += 1;
        alert("You have won! you picked r which beats s");
    } else if (computerChoice === "s" && userChoice === "p") {
        losses += 1;
        alert("You have lost. you picked p which loses to s");
    } else {
        ties += 1;
        alert("You have tied.");
    }
}

// Alerts user how many wins, ties, and losses they earned
alert("You have won " + wins + " time(s), tied " + ties + " time(s), and lost " + losses + " time(s).");