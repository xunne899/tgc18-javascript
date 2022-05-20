// to use prompt()  in VSC or gitpod, we have to install it
// at the terminal, type in `yarn add prompt-sync`
const prompt = require('prompt-sync')();
// let numberOfPeople = parseInt(prompt("Please enter the number of people"));
// if (numberOfPeople) {
//    console.log("Welcome");
// } else {
//     console.log("Goodbye")
//     process.exit(); // end the program
// }
// contuine

// let name = prompt("Please enter your name:");
// empty strings are eqv to false
// "" --> empty strings
// if (!name) {
//     // => !""
//     // => !false
//     // => true
//     console.log("You didn't your name")
// }

// let number = parseFloat("Three Point One Four");
// if (!number) {
//     console.log("Number is invalid")
// }

let gender = prompt("Please enter your gender");
// gender = gender || "N/A";
// assuming the user just press enter, gender will store an empty string -- ""
// gender = gender || "N/A"
// gender = "" || "N/A"
// gender = false || "N/A"
// gender = "N/A"

// alternatively:
// if (gender == "") {
//     gender = "N/A";
// }

// if (!gender) {
//     gender = "N/A";
// }

// if empty string is given string and stored in gender
console.log(gender && "Hello Mr or Mrs. whatever");
// => console.log("" && "Hello Mr. or Mrs. Whatever")
// => console.log(false && "Hello Mr. or Mrs. Whatever")
// => console.log(false)