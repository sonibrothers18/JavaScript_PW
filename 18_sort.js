let a = [12,54,-75,35,4,2]
console.log(a)

//! sort by place value
a = a.sort()
console.log(a)

//todo Ascending order sort -->
a = a.sort(function(a,b){
    return a-b
})
console.log(a)

//todo Decreasing order sort -->
a = a.sort(function(a,b){
    return b-a
})
console.log(a)

//todo sort ingnoring "-" sign -->
a = a.sort(function(a,b){
    return Math.abs(a) - Math.abs(b)
})
console.log(a)