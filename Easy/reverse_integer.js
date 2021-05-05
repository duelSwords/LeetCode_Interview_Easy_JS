// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers 
// within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose 
// of this problem, assume that your function returns 0 when the reversed integer overflows.

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1

// /**
//  * @param {number} x
//  * @return {number}
//  */

const x = -123


var reverse = function(x) {

    x =  String(x)
    let strArray = x.split('')
    let neg = ''
    if(strArray[0] === '-' ){
        neg = strArray.shift('')
    } 
    let left = 0
    let right = strArray.length - 1
    while(left < right) {
        let temp = strArray[left]
        strArray[left] = strArray[right]
        strArray[right] = temp
        left++
        right--
    }
    let revStr = neg + strArray
    revStr = revStr.replace(/[,]/g,'')
   
    let negNumber = Math.pow(-2, 31)
    let posNumber = Math.pow(2, 31) - 1
    if(revStr >= negNumber && revStr <= posNumber){  
         return revStr
    } else {
         return 0
    }

};
    

console.log(reverse(x))


// const reverse = function(x){
//     let revNum = 0, lastDigit = 0;
//     while (x!==0) {
//         lastDigit = x % 10;  //reminder is the last digit
//         x = parseInt(x/10);  //the number except for the last digit
//         revNum = revNum * 10 + lastDigit;  //adding the last digit one at a time 
//         if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
//     }
//     return revNum
// }