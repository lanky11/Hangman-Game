// Variables

// Creates an array that lists all the possible words. 
var wordChoices = ["tiger", "nicklaus", "palmer", "player", "sneed", "norman", "nelson", "ballesteros", "sarazen", "hogan", "mickelson", "spieth", "mcilroy"];
// Word Picked from wordChoice array
var currentWord = "";
// Array to hold current word
var wordArray = [];
// Store the length of the word
var wordLength = 0;
// display a dash for each letter in the word
var dashLetter = [];
// keep track of incorrect guessed letters
var incorrectGuesses = [];
// Store the users guess
var userGuess;
// Create a variable for wins and sets value of 0
var wins = 0;
// Create a variable for losses and sets value of 0
var losses = 0;
// set the number of guesses that will count down with each incorrect answer
var guessesRemaining = 10;


//Functions

function newGame () {

  // word is picked at random
  currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  // Break up the word into an array
  wordArray = currentWord.split('');
  // get length of word
  wordLength = wordArray.length;

  // start with fresh game count and guesses
  guessesRemaining = 9;
  incorrectGuesses = [];
  dashLetter = [];

// a loop to create a dash to represent each letter in the array
  for (var i=0; i<wordLength; i++) {
    dashLetter.push('_');
  }

   // Set the inner HTML contents of the different elements
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("current-word").innerHTML = dashLetter.join(' ');
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("incorrect-letters").innerHTML = incorrectGuesses;
  
}


function checkLetters (letter) {

  var letterInWord = false;

  for (var i=0; i< wordLength; i++) {
    if(currentWord[i] == letter) {
      letterInWord = true;
    }
  }


  if(letterInWord) {
    for(var j=0; j<wordLength; j++) {
      if(currentWord[j] == letter) {
        dashLetter[j] = letter;
      }
    }
  } else {
    incorrectGuesses.push(letter);
    guessesRemaining--;
  }

  console.log(dashLetter);

}

function endRound () {

  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("current-word").innerHTML = dashLetter.join(' ');
  document.getElementById("incorrect-letters").innerHTML = incorrectGuesses.join(' ');
  
  if(wordArray.toString() == dashLetter.toString()) {
    wins++;
    alert("Winner! Winner!");
    document.getElementById("wins").innerHTML = wins;
    newGame();
  } else if (guessesRemaining == 0) {
    losses++;
    alert("You lost!  The word was, " + currentWord + ".");
    document.getElementById("losses").innerHTML = losses;

    newGame();
  }

}


//KeyUp

// starts new game
 
 newGame();


document.onkeyup = function(event) {
  
  // listen for the letter that user types
  userGuess = event.key.toLowerCase();
  checkLetters(userGuess);
  endRound();
  console.log(userGuess);
};
