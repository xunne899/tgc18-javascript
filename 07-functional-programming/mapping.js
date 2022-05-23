// map() return new array 

let names = ['susan', 'andy', 'andrew','dominic', 'daniel']
let uppercase = [];
for (let n of names){
    uppercase.push(n.toUpperCase())
}

console.log(uppercase)


//functional mapping
let u2 = names.map(function(element){
    return element.toUpperCase()
})

console.log(u2)

// filtering


let food = [
    {
        'name':'Roti prata',
        'calorie': 600
    },
    {
        'name':'Salad with no dressing',
        'calorie': 200
    },
    {
        'name':'KFC Fried Chicken Three Piece Meal',
        'calorie': 1000
    },
    {
        'name':'Raw Fish',
        'calorie': 220
    }
]



// if return is true it will be in new array 
let diet2 = food.filter(function(element){
    return element.calorie < 500
    })



// iterative

let diet = [];

for (let f of food){
    if (f.calorie < 500){
        diet.push(f)
    }
}

console.log(diet)
console.log(diet2)

// reducing
let numbers = [2,4,,6,8,9];
let total = 0 
for (let n of  numbers){
    total +=n
}

console.log(total)

let reducer = function (number,soFar){
    return number + soFar
}

let total2 = numbers.reduce(reducer, 0)

