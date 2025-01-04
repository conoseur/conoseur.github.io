// Initialize global artwork data
let globalartworkData;
let startDate = new Date("12/01/2024");
let currentDate = new Date();

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

// Quiz state
let currentQuestion = 0;
let timeLeft = 30;
let score = 0;
let timerInterval;

// DOM elements
const timerProgress = document.getElementById("timer-progress");
const timerText = document.getElementById("timer-text");

// Timer circle calculations
const radius = 25;
const circumference = 2 * Math.PI * radius;
timerProgress.style.strokeDasharray = circumference;

function updateTimer() {
  const offset = circumference * (1 - timeLeft / 30);
  timerProgress.style.strokeDashoffset = offset;
  timerText.textContent = timeLeft;
}

function startTimer() {
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showFeedback(false);
    }
  }, 1000);
}

function hideLoadingOverlays() {
  // Display loading text
  document.getElementById("loading-text").style.display = "block";
  document.getElementById("loading-overlay").style.display = "fixed";
  document.getElementById("loading-overlay2").style.display = "fixed";

  // Fade out the first overlay
  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay");
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 2000);

  // Fade out the second overlay
  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay2");
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 3000);

  // Hide the overlays completely after they fade out
  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay");
    const overlay2 = document.getElementById("loading-overlay2");
    overlay.style.display = "none";
    overlay2.style.display = "none";
  }, 4000);
}

startTimer();
