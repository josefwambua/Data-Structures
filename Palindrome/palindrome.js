// Palindrome is an integer which is the same when read backwards and forward. eg a number like 121 its same on reversing it.


// Function to check if a number is a palindrome
const isPalindrome = function(number) {
     return  number < 0 ? false : number === +number.toString().split("").reverse().join("");
};

const result = isPalindrome(10);
console.log(result);
const palindromic = isPalindrome(121);
console.log(palindromic);