// let say Arthur has a loan of 10,000
// he pays back 1000 dollar per month
// interest rate per month is 2.5%
// how long will it take for arthur to pay back the loan
let loanAmount = 10000;
let repay = 500;
let interestRate = 0.025;
let months = 0;
while (loanAmount > 0 ) {
    let interest = interestRate * loanAmount;
    loanAmount += interest;
    loanAmount -= repay; // loanAmount = loanAmount - 1000
    months += 1;
}
console.log("Months needed to pay back =", months);