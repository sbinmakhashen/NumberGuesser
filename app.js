/*
Game function or rules:
- Player must guess a number between min and max
- Plaer gets a certian amount of guesses
- Player will be notified of the guesses that he has remaining
- Player will be notified of the corrrect answer if losses
- Allow the player to choose to play agian
*/

// Game vars
let min = 1,
  max = 10,
  winningNum = generateRandomNum(min, max),
  guessesLeft = 3;

// get Ui elements
const game = document.getElementById('game'),
  guessInput = document.getElementById('guess-input'),
  guessBtn = document.getElementById('guess-btn'),
  message = document.querySelector('.message'),
  // get classname for min and max
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num');

// make min and max dynamic
minNum.textContent = min;
maxNum.textContent = max;

// play again
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// listen for the submit button
guessBtn.addEventListener('click', function () {
  // changing numbers in input from strings to numbers
  let guess = parseInt(guessInput.value);
  // validate
  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    eMessage(`Please enter a number that is between ${min} and ${max}`);
  }
  // check if won
  if (guess === winningNum) {
    eMessage(`You guessed it right! ${winningNum} is the correct number`);
    // disabling the the input when done
    guessInput.disabled = true;
    // make input border and message green 
    guessInput.style.borderColor = 'green';
    message.style.color = 'green';
    // after won guessbtn text changes from 'submit' into 'play again' 
    guessBtn.value = 'Play Again';
    // adding a class in guessBtn to use for play agin
    guessBtn.className = 'play-again';
    // coloring btn
    guessBtn.style.borderColor = 'green';
  } else { //when the player enters a wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // The player loses
      eMessage(`Game Over! you have lost, the correct number was ${winningNum}`);
      // disable the input
      guessInput.disabled = true;
      // turn input border and message into red
      guessInput.style.borderColor = 'red';
      message.style.color = 'red';
      // after a loss guessbtn text changes from 'submit' into 'play again'
      guessBtn.value = 'Play Again';
      // adding a class in guessBtn to use for play agin
      guessBtn.className = 'play-again';
      // coloring btn
      guessBtn.style.borderColor = 'red';
    } else { //the game continues
      eMessage(`${guess} is incorrect, now you have ${guessesLeft} guesses left`);
      // clearing the input to allow user to enter the remaining guesses
      guessInput.value = '';
      // make input border and text red
      guessInput.style.borderColor = 'red';
      message.style.color = 'red';
    }
  }
});

// Generate random numbers
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// set message
function eMessage(msg) {
  message.textContent = msg;
}
