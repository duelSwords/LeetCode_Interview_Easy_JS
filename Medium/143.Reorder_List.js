// 143. Reorder List
// Medium

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln

// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

 

// Constraints:

//     The number of nodes in the list is in the range [1, 5 * 104].
//     1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


// [1,2,3,4,5]

// first = [1,2,3]
// second = [4,5] => [5,4]

//Return nothing since it is modified in place
var reorderList = function(head) {
    //find the middle
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    second = slow.next
    
    //set first half last node to null
    slow.next = null
    
    //reverse the second half
    second = reverseList(second)
    
    //the head has been modified, half as long now, line 25
    first = head
    
    //second half is same or shorter than first half
    while(second){
        let temp1 = first.next
        let temp2 = second.next
        first.next = second
        second.next = temp1
        
        //update the pointer
        first = temp1
        second = temp2
    }
};


var reverseList = function(head) {
    let prev = null
    let next = null
    while(head !== null){
        next = head.next
        head.next = prev
        prev = head
        head = next  
    }
    return prev
};