function evenOut(element){
    if(element%2 != 0) return true
    else return false
}

a = [1,9,8,14,2,85]
console.log(a)

b = a.filter(evenOut)
console.log(b)

// c = a.filter(function(element){
//     if(element%2 == 0) return true
//     else return false
// })

// c = a.filter(function(element){
//     return(element%2 == 0)
// })

c = a.filter(element => (element%2 == 0))
console.log(c)