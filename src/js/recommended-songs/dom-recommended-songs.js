function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}

const recommendedSongs = document.createElement('div');
recommendedSongs.innerHTML = `
<div class="recommended-songs">
<h1>Recommended Songs</h1>
<div class="song-container" id="song-container">
  
</div>
</div>`;
idObj("right-content", recommendedSongs);