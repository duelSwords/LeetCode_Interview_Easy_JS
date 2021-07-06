// 16. 3Sum Closest
// Medium

// Given an array nums of n integers and an integer target, find three integers in nums 
// such that the sum is closest to target. Return the sum of the three integers. You may
// assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let min = Number.MAX_VALUE
    let result = 0
    
    nums.sort((a,b) => a-b)
    
    for(let i=0; i<nums.length-2; i++){
        let j = i+ 1
        let k = nums.length-1
        
        while (j < k ){
            let sum = nums[i] + nums[j] + nums[k]
            let diff = Math.abs(sum - target)
            
            if(diff === 0) return sum
            
            if(diff < min){
                min = diff
                result = sum
            }
            
            if(sum < target){
                j++
            }else{
                k--
            }
        }
    }
    
    return result
    
};