function factorial(n){
    var i =1;
    var factorial=1;
    while(i<n){
        factorial= factorial*i;
        i++;
    }
    return factorial;
    
}
var result = factorial(9);
console.log(result);