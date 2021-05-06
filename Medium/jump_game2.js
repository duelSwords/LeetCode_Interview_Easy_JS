// Given an array of non-negative integers nums, you are initially positioned at the first index
// of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2


var jump = function(nums) {
    let max = 0, cur=0, final=0
    for(let i=0; i<nums.length-1; i++){
        max = Math.max(max,i+nums[i])
        if(i === cur){
           final++
           cur=max
           }
    }
    return final
  }



  var jump = function(nums) {
    let maxInd = 0, curInd=0, jump=0
    //don't include the last index because no need to jump since it already at the end
    for(let i=0; i<nums.length-1; i++){
        //search all the indexes from one jump to the next. To find the max 
        maxInd = Math.max(maxInd, i+nums[i])
        
        //when land on the next ind, update by selecting the maxInd from bewteen jump
        if(i === curInd){
           jump++
           curInd = maxInd
         }
    }
    return jump
};

