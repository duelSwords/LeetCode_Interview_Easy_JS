// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //iteratively
//  var reverseList = function(head) {
//     let current = head;
//     if (!current) {
//         return current;
//     }
//     let curPre = current.next;
//     current.next = null;
//     while (curPre) {
//         // save the next node
//         let tmp = curPre.next;
//         curPre.next = current;
//         current = curPre;
//         curPre = tmp;
//     }
//     return current;
// };


//recursively
// var reverseList = function(head) {
//     if (!head) {
//         return head;
//     }
//     let pre = head.next;
//     head.next = null;
//     return fun(head, pre);
    
//     function fun(cur, pre) {
//         if (pre == null) {
//             return cur;
//         }
//         let tmp = pre.next;
//         pre.next = cur;
//         return fun(pre, tmp);
//     }
// }

Original
H     T => null
5, 6, 7 
next -> 

Reversed
null T     H 
     5, 6, 7 
<- next

var reverseList = function(head) {
    //we start at 5, prev point to null
    let prev = null
    //create a next, set placeholder to null
    let next = null
    while(head !== null){
        //reassign next, get the next value, 6 in this iteration
        next = head.next
        //severed the head.next, reassign it to point to prev
        head.next = prev
        //to move onto the next iteration, 
        //reassign prev to be the head
        prev = head
        //reassign head to be next before the severed head.next. 
        head = next  
    }
    //return prev, which is the new reversed head. 
    return prev
};


// var reverseList = function(head) {
//     let prev = null
//     let next = null
//     while(head !== null){
//         next = head.next
//         head.next = prev
//         prev = head
//         head = next  
//     }
//     return prev
// };