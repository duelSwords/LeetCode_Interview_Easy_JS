// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single 
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const l1 = [2,4,3]
const l2 = [5,6,4]
// output [7,0,8]

var addTwoNumbers = function(l1, l2) {
    //create a new linkList starting at 0, everything will be appended here
    let head = new ListNode(0)
    //set the new linkList currentNode to head
    let currentNode = head
    //create a carryover placeholder
    let carryover = 0
    //check to see if l1 or l2 node is valid. Because it they can be differnet length
    while(l1 !== null || l2 !== null){
        let v1 = 0
        let v2 = 0
        //when not null reassign v1 and v2
        if(l1 !== null) v1 = l1.val
        if(l2 !== null) v2 = l2.val
        

        let sum = v1 + v2 + carryover
        //using Math.floor or parseInt, get the whole number before the decimal 
        //largest carryover has to be 1, 9+9 =18 
        carryover = Math.floor(sum /10)
        //reassign sum by getting the last digit
        sum = sum % 10
        //currentNode.next should point to a newly created node
        currentNode.next = new ListNode(sum)
        
        //move into the next iteration
        //reassign currentNode in the new linkList 
        currentNode = currentNode.next
        //reassing l1,l2 in the original linkList
        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }
    
// const l1 = [2,4,6]
// const l2 = [5,6,6]
// output     [7,0,2,1]
    if(carryover > 0){
        //if there is a carryover append it to the new linkList
        currentNode.next = new ListNode(carryover)
    }
    
    //if return head it includes the 0 upon creation 
    return head.next
};


// var addTwoNumbers = function(l1, l2) {
//     let head = new ListNode(0)
//     let currentNode = head
//     let carryover = 0
//     while(l1 !== null || l2 !== null){
//         let v1 = 0
//         let v2 = 0
//         if(l1 !== null) v1 = l1.val
//         if(l2 !== null) v2 = l2.val
        
//         let sum = v1 + v2 + carryover
//         carryover = Math.floor(sum /10)
//         sum = sum % 10
//         currentNode.next = new ListNode(sum)
        
//         currentNode = currentNode.next
//         if(l1 !== null) l1 = l1.next
//         if(l2 !== null) l2 = l2.next
//     }
    
//     if(carryover > 0){
//         currentNode.next = new ListNode(carryover)
//     }
    
//     return head.next
// };