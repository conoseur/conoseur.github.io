// Initialize global artwork data
let globalartworkData;
let startDate = new Date("01/01/2025");
let currentDate = new Date();
let totalScore = 0;
let questionStep = 1;

// prettier-ignore
const ARTWORK_VALUES = {
    artists: [
        "Abraham Mignon 🇳🇱", "Adam Albrecht 🇩🇪", "Adam Edouard 🇺🇸", "Adelaide Labille Guiard 🇫🇷", 
        "Adele Romany 🇫🇷", "Adolph Ulrich Wertmuller 🇨🇭", "Adriaan De Lelie 🇳🇱", "Adriaen Thomasz Key 🇳🇱", 
        "Aelbert Cuyp 🇳🇱", "Albert Andre 🇫🇷", "Albert Bierstadt 🇺🇸", "Albert Marquet 🇫🇷", 
        "Albrecht Durer 🇩🇪", "Alexandre Cabanel 🇫🇷", "Alexei Von Jawlensky 🇷🇺", "Alexey Savrasov 🇷🇺", 
        "Alfred Henry Maurer 🇺🇸", "Alfred Sisley 🇫🇷", "Alfred Thompson Bricher 🇺🇸", "Alice Bailly 🇨🇭", 
        "Amadeo de Souza Cardoso 🇪🇸", "Ambrosius Bosschaert 🇳🇱", "Amedeo Modigliani 🇮🇹", 
        "Anders Zorn 🇨🇭", "Andre Derain 🇫🇷", "Andrea Mantegna 🇮🇹", "Angel Zarraga 🇲🇽", 
        "Anne Vallayer Coster 🇫🇷", "Anthony Van Dyck 🇧🇪", "Antoine Bouvard 🇫🇷", "Antoine Jean Gros 🇫🇷", 
        "Anton Raphael Mengs 🇩🇪", "Aristide Maillol 🇫🇷", "Arnold Bocklin 🇨🇭", "Arthur Bowen Davies 🇺🇸", 
        "Arthur Fitzwilliam Tait 🇺🇸", "Arthur Stockdale Cope 🇬🇧", "Asher Brown Durand 🇺🇸", "August Macke 🇩🇪", 
        "Bartholomeus Van der Helst 🇳🇱", "Bartolome Esteban Murillo 🇪🇸", "Becker Paula Modersohn 🇩🇪", 
        "Benjamin Marshall 🇬🇧", "Benjamin West 🇺🇸", "Benson Frank Weston 🇺🇸", "Benvenuto Garofalo 🇮🇹", 
        "Berthe Morisot 🇫🇷", "Buonarroti Michelangelo 🇮🇹", "Caesar Boetius Van Everdingen 🇳🇱", 
        "Camille Bombois 🇫🇷", "Camille Pissarro 🇫🇷", "Carel Fabritius 🇳🇱", "Carl Larsson 🇨🇭", 
        "Carlo Brancaccio 🇮🇹", "Carlo Carra 🇮🇹", "Caspar David Friedrich 🇩🇪", "Cecilia Beaux 🇺🇸", 
        "Chaim Soutine 🇫🇷", "Charles Brooking 🇬🇧", "Charles Caleb Ward 🇨🇦", "Charles Courtney Curran 🇺🇸", 
        "Charles Cromwell Ingham 🇮🇪", "Charles Demuth 🇺🇸", "Charles Francois Daubigny 🇫🇷", 
        "Charles Marion Russell 🇺🇸", "Charles Peale Polk 🇺🇸", "Charles Sprague Pearce 🇺🇸", "Charles Towne 🇬🇧", 
        "Charles Willson Peale 🇺🇸", "Childe Hassam 🇺🇸", "Christian Rohlfs 🇩🇪", "Cima Da Conegliano 🇮🇹", 
        "Claude Joseph Vernet 🇫🇷", "Claude Lorraine 🇫🇷", "Claude Monet 🇫🇷", "Constantin A Westchiloff 🇷🇺", 
        "Cornelis Springer 🇳🇱", "Cornelis Troost 🇳🇱", "Cornelis Van Haarlem 🇳🇱", "Daniel Ridgway Knight 🇺🇸", 
        "David Teniers 🇧🇪", "Diego Velazquez 🇪🇸", "Dominikos Theotokópoulos 🇪🇸", "Dominic Serres 🇬🇧", 
        "Edgar Degas 🇫🇷", "Edgar William 🇺🇸", "Edmond Francois Aman Jean 🇫🇷", "Edmund Charles Tarbell 🇺🇸", 
        "Edouard Manet 🇫🇷", "Edouard Vuillard 🇫🇷", "Eduard Von Grutzner 🇩🇪", "Edvard Munch 🇳🇴", 
        "Edward Burne Jones 🇬🇧", "Edward Hicks 🇺🇸", "Edward Potthast 🇺🇸", "Edward William Cooke 🇬🇧", 
        "Edwin Lord Weeks 🇺🇸", "Egon Schiele 🇦🇹", "Elisabeth Vigee Le Brun 🇫🇷", "Emile Bernard 🇫🇷", 
        "Enoch Wood Perry 🇺🇸", "Ernest Lawson 🇨🇦", "Ernst Ludwig Kirchner 🇩🇪", "Etienne Dinet 🇫🇷", 
        "Eugene De Blaas 🇦🇹", "Eugene Delacroix 🇫🇷", "Eugene Girardet 🇫🇷", "Eugene Louis Boudin 🇫🇷", 
        "Federico Zandomeneghi 🇮🇹", "Felix Vallotton 🇨🇭", "Ferdinand Bol 🇳🇱", "Ferdinand Hodler 🇨🇭", 
        "Fernand Cormon 🇫🇷", "Fernand Leger 🇫🇷", "Fitz Hugh Lane 🇺🇸", "Francesco Guardi 🇮🇹", 
        "Francis Augustus Silva 🇺🇸", "Francis Luis Mora 🇺🇸", "Francis Picabia 🇫🇷", "Francis William Edmonds 🇺🇸", 
        "Francisco De Goya 🇪🇸", "Francisco De Zurbaran 🇪🇸", "Francois Boucher 🇫🇷", "Francois Gerard 🇫🇷", 
        "Francois Hubert Drouais 🇫🇷", "Frank Duveneck 🇺🇸", "Frans Francken 🇧🇪", "Frans Hals 🇳🇱", 
        "Frans Jansz Post 🇳🇱", "Franz Marc 🇩🇪", "Franz Xavier Winterhalter 🇩🇪", "Frederic Edwin Church 🇺🇸", 
        "Frederic Remington 🇺🇸", "Frederick Carl Frieseke 🇺🇸", "Friedrich Von Amerling 🇦🇹", "Gabriel Metsu 🇳🇱", 
        "Gabriele Munter 🇩🇪", "Gaston Bussiere 🇫🇷", "Gaston La Touche 🇫🇷", "Geertgen Tot Sint Jans 🇳🇱", 
        "George Caleb Bingham 🇺🇸", "George Catlin 🇺🇸", "George Frederic Watts 🇬🇧", "George Gardner Symons 🇺🇸", 
        "George Garrard 🇬🇧", "George Henry Laporte 🇬🇧", "George Inness 🇺🇸", "George P A Healy 🇺🇸", 
        "George Romney 🇬🇧", "George Stubbs 🇬🇧", "George Wesley Bellows 🇺🇸", "Georges Braque 🇫🇷", 
        "Georges De La Tour 🇫🇷", "Georges Despagnat 🇫🇷", "Georges Lemmen 🇧🇪", "Georges Rouault 🇫🇷", 
        "Georges Seurat 🇫🇷", "Gerard Ter Borch 🇳🇱", "Gerard Van Honthorst 🇳🇱", "Gerrit Berckheyde 🇳🇱", 
        "Gerrit Dou 🇳🇱", "Giacomo Balla 🇮🇹", "Gilbert Stuart 🇺🇸", "Giorgio Morandi 🇮🇹", 
        "Giovanni Antionio Canaletto 🇮🇹", "Giovanni Battista Tiepolo 🇮🇹", "Giovanni Boldini 🇮🇹", 
        "Giuseppe Arcimboldo 🇮🇹", "Grant Wood 🇺🇸", "Guido Reni 🇮🇹", "Guillaumin Armand 🇫🇷", 
        "Gustaf Wilhelm Palm 🇨🇭", "Gustav Klimt 🇦🇹", "Gustave Caillebotte 🇫🇷", "Gustave Courbet 🇫🇷", 
        "Gustave Dore 🇫🇷", "Gustave Moreau 🇫🇷", "Gwen John 🇬🇧", "Hans Dahl 🇳🇴", "Hans Holbein 🇩🇪", 
        "Hans Memling 🇳🇱", "Heinrich Campendonk 🇩🇪", "Hendrick Avercamp 🇳🇱", "Hendrick Dubbels 🇳🇱", 
        "Hendrick Ter Brugghen 🇳🇱", "Hendrik Voogd 🇳🇱", "Henri De Toulouse Lautrec 🇫🇷", 
        "Henri Edmond Cross 🇫🇷", "Henri Fantin Latour 🇫🇷", "Henri Le Sidaner 🇫🇷", "Henri Lebasque 🇫🇷", 
        "Henri Manguin 🇫🇷", "Henri Rousseau 🇫🇷", "Henry Moret 🇫🇷", "Henry Raeburn 🇬🇧", 
        "Horace Vernet 🇫🇷", "Isaac Van Ostade 🇳🇱", "Isaak Levitan 🇷🇺", "Ivan Aivazovskiy 🇷🇺", 
        "Ivan Shishkin 🇷🇺", "Jack Butler Yeats 🇮🇪", "Jacob Cornelisz Van Oostsanen 🇳🇱", 
        "Jacob Van Ruisdael 🇳🇱", "Jacques Laurent Agasse 🇨🇭", "Jacques Louis David 🇫🇷", "James Ensor 🇧🇪", 
        "James Mcdougal Hart 🇺🇸", "James Mcneill Whistler 🇺🇸", "James Peale 🇺🇸", "James Tissot 🇫🇷", 
        "Jan Adam Kruseman 🇳🇱", "Jan Both 🇳🇱", "Jan Brueghel 🇧🇪", "Jan Miense Molenaer 🇳🇱", 
        "Jan Porcellis 🇧🇪", "Jan Portielje 🇳🇱", "Jan Steen 🇳🇱", "Jan Toorop 🇳🇱", "Jan Van Eyck 🇧🇪", 
        "Jan Van Goyen 🇳🇱", "Jan Van Huysum 🇳🇱", "Jan Van Scorel 🇳🇱", "Jan Vermeer 🇳🇱", 
        "Jan Willem Pieneman 🇳🇱", "Jean Antoine Watteau 🇫🇷", "Jean Auguste Ingres 🇫🇷", 
        "Jean Francois Millet 🇫🇷", "Jean Louis David 🇫🇷", "Jean Metzinger 🇫🇷", "Jean Puy 🇫🇷", 
        "Jean-Baptiste-Camille Corot 🇫🇷", "Jean-Baptiste-Simeon Chardin 🇫🇷", "Johann Zoffany 🇬🇧", 
        "Johann Christian Dahl 🇩🇪", "Johann Heinrich Füssli 🇨🇭", "Johannes Vermeer 🇳🇱", 
        "John Cleveley 🇬🇧", "John Constable 🇬🇧", "John Durand 🇺🇸", "John Everett Millais 🇬🇧", 
        "John Francis Rigaud 🇬🇧", "John Frederick Herring 🇬🇧", "John Frederick Kensett 🇺🇸", 
        "John French Sloan 🇺🇸", "John Hoppner 🇬🇧", "John James Audubon 🇺🇸", "John Kane 🇺🇸", 
        "John La Farge 🇺🇸", "John Lynn 🇬🇧", "John Ottis Adams 🇺🇸", "John Russell 🇺🇸", 
        "John Singer Sargent 🇺🇸", "John Singleton Copley 🇺🇸", "John Trumbull 🇺🇸", "John Vanderbank 🇬🇧", 
        "John Wesley Jarvis 🇺🇸", "John White Alexander 🇺🇸", "John William Godward 🇬🇧", 
        "John William Waterhouse 🇬🇧", "John Wollaston 🇬🇧", "Joseph Blackburn 🇺🇸", "Joshua Johnson 🇺🇸", 
        "Julian Alden Weir 🇺🇸", "Karel Dujardin 🇳🇱", "Louis Apol 🇳🇱", "Ludolf Backhuysen 🇳🇱", 
        "Ludvig Deutsch 🇦🇹", "Max Pechstein 🇩🇪", "Maxime Maufra 🇫🇷", "Maxine Margolis 🇺🇸", 
        "Maximilien Luce 🇫🇷", "Michelangelo Buonarroti 🇮🇹", "Nicolaes Berchem 🇳🇱", 
        "Oswald Achenbach 🇩🇪", "Pieter Bruegel 🇳🇱", "Pieter Claesz 🇳🇱", "Pieter De Hooch 🇳🇱", 
        "Pieter Jansz Saenredam 🇳🇱", "Pieter Quast 🇳🇱", "Pieter Vermeer 🇳🇱", "Rachel Ruysch 🇳🇱", 
        "Reinier Nooms 🇳🇱", "Rogier Van der Weyden 🇧🇪", "Simon De Vlieger 🇳🇱", 
        "Thomas Waterman Wood 🇺🇸", "Thomas Cole 🇺🇸", "Thomas Eakins 🇺🇸", "Thomas Gainsborough 🇬🇧", 
        "Thomas Hovenden 🇺🇸", "Thomas Jacques Somerscales 🇬🇧", "Thomas Luny 🇬🇧", 
        "Thomas Moran 🇺🇸", "Thomas Sully 🇺🇸", "Thomas Troger 🇩🇪", "Willem Bartel Van der Kooi 🇳🇱", 
        "Willem Claesz Heda 🇳🇱", "Willem Duyster 🇳🇱", "Willem Maris 🇳🇱", "Willem Van De Velde 🇳🇱"
    ],
      
  nationalities: [
    "American", "Austrian", "Belgian", "Canadian", "Dutch", "English", "Flemish",
    "French", "German", "Irish", "Italian", "Mexican", "Norwegian", "Russian",
    "Spanish", "Swiss"
  ],
  styles: [
    "American Art", "American Landscape", "Art Nouveau", "Avant-Garde", "Baroque",
    "Classicism", "Cubism", "Expressionism", "Fauvism", "Impressionism", "Nabi",
    "Naturalism", "Neo-Classicism", "Orientalism", "Pointillism", 
    "Post-Impressionism", "Realism", "Renaissance", "Rococo", "Romanticism",
    "Surrealism", "Symbolism"
  ],
  subjects: [
    "Abstract/Modern Art", "Architectures", "Autumn/Fall", "Bridges", 
    "Cafes/Bars", "Christianity", "Churches/Temples/Mosques", "Dancers", "Deers",
    "Dogs", "Flowers", "Gardens", "Horses", "Jesus Christ", "Landscape Art",
    "Lovers", "Marine Art/Maritime", "Musics", "Nude", "Portraits",
    "Rivers/Lakes", "Seascapes", "Spring", "Still-Life", "Summer", "Tigers",
    "U.S. Presidents", "Water Lilies", "Winter"
  ],
  countries: [
    "Brazil", "France", "Germany", "Hungary", "Israel", "Netherlands", "Russia",
    "Spain", "Switzerland", "UK", "USA", "United Kingdom"
  ],
  museums: [
    "Cleveland Museum Of Art", "Fine Arts Museums of San Francisco Legion of Honor",
    "Hungarian National Gallery", "Indianapolis Museum of Art", "Israel Museum",
    "Kunsthaus Zürich", "Los Angeles County Museum of Art", "Mauritshuis Museum",
    "Museum Folkwang", "Museum of Fine Arts of Nancy", "Museum of Fine Arts, Houston",
    "Musée d'Orsay", "Musée des Beaux-Arts de Quimper", "Musée du Louvre",
    "National Gallery", "National Gallery of Art", "National Maritime Museum",
    "Nelson-Atkins Museum of Art", "Philadelphia Museum of Art",
    "Pushkin State Museum of Fine Arts", "Rijksmuseum", "Saint Louis Art Museum",
    "Smithsonian American Art Museum", "Solomon R. Guggenheim Museum",
    "São Paulo Museum of Art", "The Art Institute of Chicago",
    "The Barnes Foundation", "The J. Paul Getty Museum",
    "The Metropolitan Museum of Art", "The Museum of Modern Art",
    "The Phillips Collection", "The Prado Museum", "The State Hermitage Museum",
    "The Tate Gallery", "Thussen-Bornemisza Museum", "Toledo Museum of Art"
  ]
};

