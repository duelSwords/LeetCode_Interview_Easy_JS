// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached 
// again by continuously following the next pointer. Internally, pos is used to denote the 
// index of the node that tail's next pointer is connected to. Note that pos is not passed 
// as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 
 // fast need to move at least 2 space/node faster than slow
// it will bump into slow again if its a cycle
// no tail because its circular. Tail if it linear the tail will point to null.  

var hasCycle = function(head) {
    if(!head || !head.next){
        return false
    }
    
    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
};



var hasCycle = function(head) {
    if (head === null) return false
    let slow = head
    let fast = head.next
    
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    
    return true
};




var hasCycle = function(head) {
    if(!head) return false
    
    // Set store any unqiue value, primitive or object. Set{ 1, 2, 3, ['a', 'b'], {'name': 'joe'}, 'string' }
    let seen = new Set();
    
    while(head){
        if(seen.has(head)){
            return true
        }
        
        seen.add(head)
        head = head.next
    }
    
    return false
};