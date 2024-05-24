let response = fetch('../data/n_bands.json');

function createCirclesWrapper(){
    const circles = document.createElement("div");
    circles.classList.add("circles");
    return circles;
}
function createCircles(){
    const circleOne = document.createElement("div");
    circleOne.classList.add("circle");
    circleOne.classList.add("circle-1");
    const circleTwo = document.createElement("div");
    circleTwo.classList.add("circle");
    circleTwo.classList.add("circle-2");
    return {circleOne, circleTwo};
}
function createLogo(){
    const logo = document.createElement("div");
    logo.classList.add("logo");
    return logo;
}
function createImg(){
    const img = document.createElement("img");
    return img;
}
///////////////////////////////////////////////////////ID/////////////////////////////
function classBox(objA){
    let classBox = document.getElementsByClassName("box")[0];
    classBox.appendChild(objA);
}
function idMdl(objA){
    const idMdl = document.getElementById("mdl");
    idMdl.appendChild(objA);
}
function classCircles(objA){
    let classCircles = document.getElementsByClassName("circles")[0];
    classCircles.appendChild(objA.circleOne);
    classCircles.appendChild(objA.circleTwo);
}
function idCard(objA){
    const classCard = document.getElementById("card");
    classCard.appendChild(objA);
}
function idForm(objA){
    let idForm = document.getElementById("form");
    idForm.appendChild(objA);
    return idForm;
}
////////////////////////////////////////////////////////////////////////////
function dataLoader(response){
    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');

        response
            .then(dataBand => dataBand.json())
            .then(data => {
                const item = data.find(item => item.id == itemId);
                const container = document.getElementById('container');
                if (item) {
                    const div = document.createElement('div');
                    const logo = createLogo();
                    const followersInMillions = parseFloat(item.followersYTMusic) / 1000000;
                    logo.innerHTML = `
                        <img src="${item.icon}" alt="logo_band">
                        <h3>${item.bandName} ${item.fullBandName}</h3>
                    `;
                    div.appendChild(logo);
                    
                    const participantsNonsl = item.participants.filter(
                        participant => participant !== item.soloist && participant.trim() !== ''
                    )
                    const members = document.createElement('div');
                    members.innerHTML = `
                        <p>Followers: ${followersInMillions.toFixed(2)} millions</p>
                        <p>Solist: ${item.soloist}</p>
                        <p>Participants: ${participantsNonsl.join(', ')}</p>
                    `;
                    div.appendChild(members);

                    const tracksListDiv = document.createElement('div');
                    tracksListDiv.innerHTML = `
                        <ul id="tracks-list">Recommended tracks:</ul>
                    `;
                    div.appendChild(tracksListDiv);
                    const tracksList = div.querySelector('#tracks-list');
                        item.tracks.forEach(track => {
                            const minutes = Math.floor(track.duration / 60);
                            const seconds = track.duration % 60;

                            const trackItem = document.createElement('li');
                            const a = document.createElement('a');
                            a.href = track.linkTrack;
                            a.textContent = `${track.name} ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                            const img = document.createElement("img");
                            img.classList.add("image");
                            img.src=`${track.iconTrack}`;

                            trackItem.appendChild(a);
                            trackItem.appendChild(img);
                            tracksList.appendChild(trackItem);
                        });
                        container.appendChild(div);
                    } else {
                        container.textContent = 'Item not found';
                    }})
            .catch(error => console.error('Error:', error));
    });
}

const circlesWrapper = createCirclesWrapper();
idMdl(circlesWrapper);

const circles = createCircles();
classCircles(circles);

dataLoader(response);