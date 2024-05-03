const prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");

if (num % 2 == 0) {
    console.log("Number " +num + " even")
}else {
    console.log("Number " + num + " not even")
}