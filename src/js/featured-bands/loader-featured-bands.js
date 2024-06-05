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

function displayBands(bands) {
    bands.forEach(band => {
        const bandElement = document.createElement('div');
        bandElement.classList.add('artist');
        bandElement.innerHTML = `
            <img src="${band.icon || noneImg}" alt="${band.name || 'missing'}">
            <p>${band.bandName || 'missing'}</p>
        `;
        idObj('band-container', bandElement);
    });
    

}

const randomBands = getRandomBands(band, 4);
console.log(randomBands);
displayBands(randomBands);
