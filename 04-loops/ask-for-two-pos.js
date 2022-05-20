const prompt = require('prompt-sync')();
let x = 0; // assign x and y to be values that will cause the while loop to run at least once
let y = 0;
while( x <= 0 || y <=0) {
    x = parseInt(prompt("Please enter the first number"));
    // if the first number is already negative, no point asking for the second
    // number, so just skip and restart the loop again
    if(x <= 0) {
        continue;
    }
    y = parseInt(prompt("Please enter the second number"));
    
}
console.log("Sum of two positive numbers =", x + y);