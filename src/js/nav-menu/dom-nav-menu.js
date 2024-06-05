function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}

const navMenu = document.createElement('nav');
navMenu.className = 'main-menu';
navMenu.innerHTML = `
<div>
  <div class="user-info">
    <img
      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/37e5ccfa-f9ee-458b-afa2-dcd85b495e4e"
      alt="user" />
    <p>Jane Wilson</p>
  </div>
  <ul>
    <li class="nav-item active">
      <a href="#">
        <i class="fa fa-map nav-icon"></i>
        <span class="nav-text">Discover</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="#">
        <i class="fa fa-arrow-trend-up nav-icon"></i>
        <span class="nav-text">Trending</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="#">
        <i class="fa fa-compact-disc nav-icon"></i>
        <span class="nav-text">Album</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="#">
        <i class="fa fa-circle-play nav-icon"></i>
        <span class="nav-text">Playlist</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="#">
        <i class="fa fa-heart nav-icon"></i>
        <span class="nav-text">Favorites</span>
      </a>
    </li>
  </ul>
</div>

<ul>
  <li class="nav-item">
    <a href="#">
      <i class="fa fa-user nav-icon"></i>
      <span class="nav-text">Account</span>
    </a>
  </li>

  <li class="nav-item">
    <a href="#">
      <i class="fa fa-gear nav-icon"></i>
      <span class="nav-text">Settings</span>
    </a>
  </li>

  <li class="nav-item">
    <a href="logIn.html">
      <i class="fa-solid fa-right-to-bracket nav-icon"></i>
      <span class="nav-text">Log in</span>
    </a>
  </li>
</ul>
`;
idObj("main", navMenu);