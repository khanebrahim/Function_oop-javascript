// A function can be stored in an variable
function add(a,b){
    return a+b
}
sum=add
console.log(sum(4,7))

// A function can be stored in array
var arr =[]
arr.push(add)
console.log(arr)
console.log(arr[0](3,7))

//A function can be stored object
var obj = {
    sum:add
}
console.log(obj)
console.log(obj.sum(8,7))
//we can create function as need
setTimeout(function(){
    console.log('I have created')
} ,100)