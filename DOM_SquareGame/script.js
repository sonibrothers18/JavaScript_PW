let s1 = document.getElementById("sq1")
let s2 = document.getElementById("sq2")
let s3 = document.getElementById("sq3")
let s4 = document.getElementById("sq4")

//todo Box 1 -->
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100)
    s1.innerHTML = `<h1>${r}</h1>`
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = "<h1>1</h1>"
})

//todo Box 2 -->
let clr = "green"
s2.addEventListener("mouseenter", function(){
    if(clr == "green"){
        s2.style.background = "green"
        clr = "red"
    }
    else{
        s2.style.background = "red"
        clr = "green"
    }
})
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor = "white"
})

//todo Box 3 -->
s3.addEventListener("mouseenter", function(){
    let r1 = Math.floor(Math.random()*256) // generates 0 to 255
    let r2 = Math.floor(Math.random()*256)
    let r3 = Math.floor(Math.random()*256)
    s3.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`
})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white"
})

//todo Box 4 -->
s4.addEventListener("click", function(){
    let r1 = Math.floor(Math.random()*256) // generates 0 to 255
    let r2 = Math.floor(Math.random()*256)
    let r3 = Math.floor(Math.random()*256)
    s1.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`
    s2.style.backgroundColor = `rgb(${r3}, ${r1}, ${r2})`
    s3.style.backgroundColor = `rgb(${r2}, ${r3}, ${r1})`
})
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white"
    s2.style.backgroundColor = "white"
    s3.style.backgroundColor = "white"
})

//todo Moveable Cursor -->
let main = document.getElementById("main")
let cursor = document.getElementById("cursor")
main.addEventListener("mousemove", function(details){
    console.log(details.x, details.y) //! Tell the coordinates of cursor on console
    cursor.style.left = details.x + "px"
    cursor.style.top = details.y + "px"
})