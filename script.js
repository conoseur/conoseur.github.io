let question,
  questionStep = 0,
  timeLeft = 99,
  timerInterval,
  log = "▶",
  isMobile =
    /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
  isLandscape = window.innerWidth > window.innerHeight;

window.addEventListener("resize", () => {
  isLandscape = window.innerWidth > window.innerHeight;
  console.log("Landscape mode:", isLandscape); // You can use this to see the result in real-time
});

//    question {
//     "image_id": "fc249338-f1db-4612-965e-402e8628d4f7",
//     "artist_id": "37e91e34-3df7-40d3-93f1-d3df6be025e0",
//     "image_title": "La Chiaruccia",
//     "subject": "",
//     "style": "Classicism",
//     "museum": "",
//     "label": "24\" x 30\"(61 cm x 76 cm) | 26\" x 32\"(66 cm x 81 cm) | 29\" x 36\"(74 cm x 91 cm) | 30\" x 40\"(76 cm x 102 cm) | 36\" x 48\"(91 cm x 122 cm) | 48\" x 60\"(122 cm x 152 cm) | 54\" x 68\"(137 cm x 173 cm)",
//     "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Alexandre_Cabanel_-_La_Chiaruccia.jpeg"
//    }

const { createClient } = supabase;
const _supabase = createClient(
  "https://kdcfufobafrpbwewcrst.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkY2Z1Zm9iYWZycGJ3ZXdjcnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NjIzNDQsImV4cCI6MjA1MzMzODM0NH0.5oEKXRjAnm6hg1xRQivys6-ULdeBN5oUS3LSjAZumt8"
);

// Function to fetch data and display artwork
async function fetchData() {
  // start loading

  try {
    let { data, error } = await _supabase.rpc("get_today_artwork");
    if (error) {
      console.error("Error fetching artwork:", error);
    } else if (data) {
      question = data;
    } else {
      // no artwork?
    }
  } catch (err) {
    // error
  } finally {
    updateValues(question);
    // TODO: show the content after image loaded
    hideLoadingOverlays();
  }
}

// Call the function
fetchData();

const inputBox = document.querySelector('input[id="input-box"]');
const toastContainer = document.getElementById("toast-container");
const overlay = document.getElementById("loading-overlay");
const overlay2 = document.getElementById("loading-overlay2");
const loadingtext = document.getElementById("loading-text");

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

function createToast(type, content) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Type = "success", "error", "neutral"
  if (type === "success") {
    toast.classList.add("toast-success");
  } else if (type === "error") {
    toast.classList.add("toast-error");
  }

  toast.textContent = content;

  toast.addEventListener("click", function () {
    inputBox.value = content;
  });

  toastContainer.appendChild(toast);
}

inputBox.addEventListener("input", function () {
  // TODO AUTOCOMPLETE based on questionStep
  // const query = nationalityInput.value.toLowerCase();
  // if (query.length > 0) {
  //   const filteredNationalities = NATIONALITIES.filter((nationality) =>
  //     nationality.toLowerCase().includes(query)
  //   );
  //   // Generate toasts with the filtered nationalities
  //   generateToasts(filteredNationalities, true);
  // }
});

// prettier-ignore
function updateValues(question) {
  artist = ARTISTS[question.artist_id]

  /* Update artwork display */
  document.getElementById("artwork-image").src = question.image_url || "";
  document.getElementById("artwork-image-result").src = question.image_url || "";
  document.getElementById("artwork-artist").textContent = `${artist.full_name || "Unknown Artist"}`;
  document.getElementById("artwork-title").textContent = `${question.image_title || "Untitled"}`;


  // LOOK AGAIN at -------------------------------------------------------------------------------
  // Manage the artwork link
  const artworkLink = document.getElementById("artwork-link");
  const newArtworkLink = question.wikipedia_url || "#";

  // Remove any existing event listeners by cloning the element
  const newLinkElement = artworkLink.cloneNode(true);
  newLinkElement.href = newArtworkLink;

  artworkLink.parentNode.replaceChild(newLinkElement, artworkLink);

  // Update additional details if present
  if (question.subject) {
    document.getElementById("subject").textContent = question.subject;
    document.getElementById("subject").style.display = "inline";
  } else {
    document.getElementById("subject").style.display = "none";
  }

  if (question.style) {
    document.getElementById("style").textContent = question.style;
    document.getElementById("style").style.display = "inline";
  } else {
    document.getElementById("style").style.display = "none";
  }
  // LOOK AGAIN at -------------------------------------------------------------------------------
}

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

// Function to show final score
function showFinalScore() {
  toastContainer.innerHTML = ""; // Clear previous toasts
  const status = document.getElementById("status");
  status.classList.remove("blue", "green", "yellow");
  status.innerHTML = BADGE_BEGINEUR;
  if (timeLeft >= 30) {
    log += "✨";
    status.classList.add("yellow");
    status.innerHTML = BADGE_CONOSEUR;
  }
  if (timeLeft <= 30) {
    log += "👑";
    status.classList.add("green");
    status.innerHTML = BADGE_MASTEUR;
  }
  if (log.contains("❌")) {
    log += "😀";
    status.classList.add("blue");
    status.innerHTML = BADGE_AMATEUR;
  } else {
    log += "🙂";
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

// Function to handle answer submission
function handleAnswer() {
  toastContainer.innerHTML = "";

  if (!inputBox.value.toLowerCase()) {
    createToast("You didn't type in anything", "error", false);
    return;
  }

  questionStep++;

  // prettier-ignore
  switch (questionStep) {
    case 1:
      log = similarity(input, question.nationality.toLowerCase()) > 0.6 ? "🌐" : "❌"
      createToast(question.nationality, similarity(input, question.nationality.toLowerCase()) > 0.6 ? "success" : "error", false);
      inputBox.placeholder = "A year when the artist was alive"
      break;
    case 2:
      input = parseInt(inputBox.value);
      log = input >= artwork.artist_born && input <= artwork.artist_dead ? "🔢" : "❌"
      createToast(input, correct ? "success" : "error", false);
      inputBox.placeholder = "Name the Artist"
      break;
    case 3:
      log = similarity(input, ARTISTS[question.artist_id].full_name.toLowerCase()) > 0.6 ? "🎨" : "❌"
      clearInterval(timerInterval);
      showFinalScore();
      break;
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 99;
  inputBox.placeholder = "Guess the Nationality of the Artist";

  updateTimer(); // maybe comment this out

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);

  timeLeft = 99;
  questionStep = 1;
  log = "▶";
}

// Simplify this ------------------------------------------------------------------------
function hideLoadingOverlays() {
  loadingtext.style.display = "block";
  overlay.style.display = "flex";
  overlay2.style.display = "flex";
  loadingtext.style.opacity = "1";
  overlay.style.opacity = "1";
  overlay2.style.opacity = "1";

  setTimeout(() => {
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
    overlay.style.display = "none";
    overlay2.style.display = "none";
  }, 3000);
}
// Simplify this ------------------------------------------------------------------------

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
