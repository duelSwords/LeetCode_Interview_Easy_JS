// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head
     
    //     S    F 
    // 1 2 2 1 null    

    //     S   F 
    // 1 2 3 2 1 null
    // when the length is odd Fast will land right before null
    // using fast.next to check next !== null
    // find the middle with slow, when fast is at end, slow is at middle
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    // when fast reached the end, reset the fast back to the head
    fast = head

    // reverse the slow
    // 1->2-> 2 <-1<-null   original after the 2 tail everything after can be dropped
    // F = 1->2->2->null 
    // S = 1->2->null

    // 1->2-> 3 <-2<-1<-null   original after the 23tail everything after can be dropped
    // F = 1->2->3->null 
    // S = 1->2->3->null
    slow = reverse(slow)
    
    //use the slow Node, since its shorter in a even length case
    while(slow !== null){
        if(slow.val !== fast.val) return false
        //move to the next Node
        fast = fast.next
        slow = slow.next
    }
    return true
};

//create a helper reverse function
let reverse = function(head) {
    let prevNode = null
    while(head !== null){
        //create a temp nextNode to be the next value
        let nextNode = head.next
        //change the head.next to point to the prevNode
        head.next = prevNode
        //move to the next iteration 
        prevNode = head
        head = nextNode
    }
    return prevNode
}








// var isPalindrome = function(head) {
//     let fast = head
//     let slow = head
    
//     while(fast !== null && fast.next !== null){
//         fast = fast.next.next
//         slow = slow.next
//     }
    
//     fast = head
//     slow = reverse(slow)
    
//     while(slow !== null){
//         if(slow.val !== fast.val) return false
//         fast = fast.next
//         slow = slow.next
//     }
//     return true
// };


// let reverse = function(head) {
//     let prevNode = null
//     while(head !== null){
//         let nextNode = head.next
//         head.next = prevNode
//         prevNode = head
//         head = nextNode
//     }
//     return prevNode
// }