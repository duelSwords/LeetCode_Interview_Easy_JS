// Symmetric Tree

// Solution
// Given the root of a binary tree, check
//  whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
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
 * @return {boolean}
 */


// var isSymmetric = function(root) {
//     let result = []
//     let queue = [root]
    
//     while(queue.length){
//           let qlength = queue.length
//           let curlvl = []
//           for(let i=0; i<qlength; i++){
//               let node = queue.shift()
//               curlvl.push(node.val)
//               if(node.left) queue.push(node.left)
//               if(node.right) queue.push(node.right)
//           }
//         result.push(curlvl)
//     }
    
//     for(let i of result){
//         if(i !== i.reverse())return false
//     }
//     return true
// };



var isSymmetric = function(root) {
    return compareNodes(root, root);
};


let compareNodes = (n1, n2) => {
    if(!n1 && !n2) return true;
    if(!n1 || !n2) return false;
    return n1.val === n2.val && compareNodes(n1.left, n2.right) && compareNodes(n1.right, n2.left)
}

let compareNodes = (n1, n2) => {
    if(n1 === null && n2 === null)
       return true;
    else if(n1 === null || n2 === null)
        return false;
    else
        return n1.val === n2.val && compareNodes(n1.left, n2.right) && compareNodes(n1.right, n2.left)
}