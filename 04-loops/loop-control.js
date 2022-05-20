for (let i =0; i < 10; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
console.log("Loop ends");

for (let i =0; i < 5; i++) {
    for (let j=0; j <3;j++){
        console.log(i,j);
        if (j==1){
            break;
        }
    }
}

console.log("Break in the outer for loop")
for (let i =0; i < 5; i++) {
    for (let j=0; j <3;j++){
        console.log(i,j);
    }
    if (i==2){
        break;
    }
}