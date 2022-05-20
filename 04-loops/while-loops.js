// the while loop repeats whatever is inside
// its block
// the loop sentinel (aka the condition) must
// eventually evaluate to false
let x = 0;
while (x < 10) {
    console.log("She sells seashell at the seashore");
    console.log("Jack and Jill went up the hill");
    x += 1;
}

// 4 things you need to know before writing the while loop
// 1. what are we repeating?
// 2. what is the condition for the loop to stop?
// 3. what is the loop sentinel variable and its starting value
// 4. how will the loop sentinel variable changes so that eventually it will be false

// example: console.log numbers from 5 to 15
// 1. repeating: console.log
// 2. when the number reaches higher than 15
// 3. starts from 5
// 4. increase the sentinel variable by 1
let y = 5;
while(y < 16){
    console.log(y);
    y = y+1;
}

// print numbers from 0 to 9
let i =0;
while(i < 10) {
    console.log(i);
    i++; // i =  i + 1