// prettier-ignore
const nationalityInput = document.querySelector('input[id="nationality-select"]');
const yearInput = document.querySelector('input[id="year-select"]');
const artistInput = document.querySelector('input[id="artist-select"]');

// 1. Toast Logic
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

  // Remove toast after 5 seconds
  setTimeout(() => {
    toastContainer.removeChild(toast);
  }, 5000); // Toast disappears after 5 seconds
}

// 2. Autocomplete Logic
nationalityInput.addEventListener("input", function () {
  const query = nationalityInput.value.toLowerCase();

  if (query.length > 0) {
    const filteredNationalities = ARTWORK_VALUES.nationalities.filter(
      (nationality) => nationality.toLowerCase().includes(query)
    );

    // Generate toasts with the filtered nationalities
    generateToasts(filteredNationalities, true);
  }
});

artistInput.addEventListener("input", function () {
  const query = artistInput.value.toLowerCase();

  if (query.length > 0) {
    // Filter the artist names based on the input query
    const filteredArtists = ARTWORK_VALUES.artists.filter((artist) =>
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
  /* Function to display artwork */
  console.log(artwork);
  document.getElementById("artwork-image").src = artwork.image_url || "";
  document.getElementById("artwork-image-result").src = artwork.image_url || "";
  document.getElementById("artwork-artist").textContent = `${artwork.artist || "Unknown Artist"}`;
  document.getElementById("artwork-title").textContent = `${artwork.worktitle || "Untitled"}`;
  if (artwork.subject) {
    document.getElementById("subject").textContent = artwork.subject;
    document.getElementById("subject").style.display = "inline";
  }
  if (artwork.style) {
    document.getElementById("style").textContent = artwork.style;
    document.getElementById("style").style.display = "inline";
  }
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
  //   document.getElementById("score").innerHTML = totalScore;
  document.getElementById("result").style.display = "inline";
}

// Function to handle answer submission
function handleAnswer() {
  const artwork =
    globalartworkData[
      Math.round(
        (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      )
    ];

  switch (questionStep) {
    case 1:
      input = nationalityInput.value.toLowerCase();
      console.log(input);
      if (input == artwork.artist.toLowerCase()) {
        totalScore++;
      }

      break;
    case 2:
      input = parseInt(yearInput.value);
      console.log(input);
      if (input >= artwork.artist_born && input <= artwork.artist_dead)
        totalScore++;

      break;
    case 3:
      input = artistInput.value.toLowerCase();
      console.log(input);
      if (input == artwork.artist.toLowerCase()) totalScore++;

      break;
  }

  console.log("yes");

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

const shareData = {
  title: "Do you know this famous piece?",
  text: "See if you can figure out the artist faster than I did",
  url: "https://conoseur.github.io",
};

const sharebtn = document.getElementById("shareBTN");

sharebtn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
