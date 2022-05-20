const prompt = require('prompt-sync')();
let name = prompt("Please enter your name: ");
while (name.length == 0) {
    name = prompt("Please enter your name: ");
}

