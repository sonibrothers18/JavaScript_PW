function OnetoN(n){
    for(i=1; i<=n; i++)
        console.log(i)
        console.log()
}

OnetoN(5)
OnetoN(10)

//todo Important Build-In functions -->

console.log(Math.abs(-5.2))
console.log(Math.max(-5, -1))
console.log(Math.min(-5,-1,-7))
console.log(Math.pow(3.14, 3.14))
console.log(Math.sqrt(25))
console.log(Math.cbrt(8))
console.log(Math.log10(10))
console.log(Math.floor(5.3))
console.log(Math.floor(-5.3)) // don't remove decimal but give greatest integer
console.log(Math.ceil(8.3))
console.log(Math.random()) // random number between 0 to 1

//! Random integer number between 0 to 9
let a = Math.floor(Math.random()*10)
console.log(a)

//  HOME WORK -->
// program to generate random number between 0 to 10
// program to generate random number between -10 to 10