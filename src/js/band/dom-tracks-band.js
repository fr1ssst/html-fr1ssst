function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}

const recommendedSongs = document.createElement('div');
recommendedSongs.className = 'recommended-songs';
recommendedSongs.innerHTML = `
    <h1>Tracks</h1>
        <div class="song-container" id="song-container">
        </div>`;
idObj("right-content", recommendedSongs);