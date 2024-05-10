const prompt = require('prompt-sync')();

const cats = [{
    name: "Luca",
    catAge: 3,
    peopleAge: 28, //3 роки кішки = 28 років людини
    health: 3,
    maxHp: 9,
    color: "White",
    bread: "European shorthair",
    character: "Friendly cats that enjoy spending time with their family",
    advantages: "Slender body and good friends with humans",
   }, {
    name: "Coal",
    catAge: 7,
    peopleAge: 44, //7 роки кішки = 44 років людини
    health: 7,
    maxHp: 9,
    color: "Black",
    bread: "Persian cat",
    character: "Sweet, gentle and patient",
    advantages: "Excellent eyesight and sense of smell",
   }];

   cats.forEach((item, index)=> {
    console.log(
        "\n        Cat - " + index + ":" +
        "\nName: " + item.name + 
        "\nCat age: " + item.catAge +
        "\nPeople age: " + item.peopleAge +
        "\nHealth: " + item.health +
        "\nMax Hp: " + item.maxHp +
        "\nColor: " + item.color +
        "\nBread: " + item.bread +
        "\nCharacter: " + item.character +
        "\nAdvantages: " + item.advantages
    );
   });