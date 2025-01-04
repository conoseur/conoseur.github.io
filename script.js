// Initialize global artwork data
let globalartworkData;
let startDate = new Date("12/01/2024");
let currentDate = new Date();
let totalScore = 0;
let questionStep = 1;

// DOM elements for inputs
const nationalityInput = document.querySelector(
  'input[list="nationality-select"]'
);
const yearInput = document.querySelector('input[type="number"]');
const artistInput = document.querySelector('input[list="artist-select"]');

// Async function to fetch the artwork data
async function fetchArtworkData() {
  const responses = await Promise.all([
    fetch("./art_data/cleaned_artwork_data.json"),
    fetch("./art_data/unique_values.json"),
  ]);
  const [artworkData, uniqueValues] = await Promise.all(
    responses.map((res) => res.json())
  );

  globalartworkData = artworkData;

  // Populate select elements with unique values
  populateSelect("artist-select", uniqueValues.artists);
  populateSelect("nationality-select", uniqueValues.nationalities);
}

// Function to display artwork
function displayArtwork(artwork) {
  console.log(artwork);
  document.getElementById("artwork-image").src = artwork.image_url || "";
  document.getElementById("artwork-artist").textContent = `Artist: ${
    artwork.artist || "Unknown Artist"
  }`;
  document.getElementById("subject").textContent = `${artwork.subject || ""}`;
  document.getElementById("style").textContent = `${artwork.style || ""}`;
  document.getElementById("artwork-link").href = artwork.wikipedia_url || "#";
}

// Format date and wait for artwork data
async function formatDate(date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();

  let Difference_In_Time = Math.round(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  console.log(Difference_In_Time);

  // Wait for artwork data to load before displaying the artwork
  await fetchArtworkData();

  // Ensure artwork data is loaded before calling displayArtwork
  displayArtwork(globalartworkData[Difference_In_Time]);

  return `${mm}/${dd}/${yyyy}`;
}

// Update the date display
async function updateDateDisplay() {
  document.getElementById("currentDate").textContent = await formatDate(
    currentDate
  );
}

// Initialize date display
updateDateDisplay();

// Event listeners for navigation buttons
document.getElementById("prevDate").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDateDisplay();
});

document.getElementById("nextDate").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDateDisplay();
});

// Function to populate a select element with options
function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

// Quiz state
let currentQuestion = 0;
let timeLeft = 99;
let score = 0;
let timerInterval;

// DOM elements
const timerProgress = document.getElementById("timer-progress");
const timerText = document.getElementById("timer-text");

// Timer circle calculations
const radius = 20;
const circumference = 2 * Math.PI * radius;
timerProgress.style.strokeDasharray = circumference;

function updateTimer() {
  const offset = circumference * (1 - timeLeft / 99);
  timerProgress.style.strokeDashoffset = offset;
  timerText.textContent = timeLeft;
}

// Function to check answers
function checkAnswer(input, correctAnswer) {
  if (typeof correctAnswer === "number") {
    // For year, allow a 10-year margin of error
    const yearDiff = Math.abs(parseInt(input) - correctAnswer);
    return yearDiff <= 10;
  }
  // For strings (nationality and artist), case-insensitive comparison
  return input.toLowerCase() === correctAnswer.toLowerCase();
}

// Function to move to next question
function showNextQuestion() {
  questionStep++;
  if (questionStep === 2) {
    nationalityInput.style.display = "none";
    yearInput.style.display = "block";
    yearInput.focus();
  } else if (questionStep === 3) {
    yearInput.style.display = "none";
    artistInput.style.display = "block";
    artistInput.focus();
  }
}

// Function to show final score
function showFinalScore() {
  const modal = document.createElement("div");
  modal.className = "tutorial-modal";

  modal.innerHTML = `
    <div class="modal-content">
      <h2 class="modal-title">Quiz Complete!</h2>
      <div class="step">
        <p class="step-text">Your final score: ${totalScore} / 3</p>
      </div>
      <button onclick="location.reload()" class="start-button">
        Play Again
      </button>
    </div>
  `;

  document.body.appendChild(modal);
}

// Function to handle answer submission
function handleAnswer(value, type) {
  const artwork =
    globalartworkData[
      Math.round(
        (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      )
    ];

  let isCorrect = false;

  switch (type) {
    case "nationality":
      isCorrect = checkAnswer(value, artwork.nationality);
      break;
    case "year":
      // Extract year from birth-death string (e.g., "1853-1890")
      const yearRange = artwork.artist_dates.split("-");
      const birthYear = parseInt(yearRange[0]);
      const deathYear = parseInt(yearRange[1]);
      isCorrect = value >= birthYear && value <= deathYear;
      break;
    case "artist":
      isCorrect = checkAnswer(value, artwork.artist);
      break;
  }

  if (isCorrect) {
    totalScore++;
  }

  if (questionStep < 3) {
    showNextQuestion();
  } else {
    clearInterval(timerInterval);
    showFinalScore();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 99;
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}

function hideLoadingOverlays() {
  document.getElementById("loading-text").style.display = "block";
  document.getElementById("loading-overlay").style.display = "fixed";
  document.getElementById("loading-overlay2").style.display = "fixed";

  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay");
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay2");
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 3000);

  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay");
    const overlay2 = document.getElementById("loading-overlay2");
    overlay.style.display = "none";
    overlay2.style.display = "none";
  }, 4000);
}

// Event listeners for input submissions
nationalityInput.addEventListener("change", (e) => {
  if (questionStep === 1) handleAnswer(e.target.value, "nationality");
});

yearInput.addEventListener("change", (e) => {
  if (questionStep === 2) handleAnswer(e.target.value, "year");
});

artistInput.addEventListener("change", (e) => {
  if (questionStep === 3) handleAnswer(e.target.value, "artist");
});

// Add at the beginning of your script.js
document.addEventListener("DOMContentLoaded", () => {
  const tutorialModal = document.getElementById("tutorial-modal");
  const startGameBtn = document.getElementById("start-game");

  clearInterval(timerInterval);
  updateTimer();

  // Start game button click handler
  startGameBtn.addEventListener("click", () => {
    tutorialModal.classList.add("opacity-0");
    setTimeout(() => {
      tutorialModal.style.display = "none";
    }, 300);

    // Reset and start the timer
    timeLeft = 99;
    startTimer();
  });
});

// Fetch data on load
fetchArtworkData()
  .then(() => {
    hideLoadingOverlays();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("loading-text").textContent =
      "Failed to load data.";
  });
