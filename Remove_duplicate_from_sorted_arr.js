// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }    




// var removeDuplicates = function(nums) {
//     let hashmap = {}
//     for(let i=0; i<nums.length; i++){
//         let n = nums[i]
//         hashmap[n] = (hashmap[n] || 0) + 1
//     }
//     let arr = []
//     for(let key in hashmap){
//         arr.push(key)
//     }
    
//     nums.splice(0, nums.length, ...arr)
// }



var removeDuplicates = function(nums) {
    for(i=0;i<nums.length;i++){
          while(nums[i]===nums[i+1]){
              nums.splice(i+1, 1);
          }
      }
      return nums
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))