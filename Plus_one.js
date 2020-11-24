// Given a non-empty array of decimal digits representing a non-negative integer, 
// increment one to the integer.

// The digits are stored such that the most significant digit is at the head of t
// he list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1




var plusOne = function(digits) {
    let carry = 0 
    for (let i = digits.length-1; i >= 0; i--){
        carry = digits[i]+1 === 10 ? 1 : 0
        if (carry === 0 ){
            digits[i] += 1
            break
        } else {
            digits[i] = 0
        }
    }
    if (carry == 1){
            digits.unshift(1);
        }
    
    return digits;
}




















//works up to maxsafevalue for Number

// const digits = [0,0,0,0,5]

// var plusOne = function(digits) {
//    let newNum = Number(digits.join("")) + 1
//     let strNum = newNum.toString()
//     let newDigits = strNum.split("").map(Number)
    
//     if(digits.length > strNum.length){
//         let L = digits.length - strNum.length 
//         digits.splice(L)
//         digits.push(...newDigits) 
//         return digits
//     }
       
//     return newDigits
// }

// console.log( plusOne(digits) )