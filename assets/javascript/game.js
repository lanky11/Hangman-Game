

// Creates an array that lists all the possible words. 
var wordChoices = ["tiger", "nicklaus", "palmer", "mickelson", "spieth", "mcilroy"];

// Create a variable to hold the number of wins.
var wins = 0;

// Create an empty array to hold guessed letters.
var guessedLetters = [];

// Create a counter and subtracte one each time an incorret guess it given
 var guessesRemaining = 8;


// Pick a word from the wordChoices array
var pickedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(pickedWord);

// Break up the word into an array
var pickedWordArray = pickedWord.split("");
console.log(pickedWordArray);


// if else statement to see if a guessed word is within the pickedWordArray if its not push it into the 



// use a loop to create a dash for each letter in the array


// listen for the letter that user types




document.onkeyup = function(event) {
  
}