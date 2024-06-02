import "../css/style.css";
import imgCube from '/public/image/cube.png'
import dataBase from "../data/database.json";

function createObj(element, text, parent){
    const objA = document.createElement(element);
    objA.textContent = text;

    parent.appendChild(objA);
    return objA;
}
function createImg(src, parent){
    const img = document.createElement('img');
    img.src = src;

    parent.appendChild(img);
    return img;
}

const div = createObj('div', "I'm div", document.body);
const img = createImg(imgCube, div);
const ul = createObj('ul', "Data from the database:", div);
const liOne = createObj('li', dataBase.name, ul);
liOne.classList.add('li-style');
const liTwo = createObj('li', dataBase.surname, ul);
const liThree = createObj('li', dataBase.age ,ul);
const liFour = createObj('li', dataBase.description, ul);