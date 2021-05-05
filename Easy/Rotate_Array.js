// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Input: nums = [1,2], k = 3
// Output: [2,1]


const nums = [1,2,3,4,5,6,7]
const k = 3

var rotate = function(nums, k) {
    if (nums.length > k){
        let removed = nums.splice(-k)
        nums.unshift(...removed)
    } else {
        let count = 0
        while (count < k){
            const removed = nums.pop()
            nums.unshift(removed)
            count++ 
        }
    }
    return nums
};

console.log(rotate(nums, k))

