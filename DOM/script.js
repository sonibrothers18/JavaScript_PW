//! selection -->
// let x = document.querySelector("h1") // select only first "h1"
// console.log(x)

// let y = document.querySelectorAll("h1") // select all "h1"
// console.log(y)

// let z = document.querySelectorAll(".yes") // select all "yes classes"
// console.log(z)

//todo ---------------------------------------------------------------------------- 

// let x = document.querySelector("h2")
// x.style.color = "red"

// let y = document.querySelector("h1")
// y.innerHTML = "Changed" // change HTML in browser
// setTimeout(function(){
//     y.style.backgroundColor = "yellow"
// }, 2*1000)

//todo event listeners -->

let x = document.getElementById("ele1") // we can also use querySelector("#ele1")
let y = document.getElementById("ele2")
let z = document.getElementById("ele3")

x.addEventListener("click", function(){ //dblclick
    x.style.color = "yellow"
    x.style.backgroundColor = "red"
})

y.addEventListener("mouseenter", function(){ //mousemove
    y.style.color = "white"
    y.style.backgroundColor = "orange"
})

y.addEventListener("mouseleave", function(){
    y.style.color = "black"
    y.style.backgroundColor = "white"
})

y.addEventListener("click", function(){
    z.style.color = "white"
    z.style.backgroundColor = "purple"
})