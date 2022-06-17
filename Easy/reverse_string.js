// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

let s = ["h","e","l","l","o"]

var reverseString = function(s) {
    return s.reverse()
};


console.log(reverseString(s))


// var reverseString = function (s) {
//     let left = 0, right = s.length - 1;
  
//     while (left < right) {
//       const temp = s[left];
//       s[left] = s[right];
//       s[right] = temp;
  
//       left++;
//       right--;
//     }
//   };



var reverseString = function(s) {
    
    //Using recursive helper
    const helper = (index, s, length) => {
        if(index > length){
            return s
        }
        
        let temp = s[index]
        s[index] = s[length]
        s[length] = temp
        
        helper(index+1, s, length-1)
    }
    
    helper(0, s, s.length-1)
};