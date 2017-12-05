// Variables

// Creates an array that lists all the possible words. 
var wordChoices = ["tiger", "nicklaus", "palmer", "mickelson", "spieth", "mcilroy"];

// blank variables to hold data
var currentWord = "";
var wordArray = [];
var wordLength = 0;
var dashLetter = [];
var incorrectGuesses = [];
var userGuess;

// Possible guessed letter
var validKeys = "abcdefghijklmnopqrstuvwxy".split('');

// Create a variables for wins
var wins = 0;
var losses = 0;
var guessesRemaining = 10;




//Functions

function newGame () {

  // word is picked at random
  currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  // Break up the word into an array
  wordArray = currentWord.split('');
  // length of word
  wordLength = wordArray.length;

  // start with fresh game count and guesses
  guessesRemaining = 9;
  incorrectGuesses = [];
  dashLetter = [];

// a loop to create a dash to represent each letter in the array
  for (var i=0; i<wordLength; i++) {
    dashLetter.push('_')
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
    for(var i=0; i<wordLength; i++) {
      if(currentWord[i] == letter) {
        dashLetter[i] = letter;
      }
    }
  } else {
    incorrectGuesses.push(letter);
    guessesRemaining--;
  }

  console.log(dashLetter)

}

function endRound () {

  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("current-word").innerHTML = dashLetter.join(' ');
  document.getElementById("incorrect-letters").innerHTML = incorrectGuesses.join(' ')
  
  if(wordArray.toString() == dashLetter.toString()) {
    wins++;
    alert("Winner Winner!")
    document.getElementById("wins").innerHTML = wins;
    newGame();
  } else if (guessesRemaining == 0) {
    losses++
    alert("You lost!")
    document.getElementById("losses").innerHTML = losses;

    newGame()
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




/*

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

  */