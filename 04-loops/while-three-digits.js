const prompt = require('prompt-sync');
let number = parseInt(prompt("Enter a three digit numbers"));

// what we want:
// number >= 100 && number <= 999
while(number < 100 || number > 999){
    number = parseInt(prompt("Enter a three digit numbers"))
}