// In-order traversal 
// In-order traversal is to traverse the left subtree first. 
// Then visit the root. 
// Finally, traverse the right subtree.


//   Binary Tree Inorder Traversal

//   Given the root of a binary tree, return the inorder traversal of its nodes' values.
  
  
//   Example 1:
//   Input: root = [1,null,2,3]
//   Output: [1,3,2]

//   Example 2:
//   Input: root = []
//   Output: []

//   Example 3:
//   Input: root = [1]
//   Output: [1]

//   Example 4:
//   Input: root = [1,2]
//   Output: [2,1]

//   Example 5:
//   Input: root = [1,null,2]
//   Output: [1,2]


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
 * 
 * 
 *  inorder - left, root, right
 */
var inorderTraversal = function(root) {
    let result = []
    
    if(root){
        //recursive function
        function tranverse(root) {
            if(root){
                //travel down the left side first
                tranverse(root.left)
                
                //no more left side, push the node val
                result.push(root.val)
                
                //then move over to the right side
                tranverse(root.right)
            }
        }
        tranverse(root)
    }
    
    return result
    
};


var inorderTraversal = function(root) {
    let result = []
    
    if(root){
        const travel = (node) => {
            if(!node) return 
            if(node.left) travel(node.left)
            result.push(node.val)
            if(node.right) travel(node.right)
        }
        
        travel(root)
    }
    
    return result
};


var inorderTraversal = function(root) {
    const result = [];
    if (!root) return result;    
    
    let stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {        
            stack.push(node);
            node = node.left
        }

        node = stack.pop();
        result.push(node.val);
        node = node.right;
    }
    
    return result;
};