let words = ['anger', 'eat', 'panda','chicken']

let ans = [];
for(let w of words){
    ans.push(w.toUpperCase())
}

console.log(ans)


let count = [];

for (let w of words){
    count.push(w.length)
}

console.log(count);


// mapping / transformation
let products = [
{
    'SKU' : 'ACME_ANVIL',
    'cost' : 3.50
},

{
    'SKU' :'ACME_SCREWDRIVER',
    'cost' : 5.00
}
,

{
    'SKU' :'ACME_SCREWDRIVER',
    'cost' : 5.00
}

]


let sku = [];

for (let p of products){
    sku.push(p.SKU)
}

console.log(sku)


// let sku = [];
// for (let p of products){
//     sku.push(p.SKU)
// }
// console.log(sku);

// 2. FILTERING
// given an array, create a new array that contains elements
// from the original array provided that they meet certain requirements
let fruits = ['figs', 'apples', 'pears', 'strawberries', 'mangosteen', 'durains'];
let shortlisted = [];
for (let eachFruit of fruits) {
    if (eachFruit.length >=6) {
        shortlisted.push(eachFruit);
    }
}
console.log("Fruits with at least 6 characters =>", shortlisted);



let shortlistedProducts =[]
for(let p of products){
    if(p.cost >= 5){
        shortlistedProducts.push(p)
    }
}


console.log(shortlistedproducts)


//3. Reducing 
//summarize array to single value
// think of aggregating

let costs = [20,100,500, 40]
let total = 0
for (let c of costs){
    total += c
}

console.log(total)
let avgcost = total / costs.length

// find the longest fruits - longest length

let longestFruit = fruits[0];
for (let f of fruits){
    if(f.length > longestFruit.length){
        longestFruit = f
    }
}


console.log(longestFruits)