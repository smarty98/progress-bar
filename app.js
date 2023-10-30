// Get the progress filler element and the percentage span.
const progressFiller = document.querySelector('.progress');
const percent = document.getElementById("percent");

// Function to update the progress bar and percentage.
function fillProgressBar() {
  let width = 0; // Initialize the progress width.

  // Update the width of the progress bar from 0% to 100%.
  const fillInterval = setInterval(function () {
    if (width >= 100) {
      clearInterval(fillInterval);
    } else {
      width++;
      progressFiller.style.width = width + "%"; // Set the width.
      percent.textContent = width + "%"; // Update the percentage display.
    }
  }, 30); // Adjust the time interval for the fill animation.
}

// Call the fillProgressBar function to start the animation.
fillProgressBar();
