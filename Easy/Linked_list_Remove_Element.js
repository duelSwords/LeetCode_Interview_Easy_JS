// Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

var removeElements = function(head, val) {
    if(!head) return head
    
    let prehead = new ListNode(0)
    prehead.next = head
    let prev = prehead
    let cur = head
    
    while(cur){
        if(cur.val === val){
            prev.next = cur.next
        }else{
            prev = cur   
        }
        cur = cur.next
    }
    return prehead.next
};


function removeElements(head, val) {
    const sudoHead = { val: 0, next: head }
    let prev = sudoHead 
    let current = head
    while (current !== null) {
        if (current.val === val) prev.next = current.next
        else prev = current
        current = current.next
    }
    return sudoHead.next
}



var removeElements = function(head, val) {
    let prehead = {next: head}
    let prev = prehead
    let current = head
   
    while(current){
        if(current.val === val) prev.next = current.next
        else prev = current
        current = current.next
    }
    return prehead.next
};