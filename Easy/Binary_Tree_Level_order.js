// Level-order traversal is to traverse the tree level by level.

// Breadth-First Search is an algorithm to traverse or search in data structures 
// like a tree or a graph. The algorithm starts with a root node and visit the node 
// itself first. Then traverse its neighbors, traverse its second level neighbors, 
// traverse its third level neighbors, so on and so forth.



//  Binary Tree Level Order Traversal

//  Solution
//  Given the root of a binary tree, return the level order traversal of its nodes' 
//  values. (i.e., from left to right, level by level).

 
//  Example 1:
//  Input: root = [3,9,20,null,null,15,7]
//  Output: [[3],[9,20],[15,7]]

//  Example 2:
//  Input: root = [1]
//  Output: [[1]]

//  Example 3:
//  Input: root = []
//  Output: []




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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let result = [];
    let queue = [root];
    
    while(queue.length) {
        //set a new variable instead of using (let i=0; i<queue.length; i++) 
        //queue length will constantly changed when we push the left and right node 
        let queueLength = queue.length;
        let currentLevel = [];
        console.log('q', queue)
        
        //two loop, the queue loop, and the currentLevel loop
        //the queueLength will be every left node and right node that is pushed into queue
        for (let i=0; i<queueLength; i++) {
            //mutating the original array, reducing the length
            //set the current node, starting from the left
            let node = queue.shift();
            console.log('n', node)
            console.log(queueLength)
            
            //push the current node val
            currentLevel.push(node.val);
            
            //push the left and right node into the queue if they exist
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        //when finished with currentLevel, push then reset 
        result.push(currentLevel)
    }
    return result;
};




var levelOrder = function(root) {
    let output = [];
    
    traverse(root, 0, output);
    
    return output;
};

const traverse = (root, level, output) => {
    if (root === null) return;
    
    if (output.length === level) output.push([]);
    
    output[level].push(root.val);
    
    traverse(root.left, level + 1, output);
    traverse(root.right, level + 1, output);
}






// root = [3,9,20,44,21,1,5,15,7]

q [ [3,9,20,44,21,1,5,15,7] ]
n [3,9,20,44,21,1,5,15,7]
1

q [ [9,44,21,15,7], [20,1,5] ]
n [9,44,21,15,7]
2
n [20,1,5]
2

q [ [44,15,7], [21], [1], [5] ]
n [44,15,7]
4
n [21]
4
n [1]
4
n [5]
4

q [ [15], [7] ]
n [15]
2
n [7]
2