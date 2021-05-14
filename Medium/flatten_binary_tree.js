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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 
var flatten = function(root) {
     let head = null
     
    // stacking in reverse pre-order traversal order, 
    // 6 is the right most node here, dfs, 6, head = 6 <= 5 <= 4 <= 3 <= 2 <= 1
    // first number is 6
    // 5.right is 6
    // 4.right 5
    // 3.right=4
    // 2.right=3
    // 1.right=2
    
    const revPreOrder = node => {
        if (node.right) revPreOrder(node.right)
        if (node.left) revPreOrder(node.left)
        node.left = null, 
        node.right = head, 
        head = node
    }
    if (root) revPreOrder(root)
};