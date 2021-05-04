// 643. Maximum Average Subarray I
// Easy

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum 
// average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


var findMaxAverage = function(nums, k) {
    let sum=0;
    let Msum=0;
    
    //get the inital sum from 0 to k
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }

    Msum=sum
   
    for(let i=0;i<nums.length-k;i++){
        //update sum, add the next index val, and delete the first index val
        sum=sum+nums[k+i]-nums[i]

         if(sum>Msum){
             Msum=sum;
         }
    }
    return Msum/k
};



var findMaxAverage = function(nums, k) {
    //get the Cumulative sum 
    for(let i=1; i<nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
  
    //get the inital max
    let max = nums[k-1]
    for(let i=0; i+k<nums.length; i++){
        let sum = nums[i+k] - nums[i]
        max = Math.max(sum, max)
    }
    return max/k
};