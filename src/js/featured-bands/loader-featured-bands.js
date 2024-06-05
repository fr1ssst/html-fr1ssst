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
        bandElement.innerHTML = `
            <img src="${band.icon || noneImg}" alt="${band.name || 'missing'}">
            <a href="band.html">fds</a>
            <p>${band.bandName || 'missing'}</p>
        `;
    /*const carouselItem = document.createElement("li");
    carouselItem.classList.add("carousel-item");
    carouselItem.style = `--_index: ${index + 1}; --_image-url: url('${band.icon}')`;

    const carouselItemLink = document.createElement("a");
    carouselItemLink.target="_blank";

    carouselItem.onclick = () => {
        window.location.href = `band.html?id=${band.id}`;
    };

    carouselItem.appendChild(carouselItemLink);

return carouselItem;*/
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
