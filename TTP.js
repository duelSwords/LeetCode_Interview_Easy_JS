
// https://codeinterview.io/playback/CTKZRMJCCM#?t=917

// https://codeinterview.io/playback/KMIQTKFVUR#?t=3

// https://codeinterview.io/playback/DDUDCLDAQD#?t=576





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




////////////////////
///// Tree /////////
////////////////////


// 1. Using a queue and while loop write a function that takes the root of a
// binary tree node and outputs an array of values ordered by BREADTH FIRST.

// BREADTH FIRST traversal: [4,2,5,1,3,7,6,8]
// */

function bfs(node) {
  let results =[]
  let queue = [node]
    while(queue.length){
      let currentNode = queue.shift()
      results.push(currentNode.value)
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
    }
    return results
}



function dfsPre(node) {
    let result = []
    
    let preorder = node => {   
      if(node === null) return
      result.push(node.value)
      if(node.left) preorder(node.left)
      if(node.right) preorder(node.right)
    }
    preorder(node)
  
    return result
  }


  function dfsIn(node) {
    let result = []
    
    let inorder = node => {   
      if(node === null) return
      if(node.left) inorder(node.left)
      result.push(node.value)
      if(node.right) inorder(node.right)
    }
    inorder(node)
  
    return result
  }
  
  


  function dfsPost(node) {
    let result = []
    
    let postorder = node => {   
      if(node === null) return
      if(node.left) postorder(node.left)
      if(node.right) postorder(node.right)
      result.push(node.value)
    }
    postorder(node)
  
    return result
  }  