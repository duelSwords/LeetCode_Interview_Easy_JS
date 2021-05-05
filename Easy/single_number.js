// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


const nums = [4,1,2,1,2]


var singleNumber = function(nums) {
    let single = nums.filter((v,i,a) => {
       return a.indexOf(v) === i && a.lastIndexOf(v) === i
    })
    return single.join("")
};

console.log(singleNumber(nums))


// const nums = [4,1,2,1,2]

//return all the unique nums. [4,1,2]
//return all the first occurrence of indexOf 
// let a = nums.filter((v,i,a) => {
//     return a.indexOf(v) === i 
// })


//return the nums that occur 2 or more times. [1,2]
//return if the lastIndexOf num exist and doesn't equal the first indexOf, therefore at least 2 times
// let a = nums.filter((v,i,a) => {
//     return a.indexOf(v) !== i && a.lastIndexOf(v) === i
// })


//return all the nums that occur 1 time. [4]
//return first indexOf and lastIndexOf are equal  
//  let a = nums.filter((v,i,a) => {
//     return a.indexOf(v) === i && a.lastIndexOf(v) === i
// })
