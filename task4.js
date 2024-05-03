const prompt = require("prompt-sync")();
let year = prompt("Enter a year: ");
let date = new Date(year, 2, 0);

if (date.getDate() == 29) {
	console.log(date.getFullYear() + " leap year," + " days in February " + date.getDate());
} else {
    console.log(date.getFullYear() + " normal year," + " days in February " + date.getDate());
}