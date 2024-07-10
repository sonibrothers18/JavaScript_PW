// function hello(){
//     console.log("Hello")
// }

// function mello(){
//     console.log("Mello")
// }

// setTimeout(hello, 3000) // 3 second after the run button is clicked
// setTimeout(mello, 1000) // 1 second after the run button is clicked

//! Another method if our function is small -->
// setTimeout(function(){
//     console.log("Mayur")
// }, 4000)

// for (let i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, (i)*1000)
// }

//todo Reverse printing -->
// for(let i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(6-i)
//     },i*1000)
// }

for(let i=1; i<=5; i++){
    setTimeout(function(){
        console.log(i)
    },(6-i)*1000)
}