// Objects are like hashmap/dictionary where we have key-values pairs
// We can give spaces in keys by using comma

let x = { // x is the object
    name: "mayur",
    "nick name": "alex",
    age: 19,
    percentage: 80.4,
    isMarried: false
}

console.log(x)
console.log(x.name, x["nick name"], x.isMarried)
console.log(x['percentage']) // can also be written as

// changing values
x.age = 30
console.log(x)

//! ForIn loop -->
for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)){ // we can also remove condition
        console.log(key, x[key])
    }
}