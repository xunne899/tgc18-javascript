let isRaining = true;
let isHoldiay = false;
let isWeekend = false;

function foobar() {
    console.log("Foobar() is called");
    return true;
}

// we go swimming if it is not raining and is a weekend
// logical AND short circuit happens here
// foobar() won't be called because isWeekend simplifies to false
// false && whatever is false, so JS justs skip the rest
if (isWeekend && foobar()) {
    console.log("Go swimming");
}

// logical short circuit for OR
// if (isRaining || isWeekend || isHoliday) {
//     console.log("Sleep in");
// }

if (isRaining || foobar()) {
    console.log("Sleep in");
}


