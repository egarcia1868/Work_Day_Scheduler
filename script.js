




function storeSchedule() {
  // Stringify and set "highScores" key in localStorage to highScores array
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function renderSchedule() {
  // Clear highScoresList element and update highScoresCount
  highScoresListEl.innerHTML = "";
}

// When the clear highscores button is clicked...
document.querySelector("#clearScores").addEventListener("click", function(event) {
  highScores = [];

  //   // Store empty highScores in localStorage, re-render the empty list
    storeHighScores();
    renderHighScores();
  })