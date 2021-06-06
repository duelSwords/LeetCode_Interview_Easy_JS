


//////////////////////////////////
// Linked List //////////////////
/////////////////////////////////

function printForward(node) {
    let currNode = node
    while (currNode !== null) {
      console.log(currNode.value)
      currNode = currNode.next
    }
}



// using recursion
function printBackward(node) {
    let currNode = node
    if (currNode !== null) {
        printBackward(currNode.next)
        console.log(currNode.value)
    }
}


function printBackward(node) {
    let currNode = node
    if (currNode === null) return 
    printBackward(currNode.next)
    //anything after this line will run, starting from the top/last in the stack
    console.log(currNode.value)  
}


function reverse(node) {
    let prevNode = null
    while(node !== null){
        let temp = node.next
        node.next = prevNode
        prevNode = node
        node = temp
    }
    return prevNode
}




function swap(head, a, b) {
    let currNode = head
    while (currNode !== null) {
        if (currNode.value === a) {
            currNode.value = b
        }
        else if (currNode.value === b) {
            currNode.value = a
        }
        currNode = currNode.next
        }
    return head
}



function isCircular(node) {
    let slow = node
    let fast = node
    while(fast.next && fast.next.next){
      slow = slow.next
      fast = fast.next.next
      if(slow === fast){
        return true
      }
    }
    return false
}

