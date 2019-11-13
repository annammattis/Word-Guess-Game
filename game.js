//Here we need a initial array of words for the computer to choose from.
var words = ["awkward", "bagpipes", "fjord", "gypsy", "memento", "oxygen",  "rogue", "squawk", "yacht", "zigzag"];
var randomWord;
//create variables for wins, losses, # of guesses, letters guessed, reset
var wins = 0;
var losses = 0;
var numOfGuesses;
var displayWord = [];

function gameSetUp() {
  numOfGuesses = 15;
  randomWord = [Math.floor(Math.random() * words.length)];
  for (var i = 0; i < randomWord.length; i++) {
    displayWord.push('_');
  }
  console.log('randomWord', randomWord);
  console.log('displayWord', displayWord);

  document.getElementById('guessedWord').innerHTML = displayWord.join(' ');
}

// 1. Pick a random word.
// 2. Take the player’s guess.
// 3. Quit the game if the player wants to.
// 4. Check that the player’s guess is a valid letter.
// 5. Keep track of letters the player has guessed.
// 6. Show the player their progress.
// 7. Finish when the player has guessed the word.