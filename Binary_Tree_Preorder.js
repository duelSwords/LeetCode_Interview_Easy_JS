// Pre-order traversal 
// Pre-order traversal is to visit the root first. 
// Then traverse the left subtree.
// Finally, traverse the right subtree. 


// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let s = []
    let traversed = []
    
    //if root exist push the node into s array [ [1,null,2,3] ]
    if(root){
        s.push(root)
    }

    // console.log(s)
    
    //when s array, has a length, do the while statement 
    while(s.length){
        //pop off the last node in the s array
        let node = s.pop()
        
        //push the val inside the traversed arr that we want to return
        // console.log(node.val)
        traversed.push(node.val)
        
        //push in the right side first, because we want to start with the left side
        if(node.right){
            s.push(node.right)
        }
        if(node.left){
            s.push(node.left)
        }
        // console.log(s)
    }
    return traversed
    
    
};