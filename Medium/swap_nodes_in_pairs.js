// Given a linked list, swap every two adjacent nodes and return its head.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    let slow = head
    let fast = slow.next 

    while(fast){
        let temp = slow.val
        slow.val = fast.val
        fast.val = temp
        
        slow = fast.next
        //if slow exist, fast can be a val or null
        if(slow){
            fast = slow.next
        }else{
            //if slow doesn't exist, reassign fast to be null to exit the loop
            fast = null
        }
    }
    
   return head
};


var swapPairs = function(head) {
     if (!head || !head.next) return head;
    
    //[1,2,3,4,5,6]

    // create a new node, 2
    const nextNode = head.next;

    //redirection head.next to a recursion, a new head. [3,4,5,6]
    head.next = swapPairs(head.next.next);

    //reconnect new node to head. 2 -> 1 -> [3,4,5,6] 
    nextNode.next = head;

    return nextNode; 
};
