function fibonacci(num, memo = {}) {
    // Base cases
    if (num === 1) return 0;
    if (num === 2) return 1;

    // Check if result already computed and stored in memo
    if (num in memo) return memo[num];

    // Compute the Fibonacci number and store it in the memo
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

    return memo[num];
}

console.log("Fibonacci(5) :", fibonacci(5));  // Output: 3
console.log("Fibonacci(13) :", fibonacci(13));  // Output: 233

// The recursive approach is inefficient for large numbers because it recalculates Fibonacci numbers multiple times. For example, fibonacci(5) will call fibonacci(3) multiple times. This leads to exponential time complexity, which is inefficient for larger inputs.

// To optimize it, we could use memoization (storing the results of previously computed Fibonacci values) to avoid redundant calculations.