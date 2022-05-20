// ARRAY DESTRUCTURING
let x = [2,4,6,8,10];
// instead of the following:
// let a = x[0];
// let b = x[1];
// let c = x[2];
// let d = x[3];
// let e = x[4];
let [a,b,c,d,e] = x;
// => let [a,b,c,d,e] = [2,4,6,8,10]
// THERE'S NO NEED FOR ALL THE INDEX
let [q,r] = x;

// ARRAY SPREADING
let n1 = [-1, -2, -3];
let n2 = [2,4,6];
let m = [ ...n1, ...n2]
// => let m = [ -1, -2, -3, ...n2]
// => let m - [ -1, -2, -3, 2,4,6]