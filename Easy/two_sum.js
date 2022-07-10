// Given an array of integers nums and an integer target, return indices of the two 
// numbers such that they add up to target.

const { lightcoral } = require("color-name");

// You may assume that each input would have exactly one solution, and you may not use 
// the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

let nums = [3,2,4]
let target = 6

var twoSum = function(nums, target) {

    for(let i=0; i<nums.length; i++){
        let curNum = nums[i]
        let diff = target - curNum
        let ind = nums.indexOf(diff)
        if(ind !== -1 && ind !== i){
            return [i, ind]
        }
    }
  
};


var twoSum = function(nums, target) {
    let final = []
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                final.push(i)
                final.push(j)
            }
        }
    }
    return final
};




var twoSum = function(nums, target) {
    const dict = new Map()

    for(let i=0;i<nums.length;i++){
        let remainder = target-nums[i]
        if(dict.has(remainder)){
            return [dict.get(remainder), i]
        }
        dict.set(nums[i],i)
      }
}




var twoSum = function(nums, target) {
    let hashMap = {}
    
    for(let i=0; i < nums.length; i++){
        let number = nums[i]
        let diff = target - number
        
        if(diff in hashMap){
            return [ hashMap[diff], i]
        }else{
            hashMap[number] = i
        }
    }
    
};