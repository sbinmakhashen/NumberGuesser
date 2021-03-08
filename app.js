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
  winningNum = 5,
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
  } else { //when the player enters a wrong number
    guessesLeft -= 1;
    if (guessesLeft == 0) {

    }
  }
});
// set message
function eMessage(msg) {
  message.textContent = msg;
}
