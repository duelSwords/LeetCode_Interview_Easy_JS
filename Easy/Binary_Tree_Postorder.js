// Post-order traversal
// Post-order traversal is to traverse the left subtree first. 
// Then traverse the right subtree. 
// Finally, visit the root.


// Binary Tree Postorder Traversal

// Solution
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [2,1]



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
 * 
 * postorder - left, right, root
 */
var postorderTraversal = function(root) {
    let result = []
    if(root){
        let traversePost = node => {
            if(!node) return
            
            //if the left node exist, recursion 
            if(node.left) traversePost(node.left)
            
            //if the right node exist, recursion 
            if(node.right) traversePost(node.right)
            
            //when there is no more left or right node
            result.push(node.val)
        }
        traversePost(root)
    }
    return result
};



function postorderTraversal(root){
    let res = [];
    let stack = [root];
    
    while (stack.length){
        let node = stack.pop();
        if (node){
            res.push(node.val)
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
    }
    
    return res.reverse();
}
