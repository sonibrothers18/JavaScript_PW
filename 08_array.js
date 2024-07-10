arr = [1,41,18,3]
console.log(arr)
n = arr.length
console.log(n)

arr.push(89, 0)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(20) // add element at start
console.log(arr)
arr.shift() // remove element from start
console.log(arr)

// In const arr we can add, remove, and change the values at different indexs but can not change it's type. Example -->
// const a = [15,2,4,0,54]
// a = 3.2

a = [[4,2,6], [1,2,5,43,4]]
console.log(a)

console.log(typeof a)

//! ForOf loop --> 
// can't use index
// does'nt change the actual value of array
x = [5,78,53,36,21]
for (const element of x) {
    console.log(element)
}

//! ForEach loop -->
y = [5,78,53,36,21]
y.forEach((element, i, y) => {
    console.log(element,i,y)
});