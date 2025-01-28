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

const inputBox = document.querySelector('input[id="input-box"]');
const toastContainer = document.getElementById("toast-container");
const overlay = document.getElementById("loading-overlay");
const overlay2 = document.getElementById("loading-overlay2");
const loadingtext = document.getElementById("loading-text");

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

// TODO make more efficient !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Function to fetch data and display artwork
async function fetchData() {
  showLoadingOverlay();

  try {
    const params = new URLSearchParams(window.location.search);
    const imageId = params.get("image_id");
    let data, error;
    let loadingtext = document.getElementById("loading-text");

    if (imageId) {
      // Fetch specific artwork by image_id
      ({ data, error } = await _supabase.rpc("get_artwork_by_id", {
        image_id: imageId,
      }));
    } else {
      // Fetch today's artwork
      ({ data, error } = await _supabase.rpc("get_today_artwork"));
      if (data) {
        // Update URL with the new image_id
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("image_id", data.image_id);
        window.history.replaceState({}, "", newUrl);
      }
    }
    question = data;

    if (error) {
      console.error("Error fetching artwork:", error);
    } else if (data) {
      // Process the fetched data
      const img = new Image();
      img.src = data.image_url;

      img.onload = () => {
        updateValues(data);
        hideLoadingOverlays();
      };

      img.onerror = () => {
        loadingtext.innerHTML = "Image failed to load";
        loadingtext.classList.add("red");
      };
    } else {
      loadingtext.innerHTML = "No artwork found";
      loadingtext.classList.add("red");
    }
  } catch (err) {
    console.log(err);
    loadingtext.innerHTML = "Try refeshing the page";
    loadingtext.classList.add("red");
  }
}

fetchData();

async function fetchRandom() {
  showLoadingOverlay();

  try {
    ({ data, error } = await _supabase.rpc("get_random_artwork"));

    if (data) {
      // Process the fetched data
      const img = new Image();
      img.src = data.image_url;

      img.onload = () => {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("image_id", data.image_id);
        window.history.replaceState({}, "", newUrl);
        updateValues(data);
        hideLoadingOverlays();
      };
    } else {
      loadingtext.innerHTML = "No artwork found";
      loadingtext.classList.add("red");
    }
  } catch {
    console.log(err);
    loadingtext.innerHTML = "Try refeshing the page";
    loadingtext.classList.add("red");
  }
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

// AUTOCOMPLETE --------------------------------------------------------------------------
function addAutocomplete() {
  inputBox.addEventListener("input", function () {
    const query = inputBox.value.toLowerCase();
    if (query.length > 0) {
      toastContainer.innerHTML = ""; // clear toasts

      switch (questionStep) {
        case 0:
          const filteredNationalities = NATIONALITIES.filter((nationality) =>
            nationality.toLowerCase().includes(query)
          );

          filteredNationalities.forEach((suggestion, index) => {
            if (index < 5) {
              createToast("neutral", suggestion);
            }
          });
          break;

        case 2:
          const currentNationality = ARTISTS[question.artist_id]?.nationality;

          if (!currentNationality)
            return console.error("Artist nationality not found");

          // Filter artists by nationality and query
          const filteredArtists = Object.values(ARTISTS)
            .filter((artist) => artist.nationality === currentNationality)
            .filter((artist) => artist.full_name.toLowerCase().includes(query));

          filteredArtists.forEach((artist, index) => {
            if (index < 5) {
              createToast("neutral", artist.full_name);
            }
          });
          break;
      }
    }
  });
}

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

  num_wrong = log.split("❌").length - 1;

  switch (num_wrong) {
    case 0:
      if (timeLeft >= 50) {
        status.classList.add("yellow");
        status.innerHTML = BADGE_CONOSEUR;
        log += "✨";
        break;
      }

    case 1:
      status.classList.add("green");
      status.innerHTML = BADGE_MASTEUR;
      log += "👑";
      break;

    case 2:
      status.classList.add("blue");
      status.innerHTML = BADGE_AMATEUR;
      log += "😀";
      break;

    case 3:
      status.innerHTML = BADGE_BEGINEUR;
      log += "🙂";
      break;
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

function handleAnswer() {
  toastContainer.innerHTML = ""; // clear previous toasts

  input = inputBox.value.toLowerCase();
  artist = ARTISTS[question.artist_id];

  if (!input) return createToast("error", "You didn't type in anything");

  questionStep++, (inputBox.value = ""), (correct = false);

  // prettier-ignore
  switch (questionStep) {
    case 1:
      correct = similarity(input, artist.nationality.toLowerCase()) > 0.6
      log += correct ? "🌐" : "❌"
      createToast(correct ? "success" : "error", artist.nationality);   
      inputBox.placeholder = "A year when the artist was alive"
      break;

    case 2:
      correct = input >= artist.birth && input <= artist.death
      log +=  correct ? "🔢" : "❌"
      createToast(correct ? "success" : "error", input);
      inputBox.placeholder = "Name the Artist"
      break;

    case 3:
      log += similarity(input, artist.full_name.toLowerCase()) > 0.6 ? "🎨" : "❌"
      clearInterval(timerInterval);
      showFinalScore();
      break;
  }
}

function startTimer() {
  document.getElementById("tutorial-modal").style.display = "none";
  clearInterval(timerInterval);
  inputBox.placeholder = "Guess the Nationality of the Artist";

  (timeLeft = 99), (questionStep = 0), (log = "▶");

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}

function showLoadingOverlay() {
  loadingtext.style.cssText = "display: block; opacity: 1";
  overlay.style.cssText = "display: flex; opacity: 1";
  overlay2.style.cssText = "display: flex; opacity: 1";
}

function hideLoadingOverlays() {
  document.getElementById("result").style.display = "none";

  addAutocomplete();
  setTimeout(() => {
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    overlay.style.display = "none";
    overlay2.style.display = "none";
  }, 3000);
}

// Share btn ----------------------------------------------------------------------------
const shareData = {
  title: "Do you know this famous piece?",
  text: "See if you can figure out the artist faster than I did",
  url: "https://conoseur.github.io",
};

const sharebtn = document.getElementById("shareBTN");

sharebtn.addEventListener("click", async () => {
  try {
    shareData.text = "Log: " + log;
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
