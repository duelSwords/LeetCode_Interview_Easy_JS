// 946. Validate Stack Sequences
// Medium


// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.
 

// Constraints:

// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed is a permutation of popped.
// pushed and popped have distinct values.


var validateStackSequences = function(pushed, popped) {
    let emptyArr = []
    for(let i=0; i<pushed.length; i++){
        emptyArr.push(pushed[i])
        while(emptyArr[emptyArr.length-1] === popped[0] && emptyArr.length > 0){
            emptyArr.pop()
            popped.shift()
        }
    }
    
    return emptyArr.length > 0 ? false : true    
};