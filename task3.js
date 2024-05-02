const prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");

if (num % 2 == 0) {
    console.log("Число " + num + " є парним")
}else {
    console.log("Число " + num + " є не парним")
}