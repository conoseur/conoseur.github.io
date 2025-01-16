// Initialize global artwork data
let globalartworkData;
let startDate = new Date("01/01/2025");
let currentDate = new Date();
let totalScore = 0;
let questionStep = 0;

// Quiz state
let currentQuestion = 0;
let timeLeft = 99;
let score = 0;
let timerInterval;
let log = "▶";

// prettier-ignore
const nationalityInput = document.querySelector('input[id="nationality-select"]');
const yearInput = document.querySelector('input[id="year-select"]');
const artistInput = document.querySelector('input[id="artist-select"]');

const toastContainer = document.getElementById("toast-container");

// Function to generate toasts based on the autocomplete suggestions
function generateToasts(filteredNationalities, isNationality = true) {
  toastContainer.innerHTML = ""; // Clear previous toasts

  // Generate toasts with nationalities or artists from the autocomplete suggestions
  filteredNationalities.forEach((suggestion, index) => {
    if (index < 5) {
      createToast(suggestion, "neutral", isNationality);
    }
  });
}

function createToast(suggestion, type, isNationality) {
  // Create the toast element
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Customize based on toast type (e.g., success, error, neutral)
  if (type === "success") {
    toast.classList.add("toast-success");
  } else if (type === "error") {
    toast.classList.add("toast-error");
  }

  toast.textContent = suggestion;

  // Add click event to toast
  toast.addEventListener("click", function () {
    // Update the input field based on whether it's nationality or artist
    if (isNationality) {
      nationalityInput.value = suggestion;
    } else {
      artistInput.value = suggestion;
    }
  });

  // Append toast to the container
  if (!toastContainer) {
    // If the container doesn't exist, create it
    const container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  toastContainer.appendChild(toast);
}

// 2. Autocomplete Logic
nationalityInput.addEventListener("input", function () {
  const query = nationalityInput.value.toLowerCase();

  if (query.length > 0) {
    const filteredNationalities = NATIONALITIES.filter((nationality) =>
      nationality.toLowerCase().includes(query)
    );

    // Generate toasts with the filtered nationalities
    generateToasts(filteredNationalities, true);
  }
});

artistInput.addEventListener("input", function () {
  const query = artistInput.value.toLowerCase();

  if (query.length > 0) {
    // Filter the artist names based on the input query
    const filteredArtists = Object.keys(ARTISTS).filter((artist) =>
      artist.toLowerCase().includes(query)
    );

    // Generate toasts with the filtered artists
    generateToasts(filteredArtists, false);
  }
});

// Async function to fetch the artwork data
async function fetchArtworkData() {
  // Only fetching cleaned_artwork_data.json since unique values are included in ARTWORK_VALUES
  const response = await fetch("./art_data/cleaned_artwork_data2.json");
  const artworkData = await response.json();

  globalartworkData = artworkData;
}

// prettier-ignore
function displayArtwork(artwork) {
  function openArtist() {
    const link = ARTWORK_VALUES.artists[artwork.artist.normalize("NFD").replace(/[\u0300-\u036f]/g, "")];
    window.open(link);
  }

  /* Update artwork display */
  document.getElementById("artwork-image").src = artwork.image_url || "";
  document.getElementById("artwork-image-result").src = artwork.image_url || "";
  document.getElementById("artwork-artist").textContent = `${artwork.artist || "Unknown Artist"}`;
  document.getElementById("artwork-title").textContent = `${artwork.worktitle || "Untitled"}`;

  // Manage the artwork link
  const artworkLink = document.getElementById("artwork-link");
  const newArtworkLink = artwork.wikipedia_url || "#";

  // Remove any existing event listeners by cloning the element
  const newLinkElement = artworkLink.cloneNode(true);
  newLinkElement.addEventListener("click", openArtist);
  newLinkElement.href = newArtworkLink;

  artworkLink.parentNode.replaceChild(newLinkElement, artworkLink);

  // Update additional details if present
  if (artwork.subject) {
    document.getElementById("subject").textContent = artwork.subject;
    document.getElementById("subject").style.display = "inline";
  } else {
    document.getElementById("subject").style.display = "none";
  }

  if (artwork.style) {
    document.getElementById("style").textContent = artwork.style;
    document.getElementById("style").style.display = "inline";
  } else {
    document.getElementById("style").style.display = "none";
  }
}

// Format date and wait for artwork data
async function formatDate(date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();

  let Difference_In_Time = Math.round(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  // Wait for artwork data to load before displaying the artwork
  await fetchArtworkData();

  // Ensure artwork data is loaded before calling displayArtwork
  displayArtwork(globalartworkData[Difference_In_Time]);

  return `${mm}/${dd}/${yyyy}`;
}

// Update the date display
async function updateDateDisplay() {
  // hideLoadingOverlays();
  document.getElementById("result").style.display = "none";
  totalScore = 0;
  questionStep = 1;
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
  startTimer();
});

document.getElementById("nextDate").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDateDisplay();
  startTimer();
});

