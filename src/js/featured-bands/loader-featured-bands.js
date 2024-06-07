import band from "../../data/n_bands.json";
import noneImg from "/public/image/none.png";

function getRandomBands(data, n) {
    let randomBands = new Set();
    while (randomBands.size < n) {
        let randomBand = data[Math.floor(Math.random() * data.length)];
        randomBands.add(randomBand);
    }
    return Array.from(randomBands);
}

function idObj(id, objA) {
    let classBox = document.getElementById(id);
    classBox.appendChild(objA);
}
function createItem(band){
    const bandElement = document.createElement('div');
    bandElement.classList.add('artist');

    const linkElement = document.createElement('a');

    linkElement.onclick = () => {
        window.location.href = `band.html?id=${band.id}`;
        window.location.target = '_blank';
    };

    const imageElement = document.createElement('img');
    imageElement.src = band.icon || noneImg;
    imageElement.alt = band.name || 'missing';
    linkElement.appendChild(imageElement);

    bandElement.appendChild(linkElement);

    const nameBand = document.createElement('p');
    nameBand.textContent = band.bandName || 'missing';
    bandElement.appendChild(nameBand);

    return bandElement;
}

function displayBands(bands) {
    bands.forEach(band => {
        const item = createItem(band);
        idObj('band-container', item);
    });
}

const randomBands = getRandomBands(band, 4);
console.log(randomBands);
displayBands(randomBands);
