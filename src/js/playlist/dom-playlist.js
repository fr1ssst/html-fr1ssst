function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}

const playlist = document.createElement('div');
playlist.className = 'slider-container';
playlist.innerHTML = `
<h1>Popular Playlist</h1>
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/95b52c32-f5da-4fe6-956d-a5ed118bbdd2" />
      <div class="slide-overlay">
        <h2>Midnight Moods</h2>
        <button>
          Listen Now <i class="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </div>
    <div class="swiper-slide">
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6ddf81f5-2689-4f34-bf80-a1e07f14621c" />
      <div class="slide-overlay">
        <h2>Party Starters</h2>
        <button>
          Listen Now <i class="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </div>
    <div class="swiper-slide">
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ab52d9d0-308e-43e0-a577-dce35fedd2a3" />
      <div class="slide-overlay">
        <h2>Relaxing Tones</h2>
        <button>
          Listen Now <i class="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </div>
    <div class="swiper-slide">
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/20c8fdd5-9f4a-4917-ae90-0239a52e8334" />
      <div class="slide-overlay">
        <h2>Smooth Jazz Journey</h2>
        <button>
          Listen Now <i class="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </div>
    <div class="swiper-slide">
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/df461a99-2fb3-4d55-ac16-2e0c6dd783e1" />
      <div class="slide-overlay">
        <h2>Uplifting Rhythms</h2>
        <button>
          Listen Now <i class="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>`;
idObj("left-content", playlist);