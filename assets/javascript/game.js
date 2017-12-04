// Variables
//=======================================================================================

// Creates an array that lists all the possible words. 
var wordChoices = ["tiger", "nicklaus", "palmer", "mickelson", "spieth", "mcilroy"];
var currentWord = "";
var lettersInWord = [];
var numberLetters = 0;

// Possible guessed letter
var validKeys = "abcdefghijklmnopqrstuvwxy".split('');

// Create a variables for wins
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

// Create an empty array to hold incorrect guessed letters.
var incorrectGuesses = [];

// Create a counter and subtracte one each time an incorret guess it given


// number of letters in the word


// Pick a word from the wordChoices array
var pickedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(pickedWord);


// Break up the word into an array
var pickedWordArray = pickedWord.split("");
console.log(pickedWordArray);



//Functions
//=======================================================================================

// a loop to create a dash to represent each letter in the array


// function to reset the game
function gameReset() {
  var pickedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  guessesRemaining = 9
  incorrectGuesses = []
  
}


//KeyUp Action
//=======================================================================================

document.onkeyup = function(event) {
  
  // listen for the letter that user types
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);

  // check if the guess was valid
  
  if (validKeys.indexOf(userGuess) === -1) {
    alert("Invalid guess.  Please select a letter from a-z")
  } else if ((pickedWordArray.indexOf(userGuess) === -1) && (incorrectGuesses.indexOf(userGuess) === -1)) {
    
  } else {
    
  }
  
  
  
  // if else statement to see if a guessed letter is within the pickedWordArray if its not push it into the incorrectGuesses
  if (pickedWordArray.indexOf(userGuess) === -1) {
    incorrectGuesses.push(userGuess);
    guessesRemaining--;
    // if letter has already been guessed do not push it into the array again
    
  } else {
    // not sure now to replace dash with letter from picked word
  }


  // if guessesRemaining === 0 end game


  // Set the inner HTML contents of the different elements
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("current-word").innerHTML = pickedWordArray;
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("incorrect-letters").innerHTML = incorrectGuesses;
};