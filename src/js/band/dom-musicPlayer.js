import data from "../../data/n_bands.json";


const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const rotatingImage = document.getElementById("rotatingImage");
const songName = document.querySelector(".music-player h2");
const artistName = document.querySelector(".music-player p");

let rotating = false;
let currentRotation = 0;
let rotationInterval;
let currentSongIndex = 0;
let songs = [];
let filteredSongs = [];

 function fetchSongs() {
  data.forEach(band => {
    band.tracks.forEach(track => {
      songs.push({
        id: band.id,
        title: track.name,
        name: band.bandName,
        source: track.source,
        cover: track.iconTrack
      });
    });
  });
  const bandId = getBandId();
  if (bandId) {
    filterSongsByBand(bandId);
    updateSongInfo();
  }
}
function getBandId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}
function filterSongsByBand(bandId) {
  filteredSongs = songs.filter(song => song.id === bandId);
}

function startRotation() {
  if (!rotating) {
    rotating = true;
    rotationInterval = setInterval(rotateImage, 50);
  }
}

function pauseRotation() {
  clearInterval(rotationInterval);
  rotating = false;
}

function rotateImage() {
  currentRotation += 1;
  rotatingImage.style.transform = `rotate(${currentRotation}deg)`;
}

function updateSongInfo() {
  if (filteredSongs.length === 0) return;
  songName.textContent = filteredSongs[currentSongIndex].title;
  artistName.textContent = filteredSongs[currentSongIndex].name;
  song.src = filteredSongs[currentSongIndex].source;
  rotatingImage.src = filteredSongs[currentSongIndex].cover;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

song.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;
  updateSongInfo();
  playPause();
});

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

function playPause() {
  if (song.paused) {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
    startRotation();
  } else {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
    pauseRotation();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
  startRotation();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
  updateSongInfo();
  playPause();
});

fetchSongs();