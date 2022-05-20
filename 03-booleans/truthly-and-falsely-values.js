// any numbers that is not 0 is considered as true!
// so || operator will simplfy to the first TRUTHLY value
console.log(3 || 4);  // => 3
console.log(4 || 3); //  => 4
console.log(false || 4); // => 4
console.log(4 || false); // => 4
console.log(0 || 4); // => 4
console.log(0 || false || 2); // => 2
console.log("AND Examples");
console.log("3 && 4 =>", 3 && 4);
console.log("3 && false =>", 3 && false);