// Given an array nums, write a function to move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Input: [0,1,0,3,12]

const nums = [0,1,0,3,12]

var moveZeroes = function(nums) {
    let zero = nums.filter(n => n === 0)
    while( nums.includes(0) ){
        ind = nums.indexOf(0)
        nums.splice(ind,1)
    }
    nums.push(...zero)
    return nums
};

console.log(moveZeroes(nums))




// var moveZeroes = function(nums) {
//     let index = 0 
        
//     for(let i = 0; i < nums.length; i++){
//         let num = nums[i]
//         if(num !== 0){
//             nums[index] = num
//             index++
//         }
//     }

//     for(let i = index; i < nums.length; i++){
//         nums[i] = 0
//     }
// }