console.log(true);
console.log(false);
// comparsion operators
console.log("45 > 50 =", 45 > 50);
console.log("45 >= 50 =", 45 >= 50);
console.log("50 == 50 =", 50 == 50);
console.log('"50 == 50 =', "50" == 50);
console.log(`50 === "50" =>`, 50 === "50");
console.log(`50 === parseInt("50")) =>`,50 === parseInt("50"));
// logical operators
// focus on `and`, `or`
let isLockdown = false;
let isVaccinated = true;
if (isLockdown == false || isVaccinated == true) {
    console.log("Can eat at coffeeshop")
}
// summarized as
if (isLockdown || isVaccinated) {
    console.log("Can eat at coffeeshop");
}

console.log("true && false =>", true && false);
console.log("false && true =>", true && false);
console.log("false && false =>", true && false);
console.log("true && true =>", true && false);

let userName = 'ahkow';
let password = "rotiprata";

if (userName == 'ahkow' && password == 'rotiprata' || userName=='admin'){
    console.log("Welcome back");
}

if ( userName=='admin' || userName == 'ahkow' && password=="rotiprata"){
    console.log("Welcome back");
}

// negation
let isHungry = true;
console.log(`!isHungry =>`, !isHungry);