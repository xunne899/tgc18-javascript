// methods are basically functions that are attached to an object
// strings are an object and they have their own functions

// 1. transformation
let message = "She sells seashell at the seashore";
console.log(`message.toUpperCase() =>`, message.toUpperCase());

// trim() will remove white spaces to the left and right
let n = "   abcdef";
console.log(`n.trim() =>`, n.trim());

// STRINGS ARE IMMUTABLE. When we use those functions, the original
// strings is unchanged. Those functions will return a copy of their
// original string which has been transformed.

// 2. query
let m="billy ben bendict bond blake";
console.log("Does m have ben =>", m.includes('ben'));
console.log("Does m have cindy =>", m.includes('cindy'));
console.log("Where can we find bond? =>", m.indexOf('bond'));
console.log("Where can we find billy? =>", m.indexOf('billy'));
// if we use indexOf to look for a substring that is not found,
// the function will return -1
console.log("Where can we find cindy? =>", m.indexOf('cindy'));

// STRINGS ARE CASE SENSITIVE IN JAVASCRIPT
console.log("Is BILLY in m? =>", m.includes("BILLY"));

// startsWith
let mothership = "https://www.mothership.sg";
console.log(`mothership.startsWith('https') =>`, mothership.startsWith('https'));

// SPLIT
// will take a string and create an array from it
// 
let fruits = "apples,oranges,bananas";
let a = fruits.split(',') // each item between a comma will become 
                          // one item in the array
console.log(a);

let date = "25-12-2022";
let chunks = date.split('-');
console.log("Day =", chunks[0]);
console.log("Month =", chunks[1]);
console.log("Year =", chunks[2]);

// CONCATENATE STRINGS TOGETHER
// "add two strings"
console.log("Mr." + " Tan Ah Kow");
console.log(1 + ""); // ==> console.log("1");
// correct way: console.log(String(1));