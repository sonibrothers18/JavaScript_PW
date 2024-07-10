let a = [2,4,3,12]
console.log(a)

let b = []
for (const element of a){
    b.push(element*2)
}
console.log(b)

//! map -->

function add(element){
    return element+2
}
let c = a.map(add)
// a = a.map(add) // we can do changes in itself also
console.log(c)

let d = a.map((element) => { // we can write function also
    return element*element
})
// todo let d = a.map(element => element*element) // shortcut
console.log(d)