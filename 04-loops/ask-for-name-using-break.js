const prompt = require('prompt-sync')();
let name = prompt("Please enter your name: ");
while(true){
    if (name.length > 0) {
        break;
    }
    name = prompt("Please enter your name: ");
}
console.log("Welcome,", name);