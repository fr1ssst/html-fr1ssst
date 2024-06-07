import band from "../../data/n_bands.json";
import noneImg from "/public/image/none.png";

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

function displaySongs(band,songs) {
    const container = document.getElementById('song-container');
    if (!container) return;

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
                <p>${band.bandName || 'missing'}</p>
            </div>
            <span>${formatDuration(song.duration)}</span>
        `;
        idObj('song-container', songElement);
    });
}

function songsLoader(dataBase) {
    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const bandId = params.get('id');
        const band = dataBase.find(b => b.id == bandId);
        
        if (band && band.tracks) {
            displaySongs(band, band.tracks);
        } else {
            const container = document.getElementById('song-container');
            if (container) {
                container.textContent = 'No songs found for this band';
            }
        }
    });
}

songsLoader(band);
