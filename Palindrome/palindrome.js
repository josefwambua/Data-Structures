// Palindrome is an integer which is the same when read backwards and forward. eg a number like 121 its same on reversing it.


// Function to check if a number is a palindrome


const isPalindrome = function(x){
     return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

console.log(isPalindrome(110));