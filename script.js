const fullText = "We love Programming!";

function startAnimation() {
  const speedInput = document.getElementById("speed");
  const speedValue = parseInt(speedInput.value);
  const display = document.getElementById("text");
  
  // Clear previous text
  display.textContent = "";

  // Validate input
  if (isNaN(speedValue) || speedValue < 1 || speedValue > 10) {
    alert("Please enter a speed between 1 and 10.");
    return;
  }

  let delay = 500 / speedValue;
  let index = 0;

  const interval = setInterval(() => {
    if (index < fullText.length) {
      display.textContent += fullText.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}
