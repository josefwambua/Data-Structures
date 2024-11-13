const fib = function(n){
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2); 
}

// n = 3 => fib(3-1= 2)=>fib2  + fib (3-2  = 1) , fib(1);

//fib(2) => 0 + 1 => 1
// calculating fib(2)
// fib(n-1) => 2-1 = 1 
//  Adding to to fib 1 result, we get 2

console.log(fib(10));
//outputs 2