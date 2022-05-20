// declare an array
let a = Array();
let b = [];

// we can add to an array using push
b.push(99);
console.log(b);

let rojak = [42, 3.14, "rojak", true, [1,2,3], {a:1, b:2, c:3}];

let holidays = ['National Day', 'Christmas', 'Chinese New Year', 'Hari Raya', 'Deepavali'];
console.log(`holidays.includes('National Day') =>`, holidays.includes('National Day'));
console.log(`holidays.includes('Thanksgiving') =>`, holidays.includes('Thanksgiving'));

holidays.push('Vesak Day');
console.log("After pushing Vesak Day =>", holidays)

// let m = "apples";
// m = m.toUpperCase();
// console.log(m);

// holidays = holidays.push("Teacher's Day");
// console.log(holidays);

for (let h of holidays) {
    console.log(h)
}

for (let i =0; i < holidays.length; i++) {
    console.log(holidays[i]);
}

let numbers = [4,12,8,15,7,10,11,13,21];
for (let item of numbers) {
    if (item % 3 == 0) {
        console.log(item);
    }
}
for (let i = 0; i < numbers.length; i++) {
    if (i%2==0) {
        console.log(numbers[i]);
    }
}