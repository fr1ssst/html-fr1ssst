const prompt = require("prompt-sync")();
let numOne = prompt("Enter a first number: ");
let numTwo = prompt("Enter a second number: ");

if (numOne>numTwo) {
    console.log(numOne + " more than " + numTwo)
} else if(numOne<numTwo){
    console.log(numTwo + " less за " + numOne)
}
else if(numOne==numTwo){
    console.log(numOne + " is equal to " + numTwo)
}