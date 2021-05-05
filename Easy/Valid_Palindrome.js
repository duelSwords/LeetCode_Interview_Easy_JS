// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


let s = "race a car"

var isPalindrome = function(s) {

    let arr = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let left = 0
    let right = arr.length-1
    while(left < right){
       if(arr[left] !== arr[right]){
           return false
       } 
       left ++
       right -- 
    }
    
    return true
};

console.log( isPalindrome(s))