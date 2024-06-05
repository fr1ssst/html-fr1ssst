import band from "../../data/n_bands.json"
import noneImg from "/public/image/none.png";

function getRandomSongs(data, n) {
    let randomSongs = new Set();
    while (randomSongs.size < n) {
        let randomBand = data[Math.floor(Math.random() * data.length)];
        let randomTrack = randomBand.tracks[Math.floor(Math.random() * randomBand.tracks.length)];
        if (!randomSongs.has(randomTrack)) {
            randomSongs.add(randomTrack);
        }
    }
    return Array.from(randomSongs);
}

function idObj(idObj, objA) {
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}
function formatDuration(duration) {
    if (!duration) return 'missing';
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function displaySongs(songs) {  
    songs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.classList.add('song');
            songElement.innerHTML = ` 
                <div class="song-img">
                    <img src="${song.iconTrack || noneImg}" alt="${song.name || ''}">
                        <div class="overlay">
                            <i class="fa-solid fa-play"></i>
                        </div>
                </div>
                <div class="song-title">
                    <h2>${song.name || 'missing'}</h2>
                    <p>${song.bandName || 'missing'}</p>
                </div>
                <span>4:33</span>
        `;
            idObj('song-container', songElement);
        })
}

const randomSongs = getRandomSongs(band, 9);
console.log(randomSongs);
displaySongs(randomSongs);