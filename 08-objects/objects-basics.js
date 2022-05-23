// objects are containers that cn have a function and data

//
// objects are containers that can have function and data
let dog = {
    name:'Ah Kow', // data
    vaccines:['Rabies', 'Heartworms'],
    'date-of-birth':'21/12/2021',
    'bark':function(){
        console.log("woof woof");
    }
}

// console.log(dog.date-of-birth)
console.log(dog.bark)
console.log(dog['name'])
console.log(dog.vaccines)
console.log(dog['date-of-birth'])

dog.bark();

let bill = {
    'total': 300,
    'calculateGST' : function(){
        return 0.07 *this.total
    }
}

console.log(bill.calculateGST())

//if not valid variable name need bracket like ['date-of-birth']
bill.tips =30
bill.product = "soap"

console.log(bill);
