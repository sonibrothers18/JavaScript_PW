// function that are pass in another function is called callBack function.

function product(a,b,c){
    return a*b*c
}

function callBack(x,y){
    return x-y
}

console.log(callBack(product(2,1,3), 3))