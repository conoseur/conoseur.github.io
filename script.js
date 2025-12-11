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
let loadingTexts = [
  "Conoseurship is between art & science",
  "Find the strokes and connect the dots",
  "Find signature, Find X marks the spot",
  "Father is never far",
  "Loading artwork ...",
  "Join r/conoseur",
];

window.addEventListener("resize", () => {
  isLandscape = window.innerWidth > window.innerHeight;
  console.log("Landscape mode:", isLandscape); // You can use this to see the result in real-time
});

const inputBox = document.querySelector('input[id="input-box"]');
const toastContainer = document.getElementById("toast-container");
const progressBar = document.getElementById("progress-bar");
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

async function loadImageWithProgress(url, onProgress) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Image request failed");

  const contentLength = response.headers.get("Content-Length");
  const total = contentLength ? parseInt(contentLength, 10) : null;

  const reader = response.body.getReader();
  let received = 0;
  const chunks = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    received += value.length;

    if (total && onProgress) {
      onProgress(Math.round((received / total) * 100));
    }
  }

  const blob = new Blob(chunks);
  return URL.createObjectURL(blob);
}


async function fetchData() {
  showLoadingOverlay();

  try {
    const params = new URLSearchParams(window.location.search);
    const imageId = params.get("image_id");
    loadingtext.textContent = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];

    let { data, error } = imageId
      ? await _supabase.rpc("get_artwork_by_id", { image_id: imageId })
      : await _supabase.rpc("get_today_artwork");

    if (error) throw new Error(error);

    if (data) {
      console.log(data)

      updateValues(data);

      const imgUrl = await loadImageWithProgress(data.image_url, (percent) => {
        progressBar.style.width = percent + "%";
      });

      data.image_url = imgUrl; // use the blob URL
      question = data;
      hideLoadingOverlays();
    } else {
      loadingtext.textContent = "No artwork found";
      loadingtext.classList.add("red");
    }
  } catch (err) {
    console.error(err);
    // loadingtext.textContent = "Try refreshing the page";
    loadingtext.innerHTML = `<button class="badge yellow" id="randomizer" onclick="fetchRandom()">
                Random &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                        stroke="rgb(90, 93, 0)" stroke-width="2" stroke-linejoin="round" />
                </svg>
            </button>`
    loadingtext.classList.add("red");
  }
}

async function fetchRandom() {
  showLoadingOverlay();

  try {
    const { data, error } = await _supabase.rpc("get_random_artwork");
    if (error) throw error;

    if (data) {
      updateValues(data);
      const progressBar = document.getElementById("progress-bar");

      const imgUrl = await loadImageWithProgress(data.image_url, (percent) => {
        progressBar.style.width = percent + "%";
      });

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("image_id", data.image_id);
      window.history.replaceState({}, "", newUrl);
      shareData.url = newUrl;

      data.image_url = imgUrl;
      question = data;
      hideLoadingOverlays();
      startTimer();
    } else {
      loadingtext.textContent = "No artwork found";
      loadingtext.textContent = "No artwork found";
      loadingtext.classList.add("red");
    }
  } catch (err) {
    console.error(err);
    loadingtext.textContent = "invalid url";
    loadingtext.classList.add("red");
  }
}


fetchData();



fetchData();


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
    if (!query) return;

    toastContainer.innerHTML = ""; // clear toasts

    switch (questionStep) {
      case 0:
        const filteredNationalities = NATIONALITIES.filter((nationality) =>
          nationality.toLowerCase().includes(query)
        );

        console.log(filteredNationalities);

        filteredNationalities.forEach((suggestion, index) => {
          if (index < 5) createToast("neutral", suggestion);
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

        console.log(filteredArtists);

        filteredArtists.forEach((artist, index) => {
          if (index < 5) createToast("neutral", artist.full_name);
        });
        break;
    }
  });
}

function updateValues(question) {
  const artist = ARTISTS[question.artist_id] || {};

  // Update artwork display
  const setText = (id, text) =>
    (document.getElementById(id).textContent = text || "Unknown");
  const setImage = (id, url) => (document.getElementById(id).src = url || "");

  setImage("artwork-image", question.image_url);
  setImage("artwork-image-result", question.image_url);
  setText("artwork-artist", artist.full_name || "Unknown Artist");
  setText("artwork-title", question.image_title || "Untitled");
  setText("description", question.description || "  ");
  setText("description", question.description || "  ");

  // Manage the artwork link
  document.getElementById("artwork-link").onclick = () =>
    window.open(artist.wikipedia_url || "#", "_blank");

  // Handle subject & style visibility
  ["subject", "style"].forEach((id) => {
    const element = document.getElementById(id);
    element.textContent = question[id] || "";
    element.style.display = question[id] ? "inline" : "none";
  });
}

const timerProgress = document.getElementById("timer-progress");
const timerText = document.getElementById("timer-text");

// Timer circle calculations
const radius = 20;
const circumference = 2 * Math.PI * radius;
timerProgress.style.strokeDasharray = circumference;

function updateTimer() {
  if (timeLeft == 20 || timeLeft == 7)
    createToast("neutral", "time is almost up, submit soon");
  if (timeLeft == 20 || timeLeft == 7)
    createToast("neutral", "time is almost up, submit soon");
  const offset = circumference * (1 - timeLeft / 99);
  timerProgress.style.strokeDashoffset = offset;
  timerText.textContent = timeLeft;
}

function showFinalScore() {
  toastContainer.innerHTML = "";
  progressBar.style.width = "0%";

  const status = document.getElementById("status");
  status.className = ""; // Clear all classes

  const numWrong = (log.match(/❌/g) || []).length;

  switch (num_wrong) {
    case 0:
      status.classList.add("yellow");
      status.innerHTML = BADGE_CONOSEUR;
      log += "✨";
      break;

  const [className, badge, icon] = badges[numWrong] || badges[badges.length - 1];
  status.classList.add(className);
  status.textContent = badge;
  log += icon;

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
  }
  document.getElementById("result").style.display = "flex";



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
      log += correct ? "🔢" : "❌"
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

  if (document.getElementById("swipe_gesture")) {
    setTimeout(() => {
      document.getElementById("swipe_gesture").style.display = "none";
    }, 1000);

    document.getElementById("swipe_gesture").style.display = "inline-block";
    clearInterval(timerInterval);
  }

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
  inputBox.placeholder = "Guess the Nationality of the Artist";
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
