function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}

const musicPlayer = document.createElement('div');
musicPlayer.className = 'music-player';
musicPlayer.innerHTML = `
  <nav>
    <button class="button-new-song"><i class="fa-solid fa-plus"></i> Add song</button>
  </nav>
    <div class="album-cover">
      <img src="../image/none.png" id="rotatingImage" alt="" />
      <span class="point"></span>
    </div>

    <h2>Name song</h2>
    <p>Band name</p>

    <audio id="song">
      <source src="/mp3/windows-error-sound.mp3" type="audio/mpeg" />
    </audio>

    <input type="range" value="0" id="progress" />

    <div class="controls">
      <button class="backward">
        <i class="fa-solid fa-backward"></i>
      </button>
      <button class="play-pause-btn">
        <i class="fa-solid fa-play" id="controlIcon"></i>
      </button>
      <button class="forward">
        <i class="fa-solid fa-forward"></i>
      </button>
    </div>
  </div>
`;

idObj("right-content", musicPlayer);