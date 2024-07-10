//! Changing innerHTML many times-->
// let main = document.getElementById("main")
// let s = ""
// for(let i=1; i<=10; i++){
//     s += "<h1>My name is Mayur</h1>"
// }
// main.innerHTML = s

//todo Making multiple cards -->
let main = document.getElementById("main")
let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
let s = ""
for(let i=1; i<=65; i++){
    r = Math.floor(Math.random()*imgArray.length)
    s += `<div class="cards"><img src="${imgArray[r]}" alt="ERROR!"></div>`
}
main.innerHTML = s