document.getElementById("randomizer").addEventListener("click", () => {
  currentDate.setDate(
    currentDate.getDate() + 200 + Math.floor(Math.random() * 2000)
  );
  document.getElementById("date-nav").style.display = "none";
  updateDateDisplay();
  startTimer();
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

// Function to move to next question
function showNextQuestion() {
  questionStep++;
  nationalityInput.style.display = "none";
  nationalityInput.value = "";
  yearInput.style.display = "none";
  yearInput.value = "";
  artistInput.style.display = "none";
  artistInput.value = "";
  if (questionStep === 1) {
    nationalityInput.style.display = "block";
    nationalityInput.focus();
  } else if (questionStep === 2) {
    yearInput.style.display = "block";
    yearInput.focus();
  } else if (questionStep === 3) {
    artistInput.style.display = "block";
    artistInput.focus();
  }
}

// Function to show final score
function showFinalScore() {
  toastContainer.innerHTML = ""; // Clear previous toasts
  const status = document.getElementById("status");
  status.classList.remove("blue", "green", "yellow");
  if (totalScore == 3 && timeLeft >= 30) {
    log += "✨";
    status.classList.add("yellow");
    status.innerHTML = `Conoseur &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 600" x="0px" y="0px" width="20" height="20">
                    <path fill="rgb(90, 93, 0)"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                `;
  }
  if (totalScore >= 2 && timeLeft <= 30) {
    log += "👑";
    status.classList.add("green");
    status.innerHTML = `Expert &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 600" x="0px" y="0px" width="20" height="20">
                    <path fill="rgb(0, 93, 26)"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                `;
  }
  if (totalScore == 1) {
    log += "😀";
    status.classList.add("blue");
    status.innerHTML = `Novice &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 600" x="0px" y="0px" width="20" height="20">
                    <path fill="rgb(0, 87, 93)"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                `;
  } else {
    log += "😭";
  }
  document.getElementById("result").style.display = "flex";
}

function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

document.getElementById("popup").addEventListener("click", function () {
  this.style.display = "none"; // Hides the popup
});

// Function to handle answer submission
function handleAnswer() {
  const artwork =
    globalartworkData[
      Math.round(
        (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      )
    ];

  toastContainer.innerHTML = "";

  switch (questionStep) {
    case 1:
      input = nationalityInput.value.toLowerCase();
      if (!input) {
        createToast("You didn't type in anything", "error", false);
        return;
      }
      correct = similarity(input, artwork.nationality.toLowerCase()) > 0.6;
      if (correct) {
        totalScore++;
        log += "🌐";
      } else {
        log += "❌";
      }
      createToast(artwork.nationality, correct ? "success" : "error", false);
      break;
    case 2:
      input = parseInt(yearInput.value);
      if (!input) {
        createToast("You didn't type in anything", "error", false);
        return;
      }
      correct = input >= artwork.artist_born && input <= artwork.artist_dead;
      if (correct) {
        totalScore++;
        log += "🔢";
      } else {
        log += "❌";
      }
      createToast(input, correct ? "success" : "error", false);
      break;
    case 3:
      input = artistInput.value.toLowerCase();
      if (!input) {
        createToast("You didn't type in anything", "error", false);
        return;
      }
      correct = similarity(input, artwork.artist.toLowerCase()) > 0.6;
      if (correct) {
        totalScore++;
        log += "🎨";
      } else {
        log += "❌";
      }
      break;
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

  timeLeft = 99;
  score = 0;
  questionStep = 0;
  log = "▶";
  showNextQuestion();
}

function hideLoadingOverlays() {
  document.getElementById("loading-text").style.display = "block";
  document.getElementById("loading-overlay").style.display = "flex";
  document.getElementById("loading-overlay2").style.display = "flex";
  document.getElementById("loading-text").style.opacity = "1";
  document.getElementById("loading-overlay").style.opacity = "1";
  document.getElementById("loading-overlay2").style.opacity = "1";

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

// Fetch data on load
fetchArtworkData()
  .then(() => {
    console.log("loaded");
    // Add at the beginning of your script.js
    document.addEventListener("DOMContentLoaded", () => {
      hideLoadingOverlays();
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
        startTimer();
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("loading-text").textContent =
      "Failed to load data.";
  });

const shareData = {
  title: "Do you know this famous piece?",
  text: "See if you can figure out the artist faster than I did",
  url: "https://conoseur.github.io",
};

const sharebtn = document.getElementById("shareBTN");

sharebtn.addEventListener("click", async () => {
  try {
    shareData.text = log;
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
