/* for loops */
// i++ ==> i += 1 ==> i = i + 1
for (let i =0; i < 10; ++i) {
    console.log(i);
}

// count from 10 to -5
for(let i =10; i >= -5; --i){
    console.log(i);
}

let a = parseInt(prompt("Enter start: "));
let b = parseInt(prompt("Enter end:"));
for (let i = a; i < b; i++){
    console.log(i)
}
