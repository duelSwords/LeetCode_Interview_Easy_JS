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
 var reverseList = function(head) {
    let current = head;
    if (!current) {
        return current;
    }
    let curPre = head.next;
    current.next = null;
    while (curPre) {
        // save the next node
        let tmp = curPre.next;
        curPre.next = current;
        current = curPre;
        curPre = tmp;
    }
    return current;
};


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