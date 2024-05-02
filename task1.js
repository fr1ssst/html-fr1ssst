const prompt = require("prompt-sync")();
let numOne = prompt("Enter a first number: ");
let numTwo = prompt("Enter a second number: ");

if (numOne>numTwo) {
    console.log(numOne + " більше за " + numTwo)
} else if(numOne<numTwo){
    console.log(numTwo + " більше за " + numOne)
}
else if(numOne==numTwo){
    console.log(numOne + " дорівнює " + numTwo)
}