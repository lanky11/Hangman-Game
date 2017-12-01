
// Creates an array that lists all the possible words. 
var wordChoices = ["tiger", "nicklaus", "palmer", "mickelson", "spieth", "mcilroy"];

// Possible guessed letter

var validKeys = "abcdefghijklmnopqrstuvwxy".split('');

// Create a variable to hold the number of wins.
var wins = 0;


// Create an empty array to hold incorrect guessed letters.
var incorrectGuessedLetters = [];


// Create a counter and subtracte one each time an incorret guess it given
var guessesRemaining = 10;


// Pick a word from the wordChoices array
var pickedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(pickedWord);


// Break up the word into an array
var pickedWordArray = pickedWord.split("");
console.log(pickedWordArray);


// var that represents the number of dashes for every letter in picked word
var currentWord = [];


// a loop to create a dash to represent each letter in the array
function makedash () {
  for (var i=0; i < pickedWordArray.length; i++) {
    currentWord.push("_")
  }
}

// function to reset the game
function gameReset() {
  var pickedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  guessesRemaining = 10
  incorrectGuessedLetters = []
  
}



document.onkeyup = function(event) {
  
  // listen for the letter that user types
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);

  // check if the guess was valid
  
  if (validKeys.indexOf(userGuess) === -1) {
    alert("Invalid guess.  Please select a letter from a-z")
  } else if ((pickedWordArray.indexOf(userGuess) === -1) && (incorrectGuessedLetters.indexOf(userGuess) === -1)) {
    
  } else {
    
  }
  
  
  
  // if else statement to see if a guessed letter is within the pickedWordArray if its not push it into the incorrectGuessedLetters
  if (pickedWordArray.indexOf(userGuess) === -1) {
    incorrectGuessedLetters.push(userGuess);
    guessesRemaining--;
    // if letter has already been guessed do not push it into the array again
    
  } else {
    // not sure now to replace dash with letter from picked word
  }


  // if guessesRemaining === 0 end game


  // html to inject into html file for wins
  var htmlWins =
    "Wins: " + wins;
    
  // html to inject into html file for current word
  var htmlCurrentWord =
    "Current word: " + pickedWordArray;
    
  // html to inject into html file for guesses remaining
  var htmlGuessesRemaining =
    "Number of Guesses Remaining: " + guessesRemaining;
    
  // html to inject into html file for incorrect guessed letters
  var htmlIncorrectGuessedLetters =
    "Letters Already Guessed: " + incorrectGuessedLetters;

  // Set the inner HTML contents of the differen elements
  document.getElementById("wins").innerHTML = htmlWins;
  document.getElementById("current-word").innerHTML = htmlCurrentWord;
  document.getElementById("guesses-remaining").innerHTML = htmlGuessesRemaining;
  document.getElementById("incorrect-letters").innerHTML = htmlIncorrectGuessedLetters;


};