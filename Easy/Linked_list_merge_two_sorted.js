// Merge Two Sorted Lists

// Solution
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
// JavaScript	
// 1
// /**
// 2
//  * Definition for singly-linked list.
// 3
//  * function ListNode(val, next) {
// 4
//  *     this.val = (val===undefined ? 0 : val)
// 5
//  *     this.next = (next===undefined ? null : next)
// 6
//  * }
// 7
//  */
// 8
// /**
// 9
//  * @param {ListNode} list1
// 10
//  * @param {ListNode} list2
// 11
//  * @return {ListNode}
// 12
//  */
// 13



var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2
    
    let merge = {val: 0, next: null}
    let result = merge
    
    //when both list are not null
    while(list1 && list2){
        if(list1.val < list2.val){
            merge.next = list1
            list1 = list1.next     
        } else {
            merge.next = list2
            list2 = list2.next
        }   
        merge = merge.next
    }
 
    //check whether list1 or list 2 is null, then add the none null list to the merge list.
    merge.next = (list1 ? list1 : list2)
    // merge.next = list1 || list2

    
    return result.next
};


var mergeTwoLists = function(list1, list2) {
    
    let dummy = new ListNode
    let tail = dummy
    
    while(list1 && list2){
        if(list1.val < list2.val){
            tail.next = list1
            list1 = list1.next
        }else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    
    tail.next = list1 || list2
    
    return dummy.next
    
};