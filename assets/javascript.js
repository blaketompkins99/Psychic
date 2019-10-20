var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
"U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = []
var guesses = "";
var computerLetter = "";

function newGame() {
    computerLetter = letters[Math.floor(Math.random(letters) * 26)];
    console.log(computerLetter);
    guessesLeft = 9;
    guessedLetters = []
    guesses = "";
    document.getElementById("winCount").textContent = "Wins: " + wins;
    document.getElementById("lossCount").textContent = "Losses: " + losses;
    document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
    document.getElementById("guesses").textContent = "Your Guesses So Far:";
}

newGame();

document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase();
    for(i=0; i < guessesLeft; i++) {
        if(userGuess === computerLetter){
            wins++;
            newGame();
        } else if(userGuess !== computerLetter && guessedLetters[i] === "_") {
            guessesLeft--;
            document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
            guessedLetters[i] = userGuess;
            guesses += userGuess + " ";
            document.getElementById("guesses").textContent = "Your Guesses So Far: " + guesses;
        } else {
            
        }
    }
}

