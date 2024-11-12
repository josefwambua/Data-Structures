function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 0; i <= num; i++) {
            sum = num1 + num2;  // Calculate the next Fibonacci number
            num1 = num2;         // Move num2 to num1 (shift the sequence)
            num2 = sum;          // Update num2 to the new sum
        }
        return num2;  // Return the nth Fibonacci number
    }
}

console.log("Fibonacci(5) :", fibonacci(5));  // Fibonacci(5): 3
console.log("Fibonacci(13) :", fibonacci(13));  // Fibonacci(13): 233