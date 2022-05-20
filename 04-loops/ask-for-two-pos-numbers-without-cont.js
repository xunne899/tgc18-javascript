const prompt = require('prompt-sync')();
let x = 0;
let y = 0;
while(x <= 0 || y <=0) {
    x = parseInt(prompt("Please enter the first number: "))
    if (x > 0) {
        y = parseInt(prompt("Please enter the second number: "));
    }
}