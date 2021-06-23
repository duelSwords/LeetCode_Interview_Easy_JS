// 817. Linked List Components
// Medium

// Example 1:

// Input: 
// head: 0->1->2->3
// nums = [0, 1, 3]
// Output: 2
// Explanation: 
// c  c     c
// 0->1->2->3

// 0->1->
// 3->

// 0 and 1 are connected, so [0, 1] and [3] are the two connected components.
// Example 2:

// Input: 
// head: 0->1->2->3->4
// nums = [0, 3, 1, 4]
// Output: 2
// Explanation:
// c  c     c  c
// 0->1->2->3->4

// 0->1->
// 3->4->

// 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.






var numComponents = function(head, nums) {
    let curr = head
    let count = 0
 
    while(curr){
        if (nums.includes(curr.val) ){
           count++
           //check the next node if valid and its included in nums 
           while(curr.next && nums.includes(curr.next.val)){
               curr = curr.next
           } 
        }
       //when not included in nums, move on to the next node. 
       curr = curr.next
    }
    
    return count
    
};