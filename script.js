let targetNumber;
let attempts;

function startGame() {
  // Generate a new random number and reset attempts
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  // Reset the display
  document.getElementById('result').innerText = '';
  document.getElementById('guess').value = '';
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);
  attempts++;

  if (userGuess === targetNumber) {
    document.getElementById('result').innerText = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
    setTimeout(startGame, 3000);  // Automatically reset after 3 seconds
  } else if (userGuess < targetNumber) {
    document.getElementById('result').innerText = 'Too low! Try again.';
  } else {
    document.getElementById('result').innerText = 'Too high! Try again.';
  }
}

// Start the game when the page loads
window.onload = startGame;
