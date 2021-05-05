// Path Sum

// Given the root of a binary tree and an integer targetSum, return true
//  if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false

// Example 3:
// Input: root = [1,2], targetSum = 0
// Output: false


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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right) return root.val === targetSum
        
    let remainer = targetSum - root.val
    return hasPathSum(root.left, remainer) || hasPathSum(root.right, remainer)
};