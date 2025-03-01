// Function to roll the dice
function rollDice() {
  const dice = document.getElementById("dice");
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // Update dice value with animation
  dice.style.transform = "rotate(0deg)";
  setTimeout(() => {
    dice.textContent = randomNumber;
    dice.style.transform = "rotate(360deg)";
  }, 50);
}

// Attach event listener to the button
document.getElementById("rollBtn").addEventListener("click", rollDice);
//*
//!
