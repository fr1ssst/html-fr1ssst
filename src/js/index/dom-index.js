import data from "../../data/n_bands.json";

function createCarouselRotation(){
    const carouselRotation = document.createElement("div");
    carouselRotation.classList.add("carousel-rotation-direction");
    return carouselRotation;
}
function createCarouselItemWrapper(dataBase){
    const carouselItemWrapper = document.createElement("ul");
    carouselItemWrapper.classList.add("carousel-item-wrapper");
    carouselItemWrapper.style=`--_num-elements: ${dataBase.length};`;
    return carouselItemWrapper;
}
function createCarouselGround(){
    const carouselGround = document.createElement("li");
    carouselGround.classList.add("carousel-ground");
    return carouselGround;
}

function createItem(band, index){
    const carouselItem = document.createElement("li");
    carouselItem.classList.add("carousel-item");
    carouselItem.style = `--_index: ${index + 1}; --_image-url: url('${band.icon}')`;

    const carouselItemLink = document.createElement("a");
    carouselItemLink.target="_blank";

    carouselItem.onclick = () => {
        window.location.href = `band.html?id=${band.id}`;
    };

    carouselItem.appendChild(carouselItemLink);

return carouselItem;
}
////////////////////////////////ID///////////////////////////////////
function idCarousel(objA){
    let idCarousel = document.getElementsByClassName("carousel")[0];
    idCarousel.appendChild(objA);
    return idCarousel;
}
function idCarouselRotation(objA){
    let idCarouselRotation = document.getElementsByClassName("carousel-rotation-direction")[0]; //div
    idCarouselRotation.appendChild(objA);
    return idCarouselRotation;
}
function idCarouselItemWrapper(objA){
    let idCarouselItemWrapper = document.getElementsByClassName("carousel-item-wrapper")[0]; //ul
    idCarouselItemWrapper.appendChild(objA);
    return idCarouselItemWrapper;
}
////////////////////////////////////////////////////////////////////////

const carouselRotation = createCarouselRotation();
idCarousel(carouselRotation)

const carouselItemWrapper = createCarouselItemWrapper(data);
idCarouselRotation(carouselItemWrapper);

const carouselGround = createCarouselGround();
idCarouselRotation(carouselGround);

data.forEach((band, index) => {
    const item = createItem(band, index);
    carouselItemWrapper.appendChild(item);
});