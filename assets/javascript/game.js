

// Creates an array that lists all the possible words. 
var wordChoices = ["tiger", "nicklaus", "palmer", "mickelson", "spieth", "mcilroy"];


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
  


document.onkeyup = function(event) {
  
  // listen for the letter that user types
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);




  
  
  // maybe use a loop to create a dash for each letter in the array
  
  // if else statement to see if a guessed letter is within the pickedWordArray if its not push it into the incorrectGuessedLetters
  if (pickedWord.indexOf(userGuess) === -1) {
    incorrectGuessedLetters.push(userGuess);
    guessesRemaining--;
    // if letter has already been guessed do not push it into the array again
  } else {
    // not sure now to replace dash with letter from picked word
  }


  // if guessesRemaining === 0 end game


  // html to inject into html file
  var html =
    "<li>Wins: " + wins + "</li>" +
    "<li>Current word: " + "_ _ _"  + "</li>" +
    "<li>Number of Guesses Remaining: " + guessesRemaining + "</li>" +
    "<li>Letters Already Guessed: " + incorrectGuessedLetters + "</li>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;


};