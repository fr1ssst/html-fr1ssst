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

function displaySongs(songs) {
    const container = document.createElement('div');
    container.classList.add('song-container');
    
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <div class="song-img">
                <img src="${song.iconTrack || noneImg}" alt="${song.name || ''}">
            </div>
            <div class="song-title">
                <h2>${song.name || 'The song is missing'}</h2>
            </div>
            <div class="song-artist">
                <p>Duration: ${song.duration || 'Missing'} seconds</p>
            </div>
        `;
        container.appendChild(songElement);
    });
    
    idObj('song-container', container);
}

const randomSongs = getRandomSongs(band, 7); // Вибираємо 5 випадкових пісень
console.log(randomSongs);
displaySongs(randomSongs);