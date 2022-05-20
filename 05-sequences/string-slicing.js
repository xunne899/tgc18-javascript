let s = "jack and jill went up the hill";
console.log(s[7]); // => s[7] will simplify whatever is at index 7
// for (let char of s) {
//     console.log(char);
// }
// for (let i = 0; i < s.length; i++){
//     console.log(i, s[i]);
// }

// IMMUTABLE => cannot be changed
// strings are immutable and their content cannot be changed
s[0] = 'Z'; // => s won't be changed 'cos strings are immutable
console.log(s);

// SLICING - allows us to get a range of characters from a string

let message = "HELLO WORLD";
// slice will take in one or two arguments
console.log("message.slice(2,5) =>", message.slice(2, 5)); 
console.log("message.slice(4,6) =>", message.slice(4,6));
console.log('message after slicing =>', message);
message = message.toLowerCase();
// => message = "HELLO WORLD".toLowerCase();
// => message = "hello world"
console.log(message);

// SLICE STRINGS WITH ONE ARGUMENT
// assume start from that index and all the way to the end
console.log("message.slice(7)=>",message.slice(7)); // same as message.slice(7, end of string)

console.log('message.length =>', message.length);

// slice with a negative index, negative index backward
// the last character is -1
console.log(message.slice(-3));
console.log(message.slice()); // make a copy of the string