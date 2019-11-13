//Here we need a initial array of words for the computer to choose from.
var words = ["awkward", "bagpipes", "fjord", "gypsy", "memento", "oxygen",  "rogue", "squawk", "yacht", "zigzag"];
var randomWord;
//create variables for wins, losses, # of guesses, letters guessed, reset
var wins = 0;
var losses = 0;
var numOfGuesses = 15;
var lettersGuessed = [];

function gameSetUp() {
  numOfGuesses = 15;
  randomWord = [Math.floor(Math.random() * words.length)];
}

function resetGame() {
  numOfGuesses = 15;
  lettersGuessed = [];
}

//define keypress
document.onkeypress = function(event) {

}

//Create a for-loop to iterate through the words array
for (var i = 0; i = < words.length; i++) {

}
}