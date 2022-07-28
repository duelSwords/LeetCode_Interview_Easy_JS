// 49. Group Anagrams
// Medium

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

 

// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    let result = {
        //sum: ["words"]
    }
    
    for(let word of strs){
        let sum = []
        for(let i=0; i<word.length; i++){
            sum.push(word.charCodeAt(i))
        }
        sum.sort((a,b) => a-b)
        sum = sum.join("")
     
        if(result[sum]){
            result[sum] = [...result[sum], word]
        }else{
            result[sum] = [word]
        }
    }
    
    return Object.values(result)
};