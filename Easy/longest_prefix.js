// 14. Longest Common Prefix
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


var longestCommonPrefix = function(strs) {
    let sorted = strs.sort((a,b) => a.length-b.length)
    let base = sorted[0]
    
    let word = ""
    for(let i=0; i<base.length; i++){
        let char = base[i]
        for(let j=0; j<sorted.length; j++){
            if(sorted[j][i] !== char) break
            if(j === sorted.length-1) word += char
        }
        if(word.length !== i+1) break
    }
    return word
};
    
    

var longestCommonPrefix = function(strs) {
    let base = strs[0]

    for(let i=0; i<base.length; i++){
        let char = base[i]
        for(let j=1; j<strs.length; j++){
            if(strs[j][i] !== char) {
                base = base.slice(0,i)
                return base
            }
        }
    }
    return base    
};


