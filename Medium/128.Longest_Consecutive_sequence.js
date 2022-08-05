// 128. Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


var longestConsecutive = function(nums) {
    //Make it into a set to find numbers easy
    let numSet = new Set(nums)
    let longest = 0
    
    for(let n of nums) {
        //If previous number doesn't exist, it is the start of a sequence
        if(!numSet.has(n-1)){
           let size = 0
           //Continue adding to the sequence
           while(numSet.has(n + size)){
               size++
           }
            longest = Math.max(longest, size)
        }
    }
    
    return longest
};